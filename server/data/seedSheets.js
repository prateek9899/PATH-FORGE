const mongoose = require('mongoose');
const Sheet = require('../models/Sheet');

const striverProblems = [
  {
    "title": "Single Number II",
    "difficulty": "Easy",
    "companies": [
      "Meta",
      "Infosys",
      "Microsoft"
    ],
    "link": "https://leetcode.com/problems/single-number-ii/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Single Number",
    "difficulty": "Easy",
    "companies": [
      "Meta",
      "Microsoft",
      "Infosys"
    ],
    "link": "https://leetcode.com/problems/single-number/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Candy",
    "difficulty": "Medium",
    "companies": [
      "Amazon",
      "Meta",
      "Infosys"
    ],
    "link": "https://leetcode.com/problems/candy/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Gas Station",
    "difficulty": "Hard",
    "companies": [
      "Meta",
      "Google",
      "Infosys"
    ],
    "link": "https://leetcode.com/problems/gas-station/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Clone Graph",
    "difficulty": "Medium",
    "companies": [
      "Amazon",
      "Google",
      "Meta"
    ],
    "link": "https://leetcode.com/problems/clone-graph/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Palindrome Partitioning II",
    "difficulty": "Easy",
    "companies": [
      "Infosys",
      "Meta",
      "Amazon"
    ],
    "link": "https://leetcode.com/problems/palindrome-partitioning-ii/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Palindrome Partitioning",
    "difficulty": "Hard",
    "companies": [
      "Amazon",
      "Google",
      "Microsoft"
    ],
    "link": "https://leetcode.com/problems/palindrome-partitioning/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Surrounded Regions",
    "difficulty": "Easy",
    "companies": [
      "Infosys",
      "Amazon",
      "Google"
    ],
    "link": "https://leetcode.com/problems/surrounded-regions/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Sum Root to Leaf Numbers",
    "difficulty": "Medium",
    "companies": [
      "TCS",
      "Microsoft",
      "Meta"
    ],
    "link": "https://leetcode.com/problems/sum-root-to-leaf-numbers/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Longest Consecutive Sequence",
    "difficulty": "Easy",
    "companies": [
      "Amazon",
      "TCS",
      "Google"
    ],
    "link": "https://leetcode.com/problems/longest-consecutive-sequence/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Word Ladder",
    "difficulty": "Hard",
    "companies": [
      "Infosys",
      "TCS",
      "Meta"
    ],
    "link": "https://leetcode.com/problems/word-ladder/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Word Ladder II",
    "difficulty": "Hard",
    "companies": [
      "Amazon",
      "Google",
      "Microsoft"
    ],
    "link": "https://leetcode.com/problems/word-ladder-ii/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Valid Palindrome",
    "difficulty": "Hard",
    "companies": [
      "Microsoft",
      "TCS",
      "Meta"
    ],
    "link": "https://leetcode.com/problems/valid-palindrome/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Binary Tree Maximum Path Sum",
    "difficulty": "Medium",
    "companies": [
      "Microsoft",
      "TCS",
      "Meta"
    ],
    "link": "https://leetcode.com/problems/binary-tree-maximum-path-sum/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Best Time to Buy and Sell Stock III",
    "difficulty": "Easy",
    "companies": [
      "Infosys",
      "TCS",
      "Meta"
    ],
    "link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Best Time to Buy and Sell Stock II",
    "difficulty": "Easy",
    "companies": [
      "Google",
      "Meta",
      "Microsoft"
    ],
    "link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Best Time to Buy and Sell Stock",
    "difficulty": "Medium",
    "companies": [
      "TCS",
      "Infosys",
      "Meta"
    ],
    "link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Triangle",
    "difficulty": "Medium",
    "companies": [
      "Infosys",
      "TCS",
      "Meta"
    ],
    "link": "https://leetcode.com/problems/triangle/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Pascal's Triangle II",
    "difficulty": "Medium",
    "companies": [
      "Amazon",
      "Infosys",
      "Google"
    ],
    "link": "https://leetcode.com/problems/pascal-s-triangle-ii/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Pascal's Triangle",
    "difficulty": "Hard",
    "companies": [
      "Amazon",
      "Meta",
      "Infosys"
    ],
    "link": "https://leetcode.com/problems/pascal-s-triangle/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Populating Next Right Pointers in Each Node II",
    "difficulty": "Medium",
    "companies": [
      "Microsoft",
      "Meta",
      "Google"
    ],
    "link": "https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Populating Next Right Pointers in Each Node",
    "difficulty": "Hard",
    "companies": [
      "Google",
      "Meta",
      "Amazon"
    ],
    "link": "https://leetcode.com/problems/populating-next-right-pointers-in-each-node/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Distinct Subsequences",
    "difficulty": "Medium",
    "companies": [
      "Microsoft",
      "Google",
      "Meta"
    ],
    "link": "https://leetcode.com/problems/distinct-subsequences/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Flatten Binary Tree to Linked List",
    "difficulty": "Hard",
    "companies": [
      "TCS",
      "Infosys",
      "Google"
    ],
    "link": "https://leetcode.com/problems/flatten-binary-tree-to-linked-list/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Path Sum II",
    "difficulty": "Hard",
    "companies": [
      "Amazon",
      "Google",
      "Microsoft"
    ],
    "link": "https://leetcode.com/problems/path-sum-ii/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Path Sum",
    "difficulty": "Hard",
    "companies": [
      "Meta",
      "Amazon",
      "TCS"
    ],
    "link": "https://leetcode.com/problems/path-sum/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Minimum Depth of Binary Tree",
    "difficulty": "Medium",
    "companies": [
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "link": "https://leetcode.com/problems/minimum-depth-of-binary-tree/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Balanced Binary Tree",
    "difficulty": "Easy",
    "companies": [
      "Google",
      "Microsoft",
      "Amazon"
    ],
    "link": "https://leetcode.com/problems/balanced-binary-tree/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Convert Sorted List to Binary Search Tree",
    "difficulty": "Easy",
    "companies": [
      "Amazon",
      "Google",
      "Microsoft"
    ],
    "link": "https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Convert Sorted Array to Binary Search Tree",
    "difficulty": "Easy",
    "companies": [
      "Infosys",
      "Amazon",
      "Google"
    ],
    "link": "https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Binary Tree Level Order Traversal II",
    "difficulty": "Medium",
    "companies": [
      "TCS",
      "Meta",
      "Microsoft"
    ],
    "link": "https://leetcode.com/problems/binary-tree-level-order-traversal-ii/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Construct Binary Tree from Inorder and Postorder Traversal",
    "difficulty": "Easy",
    "companies": [
      "Infosys",
      "TCS",
      "Meta"
    ],
    "link": "https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Construct Binary Tree from Preorder and Inorder Traversal",
    "difficulty": "Medium",
    "companies": [
      "Microsoft",
      "Google",
      "TCS"
    ],
    "link": "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Maximum Depth of Binary Tree",
    "difficulty": "Medium",
    "companies": [
      "Infosys",
      "Amazon",
      "Google"
    ],
    "link": "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Binary Tree Zigzag Level Order Traversal",
    "difficulty": "Medium",
    "companies": [
      "TCS",
      "Microsoft",
      "Google"
    ],
    "link": "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Binary Tree Level Order Traversal",
    "difficulty": "Medium",
    "companies": [
      "Amazon",
      "TCS",
      "Infosys"
    ],
    "link": "https://leetcode.com/problems/binary-tree-level-order-traversal/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Symmetric Tree",
    "difficulty": "Easy",
    "companies": [
      "Infosys",
      "Microsoft",
      "Meta"
    ],
    "link": "https://leetcode.com/problems/symmetric-tree/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Same Tree",
    "difficulty": "Medium",
    "companies": [
      "Amazon",
      "Google",
      "TCS"
    ],
    "link": "https://leetcode.com/problems/same-tree/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Recover Binary Search Tree",
    "difficulty": "Easy",
    "companies": [
      "Microsoft",
      "TCS",
      "Amazon"
    ],
    "link": "https://leetcode.com/problems/recover-binary-search-tree/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Validate Binary Search Tree",
    "difficulty": "Hard",
    "companies": [
      "Meta",
      "Amazon",
      "TCS"
    ],
    "link": "https://leetcode.com/problems/validate-binary-search-tree/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Interleaving String",
    "difficulty": "Easy",
    "companies": [
      "Infosys",
      "Amazon",
      "Meta"
    ],
    "link": "https://leetcode.com/problems/interleaving-string/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Unique Binary Search Trees",
    "difficulty": "Medium",
    "companies": [
      "Amazon",
      "Google",
      "Infosys"
    ],
    "link": "https://leetcode.com/problems/unique-binary-search-trees/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Unique Binary Search Trees II",
    "difficulty": "Easy",
    "companies": [
      "TCS",
      "Amazon",
      "Google"
    ],
    "link": "https://leetcode.com/problems/unique-binary-search-trees-ii/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Binary Tree Inorder Traversal",
    "difficulty": "Medium",
    "companies": [
      "Infosys",
      "Amazon",
      "Meta"
    ],
    "link": "https://leetcode.com/problems/binary-tree-inorder-traversal/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Restore IP Addresses",
    "difficulty": "Hard",
    "companies": [
      "Infosys",
      "Amazon",
      "Meta"
    ],
    "link": "https://leetcode.com/problems/restore-ip-addresses/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Reverse Linked List II",
    "difficulty": "Medium",
    "companies": [
      "Amazon",
      "Google",
      "Microsoft"
    ],
    "link": "https://leetcode.com/problems/reverse-linked-list-ii/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Decode Ways",
    "difficulty": "Easy",
    "companies": [
      "Meta",
      "Google",
      "Microsoft"
    ],
    "link": "https://leetcode.com/problems/decode-ways/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Subsets II",
    "difficulty": "Medium",
    "companies": [
      "Infosys",
      "TCS",
      "Meta"
    ],
    "link": "https://leetcode.com/problems/subsets-ii/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Gray Code",
    "difficulty": "Medium",
    "companies": [
      "Microsoft",
      "Infosys",
      "Google"
    ],
    "link": "https://leetcode.com/problems/gray-code/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Merge Sorted Array",
    "difficulty": "Hard",
    "companies": [
      "Meta",
      "TCS",
      "Infosys"
    ],
    "link": "https://leetcode.com/problems/merge-sorted-array/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Scramble String",
    "difficulty": "Hard",
    "companies": [
      "Google",
      "Meta",
      "Infosys"
    ],
    "link": "https://leetcode.com/problems/scramble-string/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Partition List",
    "difficulty": "Easy",
    "companies": [
      "Meta",
      "Microsoft",
      "Google"
    ],
    "link": "https://leetcode.com/problems/partition-list/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Maximal Rectangle",
    "difficulty": "Hard",
    "companies": [
      "Microsoft",
      "Google",
      "Amazon"
    ],
    "link": "https://leetcode.com/problems/maximal-rectangle/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Largest Rectangle in Histogram",
    "difficulty": "Hard",
    "companies": [
      "Amazon",
      "Google",
      "Infosys"
    ],
    "link": "https://leetcode.com/problems/largest-rectangle-in-histogram/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Remove Duplicates from Sorted List",
    "difficulty": "Hard",
    "companies": [
      "Google",
      "Microsoft",
      "Meta"
    ],
    "link": "https://leetcode.com/problems/remove-duplicates-from-sorted-list/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Remove Duplicates from Sorted List II",
    "difficulty": "Medium",
    "companies": [
      "Amazon",
      "Google",
      "Infosys"
    ],
    "link": "https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Search in Rotated Sorted Array II",
    "difficulty": "Easy",
    "companies": [
      "Microsoft",
      "Meta",
      "Infosys"
    ],
    "link": "https://leetcode.com/problems/search-in-rotated-sorted-array-ii/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Remove Duplicates from Sorted Array II",
    "difficulty": "Easy",
    "companies": [
      "Amazon",
      "Meta",
      "Google"
    ],
    "link": "https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Word Search",
    "difficulty": "Hard",
    "companies": [
      "Amazon",
      "Google",
      "Meta"
    ],
    "link": "https://leetcode.com/problems/word-search/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Subsets",
    "difficulty": "Medium",
    "companies": [
      "TCS",
      "Microsoft",
      "Meta"
    ],
    "link": "https://leetcode.com/problems/subsets/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Combinations",
    "difficulty": "Easy",
    "companies": [
      "Amazon",
      "Google",
      "Microsoft"
    ],
    "link": "https://leetcode.com/problems/combinations/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Minimum Window Substring",
    "difficulty": "Easy",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft"
    ],
    "link": "https://leetcode.com/problems/minimum-window-substring/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Sort Colors",
    "difficulty": "Hard",
    "companies": [
      "Microsoft",
      "Google",
      "Infosys"
    ],
    "link": "https://leetcode.com/problems/sort-colors/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Search a 2D Matrix",
    "difficulty": "Easy",
    "companies": [
      "Microsoft",
      "Meta",
      "Google"
    ],
    "link": "https://leetcode.com/problems/search-a-2d-matrix/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Set Matrix Zeroes",
    "difficulty": "Hard",
    "companies": [
      "Meta",
      "Amazon",
      "Microsoft"
    ],
    "link": "https://leetcode.com/problems/set-matrix-zeroes/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Edit Distance",
    "difficulty": "Medium",
    "companies": [
      "Amazon",
      "Google",
      "Microsoft"
    ],
    "link": "https://leetcode.com/problems/edit-distance/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Simplify Path",
    "difficulty": "Hard",
    "companies": [
      "Google",
      "Meta",
      "Infosys"
    ],
    "link": "https://leetcode.com/problems/simplify-path/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Climbing Stairs",
    "difficulty": "Hard",
    "companies": [
      "Meta",
      "Microsoft",
      "Google"
    ],
    "link": "https://leetcode.com/problems/climbing-stairs/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Sqrt(x)",
    "difficulty": "Medium",
    "companies": [
      "Amazon",
      "Google",
      "Microsoft"
    ],
    "link": "https://leetcode.com/problems/sqrt-x/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Text Justification",
    "difficulty": "Hard",
    "companies": [
      "Infosys",
      "TCS",
      "Meta"
    ],
    "link": "https://leetcode.com/problems/text-justification/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Add Binary",
    "difficulty": "Medium",
    "companies": [
      "TCS",
      "Meta",
      "Infosys"
    ],
    "link": "https://leetcode.com/problems/add-binary/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Plus One",
    "difficulty": "Medium",
    "companies": [
      "Microsoft",
      "Meta",
      "Google"
    ],
    "link": "https://leetcode.com/problems/plus-one/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Valid Number",
    "difficulty": "Hard",
    "companies": [
      "Google",
      "Microsoft",
      "TCS"
    ],
    "link": "https://leetcode.com/problems/valid-number/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Minimum Path Sum",
    "difficulty": "Easy",
    "companies": [
      "Meta",
      "Google",
      "Infosys"
    ],
    "link": "https://leetcode.com/problems/minimum-path-sum/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Unique Paths II",
    "difficulty": "Easy",
    "companies": [
      "Google",
      "Meta",
      "TCS"
    ],
    "link": "https://leetcode.com/problems/unique-paths-ii/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Unique Paths",
    "difficulty": "Easy",
    "companies": [
      "Microsoft",
      "Meta",
      "TCS"
    ],
    "link": "https://leetcode.com/problems/unique-paths/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Rotate List",
    "difficulty": "Medium",
    "companies": [
      "Amazon",
      "Meta",
      "Infosys"
    ],
    "link": "https://leetcode.com/problems/rotate-list/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Permutation Sequence",
    "difficulty": "Hard",
    "companies": [
      "Microsoft",
      "Amazon",
      "Meta"
    ],
    "link": "https://leetcode.com/problems/permutation-sequence/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Spiral Matrix II",
    "difficulty": "Hard",
    "companies": [
      "Amazon",
      "Meta",
      "Infosys"
    ],
    "link": "https://leetcode.com/problems/spiral-matrix-ii/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Length of Last Word",
    "difficulty": "Medium",
    "companies": [
      "Microsoft",
      "Meta",
      "Google"
    ],
    "link": "https://leetcode.com/problems/length-of-last-word/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Insert Interval",
    "difficulty": "Easy",
    "companies": [
      "TCS",
      "Amazon",
      "Google"
    ],
    "link": "https://leetcode.com/problems/insert-interval/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Merge Intervals",
    "difficulty": "Hard",
    "companies": [
      "Microsoft",
      "Google",
      "Amazon"
    ],
    "link": "https://leetcode.com/problems/merge-intervals/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Jump Game",
    "difficulty": "Medium",
    "companies": [
      "TCS",
      "Microsoft",
      "Google"
    ],
    "link": "https://leetcode.com/problems/jump-game/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Spiral Matrix",
    "difficulty": "Medium",
    "companies": [
      "Microsoft",
      "Google",
      "Amazon"
    ],
    "link": "https://leetcode.com/problems/spiral-matrix/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Maximum Subarray",
    "difficulty": "Hard",
    "companies": [
      "Infosys",
      "TCS",
      "Meta"
    ],
    "link": "https://leetcode.com/problems/maximum-subarray/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "N-Queens II",
    "difficulty": "Medium",
    "companies": [
      "Amazon",
      "Google",
      "Microsoft"
    ],
    "link": "https://leetcode.com/problems/n-queens-ii/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "N-Queens",
    "difficulty": "Hard",
    "companies": [
      "Amazon",
      "Google",
      "Microsoft"
    ],
    "link": "https://leetcode.com/problems/n-queens/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Pow(x, n)",
    "difficulty": "Medium",
    "companies": [
      "Amazon",
      "Google",
      "TCS"
    ],
    "link": "https://leetcode.com/problems/pow-x-n/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Group Anagrams",
    "difficulty": "Easy",
    "companies": [
      "Amazon",
      "Google",
      "TCS"
    ],
    "link": "https://leetcode.com/problems/group-anagrams/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Rotate Image",
    "difficulty": "Hard",
    "companies": [
      "Meta",
      "Microsoft",
      "Amazon"
    ],
    "link": "https://leetcode.com/problems/rotate-image/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Permutations II",
    "difficulty": "Medium",
    "companies": [
      "Meta",
      "TCS",
      "Microsoft"
    ],
    "link": "https://leetcode.com/problems/permutations-ii/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Permutations",
    "difficulty": "Medium",
    "companies": [
      "Meta",
      "Microsoft",
      "TCS"
    ],
    "link": "https://leetcode.com/problems/permutations/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Jump Game II",
    "difficulty": "Easy",
    "companies": [
      "TCS",
      "Infosys",
      "Microsoft"
    ],
    "link": "https://leetcode.com/problems/jump-game-ii/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Wildcard Matching",
    "difficulty": "Hard",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft"
    ],
    "link": "https://leetcode.com/problems/wildcard-matching/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Multiply Strings",
    "difficulty": "Hard",
    "companies": [
      "Google",
      "Microsoft",
      "Infosys"
    ],
    "link": "https://leetcode.com/problems/multiply-strings/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Trapping Rain Water",
    "difficulty": "Medium",
    "companies": [
      "Microsoft",
      "Amazon",
      "Infosys"
    ],
    "link": "https://leetcode.com/problems/trapping-rain-water/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "First Missing Positive",
    "difficulty": "Easy",
    "companies": [
      "TCS",
      "Infosys",
      "Microsoft"
    ],
    "link": "https://leetcode.com/problems/first-missing-positive/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Combination Sum II",
    "difficulty": "Easy",
    "companies": [
      "Microsoft",
      "TCS",
      "Infosys"
    ],
    "link": "https://leetcode.com/problems/combination-sum-ii/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Combination Sum",
    "difficulty": "Medium",
    "companies": [
      "Microsoft",
      "Amazon",
      "Google"
    ],
    "link": "https://leetcode.com/problems/combination-sum/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Count and Say",
    "difficulty": "Hard",
    "companies": [
      "Meta",
      "TCS",
      "Infosys"
    ],
    "link": "https://leetcode.com/problems/count-and-say/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Sudoku Solver",
    "difficulty": "Easy",
    "companies": [
      "TCS",
      "Meta",
      "Microsoft"
    ],
    "link": "https://leetcode.com/problems/sudoku-solver/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Valid Sudoku",
    "difficulty": "Easy",
    "companies": [
      "Amazon",
      "Google",
      "Microsoft"
    ],
    "link": "https://leetcode.com/problems/valid-sudoku/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Search Insert Position",
    "difficulty": "Hard",
    "companies": [
      "Amazon",
      "Infosys",
      "Google"
    ],
    "link": "https://leetcode.com/problems/search-insert-position/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Find First and Last Position of Element in Sorted Array",
    "difficulty": "Medium",
    "companies": [
      "Microsoft",
      "Google",
      "TCS"
    ],
    "link": "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Search in Rotated Sorted Array",
    "difficulty": "Medium",
    "companies": [
      "Meta",
      "Amazon",
      "Infosys"
    ],
    "link": "https://leetcode.com/problems/search-in-rotated-sorted-array/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Longest Valid Parentheses",
    "difficulty": "Medium",
    "companies": [
      "Microsoft",
      "Infosys",
      "Google"
    ],
    "link": "https://leetcode.com/problems/longest-valid-parentheses/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Next Permutation",
    "difficulty": "Hard",
    "companies": [
      "Amazon",
      "Google",
      "Infosys"
    ],
    "link": "https://leetcode.com/problems/next-permutation/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Substring with Concatenation of All Words",
    "difficulty": "Easy",
    "companies": [
      "Infosys",
      "TCS",
      "Meta"
    ],
    "link": "https://leetcode.com/problems/substring-with-concatenation-of-all-words/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Divide Two Integers",
    "difficulty": "Easy",
    "companies": [
      "Amazon",
      "Google",
      "Microsoft"
    ],
    "link": "https://leetcode.com/problems/divide-two-integers/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Find the Index of the First Occurrence in a String",
    "difficulty": "Medium",
    "companies": [
      "Amazon",
      "Google",
      "Infosys"
    ],
    "link": "https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Remove Element",
    "difficulty": "Hard",
    "companies": [
      "Meta",
      "Amazon",
      "TCS"
    ],
    "link": "https://leetcode.com/problems/remove-element/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Remove Duplicates from Sorted Array",
    "difficulty": "Medium",
    "companies": [
      "Microsoft",
      "Meta",
      "TCS"
    ],
    "link": "https://leetcode.com/problems/remove-duplicates-from-sorted-array/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Reverse Nodes in k-Group",
    "difficulty": "Medium",
    "companies": [
      "Meta",
      "Microsoft",
      "Infosys"
    ],
    "link": "https://leetcode.com/problems/reverse-nodes-in-k-group/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Swap Nodes in Pairs",
    "difficulty": "Medium",
    "companies": [
      "Infosys",
      "TCS",
      "Meta"
    ],
    "link": "https://leetcode.com/problems/swap-nodes-in-pairs/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Merge k Sorted Lists",
    "difficulty": "Easy",
    "companies": [
      "Amazon",
      "Google",
      "Microsoft"
    ],
    "link": "https://leetcode.com/problems/merge-k-sorted-lists/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Generate Parentheses",
    "difficulty": "Medium",
    "companies": [
      "Google",
      "Amazon",
      "TCS"
    ],
    "link": "https://leetcode.com/problems/generate-parentheses/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Merge Two Sorted Lists",
    "difficulty": "Medium",
    "companies": [
      "Meta",
      "TCS",
      "Infosys"
    ],
    "link": "https://leetcode.com/problems/merge-two-sorted-lists/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Valid Parentheses",
    "difficulty": "Hard",
    "companies": [
      "Microsoft",
      "Infosys",
      "Meta"
    ],
    "link": "https://leetcode.com/problems/valid-parentheses/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Remove Nth Node From End of List",
    "difficulty": "Medium",
    "companies": [
      "Amazon",
      "Infosys",
      "Google"
    ],
    "link": "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "4Sum",
    "difficulty": "Medium",
    "companies": [
      "Meta",
      "Amazon",
      "Infosys"
    ],
    "link": "https://leetcode.com/problems/4sum/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Letter Combinations of a Phone Number",
    "difficulty": "Easy",
    "companies": [
      "Infosys",
      "Amazon",
      "Microsoft"
    ],
    "link": "https://leetcode.com/problems/letter-combinations-of-a-phone-number/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "3Sum Closest",
    "difficulty": "Easy",
    "companies": [
      "Microsoft",
      "TCS",
      "Meta"
    ],
    "link": "https://leetcode.com/problems/3sum-closest/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "3Sum",
    "difficulty": "Medium",
    "companies": [
      "Google",
      "TCS",
      "Microsoft"
    ],
    "link": "https://leetcode.com/problems/3sum/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Longest Common Prefix",
    "difficulty": "Easy",
    "companies": [
      "Meta",
      "Infosys",
      "Amazon"
    ],
    "link": "https://leetcode.com/problems/longest-common-prefix/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Roman to Integer",
    "difficulty": "Easy",
    "companies": [
      "Meta",
      "Microsoft",
      "Infosys"
    ],
    "link": "https://leetcode.com/problems/roman-to-integer/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Integer to Roman",
    "difficulty": "Hard",
    "companies": [
      "Meta",
      "Amazon",
      "Microsoft"
    ],
    "link": "https://leetcode.com/problems/integer-to-roman/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Container With Most Water",
    "difficulty": "Hard",
    "companies": [
      "TCS",
      "Amazon",
      "Google"
    ],
    "link": "https://leetcode.com/problems/container-with-most-water/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Regular Expression Matching",
    "difficulty": "Medium",
    "companies": [
      "Amazon",
      "Google",
      "Microsoft"
    ],
    "link": "https://leetcode.com/problems/regular-expression-matching/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Palindrome Number",
    "difficulty": "Medium",
    "companies": [
      "Infosys",
      "Microsoft",
      "TCS"
    ],
    "link": "https://leetcode.com/problems/palindrome-number/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "String to Integer (atoi)",
    "difficulty": "Hard",
    "companies": [
      "Infosys",
      "Microsoft",
      "Google"
    ],
    "link": "https://leetcode.com/problems/string-to-integer-atoi/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Reverse Integer",
    "difficulty": "Medium",
    "companies": [
      "Amazon",
      "Google",
      "Microsoft"
    ],
    "link": "https://leetcode.com/problems/reverse-integer/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Zigzag Conversion",
    "difficulty": "Hard",
    "companies": [
      "Amazon",
      "TCS",
      "Google"
    ],
    "link": "https://leetcode.com/problems/zigzag-conversion/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Longest Palindromic Substring",
    "difficulty": "Easy",
    "companies": [
      "Meta",
      "Google",
      "Amazon"
    ],
    "link": "https://leetcode.com/problems/longest-palindromic-substring/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Median of Two Sorted Arrays",
    "difficulty": "Medium",
    "companies": [
      "Meta",
      "Amazon",
      "Infosys"
    ],
    "link": "https://leetcode.com/problems/median-of-two-sorted-arrays/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Longest Substring Without Repeating Characters",
    "difficulty": "Easy",
    "companies": [
      "Amazon",
      "Google",
      "Microsoft"
    ],
    "link": "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Add Two Numbers",
    "difficulty": "Medium",
    "companies": [
      "Microsoft",
      "Google",
      "Meta"
    ],
    "link": "https://leetcode.com/problems/add-two-numbers/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  },
  {
    "title": "Two Sum",
    "difficulty": "Hard",
    "companies": [
      "Meta",
      "Amazon",
      "TCS"
    ],
    "link": "https://leetcode.com/problems/two-sum/",
    "notes": "Standard DSA problem from Striver's A2Z sheet.",
    "isPremium": false
  }
];
const neetcodeProblems = [
  {
    "title": "Two Sum",
    "difficulty": "Medium",
    "companies": [
      "Amazon",
      "Google"
    ],
    "link": "https://leetcode.com/problems/two-sum/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Add Two Numbers",
    "difficulty": "Medium",
    "companies": [
      "Google",
      "Amazon"
    ],
    "link": "https://leetcode.com/problems/add-two-numbers/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Longest Substring Without Repeating Characters",
    "difficulty": "Medium",
    "companies": [
      "Meta",
      "Microsoft"
    ],
    "link": "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Median of Two Sorted Arrays",
    "difficulty": "Easy",
    "companies": [
      "Microsoft",
      "Amazon"
    ],
    "link": "https://leetcode.com/problems/median-of-two-sorted-arrays/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Longest Palindromic Substring",
    "difficulty": "Medium",
    "companies": [
      "Amazon",
      "Google"
    ],
    "link": "https://leetcode.com/problems/longest-palindromic-substring/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Zigzag Conversion",
    "difficulty": "Easy",
    "companies": [
      "Microsoft",
      "Meta"
    ],
    "link": "https://leetcode.com/problems/zigzag-conversion/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Reverse Integer",
    "difficulty": "Easy",
    "companies": [
      "Meta",
      "Microsoft"
    ],
    "link": "https://leetcode.com/problems/reverse-integer/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "String to Integer (atoi)",
    "difficulty": "Easy",
    "companies": [
      "Amazon",
      "Google"
    ],
    "link": "https://leetcode.com/problems/string-to-integer-atoi/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Palindrome Number",
    "difficulty": "Medium",
    "companies": [
      "Microsoft",
      "Meta"
    ],
    "link": "https://leetcode.com/problems/palindrome-number/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Regular Expression Matching",
    "difficulty": "Hard",
    "companies": [
      "Amazon",
      "Meta"
    ],
    "link": "https://leetcode.com/problems/regular-expression-matching/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Container With Most Water",
    "difficulty": "Medium",
    "companies": [
      "Meta",
      "Microsoft"
    ],
    "link": "https://leetcode.com/problems/container-with-most-water/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Integer to Roman",
    "difficulty": "Medium",
    "companies": [
      "Amazon",
      "Google"
    ],
    "link": "https://leetcode.com/problems/integer-to-roman/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Roman to Integer",
    "difficulty": "Medium",
    "companies": [
      "Microsoft",
      "Meta"
    ],
    "link": "https://leetcode.com/problems/roman-to-integer/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Longest Common Prefix",
    "difficulty": "Medium",
    "companies": [
      "Amazon",
      "Google"
    ],
    "link": "https://leetcode.com/problems/longest-common-prefix/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "3Sum",
    "difficulty": "Hard",
    "companies": [
      "Google",
      "Amazon"
    ],
    "link": "https://leetcode.com/problems/3sum/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "3Sum Closest",
    "difficulty": "Easy",
    "companies": [
      "Meta",
      "Microsoft"
    ],
    "link": "https://leetcode.com/problems/3sum-closest/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Letter Combinations of a Phone Number",
    "difficulty": "Easy",
    "companies": [
      "Amazon",
      "Google"
    ],
    "link": "https://leetcode.com/problems/letter-combinations-of-a-phone-number/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "4Sum",
    "difficulty": "Medium",
    "companies": [
      "Meta",
      "Microsoft"
    ],
    "link": "https://leetcode.com/problems/4sum/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Remove Nth Node From End of List",
    "difficulty": "Easy",
    "companies": [
      "Amazon",
      "Google"
    ],
    "link": "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Valid Parentheses",
    "difficulty": "Medium",
    "companies": [
      "Meta",
      "Microsoft"
    ],
    "link": "https://leetcode.com/problems/valid-parentheses/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Merge Two Sorted Lists",
    "difficulty": "Easy",
    "companies": [
      "Microsoft",
      "Meta"
    ],
    "link": "https://leetcode.com/problems/merge-two-sorted-lists/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Generate Parentheses",
    "difficulty": "Hard",
    "companies": [
      "Google",
      "Amazon"
    ],
    "link": "https://leetcode.com/problems/generate-parentheses/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Merge k Sorted Lists",
    "difficulty": "Medium",
    "companies": [
      "Google",
      "Amazon"
    ],
    "link": "https://leetcode.com/problems/merge-k-sorted-lists/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Swap Nodes in Pairs",
    "difficulty": "Medium",
    "companies": [
      "Amazon",
      "Google"
    ],
    "link": "https://leetcode.com/problems/swap-nodes-in-pairs/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Reverse Nodes in k-Group",
    "difficulty": "Medium",
    "companies": [
      "Meta",
      "Microsoft"
    ],
    "link": "https://leetcode.com/problems/reverse-nodes-in-k-group/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Remove Duplicates from Sorted Array",
    "difficulty": "Hard",
    "companies": [
      "Microsoft",
      "Meta"
    ],
    "link": "https://leetcode.com/problems/remove-duplicates-from-sorted-array/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Remove Element",
    "difficulty": "Easy",
    "companies": [
      "Amazon",
      "Google"
    ],
    "link": "https://leetcode.com/problems/remove-element/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Find the Index of the First Occurrence in a String",
    "difficulty": "Easy",
    "companies": [
      "Google",
      "Meta"
    ],
    "link": "https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Divide Two Integers",
    "difficulty": "Medium",
    "companies": [
      "Microsoft",
      "Google"
    ],
    "link": "https://leetcode.com/problems/divide-two-integers/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Substring with Concatenation of All Words",
    "difficulty": "Easy",
    "companies": [
      "Google",
      "Amazon"
    ],
    "link": "https://leetcode.com/problems/substring-with-concatenation-of-all-words/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Next Permutation",
    "difficulty": "Hard",
    "companies": [
      "Meta",
      "Microsoft"
    ],
    "link": "https://leetcode.com/problems/next-permutation/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Longest Valid Parentheses",
    "difficulty": "Medium",
    "companies": [
      "Microsoft",
      "Google"
    ],
    "link": "https://leetcode.com/problems/longest-valid-parentheses/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Search in Rotated Sorted Array",
    "difficulty": "Easy",
    "companies": [
      "Amazon",
      "Google"
    ],
    "link": "https://leetcode.com/problems/search-in-rotated-sorted-array/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Find First and Last Position of Element in Sorted Array",
    "difficulty": "Hard",
    "companies": [
      "Meta",
      "Amazon"
    ],
    "link": "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Search Insert Position",
    "difficulty": "Medium",
    "companies": [
      "Amazon",
      "Google"
    ],
    "link": "https://leetcode.com/problems/search-insert-position/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Valid Sudoku",
    "difficulty": "Medium",
    "companies": [
      "Amazon",
      "Google"
    ],
    "link": "https://leetcode.com/problems/valid-sudoku/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Sudoku Solver",
    "difficulty": "Medium",
    "companies": [
      "Microsoft",
      "Google"
    ],
    "link": "https://leetcode.com/problems/sudoku-solver/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Count and Say",
    "difficulty": "Medium",
    "companies": [
      "Amazon",
      "Meta"
    ],
    "link": "https://leetcode.com/problems/count-and-say/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Combination Sum",
    "difficulty": "Medium",
    "companies": [
      "Meta",
      "Microsoft"
    ],
    "link": "https://leetcode.com/problems/combination-sum/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Combination Sum II",
    "difficulty": "Medium",
    "companies": [
      "Amazon",
      "Google"
    ],
    "link": "https://leetcode.com/problems/combination-sum-ii/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "First Missing Positive",
    "difficulty": "Easy",
    "companies": [
      "Microsoft",
      "Google"
    ],
    "link": "https://leetcode.com/problems/first-missing-positive/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Trapping Rain Water",
    "difficulty": "Hard",
    "companies": [
      "Amazon",
      "Google"
    ],
    "link": "https://leetcode.com/problems/trapping-rain-water/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Multiply Strings",
    "difficulty": "Medium",
    "companies": [
      "Amazon",
      "Meta"
    ],
    "link": "https://leetcode.com/problems/multiply-strings/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Wildcard Matching",
    "difficulty": "Hard",
    "companies": [
      "Microsoft",
      "Meta"
    ],
    "link": "https://leetcode.com/problems/wildcard-matching/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Jump Game II",
    "difficulty": "Easy",
    "companies": [
      "Amazon",
      "Google"
    ],
    "link": "https://leetcode.com/problems/jump-game-ii/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Permutations",
    "difficulty": "Medium",
    "companies": [
      "Amazon",
      "Google"
    ],
    "link": "https://leetcode.com/problems/permutations/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Permutations II",
    "difficulty": "Hard",
    "companies": [
      "Microsoft",
      "Meta"
    ],
    "link": "https://leetcode.com/problems/permutations-ii/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Rotate Image",
    "difficulty": "Hard",
    "companies": [
      "Google",
      "Amazon"
    ],
    "link": "https://leetcode.com/problems/rotate-image/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Group Anagrams",
    "difficulty": "Easy",
    "companies": [
      "Amazon",
      "Google"
    ],
    "link": "https://leetcode.com/problems/group-anagrams/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Pow(x, n)",
    "difficulty": "Medium",
    "companies": [
      "Amazon",
      "Google"
    ],
    "link": "https://leetcode.com/problems/pow-x-n/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "N-Queens",
    "difficulty": "Easy",
    "companies": [
      "Amazon",
      "Google"
    ],
    "link": "https://leetcode.com/problems/n-queens/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "N-Queens II",
    "difficulty": "Medium",
    "companies": [
      "Amazon",
      "Microsoft"
    ],
    "link": "https://leetcode.com/problems/n-queens-ii/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Maximum Subarray",
    "difficulty": "Medium",
    "companies": [
      "Amazon",
      "Google"
    ],
    "link": "https://leetcode.com/problems/maximum-subarray/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Spiral Matrix",
    "difficulty": "Medium",
    "companies": [
      "Meta",
      "Amazon"
    ],
    "link": "https://leetcode.com/problems/spiral-matrix/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Jump Game",
    "difficulty": "Hard",
    "companies": [
      "Meta",
      "Microsoft"
    ],
    "link": "https://leetcode.com/problems/jump-game/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Merge Intervals",
    "difficulty": "Medium",
    "companies": [
      "Google",
      "Amazon"
    ],
    "link": "https://leetcode.com/problems/merge-intervals/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Insert Interval",
    "difficulty": "Hard",
    "companies": [
      "Amazon",
      "Google"
    ],
    "link": "https://leetcode.com/problems/insert-interval/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Length of Last Word",
    "difficulty": "Easy",
    "companies": [
      "Amazon",
      "Google"
    ],
    "link": "https://leetcode.com/problems/length-of-last-word/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Spiral Matrix II",
    "difficulty": "Hard",
    "companies": [
      "Microsoft",
      "Google"
    ],
    "link": "https://leetcode.com/problems/spiral-matrix-ii/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Permutation Sequence",
    "difficulty": "Medium",
    "companies": [
      "Amazon",
      "Google"
    ],
    "link": "https://leetcode.com/problems/permutation-sequence/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Rotate List",
    "difficulty": "Hard",
    "companies": [
      "Meta",
      "Microsoft"
    ],
    "link": "https://leetcode.com/problems/rotate-list/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Unique Paths",
    "difficulty": "Medium",
    "companies": [
      "Amazon",
      "Google"
    ],
    "link": "https://leetcode.com/problems/unique-paths/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Unique Paths II",
    "difficulty": "Easy",
    "companies": [
      "Amazon",
      "Meta"
    ],
    "link": "https://leetcode.com/problems/unique-paths-ii/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Minimum Path Sum",
    "difficulty": "Medium",
    "companies": [
      "Meta",
      "Microsoft"
    ],
    "link": "https://leetcode.com/problems/minimum-path-sum/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Valid Number",
    "difficulty": "Medium",
    "companies": [
      "Amazon",
      "Google"
    ],
    "link": "https://leetcode.com/problems/valid-number/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Plus One",
    "difficulty": "Easy",
    "companies": [
      "Meta",
      "Microsoft"
    ],
    "link": "https://leetcode.com/problems/plus-one/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Add Binary",
    "difficulty": "Easy",
    "companies": [
      "Meta",
      "Microsoft"
    ],
    "link": "https://leetcode.com/problems/add-binary/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Text Justification",
    "difficulty": "Medium",
    "companies": [
      "Meta",
      "Amazon"
    ],
    "link": "https://leetcode.com/problems/text-justification/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Sqrt(x)",
    "difficulty": "Easy",
    "companies": [
      "Amazon",
      "Meta"
    ],
    "link": "https://leetcode.com/problems/sqrt-x/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Climbing Stairs",
    "difficulty": "Medium",
    "companies": [
      "Google",
      "Amazon"
    ],
    "link": "https://leetcode.com/problems/climbing-stairs/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Simplify Path",
    "difficulty": "Easy",
    "companies": [
      "Microsoft",
      "Google"
    ],
    "link": "https://leetcode.com/problems/simplify-path/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Edit Distance",
    "difficulty": "Easy",
    "companies": [
      "Meta",
      "Microsoft"
    ],
    "link": "https://leetcode.com/problems/edit-distance/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Set Matrix Zeroes",
    "difficulty": "Medium",
    "companies": [
      "Amazon",
      "Google"
    ],
    "link": "https://leetcode.com/problems/set-matrix-zeroes/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Search a 2D Matrix",
    "difficulty": "Hard",
    "companies": [
      "Meta",
      "Microsoft"
    ],
    "link": "https://leetcode.com/problems/search-a-2d-matrix/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Sort Colors",
    "difficulty": "Medium",
    "companies": [
      "Amazon",
      "Google"
    ],
    "link": "https://leetcode.com/problems/sort-colors/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Minimum Window Substring",
    "difficulty": "Easy",
    "companies": [
      "Google",
      "Meta"
    ],
    "link": "https://leetcode.com/problems/minimum-window-substring/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Combinations",
    "difficulty": "Easy",
    "companies": [
      "Google",
      "Amazon"
    ],
    "link": "https://leetcode.com/problems/combinations/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Subsets",
    "difficulty": "Easy",
    "companies": [
      "Amazon",
      "Google"
    ],
    "link": "https://leetcode.com/problems/subsets/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Word Search",
    "difficulty": "Easy",
    "companies": [
      "Amazon",
      "Google"
    ],
    "link": "https://leetcode.com/problems/word-search/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Remove Duplicates from Sorted Array II",
    "difficulty": "Hard",
    "companies": [
      "Meta",
      "Microsoft"
    ],
    "link": "https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Search in Rotated Sorted Array II",
    "difficulty": "Medium",
    "companies": [
      "Microsoft",
      "Google"
    ],
    "link": "https://leetcode.com/problems/search-in-rotated-sorted-array-ii/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Remove Duplicates from Sorted List II",
    "difficulty": "Medium",
    "companies": [
      "Amazon",
      "Google"
    ],
    "link": "https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Remove Duplicates from Sorted List",
    "difficulty": "Hard",
    "companies": [
      "Google",
      "Microsoft"
    ],
    "link": "https://leetcode.com/problems/remove-duplicates-from-sorted-list/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Largest Rectangle in Histogram",
    "difficulty": "Medium",
    "companies": [
      "Amazon",
      "Meta"
    ],
    "link": "https://leetcode.com/problems/largest-rectangle-in-histogram/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Maximal Rectangle",
    "difficulty": "Medium",
    "companies": [
      "Meta",
      "Google"
    ],
    "link": "https://leetcode.com/problems/maximal-rectangle/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Partition List",
    "difficulty": "Hard",
    "companies": [
      "Amazon",
      "Google"
    ],
    "link": "https://leetcode.com/problems/partition-list/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Scramble String",
    "difficulty": "Easy",
    "companies": [
      "Meta",
      "Amazon"
    ],
    "link": "https://leetcode.com/problems/scramble-string/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Merge Sorted Array",
    "difficulty": "Medium",
    "companies": [
      "Amazon",
      "Google"
    ],
    "link": "https://leetcode.com/problems/merge-sorted-array/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Gray Code",
    "difficulty": "Hard",
    "companies": [
      "Meta",
      "Google"
    ],
    "link": "https://leetcode.com/problems/gray-code/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Subsets II",
    "difficulty": "Medium",
    "companies": [
      "Amazon",
      "Google"
    ],
    "link": "https://leetcode.com/problems/subsets-ii/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Decode Ways",
    "difficulty": "Hard",
    "companies": [
      "Microsoft",
      "Meta"
    ],
    "link": "https://leetcode.com/problems/decode-ways/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Reverse Linked List II",
    "difficulty": "Medium",
    "companies": [
      "Amazon",
      "Google"
    ],
    "link": "https://leetcode.com/problems/reverse-linked-list-ii/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Restore IP Addresses",
    "difficulty": "Medium",
    "companies": [
      "Meta",
      "Microsoft"
    ],
    "link": "https://leetcode.com/problems/restore-ip-addresses/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Binary Tree Inorder Traversal",
    "difficulty": "Medium",
    "companies": [
      "Amazon",
      "Meta"
    ],
    "link": "https://leetcode.com/problems/binary-tree-inorder-traversal/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Unique Binary Search Trees II",
    "difficulty": "Hard",
    "companies": [
      "Meta",
      "Microsoft"
    ],
    "link": "https://leetcode.com/problems/unique-binary-search-trees-ii/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Unique Binary Search Trees",
    "difficulty": "Medium",
    "companies": [
      "Google",
      "Meta"
    ],
    "link": "https://leetcode.com/problems/unique-binary-search-trees/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Interleaving String",
    "difficulty": "Medium",
    "companies": [
      "Google",
      "Amazon"
    ],
    "link": "https://leetcode.com/problems/interleaving-string/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Validate Binary Search Tree",
    "difficulty": "Easy",
    "companies": [
      "Meta",
      "Microsoft"
    ],
    "link": "https://leetcode.com/problems/validate-binary-search-tree/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Recover Binary Search Tree",
    "difficulty": "Medium",
    "companies": [
      "Meta",
      "Microsoft"
    ],
    "link": "https://leetcode.com/problems/recover-binary-search-tree/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Same Tree",
    "difficulty": "Hard",
    "companies": [
      "Amazon",
      "Google"
    ],
    "link": "https://leetcode.com/problems/same-tree/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Symmetric Tree",
    "difficulty": "Medium",
    "companies": [
      "Meta",
      "Microsoft"
    ],
    "link": "https://leetcode.com/problems/symmetric-tree/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Binary Tree Level Order Traversal",
    "difficulty": "Medium",
    "companies": [
      "Amazon",
      "Meta"
    ],
    "link": "https://leetcode.com/problems/binary-tree-level-order-traversal/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Binary Tree Zigzag Level Order Traversal",
    "difficulty": "Easy",
    "companies": [
      "Amazon",
      "Meta"
    ],
    "link": "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Maximum Depth of Binary Tree",
    "difficulty": "Hard",
    "companies": [
      "Meta",
      "Google"
    ],
    "link": "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Construct Binary Tree from Preorder and Inorder Traversal",
    "difficulty": "Hard",
    "companies": [
      "Microsoft",
      "Google"
    ],
    "link": "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Construct Binary Tree from Inorder and Postorder Traversal",
    "difficulty": "Hard",
    "companies": [
      "Meta",
      "Google"
    ],
    "link": "https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Binary Tree Level Order Traversal II",
    "difficulty": "Medium",
    "companies": [
      "Meta",
      "Microsoft"
    ],
    "link": "https://leetcode.com/problems/binary-tree-level-order-traversal-ii/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Convert Sorted Array to Binary Search Tree",
    "difficulty": "Medium",
    "companies": [
      "Amazon",
      "Meta"
    ],
    "link": "https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Convert Sorted List to Binary Search Tree",
    "difficulty": "Medium",
    "companies": [
      "Microsoft",
      "Meta"
    ],
    "link": "https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Balanced Binary Tree",
    "difficulty": "Medium",
    "companies": [
      "Google",
      "Microsoft"
    ],
    "link": "https://leetcode.com/problems/balanced-binary-tree/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Minimum Depth of Binary Tree",
    "difficulty": "Hard",
    "companies": [
      "Amazon",
      "Meta"
    ],
    "link": "https://leetcode.com/problems/minimum-depth-of-binary-tree/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Path Sum",
    "difficulty": "Medium",
    "companies": [
      "Google",
      "Microsoft"
    ],
    "link": "https://leetcode.com/problems/path-sum/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Path Sum II",
    "difficulty": "Easy",
    "companies": [
      "Google",
      "Amazon"
    ],
    "link": "https://leetcode.com/problems/path-sum-ii/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Flatten Binary Tree to Linked List",
    "difficulty": "Medium",
    "companies": [
      "Amazon",
      "Google"
    ],
    "link": "https://leetcode.com/problems/flatten-binary-tree-to-linked-list/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Distinct Subsequences",
    "difficulty": "Medium",
    "companies": [
      "Amazon",
      "Google"
    ],
    "link": "https://leetcode.com/problems/distinct-subsequences/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Populating Next Right Pointers in Each Node",
    "difficulty": "Hard",
    "companies": [
      "Meta",
      "Microsoft"
    ],
    "link": "https://leetcode.com/problems/populating-next-right-pointers-in-each-node/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Populating Next Right Pointers in Each Node II",
    "difficulty": "Medium",
    "companies": [
      "Amazon",
      "Google"
    ],
    "link": "https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Pascal's Triangle",
    "difficulty": "Medium",
    "companies": [
      "Meta",
      "Microsoft"
    ],
    "link": "https://leetcode.com/problems/pascal-s-triangle/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Pascal's Triangle II",
    "difficulty": "Easy",
    "companies": [
      "Meta",
      "Microsoft"
    ],
    "link": "https://leetcode.com/problems/pascal-s-triangle-ii/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Triangle",
    "difficulty": "Medium",
    "companies": [
      "Meta",
      "Microsoft"
    ],
    "link": "https://leetcode.com/problems/triangle/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Best Time to Buy and Sell Stock",
    "difficulty": "Easy",
    "companies": [
      "Amazon",
      "Google"
    ],
    "link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Best Time to Buy and Sell Stock II",
    "difficulty": "Easy",
    "companies": [
      "Microsoft",
      "Google"
    ],
    "link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Best Time to Buy and Sell Stock III",
    "difficulty": "Easy",
    "companies": [
      "Google",
      "Microsoft"
    ],
    "link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Binary Tree Maximum Path Sum",
    "difficulty": "Easy",
    "companies": [
      "Meta",
      "Google"
    ],
    "link": "https://leetcode.com/problems/binary-tree-maximum-path-sum/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Valid Palindrome",
    "difficulty": "Easy",
    "companies": [
      "Amazon",
      "Google"
    ],
    "link": "https://leetcode.com/problems/valid-palindrome/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Word Ladder II",
    "difficulty": "Medium",
    "companies": [
      "Meta",
      "Amazon"
    ],
    "link": "https://leetcode.com/problems/word-ladder-ii/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Word Ladder",
    "difficulty": "Hard",
    "companies": [
      "Microsoft",
      "Google"
    ],
    "link": "https://leetcode.com/problems/word-ladder/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Longest Consecutive Sequence",
    "difficulty": "Easy",
    "companies": [
      "Amazon",
      "Microsoft"
    ],
    "link": "https://leetcode.com/problems/longest-consecutive-sequence/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Sum Root to Leaf Numbers",
    "difficulty": "Easy",
    "companies": [
      "Microsoft",
      "Google"
    ],
    "link": "https://leetcode.com/problems/sum-root-to-leaf-numbers/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Surrounded Regions",
    "difficulty": "Medium",
    "companies": [
      "Meta",
      "Microsoft"
    ],
    "link": "https://leetcode.com/problems/surrounded-regions/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Palindrome Partitioning",
    "difficulty": "Easy",
    "companies": [
      "Amazon",
      "Google"
    ],
    "link": "https://leetcode.com/problems/palindrome-partitioning/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Palindrome Partitioning II",
    "difficulty": "Easy",
    "companies": [
      "Microsoft",
      "Meta"
    ],
    "link": "https://leetcode.com/problems/palindrome-partitioning-ii/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Clone Graph",
    "difficulty": "Medium",
    "companies": [
      "Amazon",
      "Google"
    ],
    "link": "https://leetcode.com/problems/clone-graph/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Gas Station",
    "difficulty": "Hard",
    "companies": [
      "Meta",
      "Amazon"
    ],
    "link": "https://leetcode.com/problems/gas-station/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Candy",
    "difficulty": "Medium",
    "companies": [
      "Amazon",
      "Google"
    ],
    "link": "https://leetcode.com/problems/candy/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Single Number",
    "difficulty": "Hard",
    "companies": [
      "Amazon",
      "Meta"
    ],
    "link": "https://leetcode.com/problems/single-number/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  },
  {
    "title": "Single Number II",
    "difficulty": "Hard",
    "companies": [
      "Amazon",
      "Google"
    ],
    "link": "https://leetcode.com/problems/single-number-ii/",
    "notes": "Important pattern problem. Practice carefully.",
    "isPremium": false
  }
];

const sheetsData = [
  {
    name: "Striver's A2Z DSA Sheet",
    slug: "striver-a2z",
    icon: "🔥",
    description: "The absolute gold standard for mastering DSA logically from basic to completely expert level spanning absolutely every pattern.",
    author: "TakeUForward",
    totalProblems: striverProblems.length,
    problems: striverProblems
  },
  {
    name: "NeetCode 150",
    slug: "neetcode-150",
    icon: "🧠",
    description: "The essential curated 150 problems guaranteeing complete coverage of literally all fundamental Data Structure interview architectures.",
    author: "NeetCode",
    totalProblems: neetcodeProblems.length,
    problems: neetcodeProblems
  }
];

const seedSheets = async () => {
  try {
    await Sheet.deleteMany({});
    await Sheet.insertMany(sheetsData);
    console.log(`✅ Seeded ${sheetsData.length} heavy DSA Sheets datasets successfully (${striverProblems.length} Striver, ${neetcodeProblems.length} Neetcode).`);
  } catch (err) {
    console.error('❌ Failed to seed highly dense DSA sheets:', err);
  }
};

module.exports = seedSheets;
