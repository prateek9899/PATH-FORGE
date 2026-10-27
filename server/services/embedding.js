
async function embedText(text) {
  const response = await fetch("http://127.0.0.1:11434/api/embed", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "nomic-embed-text:latest",
      input: text,
    }),
  });

  if (!response.ok) {
    throw new Error(`Ollama embedding error: ${response.status}`);
  }

  const data = await response.json();
  return data.embeddings[0];
}

module.exports = { embedText };