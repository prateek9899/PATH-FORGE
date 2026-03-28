const mongoose = require('mongoose');
const SystemDesignTopic = require('../models/SystemDesignTopic');

const systemDesignData = [
  {
    title: "System Design Framework",
    slug: "system-design-framework",
    category: "Fundamentals",
    difficulty: "Beginner",
    content: "# The Ultimate System Design Framework\n\nWhen facing a system design interview, follow these 4 steps:\n\n1. **Requirements Clarification**: Understand functional (what it does) and non-functional (availability vs consistency) requirements.\n2. **Estimation**: Calculate scale (DAU, storage needs, bandwidth).\n3. **High-Level Design**: Draw the core components (Client, LB, Web Server, DB).\n4. **Deep Dive**: Optimize specific parts (Caching, Database Sharding, Data Replication).",
    readTime: 15
  },
  {
    title: "Database Sharding & Scaling",
    slug: "database-sharding",
    category: "Components",
    difficulty: "Advanced",
    content: "# Database Sharding\n\nSharding (horizontal scaling) is the process of splitting one large database into multiple smaller ones.\n\n### 🔑 Sharding Strategies:\n- **Key-Based (Hash)**: Apply a hash function to an ID to find the shard.\n- **Range-Based**: Shard 1 (A-M), Shard 2 (N-Z).\n- **Directory-Based**: Use a lookup table to track where data is stored.\n\n### ⚠️ Challenges:\n- **Hotspot Shards**: One shard getting too much traffic.\n- **Joins**: Joining data across shards is extremely expensive.",
    readTime: 20
  },
  {
    title: "Design a Global Messenger (WhatsApp)",
    slug: "design-whatsapp",
    category: "Real World Systems",
    difficulty: "Hard",
    content: "# Design WhatsApp / Messenger\n\n### 🚀 Scale:\n- 2 Billion users.\n- 60 Billion messages/day.\n\n### 🏗️ Key Components:\n- **WebSockets**: To maintain a persistent connection for real-time delivery.\n- **Message Queue**: To handle bursts of traffic.\n- **NoSQL (Cassandra)**: For high-volume, decentralized message storage.\n- **Consistency**: Maintaining message order is critical.",
    readTime: 25
  }
];

const seedSystemDesign = async () => {
  try {
    await SystemDesignTopic.deleteMany({});
    await SystemDesignTopic.insertMany(systemDesignData);
    console.log('✅ Seeded Advanced System Design Topics Bank');
  } catch (err) {
    console.error('❌ System Design seed error:', err);
  }
};

module.exports = seedSystemDesign;
