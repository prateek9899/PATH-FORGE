const mongoose = require('mongoose');
const Fundamental = require('../models/Fundamental');

const fundamentalsData = [
  {
    moduleName: "Operating Systems",
    slug: "operating-systems",
    icon: "💻",
    chapters: [
      { 
        title: "01 introduction", 
        readTime: 12, 
        content: "# Chapter 1: Introduction to Operating Systems\n\nAn **Operating System (OS)** is the most essential software that runs on a computer. It manages the computer's memory and processes, as well as all of its hardware and software.\n\n### 🏗️ OS Architecture Deep Dive\n\n![OS Architecture HD Overview](/diagrams/os_architecture.png)\n\n#### 🌟 Core Responsibilities:\n1. **Process Management**: Creating, scheduling, and deleting processes.\n2. **Memory Management**: Allocation and de-allocation of memory space.\n3. **File System Management**: Managing storage hierarchy.\n4. **Device Management**: Handling peripheral drivers.\n5. **Security**: Privileged access control." 
      },
      { 
        title: "02 kernels & system calls", 
        readTime: 15, 
        content: "# Chapter 2: The Kernel and System Calls\n\nThe **Kernel** is the central component of an OS that manages hardware and software interactions. It remains in memory throughout the session.\n\n### 🛡️ Dual-Mode Operation:\n- **User Mode**: Restricted access for standard apps.\n- **Kernel Mode**: Privileged access for OS services.\n\n### 📞 System Calls:\nActs as an API between the app and the kernel. Examples: `fork()`, `exec()`, `wait()`, `read()`, `write()`. When an app needs a resource, it triggers a **Trap** to the kernel." 
      },
      { 
        title: "03 process management", 
        readTime: 18, 
        content: "# Chapter 3: Process Management\n\n### 🔄 Process States & Lifecycle\n\n![Process Lifecycle Diagram](/diagrams/process_scheduling.png)\n\n#### 📑 Process Control Block (PCB):\nA data structure containing:\n- **Process ID (PID)**\n- **Program Counter (PC)**\n- **Registers**\n- **Memory information**\n- **List of open files**" 
      },
      { 
        title: "04 cpu scheduling", 
        readTime: 20, 
        content: "# Chapter 4: CPU Scheduling Algorithms\n\nScheduling is the basis of **Multi-programming**. The goal is to maximize throughput and minimize response time.\n\n### 🏎️ Algorithms:\n- **Preemptive**: Can interrupt a running process.\n- **Non-Preemptive**: Process runs until completion or wait.\n\n#### ⚖️ Starvation vs Aging:\nStarvation happens when low-priority jobs never get the CPU. **Aging** is the technique of gradually increasing priority over time." 
      },
      { 
        title: "05 memory management", 
        readTime: 22, 
        content: "# Chapter 5: Advanced Memory Management\n\n### 🧠 Virtual Memory & Paging\nBreaking physical memory into fixed blocks (Frames) and logical memory into blocks (Pages).\n\n#### 🌵 Internal vs External Fragmentation:\n- **External**: Total memory space exists but is not contiguous.\n- **Internal**: Memory block assigned to a process is larger than requested." 
      },
      { 
        title: "06 synchronization", 
        readTime: 15, 
        content: "# Chapter 6: Concurrency & Synchronization\n\n### 🏮 Race Conditions:\nWhen multiple threads access shared data and the result depends on order of execution.\n\n#### 🔑 Critical Section Problem:\nOnly one thread can access the shared resource at a time. Solutions like **Semaphores** and **Mutex** are industry standards." 
      },
      { 
        title: "07 deadlocks", 
        readTime: 15, 
        content: "# Chapter 7: Deadlocks\n\n### 🚫 The 4 Coffman Conditions:\n1. **Mutual Exclusion**\n2. **Hold and Wait**\n3. **No Preemption**\n4. **Circular Wait**\n\nPrevention is possible by breaking any one of these conditions." 
      },
      { 
        title: "08 file systems", 
        readTime: 12, 
        content: "# Chapter 8: File Systems and I/O\n\nManaging data on disk via **Inodes** (Index Nodes) and directory structures. RAID levels (0, 1, 5, 10) provide data redundancy and speed." 
      }
    ]
  },
  {
    moduleName: "DBMS",
    slug: "dbms",
    icon: "🗄️",
    chapters: [
      { 
        title: "01 architecture", 
        readTime: 15, 
        content: "# Chapter 1: DBMS Architecture\n\n![DBMS 3-Schema Architecture](/diagrams/db_normalization.png)\n\n### 💠 ACID Properties:\n- **Atomicity**: All or nothing.\n- **Consistency**: State integrity.\n- **Isolation**: No interference.\n- **Durability**: Persistent commits." 
      },
      { 
        title: "02 data models", 
        readTime: 12, 
        content: "# Chapter 2: Data Models (Relational, NoSQL)\n\nRelational models use tables (Relations), while NoSQL (MongoDB) uses documents. Primary and Foreign keys maintain integrity." 
      },
      { 
        title: "03 normalization", 
        readTime: 25, 
        content: "# Chapter 3: Mastering Normalization\n\n### 📈 Transitioning to BCNF\n\n![Normalization Strategy](/diagrams/db_normalization.png)\n\n1. **1NF**: Atomic values.\n2. **2NF**: No partial dependencies.\n3. **3NF**: No transitive dependencies.\n4. **BCNF**: Strong 3NF." 
      },
      { 
        title: "04 indexing & b-trees", 
        readTime: 18, 
        content: "# Chapter 4: Indexing & B-Trees\n\nIndexes speed up selection at the cost of slower insertions. **B-Trees** and **B+ Trees** are the underlying balanced-search trees used by most SQL engines." 
      },
      { 
        title: "05 transactions", 
        readTime: 15, 
        content: "# Chapter 5: Transaction Management\n\nHandling concurrent updates using **Two-Phase Locking (2PL)** and timestamp-based protocols to avoid inconsistencies." 
      }
    ]
  },
  {
    moduleName: "Networks",
    slug: "networks",
    icon: "🌐",
    chapters: [
      { 
        title: "01 layered models", 
        readTime: 15, 
        content: "# Chapter 1: OSI vs TCP/IP Models\n\n![OSI 7-Layer HD Diagram](/diagrams/osi_model.png)\n\n1. Physical\n2. Data Link\n3. Network\n4. Transport\n5. Session\n6. Presentation\n7. Application" 
      },
      { 
        title: "02 transport layer", 
        readTime: 18, 
        content: "# Chapter 2: Transport Layer (TCP/UDP)\n\n- **TCP**: Reliability, Flow control, Error recovery. Uses **3-way Handshake**.\n- **UDP**: Speed, Low overhead, No guarantees. Used for DNS/Streaming." 
      },
      { 
        title: "03 network layer", 
        readTime: 15, 
        content: "# Chapter 3: IP Addressing & Routing\n\nIPv4 (32-bit) vs IPv6 (128-bit). **Routing Protocols**: OSPF (Link State) vs BGP (Path Vector)." 
      },
      { 
        title: "04 application protocols", 
        readTime: 12, 
        content: "# Chapter 4: HTTP, DNS, and Security\n\nHTTP (Stateless), DNS (Address lookup), and **HTTPS** (Encryption via SSL/TLS)." 
      }
    ]
  },
  {
    moduleName: "OOPs",
    slug: "oops",
    icon: "🧱",
    chapters: [
      { 
        title: "01 introduction", 
        readTime: 10, 
        content: "# Chapter 1: Intro to OOPs Paradigm\n\nThinking in Objects. Why OOPs? Modularity, Reusability, and Organization." 
      },
      { 
        title: "02 the four pillars", 
        readTime: 25, 
        content: "# Chapter 2: The 4 Pillars of OOPs\n\n![OOP Pillars HD Visualization](/diagrams/oops_pillars.png)\n\n1. **Encapsulation**\n2. **Abstraction**\n3. **Inheritance**\n4. **Polymorphism**" 
      },
      { 
        title: "03 constructors & this", 
        readTime: 12, 
        content: "# Chapter 3: Constructors & 'this' keyword\n\nConstructors initialize objects. The `this` keyword resolves ambiguity between fields and parameters." 
      },
      { 
        title: "04 inheritance types", 
        readTime: 15, 
        content: "# Chapter 4: Inheritance & Interface\n\nSingle, Multiple (via Interfaces), Multilevel, and Hierarchical inheritance. Diamond problem in Java (resolved by interfaces)." 
      }
    ]
  },
  {
    moduleName: "SQL",
    slug: "sql",
    icon: "📊",
    chapters: [
      { 
        title: "01 basics", 
        readTime: 10, 
        content: "# Chapter 1: SQL Commands & Types\n\nDDL (CREATE), DML (UPDATE), DQL (SELECT), DCL (GRANT), TCL (COMMIT)." 
      },
      { 
        title: "02 mastery of joins", 
        readTime: 20, 
        content: "# Chapter 2: Mastering SQL Joins\n\n![SQL Joins HD Diagram](/diagrams/sql_joins.png)\n\nVisualizing Inner, Left, Right, and Full Joins." 
      },
      { 
        title: "03 group by & aggregations", 
        readTime: 15, 
        content: "# Chapter 3: Grouping & Aggregates\n\nUsing `COUNT`, `SUM`, `AVG` with `GROUP BY` and `HAVING` filters." 
      },
      { 
        title: "04 performance tuning", 
        readTime: 20, 
        content: "# Chapter 4: Query Optimization\n\nUsing Indexes, avoiding Wildcards at start, and analyzing Execution Plans." 
      }
    ]
  }
];

const seedFundamentals = async () => {
  await Fundamental.deleteMany({});
  await Fundamental.insertMany(fundamentalsData);
  console.log('✅ Seeded Fundamentals');
};

module.exports = seedFundamentals;
