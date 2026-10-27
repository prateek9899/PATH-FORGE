
const { ChatOpenAI } = require("@langchain/openai");
const chroma = require("../config/chroma");
const { embedText } = require("./embedding");

const model = new ChatOpenAI({
  model: process.env.GROQ_MODEL || "openai/gpt-oss-20b",
  apiKey: process.env.GROQ_API_KEY,
  configuration: {
    baseURL: "https://api.groq.com/openai/v1",
  },
  temperature: 0.2,
});

async function askDsaRag(question, history = []) {
  let context = "";

  // Retrieve relevant DSA knowledge from ChromaDB.
  try {
    const collection = await chroma.getOrCreateCollection({
      name: "pathforge_dsa",
      embeddingFunction: null,
    });

    const questionEmbedding = await embedText(question);

    const results = await collection.query({
      queryEmbeddings: [questionEmbedding],
      nResults: 2,
    });

    const documents = results.documents?.[0] || [];
    const distances = results.distances?.[0] || [];

    const relevantDocuments = documents.filter((document, index) => {
      const distance = distances[index];
      return distance !== undefined && distance < 0.5;
    });

    context = relevantDocuments.join("\n\n");
  } catch (error) {
    console.error("Knowledge retrieval failed:", error.message);
  }

  // Build the conversation messages from previous turns.
  const historyMessages = history
    .filter(
      (message) =>
        message &&
        ["user", "assistant"].includes(message.role) &&
        typeof message.content === "string"
    )
    .slice(-10)
    .map((message) => ({
      role: message.role,
      content: message.content.slice(0, 3000),
    }));

  // Ask Groq using DSA knowledge and the previous conversation.
  const response = await model.invoke([
    {
      role: "system",
      content: `You are PathForge's AI DSA Tutor.

Your goal is to answer DSA questions accurately and clearly.

RULES:
1. Answer questions about data structures and algorithms, including concepts, problem-solving, complexity, and code.
2. Use simple, beginner-friendly English.
3. Use retrieved context when relevant, but do not treat it as the only source of knowledge.
4. If the context is missing or insufficient, use your own knowledge when possible.
5. Never claim a topic is unknown merely because it is absent from the context.
6. If you are genuinely uncertain, state the uncertainty instead of inventing facts.
7. Respect the user's requested programming language. Use Java by default.
8. Provide code when requested or necessary to solve the question.
9. Check algorithm logic, edge cases, and time and space complexity.
10. Keep answers focused on the question.
11. IMPORTANT: Use the conversation history to understand follow-up questions, references such as "it", "that", or "the second step", and details already discussed.
12. Treat the latest user message as part of the ongoing conversation, not as an isolated question.
13. Do not unnecessarily repeat earlier explanations. Build on previous answers when appropriate.
14. If the user changes the topic, answer the new topic instead of forcing the previous context into it.
15. Conversation history helps establish meaning; retrieved DSA context helps establish technical facts. Use both when relevant.

Retrieved DSA context:
${context || "No relevant knowledge was retrieved. Use your own knowledge when possible."}`,
    },
    ...historyMessages,
    {
      role: "user",
      content: question,
    },
  ]);

  return typeof response.content === "string"
    ? response.content
    : JSON.stringify(response.content);
}

module.exports = { askDsaRag };
