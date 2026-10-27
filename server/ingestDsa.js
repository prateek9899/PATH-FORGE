
require("dotenv").config();

const fs = require("fs");
const path = require("path");
const chroma = require("./config/chroma");
const { embedText } = require("./services/embedding");

const dataFolder = path.join(__dirname, "data", "dsa");

function splitText(text, chunkSize = 800, overlap = 150) {
  const chunks = [];
  const step = chunkSize - overlap;

  for (let start = 0; start < text.length; start += step) {
    const chunk = text.slice(start, start + chunkSize).trim();

    if (chunk) {
      chunks.push(chunk);
    }
  }

  return chunks;
}

async function ingestDsa() {
  try {
    const collection = await chroma.getOrCreateCollection({
      name: "pathforge_dsa",
      embeddingFunction: null,
    });

    const files = fs
      .readdirSync(dataFolder)
      .filter((file) => file.endsWith(".txt"))
      .sort();

    if (files.length === 0) {
      throw new Error("No .txt files found in server/data/dsa");
    }

    let totalChunks = 0;

    for (const file of files) {
      const filePath = path.join(dataFolder, file);
      const text = fs.readFileSync(filePath, "utf8");
      const chunks = splitText(text);

      for (let i = 0; i < chunks.length; i++) {
        const embedding = await embedText(chunks[i]);

        await collection.upsert({
          ids: [`${file}-chunk-${i}`],
          documents: [chunks[i]],
          embeddings: [embedding],
          metadatas: [
            {
              source: file,
              topic: path.basename(file, ".txt"),
              chunkIndex: i,
            },
          ],
        });

        totalChunks++;
      }

      console.log(`${file}: ${chunks.length} chunks processed`);
    }

    console.log(`Ingestion complete. Chunks processed: ${totalChunks}`);

    const count = await collection.count();
    console.log(`Total chunks currently in ChromaDB: ${count}`);
  } catch (error) {
    console.error("Ingestion failed:", error.message);
  }
}

ingestDsa();