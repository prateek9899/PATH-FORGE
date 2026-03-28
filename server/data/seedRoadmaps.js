/**
 * Seed Script – Populates MongoDB with predefined roadmaps.
 * Run: node data/seedRoadmaps.js
 *
 * Contains 4 comprehensive roadmaps: DSA, MERN, Java Backend, Data Science.
 * Each roadmap has multiple sections with topics and subtopics.
 */
require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('../config/db');
const Roadmap = require('../models/Roadmap');

const roadmaps = [
  // ============================================================
  // 1. DSA (Data Structures & Algorithms) Roadmap
  // ============================================================
  {
    title: 'DSA Mastery',
    slug: 'dsa-mastery',
    description: 'Master data structures and algorithms from basics to advanced competitive programming patterns.',
    domain: 'DSA',
    icon: '🧮',
    sections: [
      {
        title: 'Arrays & Strings',
        order: 1,
        topics: [
          {
            title: 'Array Basics',
            difficulty: 'beginner',
            estimatedMinutes: 45,
            subtopics: [
              { title: 'Traversal & Insertion' },
              { title: 'Deletion & Searching' },
              { title: 'Prefix Sum Technique' },
            ],
          },
          {
            title: 'Two Pointer Technique',
            difficulty: 'intermediate',
            estimatedMinutes: 60,
            subtopics: [
              { title: 'Pair Sum Problems' },
              { title: 'Container With Most Water' },
              { title: 'Three Sum' },
            ],
          },
          {
            title: 'Sliding Window',
            difficulty: 'intermediate',
            estimatedMinutes: 90,
            subtopics: [
              { title: 'Fixed-size Window' },
              { title: 'Variable-size Window' },
              { title: 'String Anagram Patterns' },
            ],
          },
          {
            title: 'String Manipulation',
            difficulty: 'beginner',
            estimatedMinutes: 60,
            subtopics: [
              { title: 'Reversal & Palindrome' },
              { title: 'KMP Algorithm Introduction' },
              { title: 'String Hashing' },
            ],
          },
        ],
      },
      {
        title: 'Linked Lists',
        order: 2,
        topics: [
          {
            title: 'Singly Linked List',
            difficulty: 'beginner',
            estimatedMinutes: 45,
            subtopics: [
              { title: 'Insertion & Deletion' },
              { title: 'Reversal' },
              { title: 'Cycle Detection (Floyd\'s)' },
            ],
          },
          {
            title: 'Doubly Linked List',
            difficulty: 'intermediate',
            estimatedMinutes: 30,
            subtopics: [
              { title: 'LRU Cache Design' },
              { title: 'Browser History Problem' },
            ],
          },
        ],
      },
      {
        title: 'Stacks & Queues',
        order: 3,
        topics: [
          {
            title: 'Stack Fundamentals',
            difficulty: 'beginner',
            estimatedMinutes: 40,
            subtopics: [
              { title: 'Balanced Parentheses' },
              { title: 'Next Greater Element' },
              { title: 'Min Stack Design' },
            ],
          },
          {
            title: 'Queue & Deque',
            difficulty: 'intermediate',
            estimatedMinutes: 45,
            subtopics: [
              { title: 'Sliding Window Maximum' },
              { title: 'Circular Queue' },
            ],
          },
        ],
      },
      {
        title: 'Trees',
        order: 4,
        topics: [
          {
            title: 'Binary Tree Traversals',
            difficulty: 'beginner',
            estimatedMinutes: 60,
            subtopics: [
              { title: 'Inorder, Preorder, Postorder' },
              { title: 'Level Order (BFS)' },
              { title: 'Height & Diameter' },
            ],
          },
          {
            title: 'Binary Search Tree',
            difficulty: 'intermediate',
            estimatedMinutes: 75,
            subtopics: [
              { title: 'Insert, Delete, Search' },
              { title: 'Validate BST' },
              { title: 'Lowest Common Ancestor' },
            ],
          },
          {
            title: 'Advanced Trees',
            difficulty: 'advanced',
            estimatedMinutes: 90,
            subtopics: [
              { title: 'AVL Trees' },
              { title: 'Segment Trees' },
              { title: 'Trie (Prefix Tree)' },
            ],
          },
        ],
      },
      {
        title: 'Graphs',
        order: 5,
        topics: [
          {
            title: 'Graph Representation & BFS/DFS',
            difficulty: 'intermediate',
            estimatedMinutes: 75,
            subtopics: [
              { title: 'Adjacency List & Matrix' },
              { title: 'BFS Traversal' },
              { title: 'DFS Traversal' },
              { title: 'Connected Components' },
            ],
          },
          {
            title: 'Shortest Path Algorithms',
            difficulty: 'advanced',
            estimatedMinutes: 90,
            subtopics: [
              { title: 'Dijkstra\'s Algorithm' },
              { title: 'Bellman-Ford' },
              { title: 'Floyd-Warshall' },
            ],
          },
          {
            title: 'Topological Sort & Advanced',
            difficulty: 'advanced',
            estimatedMinutes: 60,
            subtopics: [
              { title: 'Kahn\'s Algorithm' },
              { title: 'Union-Find' },
              { title: 'Minimum Spanning Tree' },
            ],
          },
        ],
      },
      {
        title: 'Dynamic Programming',
        order: 6,
        topics: [
          {
            title: 'DP Foundations',
            difficulty: 'intermediate',
            estimatedMinutes: 90,
            subtopics: [
              { title: 'Fibonacci & Climbing Stairs' },
              { title: 'Memoization vs Tabulation' },
              { title: '0/1 Knapsack' },
            ],
          },
          {
            title: 'Classic DP Problems',
            difficulty: 'advanced',
            estimatedMinutes: 120,
            subtopics: [
              { title: 'Longest Common Subsequence' },
              { title: 'Longest Increasing Subsequence' },
              { title: 'Edit Distance' },
              { title: 'Matrix Chain Multiplication' },
            ],
          },
          {
            title: 'DP on Grids & Strings',
            difficulty: 'advanced',
            estimatedMinutes: 90,
            subtopics: [
              { title: 'Unique Paths' },
              { title: 'Minimum Path Sum' },
              { title: 'Palindrome Partitioning' },
            ],
          },
        ],
      },
    ],
  },

  // ============================================================
  // 2. MERN Stack Roadmap
  // ============================================================
  {
    title: 'MERN Stack Developer',
    slug: 'mern-stack',
    description: 'Become a full-stack JavaScript developer with MongoDB, Express, React, and Node.js.',
    domain: 'MERN',
    icon: '⚛️',
    sections: [
      {
        title: 'JavaScript Fundamentals',
        order: 1,
        topics: [
          {
            title: 'ES6+ Features',
            difficulty: 'beginner',
            estimatedMinutes: 60,
            subtopics: [
              { title: 'let/const, Template Literals, Destructuring' },
              { title: 'Arrow Functions & Spread Operator' },
              { title: 'Promises & Async/Await' },
            ],
          },
          {
            title: 'DOM Manipulation & Events',
            difficulty: 'beginner',
            estimatedMinutes: 45,
            subtopics: [
              { title: 'Selectors & Traversal' },
              { title: 'Event Delegation' },
            ],
          },
        ],
      },
      {
        title: 'Node.js & Express',
        order: 2,
        topics: [
          {
            title: 'Node.js Basics',
            difficulty: 'beginner',
            estimatedMinutes: 60,
            subtopics: [
              { title: 'Modules & File System' },
              { title: 'NPM & Package Management' },
              { title: 'Event Loop & Streams' },
            ],
          },
          {
            title: 'Express.js Framework',
            difficulty: 'intermediate',
            estimatedMinutes: 90,
            subtopics: [
              { title: 'Routing & Middleware' },
              { title: 'Error Handling Patterns' },
              { title: 'REST API Design Principles' },
            ],
          },
          {
            title: 'Authentication & Security',
            difficulty: 'intermediate',
            estimatedMinutes: 75,
            subtopics: [
              { title: 'JWT Implementation' },
              { title: 'Password Hashing (bcrypt)' },
              { title: 'CORS & Helmet' },
            ],
          },
        ],
      },
      {
        title: 'MongoDB & Mongoose',
        order: 3,
        topics: [
          {
            title: 'MongoDB Fundamentals',
            difficulty: 'beginner',
            estimatedMinutes: 60,
            subtopics: [
              { title: 'CRUD Operations' },
              { title: 'Indexing & Performance' },
              { title: 'Aggregation Pipeline' },
            ],
          },
          {
            title: 'Mongoose ODM',
            difficulty: 'intermediate',
            estimatedMinutes: 75,
            subtopics: [
              { title: 'Schema Design & Validation' },
              { title: 'Middleware & Virtuals' },
              { title: 'Population & References' },
            ],
          },
        ],
      },
      {
        title: 'React.js',
        order: 4,
        topics: [
          {
            title: 'React Basics',
            difficulty: 'beginner',
            estimatedMinutes: 90,
            subtopics: [
              { title: 'JSX & Components' },
              { title: 'Props & State' },
              { title: 'Event Handling' },
            ],
          },
          {
            title: 'React Hooks & State Management',
            difficulty: 'intermediate',
            estimatedMinutes: 120,
            subtopics: [
              { title: 'useState, useEffect, useRef' },
              { title: 'useContext & Context API' },
              { title: 'Custom Hooks' },
            ],
          },
          {
            title: 'React Router & Forms',
            difficulty: 'intermediate',
            estimatedMinutes: 60,
            subtopics: [
              { title: 'Client-side Routing' },
              { title: 'Controlled Components' },
              { title: 'Form Validation' },
            ],
          },
        ],
      },
      {
        title: 'Full-Stack Integration',
        order: 5,
        topics: [
          {
            title: 'Connecting Frontend to Backend',
            difficulty: 'intermediate',
            estimatedMinutes: 60,
            subtopics: [
              { title: 'Axios & Fetch API' },
              { title: 'Environment Variables' },
              { title: 'Proxy Configuration' },
            ],
          },
          {
            title: 'Deployment',
            difficulty: 'intermediate',
            estimatedMinutes: 45,
            subtopics: [
              { title: 'Deploying Backend (Render/Railway)' },
              { title: 'Deploying Frontend (Vercel/Netlify)' },
              { title: 'CI/CD Basics' },
            ],
          },
        ],
      },
    ],
  },

  // ============================================================
  // 3. Java Backend Roadmap
  // ============================================================
  {
    title: 'Java Backend Engineering',
    slug: 'java-backend',
    description: 'Build enterprise-grade backend systems with Java, Spring Boot, and microservices architecture.',
    domain: 'Java Backend',
    icon: '☕',
    sections: [
      {
        title: 'Core Java',
        order: 1,
        topics: [
          {
            title: 'OOP Fundamentals',
            difficulty: 'beginner',
            estimatedMinutes: 75,
            subtopics: [
              { title: 'Classes, Objects, Inheritance' },
              { title: 'Polymorphism & Abstraction' },
              { title: 'Interfaces & Encapsulation' },
            ],
          },
          {
            title: 'Collections Framework',
            difficulty: 'intermediate',
            estimatedMinutes: 90,
            subtopics: [
              { title: 'List, Set, Map Implementations' },
              { title: 'Iterators & Comparators' },
              { title: 'Concurrent Collections' },
            ],
          },
          {
            title: 'Generics & Streams',
            difficulty: 'intermediate',
            estimatedMinutes: 60,
            subtopics: [
              { title: 'Generic Classes & Methods' },
              { title: 'Lambda Expressions' },
              { title: 'Stream API & Functional Interfaces' },
            ],
          },
        ],
      },
      {
        title: 'Spring Boot',
        order: 2,
        topics: [
          {
            title: 'Spring Boot Basics',
            difficulty: 'beginner',
            estimatedMinutes: 90,
            subtopics: [
              { title: 'Project Setup & Auto-configuration' },
              { title: 'Dependency Injection & IoC' },
              { title: 'Application Properties' },
            ],
          },
          {
            title: 'REST API Development',
            difficulty: 'intermediate',
            estimatedMinutes: 120,
            subtopics: [
              { title: 'Controllers & Request Mapping' },
              { title: 'Request/Response DTOs' },
              { title: 'Exception Handling & Validation' },
            ],
          },
          {
            title: 'Spring Security',
            difficulty: 'advanced',
            estimatedMinutes: 90,
            subtopics: [
              { title: 'Authentication & Authorization' },
              { title: 'JWT Token Implementation' },
              { title: 'OAuth2 Integration' },
            ],
          },
        ],
      },
      {
        title: 'Database & ORM',
        order: 3,
        topics: [
          {
            title: 'SQL & JDBC',
            difficulty: 'beginner',
            estimatedMinutes: 60,
            subtopics: [
              { title: 'SQL Queries & Joins' },
              { title: 'JDBC Connection & Statements' },
            ],
          },
          {
            title: 'JPA & Hibernate',
            difficulty: 'intermediate',
            estimatedMinutes: 90,
            subtopics: [
              { title: 'Entity Mapping & Relations' },
              { title: 'JPQL & Criteria API' },
              { title: 'Caching & Performance' },
            ],
          },
        ],
      },
      {
        title: 'Microservices',
        order: 4,
        topics: [
          {
            title: 'Microservices Architecture',
            difficulty: 'advanced',
            estimatedMinutes: 90,
            subtopics: [
              { title: 'Service Decomposition' },
              { title: 'API Gateway Pattern' },
              { title: 'Service Discovery (Eureka)' },
            ],
          },
          {
            title: 'Messaging & Async',
            difficulty: 'advanced',
            estimatedMinutes: 75,
            subtopics: [
              { title: 'RabbitMQ / Kafka Basics' },
              { title: 'Event-Driven Architecture' },
              { title: 'Circuit Breaker (Resilience4j)' },
            ],
          },
        ],
      },
      {
        title: 'DevOps for Java',
        order: 5,
        topics: [
          {
            title: 'Docker & Containers',
            difficulty: 'intermediate',
            estimatedMinutes: 60,
            subtopics: [
              { title: 'Dockerizing Spring Boot' },
              { title: 'Docker Compose for Multi-container' },
            ],
          },
          {
            title: 'CI/CD & Monitoring',
            difficulty: 'intermediate',
            estimatedMinutes: 45,
            subtopics: [
              { title: 'GitHub Actions / Jenkins' },
              { title: 'Logging (SLF4J / Logback)' },
              { title: 'Actuator & Prometheus' },
            ],
          },
        ],
      },
    ],
  },

  // ============================================================
  // 4. Data Science Roadmap
  // ============================================================
  {
    title: 'Data Science & ML',
    slug: 'data-science',
    description: 'Learn data science from statistics fundamentals to deploying machine learning models in production.',
    domain: 'Data Science',
    icon: '📊',
    sections: [
      {
        title: 'Python for Data Science',
        order: 1,
        topics: [
          {
            title: 'Python Fundamentals',
            difficulty: 'beginner',
            estimatedMinutes: 60,
            subtopics: [
              { title: 'Data Types & Control Flow' },
              { title: 'Functions & List Comprehensions' },
              { title: 'File I/O & Error Handling' },
            ],
          },
          {
            title: 'NumPy & Pandas',
            difficulty: 'beginner',
            estimatedMinutes: 90,
            subtopics: [
              { title: 'NumPy Arrays & Operations' },
              { title: 'DataFrames & Series' },
              { title: 'Data Cleaning & Transformation' },
            ],
          },
        ],
      },
      {
        title: 'Statistics & Probability',
        order: 2,
        topics: [
          {
            title: 'Descriptive Statistics',
            difficulty: 'beginner',
            estimatedMinutes: 60,
            subtopics: [
              { title: 'Mean, Median, Mode, Variance' },
              { title: 'Distributions (Normal, Binomial)' },
            ],
          },
          {
            title: 'Inferential Statistics',
            difficulty: 'intermediate',
            estimatedMinutes: 90,
            subtopics: [
              { title: 'Hypothesis Testing' },
              { title: 'Confidence Intervals' },
              { title: 'A/B Testing' },
            ],
          },
        ],
      },
      {
        title: 'Data Visualization',
        order: 3,
        topics: [
          {
            title: 'Matplotlib & Seaborn',
            difficulty: 'beginner',
            estimatedMinutes: 60,
            subtopics: [
              { title: 'Line, Bar, Scatter Plots' },
              { title: 'Heatmaps & Pair Plots' },
              { title: 'Customizing Visualizations' },
            ],
          },
          {
            title: 'Interactive Visualization',
            difficulty: 'intermediate',
            estimatedMinutes: 45,
            subtopics: [
              { title: 'Plotly & Dash' },
              { title: 'Tableau / Power BI Overview' },
            ],
          },
        ],
      },
      {
        title: 'Machine Learning',
        order: 4,
        topics: [
          {
            title: 'Supervised Learning',
            difficulty: 'intermediate',
            estimatedMinutes: 120,
            subtopics: [
              { title: 'Linear & Logistic Regression' },
              { title: 'Decision Trees & Random Forest' },
              { title: 'SVM & KNN' },
              { title: 'Model Evaluation Metrics' },
            ],
          },
          {
            title: 'Unsupervised Learning',
            difficulty: 'intermediate',
            estimatedMinutes: 90,
            subtopics: [
              { title: 'K-Means Clustering' },
              { title: 'Hierarchical Clustering' },
              { title: 'PCA & Dimensionality Reduction' },
            ],
          },
          {
            title: 'Feature Engineering',
            difficulty: 'intermediate',
            estimatedMinutes: 75,
            subtopics: [
              { title: 'Handling Missing Data' },
              { title: 'Encoding Categorical Variables' },
              { title: 'Feature Scaling & Selection' },
            ],
          },
        ],
      },
      {
        title: 'Deep Learning & Deployment',
        order: 5,
        topics: [
          {
            title: 'Neural Networks',
            difficulty: 'advanced',
            estimatedMinutes: 120,
            subtopics: [
              { title: 'Perceptrons & Activation Functions' },
              { title: 'Backpropagation & Gradient Descent' },
              { title: 'CNNs for Image Tasks' },
              { title: 'RNNs & LSTMs for Sequences' },
            ],
          },
          {
            title: 'Model Deployment',
            difficulty: 'advanced',
            estimatedMinutes: 60,
            subtopics: [
              { title: 'Flask / FastAPI for Model Serving' },
              { title: 'Docker for ML Models' },
              { title: 'MLOps Overview' },
            ],
          },
        ],
      },
    ],
  },
];

// --------------- Seed Execution ---------------
const roadmapsNotes = require('./roadmapsNotes');

async function seedRoadmaps() {
  try {
    console.log('🗑️  Clearing existing roadmaps...');
    await Roadmap.deleteMany({});

    // Inject comprehensive notes and youtubeLinks dynamically
    roadmaps.forEach(roadmap => {
      roadmap.sections.forEach(section => {
        section.topics.forEach(topic => {
          if (roadmapsNotes[topic.title]) {
            topic.notes = roadmapsNotes[topic.title].notes;
            topic.youtubeLink = roadmapsNotes[topic.title].youtubeLink;
          }
        });
      });
    });

    console.log('🌱 Seeding roadmaps...');
    const created = await Roadmap.insertMany(roadmaps);
    console.log(`✅ Seeded ${created.length} roadmaps successfully!`);
  } catch (error) {
    console.error('❌ Roadmap Seed error:', error);
    throw error;
  }
}

module.exports = seedRoadmaps;
