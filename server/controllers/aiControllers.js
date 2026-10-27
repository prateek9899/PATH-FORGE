
const { askDsaRag } = require("../services/rag");

const chatWithTutor = async (req, res) => {
  try {
    const { question, history = [] } = req.body;

    if (!question || typeof question !== "string" || !question.trim()) {
      return res.status(400).json({
        message: "Please provide a question.",
      });
    }

    // Validate conversation history.
    if (
      !Array.isArray(history) ||
      !history.every(
        (message) =>
          message &&
          ["user", "assistant"].includes(message.role) &&
          typeof message.content === "string"
      )
    ) {
      return res.status(400).json({
        message: "Invalid conversation history.",
      });
    }

    // Keep only the latest 10 messages to limit prompt size.
    const recentHistory = history
      .slice(-10)
      .map(({ role, content }) => ({
        role,
        content: content.slice(0, 3000),
      }));

    // Generate an answer using the question and conversation history.
    const answer = await askDsaRag(question.trim(), recentHistory);

    res.status(200).json({
      question: question.trim(),
      answer,
    });
  } catch (error) {
    console.error("AI Tutor Error:", error.message);

    res.status(500).json({
      message: "Failed to get an answer from the AI tutor.",
    });
  }
};

module.exports = { chatWithTutor };
