/**
 * Seed Script – Populates MongoDB with predefined roadmaps.
 * Run: node data/seedRoadmaps.js
 *
 * Contains 9 comprehensive roadmaps: DSA, MERN, Java Backend, Data Science, Ethical Hacking, Frontend, Backend, Software Engineering, DevOps.
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

  // ============================================================
  // 5. Ethical Hacking Roadmap
  // ============================================================
  {
    title: 'Ethical Hacking & Cybersecurity',
    slug: 'ethical-hacking',
    description: 'Learn ethical hacking from networking fundamentals to advanced penetration testing, bug bounty hunting, and security operations.',
    domain: 'Ethical Hacking',
    icon: '🔓',
    sections: [
      {
        title: 'Networking Fundamentals',
        order: 1,
        topics: [
          {
            title: 'OSI & TCP/IP Models',
            difficulty: 'beginner',
            estimatedMinutes: 60,
            subtopics: [
              { title: '7 Layers of the OSI Model' },
              { title: 'TCP vs UDP Protocols' },
              { title: 'IP Addressing & Subnetting' },
            ],
          },
          {
            title: 'DNS, DHCP & HTTP',
            difficulty: 'beginner',
            estimatedMinutes: 45,
            subtopics: [
              { title: 'DNS Resolution Process' },
              { title: 'HTTP/HTTPS & SSL/TLS Handshake' },
              { title: 'DHCP Lease Process' },
            ],
          },
          {
            title: 'Firewalls & Network Security',
            difficulty: 'intermediate',
            estimatedMinutes: 60,
            subtopics: [
              { title: 'Packet Filtering & Stateful Inspection' },
              { title: 'IDS vs IPS Systems' },
              { title: 'VPN & Tunneling Protocols' },
            ],
          },
        ],
      },
      {
        title: 'Linux & Scripting',
        order: 2,
        topics: [
          {
            title: 'Linux Command Line Mastery',
            difficulty: 'beginner',
            estimatedMinutes: 75,
            subtopics: [
              { title: 'File System Navigation & Permissions' },
              { title: 'Process Management & Cron Jobs' },
              { title: 'User Management & SSH' },
            ],
          },
          {
            title: 'Bash & Python Scripting',
            difficulty: 'intermediate',
            estimatedMinutes: 90,
            subtopics: [
              { title: 'Bash Automation Scripts' },
              { title: 'Python for Security (Scapy, Requests)' },
              { title: 'Writing Custom Exploit Scripts' },
            ],
          },
        ],
      },
      {
        title: 'Reconnaissance & Scanning',
        order: 3,
        topics: [
          {
            title: 'Passive Reconnaissance',
            difficulty: 'intermediate',
            estimatedMinutes: 60,
            subtopics: [
              { title: 'OSINT Techniques & Tools' },
              { title: 'Google Dorking & Shodan' },
              { title: 'WHOIS & DNS Enumeration' },
            ],
          },
          {
            title: 'Active Scanning & Enumeration',
            difficulty: 'intermediate',
            estimatedMinutes: 75,
            subtopics: [
              { title: 'Nmap Scanning Techniques' },
              { title: 'Service & Version Detection' },
              { title: 'Vulnerability Scanning (Nessus, OpenVAS)' },
            ],
          },
        ],
      },
      {
        title: 'Web Application Security',
        order: 4,
        topics: [
          {
            title: 'OWASP Top 10 Vulnerabilities',
            difficulty: 'intermediate',
            estimatedMinutes: 120,
            subtopics: [
              { title: 'SQL Injection & Prevention' },
              { title: 'Cross-Site Scripting (XSS)' },
              { title: 'Broken Authentication & Session Management' },
              { title: 'CSRF & SSRF Attacks' },
            ],
          },
          {
            title: 'Web Exploitation Tools',
            difficulty: 'advanced',
            estimatedMinutes: 90,
            subtopics: [
              { title: 'Burp Suite Mastery' },
              { title: 'SQLMap & Directory Busting' },
              { title: 'API Security Testing' },
            ],
          },
        ],
      },
      {
        title: 'System Hacking & Post-Exploitation',
        order: 5,
        topics: [
          {
            title: 'Exploitation Frameworks',
            difficulty: 'advanced',
            estimatedMinutes: 90,
            subtopics: [
              { title: 'Metasploit Framework Deep Dive' },
              { title: 'Payload Generation & Delivery' },
              { title: 'Privilege Escalation (Linux & Windows)' },
            ],
          },
          {
            title: 'Post-Exploitation & Reporting',
            difficulty: 'advanced',
            estimatedMinutes: 75,
            subtopics: [
              { title: 'Persistence & Lateral Movement' },
              { title: 'Data Exfiltration Techniques' },
              { title: 'Professional Pentest Reporting' },
            ],
          },
        ],
      },
      {
        title: 'Bug Bounty & Career',
        order: 6,
        topics: [
          {
            title: 'Bug Bounty Hunting',
            difficulty: 'advanced',
            estimatedMinutes: 60,
            subtopics: [
              { title: 'HackerOne & Bugcrowd Platforms' },
              { title: 'Writing Quality Bug Reports' },
              { title: 'Recon Automation Workflows' },
            ],
          },
          {
            title: 'Certifications & Career Path',
            difficulty: 'beginner',
            estimatedMinutes: 30,
            subtopics: [
              { title: 'CEH, OSCP, CompTIA Security+' },
              { title: 'Building a Security Portfolio' },
            ],
          },
        ],
      },
    ],
  },

  // ============================================================
  // 6. Frontend Developer Roadmap
  // ============================================================
  {
    title: 'Frontend Developer',
    slug: 'frontend-developer',
    description: 'Master modern frontend development from HTML/CSS basics to advanced React patterns, performance optimization, and design systems.',
    domain: 'Frontend',
    icon: '🎨',
    sections: [
      {
        title: 'HTML & CSS Foundations',
        order: 1,
        topics: [
          {
            title: 'Semantic HTML5',
            difficulty: 'beginner',
            estimatedMinutes: 45,
            subtopics: [
              { title: 'Document Structure & Meta Tags' },
              { title: 'Forms, Tables & Accessibility (a11y)' },
              { title: 'SEO Best Practices in HTML' },
            ],
          },
          {
            title: 'Modern CSS & Layouts',
            difficulty: 'beginner',
            estimatedMinutes: 90,
            subtopics: [
              { title: 'Flexbox Deep Dive' },
              { title: 'CSS Grid System' },
              { title: 'Responsive Design & Media Queries' },
            ],
          },
          {
            title: 'CSS Preprocessors & Architecture',
            difficulty: 'intermediate',
            estimatedMinutes: 60,
            subtopics: [
              { title: 'SASS/SCSS Variables & Mixins' },
              { title: 'BEM Naming Convention' },
              { title: 'CSS Custom Properties (Variables)' },
            ],
          },
        ],
      },
      {
        title: 'JavaScript Mastery',
        order: 2,
        topics: [
          {
            title: 'Core JavaScript Concepts',
            difficulty: 'beginner',
            estimatedMinutes: 90,
            subtopics: [
              { title: 'Closures, Hoisting & Scope Chain' },
              { title: 'Prototypal Inheritance & this Keyword' },
              { title: 'Event Loop & Callback Queue' },
            ],
          },
          {
            title: 'ES6+ & Modern Patterns',
            difficulty: 'intermediate',
            estimatedMinutes: 75,
            subtopics: [
              { title: 'Destructuring, Spread & Rest' },
              { title: 'Promises, Async/Await & Error Handling' },
              { title: 'Modules (import/export) & Bundling' },
            ],
          },
          {
            title: 'TypeScript Essentials',
            difficulty: 'intermediate',
            estimatedMinutes: 90,
            subtopics: [
              { title: 'Type Annotations & Interfaces' },
              { title: 'Generics & Utility Types' },
              { title: 'TypeScript with React' },
            ],
          },
        ],
      },
      {
        title: 'React.js Advanced',
        order: 3,
        topics: [
          {
            title: 'Component Architecture',
            difficulty: 'intermediate',
            estimatedMinutes: 75,
            subtopics: [
              { title: 'Functional Components & JSX' },
              { title: 'Component Composition Patterns' },
              { title: 'Higher-Order Components & Render Props' },
            ],
          },
          {
            title: 'State Management Deep Dive',
            difficulty: 'intermediate',
            estimatedMinutes: 90,
            subtopics: [
              { title: 'Context API & useReducer' },
              { title: 'Redux Toolkit & RTK Query' },
              { title: 'Zustand & Jotai (Lightweight Alternatives)' },
            ],
          },
          {
            title: 'React Performance Optimization',
            difficulty: 'advanced',
            estimatedMinutes: 60,
            subtopics: [
              { title: 'React.memo, useMemo & useCallback' },
              { title: 'Code Splitting & Lazy Loading' },
              { title: 'React Profiler & DevTools' },
            ],
          },
        ],
      },
      {
        title: 'Build Tools & Testing',
        order: 4,
        topics: [
          {
            title: 'Build Tools & Module Bundlers',
            difficulty: 'intermediate',
            estimatedMinutes: 60,
            subtopics: [
              { title: 'Vite vs Webpack Comparison' },
              { title: 'Babel & Transpilation' },
              { title: 'Environment Variables & Config' },
            ],
          },
          {
            title: 'Frontend Testing',
            difficulty: 'intermediate',
            estimatedMinutes: 75,
            subtopics: [
              { title: 'Jest Unit Testing' },
              { title: 'React Testing Library' },
              { title: 'Cypress E2E Testing' },
            ],
          },
        ],
      },
      {
        title: 'UI/UX & Design Systems',
        order: 5,
        topics: [
          {
            title: 'Animation & Micro-Interactions',
            difficulty: 'intermediate',
            estimatedMinutes: 60,
            subtopics: [
              { title: 'CSS Transitions & Keyframes' },
              { title: 'Framer Motion Library' },
              { title: 'GSAP for Complex Animations' },
            ],
          },
          {
            title: 'Design System Implementation',
            difficulty: 'advanced',
            estimatedMinutes: 75,
            subtopics: [
              { title: 'Component Library Architecture' },
              { title: 'Storybook for Visual Testing' },
              { title: 'Tailwind CSS & Utility-First Design' },
            ],
          },
          {
            title: 'Web Performance & Core Vitals',
            difficulty: 'advanced',
            estimatedMinutes: 60,
            subtopics: [
              { title: 'LCP, FID & CLS Optimization' },
              { title: 'Image Optimization & Lazy Loading' },
              { title: 'Service Workers & PWA Basics' },
            ],
          },
        ],
      },
    ],
  },

  // ============================================================
  // 7. Backend Developer Roadmap
  // ============================================================
  {
    title: 'Backend Developer',
    slug: 'backend-developer',
    description: 'Learn backend engineering from API design and databases to system design, caching, message queues, and production deployments.',
    domain: 'Backend',
    icon: '⚙️',
    sections: [
      {
        title: 'Programming Foundations',
        order: 1,
        topics: [
          {
            title: 'Choose Your Language',
            difficulty: 'beginner',
            estimatedMinutes: 60,
            subtopics: [
              { title: 'Node.js / Python / Java / Go Overview' },
              { title: 'Language Paradigms (OOP vs Functional)' },
              { title: 'Package Managers & Project Setup' },
            ],
          },
          {
            title: 'Data Structures for Backend',
            difficulty: 'beginner',
            estimatedMinutes: 75,
            subtopics: [
              { title: 'Hash Maps, Queues & Stacks' },
              { title: 'Trees & Graphs (for DB Indexes)' },
              { title: 'Big-O Analysis for API Performance' },
            ],
          },
        ],
      },
      {
        title: 'API Design & Development',
        order: 2,
        topics: [
          {
            title: 'RESTful API Architecture',
            difficulty: 'beginner',
            estimatedMinutes: 90,
            subtopics: [
              { title: 'HTTP Methods & Status Codes' },
              { title: 'Resource Naming & Versioning' },
              { title: 'Pagination, Filtering & Sorting' },
            ],
          },
          {
            title: 'GraphQL Fundamentals',
            difficulty: 'intermediate',
            estimatedMinutes: 75,
            subtopics: [
              { title: 'Schemas, Queries & Mutations' },
              { title: 'Resolvers & Data Loaders' },
              { title: 'REST vs GraphQL Trade-offs' },
            ],
          },
          {
            title: 'API Security & Authentication',
            difficulty: 'intermediate',
            estimatedMinutes: 90,
            subtopics: [
              { title: 'JWT & OAuth 2.0 Flows' },
              { title: 'API Rate Limiting & Throttling' },
              { title: 'Input Validation & Sanitization' },
            ],
          },
        ],
      },
      {
        title: 'Databases',
        order: 3,
        topics: [
          {
            title: 'Relational Databases (SQL)',
            difficulty: 'beginner',
            estimatedMinutes: 90,
            subtopics: [
              { title: 'Schema Design & Normalization' },
              { title: 'Joins, Subqueries & Indexes' },
              { title: 'PostgreSQL / MySQL Deep Dive' },
            ],
          },
          {
            title: 'NoSQL Databases',
            difficulty: 'intermediate',
            estimatedMinutes: 75,
            subtopics: [
              { title: 'MongoDB Document Model' },
              { title: 'Redis for Caching & Sessions' },
              { title: 'When to Use SQL vs NoSQL' },
            ],
          },
          {
            title: 'Database Performance & Scaling',
            difficulty: 'advanced',
            estimatedMinutes: 60,
            subtopics: [
              { title: 'Query Optimization & EXPLAIN Analysis' },
              { title: 'Sharding & Replication Strategies' },
              { title: 'Database Migrations & Versioning' },
            ],
          },
        ],
      },
      {
        title: 'Caching & Message Queues',
        order: 4,
        topics: [
          {
            title: 'Caching Strategies',
            difficulty: 'intermediate',
            estimatedMinutes: 60,
            subtopics: [
              { title: 'Cache-Aside, Write-Through & Write-Behind' },
              { title: 'Redis & Memcached Implementation' },
              { title: 'CDN Caching & Cache Invalidation' },
            ],
          },
          {
            title: 'Message Queues & Event Streaming',
            difficulty: 'advanced',
            estimatedMinutes: 75,
            subtopics: [
              { title: 'RabbitMQ vs Kafka Architecture' },
              { title: 'Pub/Sub & Task Queues (Bull, Celery)' },
              { title: 'Event Sourcing & CQRS Pattern' },
            ],
          },
        ],
      },
      {
        title: 'DevOps & Deployment',
        order: 5,
        topics: [
          {
            title: 'Containerization & Docker',
            difficulty: 'intermediate',
            estimatedMinutes: 75,
            subtopics: [
              { title: 'Dockerfile & Multi-stage Builds' },
              { title: 'Docker Compose for Microservices' },
              { title: 'Container Registries & Image Optimization' },
            ],
          },
          {
            title: 'CI/CD & Cloud Deployment',
            difficulty: 'intermediate',
            estimatedMinutes: 60,
            subtopics: [
              { title: 'GitHub Actions & Jenkins Pipelines' },
              { title: 'AWS / GCP / Azure Core Services' },
              { title: 'Kubernetes Basics & Orchestration' },
            ],
          },
          {
            title: 'Monitoring & Observability',
            difficulty: 'advanced',
            estimatedMinutes: 60,
            subtopics: [
              { title: 'Logging (ELK Stack / Winston)' },
              { title: 'Metrics & Alerting (Prometheus, Grafana)' },
              { title: 'Distributed Tracing (Jaeger, OpenTelemetry)' },
            ],
          },
        ],
      },
    ],
  },

  // ============================================================
  // 8. Software Engineer Roadmap
  // ============================================================
  {
    title: 'Software Engineer',
    slug: 'software-engineer',
    description: 'A comprehensive guide to becoming a well-rounded software engineer covering CS fundamentals, design patterns, system design, and professional practices.',
    domain: 'Software Engineering',
    icon: '💻',
    sections: [
      {
        title: 'Computer Science Fundamentals',
        order: 1,
        topics: [
          {
            title: 'Operating Systems Concepts',
            difficulty: 'beginner',
            estimatedMinutes: 90,
            subtopics: [
              { title: 'Processes, Threads & Concurrency' },
              { title: 'Memory Management & Virtual Memory' },
              { title: 'CPU Scheduling Algorithms' },
            ],
          },
          {
            title: 'Computer Networks',
            difficulty: 'beginner',
            estimatedMinutes: 75,
            subtopics: [
              { title: 'OSI Model & TCP/IP Stack' },
              { title: 'HTTP/HTTPS, DNS & CDNs' },
              { title: 'Sockets & WebSocket Communication' },
            ],
          },
          {
            title: 'Database Theory',
            difficulty: 'intermediate',
            estimatedMinutes: 75,
            subtopics: [
              { title: 'ACID Properties & Transactions' },
              { title: 'Normalization (1NF – BCNF)' },
              { title: 'CAP Theorem & Distributed Databases' },
            ],
          },
        ],
      },
      {
        title: 'Object-Oriented Design',
        order: 2,
        topics: [
          {
            title: 'SOLID Principles',
            difficulty: 'intermediate',
            estimatedMinutes: 75,
            subtopics: [
              { title: 'Single Responsibility & Open/Closed' },
              { title: 'Liskov Substitution & Interface Segregation' },
              { title: 'Dependency Inversion Principle' },
            ],
          },
          {
            title: 'Design Patterns',
            difficulty: 'intermediate',
            estimatedMinutes: 120,
            subtopics: [
              { title: 'Creational: Singleton, Factory, Builder' },
              { title: 'Structural: Adapter, Decorator, Proxy' },
              { title: 'Behavioral: Observer, Strategy, Command' },
            ],
          },
          {
            title: 'Clean Code & Refactoring',
            difficulty: 'intermediate',
            estimatedMinutes: 60,
            subtopics: [
              { title: 'Meaningful Names & Small Functions' },
              { title: 'Code Smells & Refactoring Patterns' },
              { title: 'DRY, KISS & YAGNI Principles' },
            ],
          },
        ],
      },
      {
        title: 'System Design',
        order: 3,
        topics: [
          {
            title: 'System Design Fundamentals',
            difficulty: 'intermediate',
            estimatedMinutes: 90,
            subtopics: [
              { title: 'Scalability: Vertical vs Horizontal' },
              { title: 'Load Balancing Strategies' },
              { title: 'Caching Layers & CDN Architecture' },
            ],
          },
          {
            title: 'High-Level Design (HLD)',
            difficulty: 'advanced',
            estimatedMinutes: 120,
            subtopics: [
              { title: 'Design URL Shortener (like bit.ly)' },
              { title: 'Design Twitter/Instagram Feed' },
              { title: 'Design Chat System (WhatsApp)' },
            ],
          },
          {
            title: 'Low-Level Design (LLD)',
            difficulty: 'advanced',
            estimatedMinutes: 90,
            subtopics: [
              { title: 'Parking Lot System Design' },
              { title: 'Elevator System Design' },
              { title: 'Library Management System' },
            ],
          },
        ],
      },
      {
        title: 'Version Control & Collaboration',
        order: 4,
        topics: [
          {
            title: 'Git Advanced Workflows',
            difficulty: 'beginner',
            estimatedMinutes: 60,
            subtopics: [
              { title: 'Branching Strategies (GitFlow, Trunk-Based)' },
              { title: 'Rebasing, Cherry-Picking & Stashing' },
              { title: 'Resolving Merge Conflicts' },
            ],
          },
          {
            title: 'Code Review & Collaboration',
            difficulty: 'intermediate',
            estimatedMinutes: 45,
            subtopics: [
              { title: 'Writing Effective Pull Requests' },
              { title: 'Code Review Best Practices' },
              { title: 'Agile & Scrum Methodologies' },
            ],
          },
        ],
      },
      {
        title: 'Testing & Quality Assurance',
        order: 5,
        topics: [
          {
            title: 'Testing Strategies',
            difficulty: 'intermediate',
            estimatedMinutes: 90,
            subtopics: [
              { title: 'Unit Testing & TDD (Test-Driven Development)' },
              { title: 'Integration & End-to-End Testing' },
              { title: 'Mocking, Stubbing & Test Doubles' },
            ],
          },
          {
            title: 'Software Architecture Patterns',
            difficulty: 'advanced',
            estimatedMinutes: 75,
            subtopics: [
              { title: 'Monolith vs Microservices vs Serverless' },
              { title: 'Event-Driven Architecture' },
              { title: 'Domain-Driven Design (DDD) Basics' },
            ],
          },
        ],
      },
      {
        title: 'Career & Interview Preparation',
        order: 6,
        topics: [
          {
            title: 'Technical Interview Strategy',
            difficulty: 'intermediate',
            estimatedMinutes: 60,
            subtopics: [
              { title: 'Problem-Solving Framework (UMPIRE)' },
              { title: 'Coding Interview Patterns' },
              { title: 'System Design Interview Framework' },
            ],
          },
          {
            title: 'Building Your Profile',
            difficulty: 'beginner',
            estimatedMinutes: 45,
            subtopics: [
              { title: 'Open Source Contributions' },
              { title: 'Portfolio Projects That Stand Out' },
              { title: 'Resume & LinkedIn Optimization' },
            ],
          },
        ],
      },
    ],
  },

  // ============================================================
  // 9. DevOps Roadmap
  // ============================================================
  {
    title: 'DevOps Engineer',
    slug: 'devops-engineer',
    description: 'Master the DevOps lifecycle from Linux administration, CI/CD pipelines, containerization, orchestration, cloud infrastructure, to monitoring and SRE practices.',
    domain: 'DevOps',
    icon: '🔄',
    sections: [
      {
        title: 'Linux & Scripting',
        order: 1,
        topics: [
          {
            title: 'Linux System Administration',
            difficulty: 'beginner',
            estimatedMinutes: 90,
            subtopics: [
              { title: 'File System, Permissions & Ownership' },
              { title: 'Process Management & Systemd' },
              { title: 'Package Managers (apt, yum, dnf)' },
            ],
          },
          {
            title: 'Shell Scripting & Automation',
            difficulty: 'intermediate',
            estimatedMinutes: 75,
            subtopics: [
              { title: 'Bash Variables, Loops & Functions' },
              { title: 'Cron Jobs & Task Scheduling' },
              { title: 'Text Processing (grep, awk, sed)' },
            ],
          },
          {
            title: 'Networking for DevOps',
            difficulty: 'beginner',
            estimatedMinutes: 60,
            subtopics: [
              { title: 'DNS, DHCP & IP Addressing' },
              { title: 'SSH, SCP & Port Forwarding' },
              { title: 'Firewalls (iptables, ufw) & Security Groups' },
            ],
          },
        ],
      },
      {
        title: 'Version Control & CI/CD',
        order: 2,
        topics: [
          {
            title: 'Git for DevOps',
            difficulty: 'beginner',
            estimatedMinutes: 60,
            subtopics: [
              { title: 'Branching Strategies (GitFlow, Trunk-based)' },
              { title: 'Merge Conflicts & Rebasing' },
              { title: 'Git Hooks & Automation' },
            ],
          },
          {
            title: 'CI/CD Pipeline Design',
            difficulty: 'intermediate',
            estimatedMinutes: 90,
            subtopics: [
              { title: 'GitHub Actions Workflows' },
              { title: 'Jenkins Pipeline as Code' },
              { title: 'GitLab CI/CD & ArgoCD' },
            ],
          },
          {
            title: 'Artifact Management & Testing',
            difficulty: 'intermediate',
            estimatedMinutes: 60,
            subtopics: [
              { title: 'Docker Registry & Nexus/JFrog' },
              { title: 'Automated Testing in Pipelines' },
              { title: 'Blue-Green & Canary Deployments' },
            ],
          },
        ],
      },
      {
        title: 'Containerization',
        order: 3,
        topics: [
          {
            title: 'Docker Fundamentals',
            difficulty: 'beginner',
            estimatedMinutes: 90,
            subtopics: [
              { title: 'Images, Containers & Registries' },
              { title: 'Dockerfile Best Practices' },
              { title: 'Docker Volumes & Networking' },
            ],
          },
          {
            title: 'Docker Compose & Multi-Container',
            difficulty: 'intermediate',
            estimatedMinutes: 60,
            subtopics: [
              { title: 'Compose File Structure & Services' },
              { title: 'Environment Variables & Secrets' },
              { title: 'Development vs Production Compose' },
            ],
          },
          {
            title: 'Container Security',
            difficulty: 'advanced',
            estimatedMinutes: 60,
            subtopics: [
              { title: 'Image Scanning (Trivy, Snyk)' },
              { title: 'Rootless Containers & Minimal Images' },
              { title: 'Container Runtime Security' },
            ],
          },
        ],
      },
      {
        title: 'Container Orchestration',
        order: 4,
        topics: [
          {
            title: 'Kubernetes Core Concepts',
            difficulty: 'intermediate',
            estimatedMinutes: 120,
            subtopics: [
              { title: 'Pods, Deployments & ReplicaSets' },
              { title: 'Services, Ingress & Load Balancing' },
              { title: 'ConfigMaps & Secrets' },
            ],
          },
          {
            title: 'Kubernetes Advanced',
            difficulty: 'advanced',
            estimatedMinutes: 90,
            subtopics: [
              { title: 'StatefulSets & DaemonSets' },
              { title: 'Helm Charts & Package Management' },
              { title: 'RBAC & Network Policies' },
            ],
          },
          {
            title: 'Service Mesh & GitOps',
            difficulty: 'advanced',
            estimatedMinutes: 75,
            subtopics: [
              { title: 'Istio Service Mesh Architecture' },
              { title: 'ArgoCD & Flux for GitOps' },
              { title: 'Kubernetes Operators' },
            ],
          },
        ],
      },
      {
        title: 'Cloud & Infrastructure as Code',
        order: 5,
        topics: [
          {
            title: 'AWS/Cloud Core Services',
            difficulty: 'intermediate',
            estimatedMinutes: 90,
            subtopics: [
              { title: 'EC2, S3, VPC & IAM' },
              { title: 'RDS, Lambda & API Gateway' },
              { title: 'CloudFormation & Resource Management' },
            ],
          },
          {
            title: 'Terraform & IaC',
            difficulty: 'intermediate',
            estimatedMinutes: 90,
            subtopics: [
              { title: 'HCL Syntax & Providers' },
              { title: 'State Management & Remote Backends' },
              { title: 'Modules & Workspaces' },
            ],
          },
          {
            title: 'Ansible & Configuration Management',
            difficulty: 'intermediate',
            estimatedMinutes: 60,
            subtopics: [
              { title: 'Playbooks & Roles' },
              { title: 'Inventory Management' },
              { title: 'Ansible Galaxy & Collections' },
            ],
          },
        ],
      },
      {
        title: 'Monitoring & SRE',
        order: 6,
        topics: [
          {
            title: 'Monitoring & Observability Stack',
            difficulty: 'intermediate',
            estimatedMinutes: 90,
            subtopics: [
              { title: 'Prometheus Metrics & PromQL' },
              { title: 'Grafana Dashboards & Alerting' },
              { title: 'ELK/EFK Stack for Log Management' },
            ],
          },
          {
            title: 'SRE Principles & Practices',
            difficulty: 'advanced',
            estimatedMinutes: 75,
            subtopics: [
              { title: 'SLIs, SLOs & Error Budgets' },
              { title: 'Incident Management & Postmortems' },
              { title: 'Chaos Engineering (Chaos Monkey)' },
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
