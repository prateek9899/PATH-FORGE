module.exports = {
  // ============================================================
  // DSA Mastery Topics
  // ============================================================
  "Array Basics": {
    youtubeLink: "https://www.youtube.com/watch?v=RBSGKlAvoiM",
    notes: "### 🧊 Array Foundations & Memory Management\n\nArrays are the most fundamental data structure. They store elements in a **contiguous block of memory**, allowing for **O(1) random access**. In low-level languages like C++, arrays are simple pointers to the first element.\n\n#### 🏗️ Memory Layout Diagram:\n\nIndex:   0    1    2    3    4\n       +---+---+---+---+---+\nData:  [10]|[20]|[30]|[40]|[50]\n       +---+---+---+---+---+\nAddr:  100  104  108  112  116  (assuming 4 bytes per int)\n\n#### 🚀 Performance Analysis:\n- **Access/Search by Index**: O(1)\n- **Search by Value**: O(N) linear scan\n- **Insertion/Deletion at Start**: O(N) due to shifting\n- **Insertion/Deletion at End**: O(1) amortized\n\n#### 💡 Master Interview Patterns:\n1. **Prefix Sums**: Precompute `P[i] = P[i-1] + Array[i]`. This allows you to answer any range sum question `Sum(i, j)` in exactly O(1) time.\n2. **Dutch National Flag**: Used for sorting arrays containing 0s, 1s, and 2s in a single pass (O(N)) using three pointers.\n3. **Kadane's Algorithm**: The most efficient way to find the Maximum Subarray Sum in O(N). It works by discarding negative prefix sums."
  },
  "Two Pointer Technique": {
    youtubeLink: "https://www.youtube.com/watch?v=-gjxg6Pln50",
    notes: "### ✌️ The Two Pointer Technique Optimization\n\nThis optimization reduces **O(N²) quadratic nested loops** into **O(N) linear scans** by leveraging physical properties of the array (like sorted order) or logical constraints.\n\n#### 🛠️ Common Variants & Implementation:\n\n1. **Opposite Ends**: Used frequently in sorted arrays (e.g., 2Sum Sorted, Container with Most Water). \n   `[L] ---->          <---- [R]`\n\n2. **Slow/Fast (Floyd's Algorithm)**: Used to detect cycles in linked lists or find the middle element. The fast pointer moves at 2x speed.\n   `[Slow] -->` \n   `[Fast] ------>` \n\n#### 🎯 Interview Winning Strategies:\n- **Valid Palindrome**: Use two pointers to compare characters from both ends.\n- **Three Sum**: Fix one element and use Two Pointers for the remaining two. This brings the complexity down from O(N³) to **O(N²)**.\n- **Remove Duplicates**: Maintain a 'write index' and a 'read index' to modify the array in-place in O(N)."
  },
  "Sliding Window": {
    youtubeLink: "https://www.youtube.com/watch?v=MK-NZ4hN7rs",
    notes: "### 🪟 Sliding Window Optimization Architecture\n\nThe Sliding Window is used primarily for problems involving **contiguous subarrays or substrings**. It prevents re-calculating overlapping segments, saving immense time.\n\n#### 📐 Window Dynamics Diagram:\n\nInitial Window [Size 3]:\n`[ 10, 20, 30 ], 40, 50, 60`\n   `^      ^`\n   `L      R`\n\nShifted Window:\n`10, [ 20, 30, 40 ], 50, 60` \n      `^      ^` \n      `L      R` \n\n#### 🧠 The 'Must-Know' Templates:\n- **Fixed Window**: The distance between L and R is constant. Use this for 'Maximum sum of a subarray of size K'. \n- **Variable Window (Dynamic)**: Expand R to satisfy a condition, then shrink L to minimize the window. Crucial for 'Smallest Subarray with Sum >= S'.\n- **String Problems**: Use a Frequency Map (hashmap or `int[26]`) inside the window to track characters for 'Longest Substring without Repeating Characters'."
  },
  "String Manipulation": {
    youtubeLink: "https://www.youtube.com/watch?v=WWOwB4WcZkk",
    notes: "### 🧵 Advanced String Algorithms\n\nStrings are effectively arrays of characters, but they have unique properties like **Immutability** in Java/Python. This means every concatenation (`str += 'a'`) creates a new object in O(N) time.\n\n#### 🚀 High-Level Techniques:\n- **Rabin-Karp (Rolling Hash)**: Map strings to integers. This allows constant-time string comparison on average. Used in plagiarism detection.\n- **KMP (Knuth-Morris-Pratt)**: Avoids redundant comparisons by precomputing a 'Partial Match' table. Time complexity: **O(N+M)**.\n- **Manacher's Algorithm**: Finds the longest palindromic substring in O(N) time—a legendary interview topic.\n\n#### ⚠️ Interview Pitfall:\nNever build a string using `+` in a loop. Use a **StringBuilder** or a list of characters/strings in Python to ensure your algorithm stays O(N) instead of becoming O(N²)."
  },
  "Singly Linked List": {
    youtubeLink: "https://www.youtube.com/watch?v=njTh_OwMCEs",
    notes: "### 🔗 Singly Linked List Deep Dive\n\nA sequential data structure where each node stores **Data** and a **Next Pointer**. Unlike arrays, memory is not contiguous, meaning no O(1) random access.\n\n#### 🏗️ Structure Diagram:\n`Head -> [Data|Next] -> [Data|Next] -> [Data|Next] -> NULL` \n\n#### ⚡ Complexity Comparison:\n- **Access/Search**: O(N) - Must traverse from the head.\n- **Insertion at Start**: O(1) - Just point new node to head.\n- **Insertion at Middle**: O(N) - Time is spent finding the location.\n\n#### 🏆 Common Interview Hacks:\n1. **Reverse Linked List**: Accomplished using three pointers (`prev`, `curr`, `next`) in O(N) time and O(1) space.\n2. **Interception Point**: Find where two lists meet using two pointers and length logic.\n3. **Dummy Node Pattern**: Use a fake 'pre-head' node to handle edge cases easily, such as removing the head node."
  },
  "Doubly Linked List": {
    youtubeLink: "https://www.youtube.com/watch?v=JdQeNxWCguQ",
    notes: "### 🔗🔗 Doubly Linked List (DLL) Mechanics\n\nIn a DLL, each node contains a **Next** pointer and a **Previous** pointer. This allows for bidirectional traversal at the cost of O(N) extra memory for pointers.\n\n#### 🌟 Real-World Application: LRU Cache\nAn **LRU (Least Recently Used) Cache** is implemented using a **Hashmap** + a **Doubly Linked List**. \n- The Hashmap provides O(1) lookup.\n- The DLL provides O(1) insertion and O(1) deletion of the least recently used item (the tail).\n\n#### 💡 Mastery Tip:\nWhen deleting a node `X` in a DLL, you can do it in O(1) if you have a reference to the node, because you can access `X.prev` and `X.next` directly."
  },
  "Stack Fundamentals": {
    youtubeLink: "https://www.youtube.com/watch?v=I37kGX-nZEI",
    notes: "### 📚 Stack Mastery (LIFO: Last-In, First-Out)\n\nStacks are crucial for recursion, expression parsing, and backtracking. Imagine a stack of plates—you always take the top one first.\n\n#### 🔥 Critical Interview Patterns:\n- **Balanced Brackets**: Push opening brackets, and check if the popped element matches closing brackets. Used in compilers.\n- **Expression Parsing**: Converting Infix to Postfix/Prefix notation using the Shunting Yard algorithm.\n- **Monotonic Stack**: A stack that keeps elements in increasing or decreasing order. Essential for 'Next Greater Element' or 'Daily Temperatures' problems.\n\n#### 🧠 System Detail:\nYour programs use a **System Stack** to store local variables and return addresses during function calls. **Stack Overflow** occurs when the recursion depth exceeds this memory."
  },
  "Queue & Deque": {
    youtubeLink: "https://www.youtube.com/watch?v=qT_R0H8N5tA",
    notes: "### 🚶‍♂️ Queue & Deque (FIFO: First-In, First-Out)\n\nA Queue is like a line at a grocery store. A **Deque** (Double-Ended Queue) allows insertion and deletion from both ends.\n\n#### 🛠️ Essential Use Cases:\n- **BFS (Breadth-First Search)**: Uses a Queue to traverse graphs level carbon-copy level.\n- **Circular Queue**: Implemented using an array and `%` operator to reuse space efficiently.\n- **Priority Queue**: Elements are dequeued based on priority rather than arrival time. Implemented using a **Heap**.\n\n#### ⚡ Sliding Window Maximum:\nUsing a Deque, you can find the maximum element in every window of size K in **O(N)** time, which is much faster than the O(N*K) naive approach."
  },
  "Binary Tree Traversals": {
    youtubeLink: "https://www.youtube.com/watch?v=jmy0YaPjcX8",
    notes: "### 🌳 Binary Tree Exploration (DFS vs BFS)\n\nTrees are non-linear data structures. Traversing them means visiting every node once in a specific logical order.\n\n#### 🌲 DFS Variants (Stack or Recursion):\n- **In-Order (Left, Root, Right)**: If the tree is a BST, this gives nodes in ascending order.\n- **Pre-Order (Root, Left, Right)**: Used for serializing or cloning a tree.\n- **Post-Order (Left, Right, Root)**: Used for bottom-up tasks like calculating tree height or deleting the tree.\n\n#### 📏 BFS (Level-Order):\nUses a **Queue**. It visits all nodes at depth `d` before moving to `d+1`. It is the optimal way to find the shortest distance in an unweighted tree/graph."
  },
  "Binary Search Tree": {
    youtubeLink: "https://www.youtube.com/watch?v=pYT9F8_LFTM",
    notes: "### 🔢 Binary Search Tree (BST) Architecture\n\nA specialized binary tree where for every node: `Left Child < Node < Right Child`. This property makes it incredibly efficient for search operations.\n\n#### ⚡ Performance:\n- **Average Case**: O(log N) for Search, Insert, and Delete.\n- **Worst Case**: O(N) if the tree becomes a linked list (skewed tree).\n\n#### 🏆 Interview Question: Validate BST\nA common trap is only checking children. You must ensure all nodes in the left subtree are smaller than the root, and all in the right are larger. Use range-based recursion: `(min, max)`."
  },
  "Advanced Trees": {
    youtubeLink: "https://www.youtube.com/watch?v=vOQIVnukszY",
    notes: "### 🔝 Advanced Tree Structures\n\n1. **AVL & Red-Black Trees**: Self-balancing BSTs that maintain O(log N) height by performing **Rotations** during insertion.\n2. **Trie (Prefix Tree)**: Used for high-speed string retrieval, like autocomplete and spell checkers. Each node stores a character.\n3. **Segment Trees**: Used for range queries (Sum, Min, Max) in O(log N). Very common in competitive programming.\n4. **Fenwick Tree (Binary Indexed Tree)**: Similar to segment trees but more space-efficient for range sums."
  },
  "Graph Representation & BFS/DFS": {
    youtubeLink: "https://www.youtube.com/watch?v=tWVWeAqZ0WU",
    notes: "### 🕸️ Graph Theory & Navigation\n\nGraphs consist of **Vertices (Nodes)** and **Edges (Connections)**. They can be Directed, Undirected, Weighted, or Unweighted.\n\n#### 🏗️ Storage Methods:\n- **Adjacency Matrix**: `2D int[V][V]`. Use for dense graphs. O(1) edge check.\n- **Adjacency List**: `List<List<Integer>>`. Use for sparse graphs. O(V+E) space.\n\n#### 🚀 Navigation Algorithms:\n- **DFS (Stack)**: Goes as deep as possible before backtracking. Best for path finding or Cycle Detection (using recursion stack).\n- **BFS (Queue)**: Explores layer by layer. Guarantees the shortest path in an unweighted graph."
  },
  "Shortest Path Algorithms": {
    youtubeLink: "https://www.youtube.com/watch?v=pVfj6mxhdMw",
    notes: "### 🛣️ Shortest Path Optimization\n\n1. **Dijkstra's Algorithm**: Greedy approach using a **Priority Queue**. Finds shortest path from source to all nodes. Constraint: No negative weights. Time: **O(E log V)**.\n2. **Bellman-Ford**: Slower than Dijkstra but handles negative weights and can detect **Negative Cycles**. Time: **O(V * E)**.\n3. **Floyd-Warshall**: Uses Dynamic Programming to find all-pairs shortest paths across the whole graph. Time: **O(V³)**."
  },
  "Topological Sort & Advanced": {
    youtubeLink: "https://www.youtube.com/watch?v=eL-KzMXSXXI",
    notes: "### 📐 Advanced Graph Patterns\n\n- **Topological Sort**: Linear ordering of vertices such that for every edge `UV`, U comes before V. Only possible in Directed Acyclic Graphs (DAGs). Used for task scheduling.\n- **Kruskal's Algorithm**: Finds the Minimum Spanning Tree (MST) by sorting edges and using **Union-Find** to avoid cycles.\n- **Prim's Algorithm**: Also finds MST but grows the tree from a source using a priority queue.\n- **Tarjan's/Kosaraju's**: Algorithms to find Strongly Connected Components in a directed graph."
  },
  "DP Foundations": {
    youtubeLink: "https://www.youtube.com/watch?v=oBt53YbR9Kk",
    notes: "### 📐 Dynamic Programming (DP) Strategy\n\nDP is simply **Recursion + Memoization**. It is used to solve problems that can be broken down into **Overlapping Subproblems** with **Optimal Substructure**.\n\n#### 🏗️ The Golden Steps to Solve DP:\n1. **State Definition**: What does `dp[i]` represent? (e.g., Min coins for amount `i`).\n2. **Transition**: How do I get `dp[i]` from previous states? \n3. **Base Case**: The simplest possible version (e.g., `dp[0] = 0`).\n\n#### 📦 Memoization vs Tabulation:\n- **Top-Down (Memoization)**: Use recursion and store results in a map/array.\n- **Bottom-Up (Tabulation)**: Solve smaller subproblems first using loops and fill an array."
  },
  "Classic DP Problems": {
    youtubeLink: "https://www.youtube.com/watch?v=mOUcsXgCE9Y",
    notes: "### 🎒 Classic DP Interview Samples\n\n1. **0/1 Knapsack**: Pick items to maximize value without exceeding weight. For each item, decide: To pick or not to pick?\n2. **LCS (Longest Common Subsequence)**: Find the longest shared sequence between two strings (e.g., Used in Diff tools).\n3. **LIS (Longest Increasing Subsequence)**: O(N²) with DP or O(N log N) with Binary Search.\n4. **Coin Change**: Find minimum coins to reach a target. Classic usage of 'Pick/Don't Pick'."
  },
  "DP on Grids & Strings": {
    youtubeLink: "https://www.youtube.com/watch?v=t_f0nwwdg5o",
    notes: "### 🗺️ 2D DP: Grids and Strings\n\nThese problems use a `dp[i][j]` table where `i` and `j` represent dimensions of a matrix or indices of two strings.\n\n#### 🛠️ Master Patterns:\n- **Unique Paths**: In an M x N grid, `ways[i][j] = ways[i-1][j] + ways[i][j-1]`.\n- **Edit Distance (Levenshtein)**: Min operations (Insert, Delete, Replace) to transform string S1 to S2.\n- **Palindromic Substrings**: Use DP to track if a substring from `i` to `j` is a palindrome in O(N²) time."
  },

  // ============================================================
  // MERN Stack Topics
  // ============================================================
  "ES6+ Features": {
    youtubeLink: "https://www.youtube.com/watch?v=NCwa_xi0Uuc",
    notes: "### 🚀 Modern JavaScript (ES6+) Mastery\n\nES6 (ECMAScript 2015) transformed JavaScript from a simple scripting language into a robust application engine. Mastering these features is non-negotiable for high-performance React development.\n\n#### 🏹 Arrow Functions & Lexical 'this':\nArrow functions do not have their own `this` binding. They inherit it from the parent scope, effectively bypassing the classic `.bind(this)` boilerplate required in class-based components. This ensures that event handlers always have access to the component state.\n\n#### 📦 Destructuring & Spread/Rest Architecture:\n- **Destructuring**: `const { name, age } = user;` provides a declarative way to extract data, reducing visual noise.\n- **Spread (`...`)**: Creates 'shallow copies' of objects/arrays. Crucial for **Immutability**—React's core principle for state updates.\n- **Rest (`...args`)**: Collects arbitrary arguments into a single array, simplifying function signatures.\n\n#### 💎 Promises & Async/Await:\nJavaScript's event loop is single-threaded but non-blocking. Promises represent eventual completion, while `async/await` provides a clean, synchronous-looking syntax for handling complex asynchronous flows (like chain API calls) using `try/catch` blocks."
  },
  "DOM Manipulation & Events": {
    youtubeLink: "https://www.youtube.com/watch?v=y17RuWUpcG8",
    notes: "### 🕸️ The Document Object Model (DOM) & Event Systems\n\nThe DOM is a tree-based representation of HTML. While modern frameworks like React abstract this away via a **Virtual DOM**, understanding the raw DOM is essential for optimizing performance and building complex custom components.\n\n#### ⚡ Event Bubbling vs Capturing (The Propogation Chain):\n- **Bubbling**: Events start at the target and 'bubble' up to the `window`. This is the standard behavior.\n- **Capturing**: Events start at the `window` and travel down to the target.\n- **Event Delegation**: Instead of attaching listeners to 100 list items (memory intensive), attach **one** listener to the parent. This leverage Bubbling to handle clicks on all children, even those added dynamically later.\n\n#### 🏗️ Essential DOM API:\n- `querySelector / querySelectorAll`: The modern, CSS-based standard for element selection.\n- `classList`: A powerful API for managing styling tokens without error-prone string concatenation."
  },
  "Node.js Basics": {
    youtubeLink: "https://www.youtube.com/watch?v=TlB_eWDSMt4",
    notes: "### 🟢 Node.js Runtime & Performance Architecture\n\nNode.js is a runtime environment that allows JavaScript to run on servers using Chrome's **V8 engine**. It is designed for high-concurrency, data-intensive real-time applications.\n\n#### ⚙️ The Event Loop: How Node.js Scale?\nNode.js uses a single main thread to iterate through 5 key phases:\n1. **Timers**: Executes `setTimeout` and `setInterval` callbacks.\n2. **Pending Callbacks**: OS-level I/O errors.\n3. **Poll**: The heart of the loop; accepts new connections and executes scripts.\n4. **Check**: Executes `setImmediate` (specifically for the end of the Current cycle).\n5. **Close**: Handles `socket.on('close')` events.\n\n#### 🧠 The Role of Libuv:\nNode.js is NOT truly single-threaded. **Libuv** is a C++ library that manages a system-level **Thread Pool** for heavy tasks like File I/O, Cryptography, and DNS lookups, keeping the main JS thread free for application logic."
  },
  "Express.js Framework": {
    youtubeLink: "https://www.youtube.com/watch?v=SccSCuHhOw0",
    notes: "### 🚂 Express.js: Sophisticated Middleware Orchestration\n\nExpress is an un-opinionated, minimalist framework that transforms Node.js into a powerful web server using the **Middleware Pattern**.\n\n#### 🛠️ Middleware Lifecycle:\nEvery HTTP request moves through an array of functions: `(req, res, next) => { ... }`. \n- **Application-Wide**: Runs on every request (e.g., `morgan` for logging, `helmet` for security).\n- **Error Handlers**: Specialized middleware with 4 arguments `(err, req, res, next)` to centralize exception management.\n\n#### 🚀 Advanced API Optimization:\n- **Compression**: Use the `compression` middleware to gzip responses, reducing bandwidth usage by up to 70%.\n- **Rate Limiting**: Protect your server from DDoS attacks using `express-rate-limit` to restrict the number of requests per IP."
  },
  "Authentication & Security": {
    youtubeLink: "https://www.youtube.com/watch?v=mbsmsi7l3r4",
    notes: "### 🔐 Industrial-Grade Auth & Security Patterns\n\n#### 🎟️ JWT (JSON Web Tokens) Anatomy:\nJWT is the gold standard for stateless authentication in MERN apps. \n- **Header**: Contains the hashing algorithm (e.g., HS256).\n- **Payload**: Contains claims like `userId`, `roles`, and `exp` (expiration).\n- **Signature**: Prevents tampering. Verified by a server-side secret key.\n\n#### 🛡️ The Security 'Big Three':\n1. **Password Hashing**: Use **Bcrypt** with salt rounds (typically 12) to ensure even if the DB is leaked, passwords cannot be reversed.\n2. **XSS Protection**: Secure your cookies with `httpOnly` and `sameSite` flags to prevent JavaScript-based theft.\n3. **CORS (Cross-Origin Resource Sharing)**: Strictly define which frontend origins can access your API to prevent unauthorized cross-site requests."
  },
  "MongoDB Fundamentals": {
    youtubeLink: "https://www.youtube.com/watch?v=ExcRbA7fy_A",
    notes: "### 🍃 MongoDB: Distributed Document Data Strategy\n\nMongoDB is a NoSQL database that stores data in **BSON** (Binary JSON) format. It excels in horizontal scaling through **Sharding** and high availability through **Replica Sets**.\n\n#### 📊 Aggregation Framework (The Powerhouse):\nA multi-stage pipeline for complex data processing. \n- `$match`: Filtering.\n- `$group`: Mathematical aggregation (sum, avg).\n- `$lookup`: Performing 'Virtual Joins' across collections.\n- `$project`: Renaming or removing fields for the final output.\n\n#### ⚡ Query Optimization:\nAvoid **COLSCAN** (Collection Scan) by creating **Targeted Indexes**. Compound indexes are essential when querying on multiple fields simultaneously (e.g., `user_id` + `status`)."
  },
  "Mongoose ODM": {
    youtubeLink: "https://www.youtube.com/watch?v=DZBGEVgL2eE",
    notes: "### 🐶 Mongoose: The Object Data Modeling Paradigm\n\nMongoose acts as a rigid schema layer on top of MongoDB's flexible nature, providing structure and developer-friendly abstractions.\n\n#### 🚀 Enterprise-Grade Features:\n- **Schema Hooks (Middleware)**: Automatically execute logic. Example: `.pre('save')` to update a `lastModified` timestamp or hash a password.\n- **Population**: Link documents between collections using `Ref`. It allows you to 'join' data at the application level while maintaining a scalable DB structure.\n- **Virtuals & Getters**: Define fields that aren't stored in the database but exist in your JS objects (e.g., `fullName` derived from `first` and `last`).\n- **Robust Validation**: Enforce business rules at the entry point of your database."
  },
  "React Basics": {
    youtubeLink: "https://www.youtube.com/watch?v=bMknfKXIFA8",
    notes: "### ⚛️ React.js Architecture & Virtual DOM\n\nReact is a declarative library for building user interfaces. It relies on a component-based model and a uni-directional data flow.\n\n#### 🧠 The Virtual DOM & Reconciliation:\nReact maintains a lightweight representation of the real DOM in memory. \n1. When state changes, a new Virtual DOM tree is generated.\n2. The **Diffing Algorithm** identifies the precise delta (changes) between the old and new trees.\n3. **Optimal Patching**: Only the necessary changes are applied to the real browser DOM, minimizing expensive layout recalculations.\n\n#### 🧩 Component Lifecycle & Props:\nComponents are independent, reusable units. **Props** are immutable configuration objects passed from parents to children, ensuring predictable UI rendering."
  },
  "React Hooks & State Management": {
    youtubeLink: "https://www.youtube.com/watch?v=LlvBzyy-558",
    notes: "### 🎣 Mastery of React Hooks (Functional Component Logic)\n\nHooks revolutionized React by allowing functional components to handle state and lifecycle events without Classes.\n\n#### 🛠️ Professional Hook Suite:\n- **useState**: Primitive state management.\n- **useEffect**: Master the **Dependency Array**. If empty `[]`, it runs once on mount. If populated `[id]`, it runs whenever `id` changes.\n- **useContext**: Solved the 'Prop Drilling' nightmare by making data globally available to a specific sub-tree.\n- **useMemo / useCallback**: Pure performance optimization. Prevents expensive recalculations or redundant child re-renders by caching values and function references.\n\n#### 🚨 Hook Integrity:\nAlways follow the **Rules of Hooks**: Only call them at the top level and only from React functions."
  },
  "React Router & Forms": {
    youtubeLink: "https://www.youtube.com/watch?v=SMHOcgGl1Zc",
    notes: "### 🛣️ Client-Side Routing & Enterprise Form Strategy\n\n#### 📍 React Router v6 Architecture:\nProvides dynamic, client-side navigation. Use `<Routes>` for routing tables and `useParams()` for extracting data from the URL (e.g., `/product/:id`). This keeps your app feeling like a desktop application.\n\n#### 📝 Controlled vs Uncontrolled Patterns:\n- **Controlled Elements**: React state is the 'Single Source of Truth'. Best for complex, interactive forms with real-time validation.\n- **Uncontrolled Elements (`useRef`)**: Direct access to the DOM. Faster for massive forms where state tracking is overkill.\n- **Form Libraries**: Use `Formik` or `React Hook Form` for industrial-grade validation and error handling without the boilerplate."
  },
  "Connecting Frontend to Backend": {
    youtubeLink: "https://www.youtube.com/watch?v=FZQxPANCbT8",
    notes: "### 🌉 Full-Stack Communication Strategy\n\n#### 📡 API Integration Patterns:\nUse **Axios** (interceptors are a plus!) or `fetch`. \n- **Loading & Error UX**: Never leave the user guessing. Implement Skeletons and specialized error boundaries.\n- **Environment Decoupling**: Use Interceptors or Vite proxies to point your frontend to the API in development without breaking production builds.\n\n#### 🖇️ CORS Policy Enforcement:\nCORS is a browser security feature. Ensure your backend uses the `cors` package to white-list your frontend domain, allowing secure cross-domain data exchange."
  },
  "Deployment": {
    youtubeLink: "https://www.youtube.com/watch?v=Hnd4eF4S05s",
    notes: "### 🌍 Full-Stack Deployment & CI/CD Pipelines\n\n#### 🏗️ The Build & Optimization Phase:\n`npm run build` executes multiple steps: transpilation (Babel), bundling (Rollup/Webpack), and asset minification. The result is a highly-optimized `dist` folder ready for the web.\n\n#### 🚀 Cloud Infrastructure:\n- **Global CDN**: Deploy static files to Vercel/Netlify for low-latency delivery.\n- **Scaling Servers**: Use Fly.io or Railway for the Node.js backend. They provide automatic SSL and zero-downtime deployments.\n- **Configuration Management**: Use `.env` files locally and 'Secrets' in CI/CD (GitHub Actions) to store API keys and DB credentials securely."
  },

  // ============================================================
  // Java Backend Topics
  // ============================================================
  "OOP Fundamentals": {
    youtubeLink: "https://www.youtube.com/watch?v=ncstFkYatvE",
    notes: "### 🧱 Advanced Object-Oriented Principles in Java\n\nJava is a strictly typed, object-oriented language. Mastery of the **4 Pillars** is the foundation of scalable backends.\n\n#### 🏛️ The 4 Pillars Deep Dive:\n1. **Encapsulation**: Using access modifiers (`private`, `protected`, `public`) to hide internal state and expose logic via a controlled interface. \n2. **Abstraction**: Using `Abstract Classes` (partial implementation) and `Interfaces` (contract only) to hide implementation complexity. \n3. **Inheritance**: Creating hierarchical structures. Java supports only **Single Inheritance** for classes but **Multiple Inheritance** through interfaces to avoid the Diamond Problem.\n4. **Polymorphism**: \n   - **Static**: Method Overloading (Compile-time).\n   - **Dynamic**: Method Overriding (Runtime) using the JVM's virtual machine dispatch."
  },
  "Collections Framework": {
    youtubeLink: "https://www.youtube.com/watch?v=viTHChS7_Jk",
    notes: "### 📚 Java Collections Framework (JCF) Architecture\n\nThe Collections framework provides a unified architecture for storing and manipulating groups of objects. Choosing the right data structure is critical for performance.\n\n#### 🏗️ The Hierarchy Overview:\n- **List Interface**: `ArrayList` (contiguous memory, O(1) access) vs `LinkedList` (bi-directional nodes, O(1) mid-list insert).\n- **Set Interface**: `HashSet` (Uses HashMap internally, O(1) lookup) vs `TreeSet` (Self-balancing tree, sorted order, O(log N)).\n- **Map Interface**: `HashMap` (Key-Value pairs, handles collisions via Linked Lists/Red-Black trees) vs `ConcurrentHashMap` (Thread-safe, avoids global locking).\n\n#### ⚡ Performance Tip:\nAlways initialize your `ArrayList` or `HashMap` with an **initial capacity** if you know the size, to avoid expensive internal resizing (copying memory)."
  },
  "Generics & Streams": {
    youtubeLink: "https://www.youtube.com/watch?v=qX32XoU_E_4",
    notes: "### 🌊 Functional Java: Generics & Streams API\n\n#### 📦 Generics (Type Safety):\nGenerics allow you to create classes, interfaces, and methods where the type is a parameter. This prevents `ClassCastException` at runtime and improves code reusability.\n\n#### 🚀 Streams API (Declarative Data Processing):\nIntroduced in Java 8, Streams allow you to process collections in a functional style.\n- **Intermediate Operations**: `filter`, `map`, `sorted` (lazy evaluation).\n- **Terminal Operations**: `collect`, `forEach`, `reduce` (triggers the stream).\n- **Parallel Streams**: Utilizes the Fork/Join pool to process data across multiple CPU cores automatically."
  },
  "Spring Boot Basics": {
    youtubeLink: "https://www.youtube.com/watch?v=vtPkZShrpr0",
    notes: "### 🍃 Spring Boot: Modern Enterprise Java\n\nSpring Boot simplifies Spring development by providing **Auto-configuration** and **Starter Dependencies**. It follows the 'Convention over Configuration' principle.\n\n#### 🏗️ Core Concepts:\n- **Inversion of Control (IoC)**: The framework controls the lifecycle of objects (Beans), not the developer.\n- **Dependency Injection (DI)**: Components receive their dependencies (via `@Autowired` or Constructor) rather than creating them. This makes code testable and decoupled.\n- **Bean Lifecycle**: `Init` -> `Ready` -> `Destroy`. Managed by the **Spring ApplicationContext**."
  },
  "REST API Development": {
    youtubeLink: "https://www.youtube.com/watch?v=uCjtGvO_qL4",
    notes: "### 📡 Building Robust RESTful Microservices\n\n#### 🛠️ Spring Web MVC:\nUse `@RestController` to build APIs. \n- **@GetMapping**: Retrieve resources.\n- **@PostMapping**: Create resources (Use `@RequestBody`).\n- **@PutMapping**: Update resources.\n- **@DeleteMapping**: Remove resources.\n\n#### 📐 Maturity Model (Richardson):\nAim for **Level 3 (HATEOAS)** where the API response provides links to related actions, making the API self-discoverable.\n- **Status Codes**: Always use correct codes: `201 Created`, `400 Bad Request`, `401 Unauthorized`, `500 Server Error`."
  },
  "Spring Security": {
    youtubeLink: "https://www.youtube.com/watch?v=caCJAJCxtS0",
    notes: "### 🛡️ Enterprise Security with Spring Security\n\nSpring Security is a powerful, highly customizable authentication and access-control framework.\n\n#### ⚙️ The Security Filter Chain:\nRequests pass through a series of filters (UsernamePasswordAuthenticationFilter, etc.) before reaching the controller. \n- **Authentication**: Verifying WHO you are (Username/Password, OAuth2, JWT).\n- **Authorization**: Verifying WHAT you can do (Roles: `ROLE_ADMIN`, `ROLE_USER`).\n- **CORS & CSRF**: Built-in protection against cross-site request forgery and origin-based access control."
  },
  "SQL & JDBC": {
    youtubeLink: "https://www.youtube.com/watch?v=275Of_c7N5o",
    notes: "### 🗄️ Java Database Connectivity (JDBC)\n\nJDBC is the low-level API that allows Java apps to interact with any database using SQL.\n\n#### 🚀 From Statement to PreparedStatement:\nAlways use `PreparedStatement`. It pre-compiles the SQL query and automatically escapes input parameters, being the #1 defense against **SQL Injection** attacks.\n\n#### 🏗️ Connection Pooling:\nCreating a DB connection is expensive. Use a **Connection Pool** (like HikariCP) to maintain a set of 'ready-to-use' connections, drastically improving performance."
  },
  "JPA & Hibernate": {
    youtubeLink: "https://www.youtube.com/watch?v=Z6Xun2sUoRA",
    notes: "### 🏎️ ORM Mastery with Hibernate & JPA\n\n**JPA (Java Persistence API)** is the specification, and **Hibernate** is the most popular implementation. It maps Java Objects to Database Tables.\n\n#### 🧠 Key Logic:\n- **Entity Lifecycle**: `Transient` -> `Managed` -> `Detached` -> `Removed`.\n- **Caching**: 1st Level Cache (Session-level) and 2nd Level Cache (App-wide) reduce DB hits.\n- **N+1 Problem**: A common performance trap where loading a parent with N children results in N+1 queries. Solve this using `JOIN FETCH` or `@EntityGraph`."
  },
  "Microservices Architecture": {
    youtubeLink: "https://www.youtube.com/watch?v=vVunMstzMvI",
    notes: "### 🕸️ Microservices Ecosystem with Spring Cloud\n\nMoving from Monolith to Microservices requires solving distributed system problems.\n\n#### 🛠️ Essential Patterns:\n- **Service Discovery (Eureka)**: A phonebook for your services.\n- **API Gateway (Spring Cloud Gateway)**: A single entry point that handles routing, auth, and rate limiting.\n- **Config Server**: Centralized configuration management across all services.\n- **Circuit Breaker (Resilience4j)**: Prevents a failure in one service from cascading and bringing down the entire system."
  },
  "Messaging & Async": {
    youtubeLink: "https://www.youtube.com/watch?v=t_f0nwwdg5o",
    notes: "### ✉️ Event-Driven Architecture (RabbitMQ & Kafka)\n\n#### 🚀 Why Messaging?\nDecouple services and handle high-volume traffic through asynchronous processing.\n- **RabbitMQ**: Traditional Message Broker. Great for complex routing and task queues.\n- **Apache Kafka**: Distributed Event Streaming platform. Perfect for logs, real-time analytics, and high-throughput events.\n\n#### 🧠 Pattern: The Outbox Pattern\nEnsure your Database update and Message publication happen in a single transaction (atomically) to prevent data inconsistency."
  },
  "Docker & Containers": {
    youtubeLink: "https://www.youtube.com/watch?v=gAkwW2tuS-w",
    notes: "### 🐳 Containerization & Cloud-Native Development\n\nDocker allows you to 'package' your Java app with its JRE, dependencies, and OS settings into a single **Image**.\n\n#### 🏗️ Dockerfile Best Practices:\n- **Multi-stage Builds**: Use one image to build the JAR (using Maven/Gradle) and a much smaller 'slim' JRE image to run it. This reduces image size from 500MB+ to ~100MB.\n- **Layer Caching**: Order your commands so that dependencies are cached, making subsequent builds lightning-fast."
  },
  "CI/CD & Monitoring": {
    youtubeLink: "https://www.youtube.com/watch?v=mHJ3bIeWMkM",
    notes: "### 📈 Observability & Automation\n\n#### 🤖 CI/CD (GitHub Actions/Jenkins):\nAutomatically build, test, and deploy code updates. Catch bugs before they reach production.\n\n#### 🩺 Monitoring (Spring Boot Actuator):\nExposes production-ready endpoints (`/health`, `/metrics`, `/info`). \n- **Prometheus & Grafana**: Use Actuator metrics to build beautiful, real-time dashboards for CPU, Memory, and Request latency monitoring."
  },

  // ============================================================
  // Data Science Topics
  // ============================================================
  "Python Fundamentals": {
    youtubeLink: "https://www.youtube.com/watch?v=_uQrJ0TkZlc",
    notes: "### 🐍 Python for Data Science\n\nPython's simple syntax and massive library ecosystem make it the king of DS.\n\n#### 🚀 Advanced Pythonic Features:\n- **List Comprehensions**: `[x**2 for x in data if x > 0]` - Concise and fast.\n- **Generators**: Use `yield` to process massive datasets that don't fit in memory.\n- **Virtual Environments**: Always use `venv` or `conda` to prevent package version conflicts across projects."
  },
  "NumPy & Pandas": {
    youtubeLink: "https://www.youtube.com/watch?v=vmEHCJofslg",
    notes: "### 🐼 The Data Science Power Duo: NumPy & Pandas\n\n#### 📐 NumPy (Numerical Python):\nProvides N-dimensional arrays. Its core is written in C, making mathematical operations (Vectorization) thousands of times faster than standard Python lists.\n\n#### 📊 Pandas (Data Wrangling):\nIntroduces the **DataFrame**—a 2D table structure. \n- **Cleaning**: Handling missing values (`dropna`, `fillna`).\n- **Grouping**: Efficiently aggregating data with `.groupby()`.\n- **Merging**: Joining multiple datasets like a pro."
  },
  "Descriptive Statistics": {
    youtubeLink: "https://www.youtube.com/watch?v=xxpc-HPKN28",
    notes: "### 📊 Statistics 101: Understanding Your Data\n\n#### 📏 Measures of Central Tendency:\n- **Mean**: The average. Sensitive to outliers.\n- **Median**: The middle value. Robust against outliers.\n- **Mode**: The most frequent value.\n\n#### 📉 Measures of Spread:\n- **Variance**: Average squared deviation from the mean.\n- **Standard Deviation**: Square root of variance. Most common measure of volatility.\n- **Skewness & Kurtosis**: Understanding the shape and 'tails' of your distribution."
  },
  "Inferential Statistics": {
    youtubeLink: "https://www.youtube.com/watch?v=qBigTkG8Dkk",
    notes: "### 🧪 Making Predictions: Inferential Statistics\n\n#### 🎯 Hypothesis Testing:\n- **P-Value**: The probability of seeing your result by random chance. Standard threshold is 0.05.\n- **Confidence Intervals**: The range where we are 95% sure the true value lies.\n- **A/B Testing**: Comparing two versions (A and B) to see which performs better statistically."
  },
  "Matplotlib & Seaborn": {
    youtubeLink: "https://www.youtube.com/watch?v=UO98lJQ3QGI",
    notes: "### 🎨 Data Visualization Architecture\n\n#### 📊 Matplotlib (The Foundation):\nHighly customizable but low-level. Great for precise control over every axis and label.\n\n#### 🌈 Seaborn (The Beauty Layer):\nBuilt on top of Matplotlib. Provides high-level interfaces for statistical plots like **Heatmaps**, **Violin Plots**, and **Joint Plots**. It handles color palettes and complex groupings automatically."
  },
  "Supervised Learning": {
    youtubeLink: "https://www.youtube.com/watch?v=JcI5Vnw0b2c",
    notes: "### 🤖 Supervised Learning: Learning from Labels\n\n#### 📉 Regression (Continuous Values):\nPredicting housing prices or stock values using **Linear Regression** or **Random Forest Regressor**.\n\n#### 🌲 Classification (Categories):\nPredicting Spam/Not Spam or Fraud/No Fraud using **Logistic Regression**, **SVM**, or **XGBoost**.\n- **Metric**: Use **Precision/Recall** (F1-score) instead of Accuracy for imbalanced datasets."
  },
  "Unsupervised Learning": {
    youtubeLink: "https://www.youtube.com/watch?v=jAA2g9ItoAc",
    notes: "### 🕵️‍♂️ Unsupervised Learning: Finding Hidden Patterns\n\n#### 🔮 Clustering (K-Means):\nGrouping similar data points together (e.g., Customer Segmentation). The 'Elbow Method' helps find the optimal number of clusters.\n\n#### 📉 Dimensionality Reduction (PCA):\nReducing the number of features while keeping the most important information. Essential for visualizing high-dimensional data in 2D or 3D."
  },
  "Feature Engineering": {
    youtubeLink: "https://www.youtube.com/watch?v=mHJ3bIeWMkM",
    notes: "### 🛠️ Feature Engineering: The Secret Sauce of DS\n\nA model is only as good as its data (**Garbage In, Garbage Out**).\n- **Scaling**: Normalization (0-1) vs Standardization (Mean=0, SD=1).\n- **Encoding**: One-Hot Encoding for categories.\n- **Imputation**: Using Mean/Median or iterative algorithms to fill holes in the data."
  },
  "Neural Networks": {
    youtubeLink: "https://www.youtube.com/watch?v=aircAruvnKk",
    notes: "### 🧬 Deep Learning & Neural Networks\n\nInspired by the human brain, Deep Learning uses multiple layers to learn complex features in a hierarchy.\n\n#### 🏗️ Architecture:\n- **Input Layer**: Receives features.\n- **Hidden Layers**: Nonlinear transformations using **Activation Functions** (ReLU, Sigmoid).\n- **Output Layer**: Final prediction.\n\n#### 🧠 Backpropagation:\nThe core algorithm that uses **Gradient Descent** to minimize the 'Loss Function' by adjusting the weights of every neuron."
  },
  "Model Deployment": {
    youtubeLink: "https://www.youtube.com/watch?v=qX4eX0uL-Xk",
    notes: "### 🚀 Model Deployment (MLOps)\n\nTaking a model from a Jupyter Notebook to a production API.\n\n#### 📡 Serving Models:\nUse **FastAPI** or **Flask** to wrap your model in a REST endpoint. Standard practice is to serialize your model using `pickle` or `joblib`.\n\n#### 🐳 Scalability:\nContainerize the API with Docker and deploy to AWS SageMaker or Kubernetes for auto-scaling and monitoring."
  }
};
