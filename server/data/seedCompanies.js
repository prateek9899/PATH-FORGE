const mongoose = require('mongoose');
const Company = require('../models/Company');

const createProblem = (title, difficulty, slugRoute, frequency, customGfg = null) => {
  const lcSlug = slugRoute.toLowerCase().split(' ').join('-');
  const gfgSlug = customGfg || slugRoute.toLowerCase().split(' ').join('-');
  return {
    title,
    difficulty,
    leetcodeLink: `https://leetcode.com/problems/${lcSlug}/`,
    gfgLink: `https://practice.geeksforgeeks.org/problems/${gfgSlug}/1`,
    frequency
  };
};

const companiesData = [
  {
    "name": "Google",
    "slug": "google",
    "logo": "🔍",
    "problemCount": 100,
    "tier": "FAANG",
    "problems": [
      {
        "title": "Pow(x, n)",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/pow-x-n/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/pow-x-n/1",
        "frequency": 98
      },
      {
        "title": "3Sum",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/3sum/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/3sum/1",
        "frequency": 98
      },
      {
        "title": "Remove Element",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/remove-element/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/remove-element/1",
        "frequency": 98
      },
      {
        "title": "Maximum Subarray",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/maximum-subarray/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/maximum-subarray/1",
        "frequency": 97
      },
      {
        "title": "Trapping Rain Water",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/trapping-rain-water/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/trapping-rain-water/1",
        "frequency": 95
      },
      {
        "title": "Restore IP Addresses",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/restore-ip-addresses/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/restore-ip-addresses/1",
        "frequency": 94
      },
      {
        "title": "Add Binary",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/add-binary/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/add-binary/1",
        "frequency": 94
      },
      {
        "title": "Binary Tree Maximum Path Sum",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/binary-tree-maximum-path-sum/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/binary-tree-maximum-path-sum/1",
        "frequency": 94
      },
      {
        "title": "Longest Valid Parentheses",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/longest-valid-parentheses/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/longest-valid-parentheses/1",
        "frequency": 93
      },
      {
        "title": "Jump Game II",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/jump-game-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/jump-game-ii/1",
        "frequency": 91
      },
      {
        "title": "Rotate Image",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/rotate-image/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/rotate-image/1",
        "frequency": 91
      },
      {
        "title": "Path Sum II",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/path-sum-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/path-sum-ii/1",
        "frequency": 90
      },
      {
        "title": "Length of Last Word",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/length-of-last-word/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/length-of-last-word/1",
        "frequency": 89
      },
      {
        "title": "Construct Binary Tree from Preorder and Inorder Traversal",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/construct-binary-tree-from-preorder-and-inorder-traversal/1",
        "frequency": 89
      },
      {
        "title": "Substring with Concatenation of All Words",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/substring-with-concatenation-of-all-words/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/substring-with-concatenation-of-all-words/1",
        "frequency": 88
      },
      {
        "title": "Valid Parentheses",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/valid-parentheses/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/valid-parentheses/1",
        "frequency": 88
      },
      {
        "title": "Flatten Binary Tree to Linked List",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/flatten-binary-tree-to-linked-list/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/flatten-binary-tree-to-linked-list/1",
        "frequency": 84
      },
      {
        "title": "Pascal's Triangle II",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/pascal-s-triangle-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/pascal-s-triangle-ii/1",
        "frequency": 84
      },
      {
        "title": "Unique Binary Search Trees",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/unique-binary-search-trees/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/unique-binary-search-trees/1",
        "frequency": 83
      },
      {
        "title": "Text Justification",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/text-justification/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/text-justification/1",
        "frequency": 83
      },
      {
        "title": "Simplify Path",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/simplify-path/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/simplify-path/1",
        "frequency": 83
      },
      {
        "title": "Recover Binary Search Tree",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/recover-binary-search-tree/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/recover-binary-search-tree/1",
        "frequency": 82
      },
      {
        "title": "Sum Root to Leaf Numbers",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/sum-root-to-leaf-numbers/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/sum-root-to-leaf-numbers/1",
        "frequency": 81
      },
      {
        "title": "Best Time to Buy and Sell Stock III",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/best-time-to-buy-and-sell-stock-iii/1",
        "frequency": 80
      },
      {
        "title": "Valid Sudoku",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/valid-sudoku/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/valid-sudoku/1",
        "frequency": 76
      },
      {
        "title": "Find the Index of the First Occurrence in a String",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/find-the-index-of-the-first-occurrence-in-a-string/1",
        "frequency": 74
      },
      {
        "title": "Binary Tree Level Order Traversal II",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/binary-tree-level-order-traversal-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/binary-tree-level-order-traversal-ii/1",
        "frequency": 74
      },
      {
        "title": "Plus One",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/plus-one/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/plus-one/1",
        "frequency": 73
      },
      {
        "title": "Permutations II",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/permutations-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/permutations-ii/1",
        "frequency": 73
      },
      {
        "title": "Interleaving String",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/interleaving-string/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/interleaving-string/1",
        "frequency": 73
      },
      {
        "title": "Next Permutation",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/next-permutation/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/next-permutation/1",
        "frequency": 73
      },
      {
        "title": "Sort Colors",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/sort-colors/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/sort-colors/1",
        "frequency": 72
      },
      {
        "title": "Remove Duplicates from Sorted List",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/remove-duplicates-from-sorted-list/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/remove-duplicates-from-sorted-list/1",
        "frequency": 70
      },
      {
        "title": "Sudoku Solver",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/sudoku-solver/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/sudoku-solver/1",
        "frequency": 70
      },
      {
        "title": "Same Tree",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/same-tree/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/same-tree/1",
        "frequency": 70
      },
      {
        "title": "Find First and Last Position of Element in Sorted Array",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/find-first-and-last-position-of-element-in-sorted-array/1",
        "frequency": 70
      },
      {
        "title": "Gas Station",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/gas-station/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/gas-station/1",
        "frequency": 68
      },
      {
        "title": "Search a 2D Matrix",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/search-a-2d-matrix/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/search-a-2d-matrix/1",
        "frequency": 68
      },
      {
        "title": "Climbing Stairs",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/climbing-stairs/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/climbing-stairs/1",
        "frequency": 67
      },
      {
        "title": "Merge k Sorted Lists",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/merge-k-sorted-lists/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/merge-k-sorted-lists/1",
        "frequency": 66
      },
      {
        "title": "Subsets",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/subsets/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/subsets/1",
        "frequency": 66
      },
      {
        "title": "Combination Sum II",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/combination-sum-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/combination-sum-ii/1",
        "frequency": 65
      },
      {
        "title": "Convert Sorted Array to Binary Search Tree",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/convert-sorted-array-to-binary-search-tree/1",
        "frequency": 64
      },
      {
        "title": "Scramble String",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/scramble-string/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/scramble-string/1",
        "frequency": 64
      },
      {
        "title": "Valid Palindrome",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/valid-palindrome/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/valid-palindrome/1",
        "frequency": 64
      },
      {
        "title": "Search Insert Position",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/search-insert-position/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/search-insert-position/1",
        "frequency": 63
      },
      {
        "title": "Search in Rotated Sorted Array II",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/search-in-rotated-sorted-array-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/search-in-rotated-sorted-array-ii/1",
        "frequency": 62
      },
      {
        "title": "Insert Interval",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/insert-interval/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/insert-interval/1",
        "frequency": 61
      },
      {
        "title": "Balanced Binary Tree",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/balanced-binary-tree/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/balanced-binary-tree/1",
        "frequency": 61
      },
      {
        "title": "Search in Rotated Sorted Array",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/search-in-rotated-sorted-array/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/search-in-rotated-sorted-array/1",
        "frequency": 59
      },
      {
        "title": "Combinations",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/combinations/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/combinations/1",
        "frequency": 58
      },
      {
        "title": "Best Time to Buy and Sell Stock",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/best-time-to-buy-and-sell-stock/1",
        "frequency": 58
      },
      {
        "title": "Reverse Nodes in k-Group",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/reverse-nodes-in-k-group/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/reverse-nodes-in-k-group/1",
        "frequency": 58
      },
      {
        "title": "Surrounded Regions",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/surrounded-regions/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/surrounded-regions/1",
        "frequency": 56
      },
      {
        "title": "Decode Ways",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/decode-ways/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/decode-ways/1",
        "frequency": 56
      },
      {
        "title": "Single Number II",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/single-number-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/single-number-ii/1",
        "frequency": 55
      },
      {
        "title": "Regular Expression Matching",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/regular-expression-matching/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/regular-expression-matching/1",
        "frequency": 55
      },
      {
        "title": "Integer to Roman",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/integer-to-roman/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/integer-to-roman/1",
        "frequency": 54
      },
      {
        "title": "Unique Binary Search Trees II",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/unique-binary-search-trees-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/unique-binary-search-trees-ii/1",
        "frequency": 53
      },
      {
        "title": "Roman to Integer",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/roman-to-integer/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/roman-to-integer/1",
        "frequency": 53
      },
      {
        "title": "Unique Paths",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/unique-paths/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/unique-paths/1",
        "frequency": 52
      },
      {
        "title": "Jump Game",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/jump-game/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/jump-game/1",
        "frequency": 52
      },
      {
        "title": "Validate Binary Search Tree",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/validate-binary-search-tree/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/validate-binary-search-tree/1",
        "frequency": 51
      },
      {
        "title": "Merge Sorted Array",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/merge-sorted-array/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/merge-sorted-array/1",
        "frequency": 51
      },
      {
        "title": "Construct Binary Tree from Inorder and Postorder Traversal",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/construct-binary-tree-from-inorder-and-postorder-traversal/1",
        "frequency": 48
      },
      {
        "title": "Container With Most Water",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/container-with-most-water/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/container-with-most-water/1",
        "frequency": 48
      },
      {
        "title": "Largest Rectangle in Histogram",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/largest-rectangle-in-histogram/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/largest-rectangle-in-histogram/1",
        "frequency": 47
      },
      {
        "title": "Edit Distance",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/edit-distance/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/edit-distance/1",
        "frequency": 46
      },
      {
        "title": "Clone Graph",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/clone-graph/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/clone-graph/1",
        "frequency": 45
      },
      {
        "title": "Populating Next Right Pointers in Each Node II",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/populating-next-right-pointers-in-each-node-ii/1",
        "frequency": 45
      },
      {
        "title": "N-Queens",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/n-queens/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/n-queens/1",
        "frequency": 45
      },
      {
        "title": "Swap Nodes in Pairs",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/swap-nodes-in-pairs/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/swap-nodes-in-pairs/1",
        "frequency": 45
      },
      {
        "title": "Rotate List",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/rotate-list/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/rotate-list/1",
        "frequency": 44
      },
      {
        "title": "Merge Intervals",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/merge-intervals/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/merge-intervals/1",
        "frequency": 44
      },
      {
        "title": "Longest Consecutive Sequence",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/longest-consecutive-sequence/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/longest-consecutive-sequence/1",
        "frequency": 39
      },
      {
        "title": "Longest Common Prefix",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/longest-common-prefix/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/longest-common-prefix/1",
        "frequency": 38
      },
      {
        "title": "Permutation Sequence",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/permutation-sequence/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/permutation-sequence/1",
        "frequency": 37
      },
      {
        "title": "Generate Parentheses",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/generate-parentheses/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/generate-parentheses/1",
        "frequency": 34
      },
      {
        "title": "Subsets II",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/subsets-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/subsets-ii/1",
        "frequency": 33
      },
      {
        "title": "4Sum",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/4sum/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/4sum/1",
        "frequency": 33
      },
      {
        "title": "Merge Two Sorted Lists",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/merge-two-sorted-lists/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/merge-two-sorted-lists/1",
        "frequency": 32
      },
      {
        "title": "Sqrt(x)",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/sqrt-x/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/sqrt-x/1",
        "frequency": 31
      },
      {
        "title": "Best Time to Buy and Sell Stock II",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/best-time-to-buy-and-sell-stock-ii/1",
        "frequency": 31
      },
      {
        "title": "Minimum Window Substring",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/minimum-window-substring/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/minimum-window-substring/1",
        "frequency": 30
      },
      {
        "title": "Path Sum",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/path-sum/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/path-sum/1",
        "frequency": 29
      },
      {
        "title": "String to Integer (atoi)",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/string-to-integer-atoi/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/string-to-integer-atoi/1",
        "frequency": 28
      },
      {
        "title": "First Missing Positive",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/first-missing-positive/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/first-missing-positive/1",
        "frequency": 27
      },
      {
        "title": "Convert Sorted List to Binary Search Tree",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/convert-sorted-list-to-binary-search-tree/1",
        "frequency": 27
      },
      {
        "title": "Remove Duplicates from Sorted Array",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/remove-duplicates-from-sorted-array/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/remove-duplicates-from-sorted-array/1",
        "frequency": 26
      },
      {
        "title": "Count and Say",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/count-and-say/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/count-and-say/1",
        "frequency": 26
      },
      {
        "title": "Binary Tree Inorder Traversal",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/binary-tree-inorder-traversal/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/binary-tree-inorder-traversal/1",
        "frequency": 25
      },
      {
        "title": "Partition List",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/partition-list/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/partition-list/1",
        "frequency": 24
      },
      {
        "title": "Reverse Integer",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/reverse-integer/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/reverse-integer/1",
        "frequency": 23
      },
      {
        "title": "Remove Duplicates from Sorted Array II",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/remove-duplicates-from-sorted-array-ii/1",
        "frequency": 23
      },
      {
        "title": "Word Search",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/word-search/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/word-search/1",
        "frequency": 23
      },
      {
        "title": "3Sum Closest",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/3sum-closest/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/3sum-closest/1",
        "frequency": 22
      },
      {
        "title": "Binary Tree Level Order Traversal",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/binary-tree-level-order-traversal/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/binary-tree-level-order-traversal/1",
        "frequency": 21
      },
      {
        "title": "Zigzag Conversion",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/zigzag-conversion/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/zigzag-conversion/1",
        "frequency": 20
      },
      {
        "title": "Combination Sum",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/combination-sum/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/combination-sum/1",
        "frequency": 20
      },
      {
        "title": "Maximal Rectangle",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/maximal-rectangle/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/maximal-rectangle/1",
        "frequency": 20
      }
    ]
  },
  {
    "name": "Amazon",
    "slug": "amazon",
    "logo": "📦",
    "problemCount": 100,
    "tier": "FAANG",
    "problems": [
      {
        "title": "Rotate List",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/rotate-list/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/rotate-list/1",
        "frequency": 98
      },
      {
        "title": "Distinct Subsequences",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/distinct-subsequences/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/distinct-subsequences/1",
        "frequency": 98
      },
      {
        "title": "Merge Two Sorted Lists",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/merge-two-sorted-lists/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/merge-two-sorted-lists/1",
        "frequency": 97
      },
      {
        "title": "Subsets",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/subsets/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/subsets/1",
        "frequency": 92
      },
      {
        "title": "Permutations II",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/permutations-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/permutations-ii/1",
        "frequency": 92
      },
      {
        "title": "Longest Common Prefix",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/longest-common-prefix/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/longest-common-prefix/1",
        "frequency": 89
      },
      {
        "title": "Permutations",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/permutations/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/permutations/1",
        "frequency": 88
      },
      {
        "title": "Plus One",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/plus-one/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/plus-one/1",
        "frequency": 87
      },
      {
        "title": "Valid Palindrome",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/valid-palindrome/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/valid-palindrome/1",
        "frequency": 87
      },
      {
        "title": "Merge Intervals",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/merge-intervals/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/merge-intervals/1",
        "frequency": 86
      },
      {
        "title": "Length of Last Word",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/length-of-last-word/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/length-of-last-word/1",
        "frequency": 85
      },
      {
        "title": "Add Binary",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/add-binary/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/add-binary/1",
        "frequency": 83
      },
      {
        "title": "Pascal's Triangle II",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/pascal-s-triangle-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/pascal-s-triangle-ii/1",
        "frequency": 82
      },
      {
        "title": "Valid Parentheses",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/valid-parentheses/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/valid-parentheses/1",
        "frequency": 81
      },
      {
        "title": "Decode Ways",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/decode-ways/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/decode-ways/1",
        "frequency": 81
      },
      {
        "title": "Generate Parentheses",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/generate-parentheses/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/generate-parentheses/1",
        "frequency": 81
      },
      {
        "title": "Spiral Matrix",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/spiral-matrix/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/spiral-matrix/1",
        "frequency": 80
      },
      {
        "title": "Find First and Last Position of Element in Sorted Array",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/find-first-and-last-position-of-element-in-sorted-array/1",
        "frequency": 80
      },
      {
        "title": "String to Integer (atoi)",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/string-to-integer-atoi/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/string-to-integer-atoi/1",
        "frequency": 80
      },
      {
        "title": "Set Matrix Zeroes",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/set-matrix-zeroes/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/set-matrix-zeroes/1",
        "frequency": 80
      },
      {
        "title": "Simplify Path",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/simplify-path/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/simplify-path/1",
        "frequency": 79
      },
      {
        "title": "Roman to Integer",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/roman-to-integer/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/roman-to-integer/1",
        "frequency": 78
      },
      {
        "title": "Triangle",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/triangle/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/triangle/1",
        "frequency": 78
      },
      {
        "title": "Longest Consecutive Sequence",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/longest-consecutive-sequence/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/longest-consecutive-sequence/1",
        "frequency": 77
      },
      {
        "title": "Two Sum",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/two-sum/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/two-sum/1",
        "frequency": 76
      },
      {
        "title": "Reverse Linked List II",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/reverse-linked-list-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/reverse-linked-list-ii/1",
        "frequency": 74
      },
      {
        "title": "Word Ladder II",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/word-ladder-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/word-ladder-ii/1",
        "frequency": 73
      },
      {
        "title": "Text Justification",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/text-justification/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/text-justification/1",
        "frequency": 73
      },
      {
        "title": "Trapping Rain Water",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/trapping-rain-water/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/trapping-rain-water/1",
        "frequency": 72
      },
      {
        "title": "Merge k Sorted Lists",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/merge-k-sorted-lists/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/merge-k-sorted-lists/1",
        "frequency": 72
      },
      {
        "title": "Binary Tree Maximum Path Sum",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/binary-tree-maximum-path-sum/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/binary-tree-maximum-path-sum/1",
        "frequency": 70
      },
      {
        "title": "Restore IP Addresses",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/restore-ip-addresses/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/restore-ip-addresses/1",
        "frequency": 68
      },
      {
        "title": "Convert Sorted Array to Binary Search Tree",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/convert-sorted-array-to-binary-search-tree/1",
        "frequency": 67
      },
      {
        "title": "Swap Nodes in Pairs",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/swap-nodes-in-pairs/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/swap-nodes-in-pairs/1",
        "frequency": 67
      },
      {
        "title": "Count and Say",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/count-and-say/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/count-and-say/1",
        "frequency": 66
      },
      {
        "title": "Palindrome Number",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/palindrome-number/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/palindrome-number/1",
        "frequency": 66
      },
      {
        "title": "Gray Code",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/gray-code/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/gray-code/1",
        "frequency": 65
      },
      {
        "title": "Climbing Stairs",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/climbing-stairs/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/climbing-stairs/1",
        "frequency": 64
      },
      {
        "title": "Remove Duplicates from Sorted List II",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/remove-duplicates-from-sorted-list-ii/1",
        "frequency": 64
      },
      {
        "title": "Longest Palindromic Substring",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/longest-palindromic-substring/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/longest-palindromic-substring/1",
        "frequency": 64
      },
      {
        "title": "Letter Combinations of a Phone Number",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/letter-combinations-of-a-phone-number/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/letter-combinations-of-a-phone-number/1",
        "frequency": 64
      },
      {
        "title": "Combination Sum",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/combination-sum/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/combination-sum/1",
        "frequency": 63
      },
      {
        "title": "Gas Station",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/gas-station/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/gas-station/1",
        "frequency": 63
      },
      {
        "title": "Pascal's Triangle",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/pascal-s-triangle/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/pascal-s-triangle/1",
        "frequency": 63
      },
      {
        "title": "Integer to Roman",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/integer-to-roman/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/integer-to-roman/1",
        "frequency": 63
      },
      {
        "title": "Palindrome Partitioning II",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/palindrome-partitioning-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/palindrome-partitioning-ii/1",
        "frequency": 62
      },
      {
        "title": "Edit Distance",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/edit-distance/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/edit-distance/1",
        "frequency": 61
      },
      {
        "title": "Unique Paths",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/unique-paths/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/unique-paths/1",
        "frequency": 61
      },
      {
        "title": "Search a 2D Matrix",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/search-a-2d-matrix/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/search-a-2d-matrix/1",
        "frequency": 61
      },
      {
        "title": "Symmetric Tree",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/symmetric-tree/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/symmetric-tree/1",
        "frequency": 61
      },
      {
        "title": "Maximal Rectangle",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/maximal-rectangle/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/maximal-rectangle/1",
        "frequency": 61
      },
      {
        "title": "Clone Graph",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/clone-graph/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/clone-graph/1",
        "frequency": 60
      },
      {
        "title": "Remove Duplicates from Sorted List",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/remove-duplicates-from-sorted-list/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/remove-duplicates-from-sorted-list/1",
        "frequency": 60
      },
      {
        "title": "Unique Paths II",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/unique-paths-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/unique-paths-ii/1",
        "frequency": 59
      },
      {
        "title": "Largest Rectangle in Histogram",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/largest-rectangle-in-histogram/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/largest-rectangle-in-histogram/1",
        "frequency": 58
      },
      {
        "title": "3Sum Closest",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/3sum-closest/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/3sum-closest/1",
        "frequency": 57
      },
      {
        "title": "Valid Number",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/valid-number/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/valid-number/1",
        "frequency": 57
      },
      {
        "title": "Binary Tree Inorder Traversal",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/binary-tree-inorder-traversal/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/binary-tree-inorder-traversal/1",
        "frequency": 56
      },
      {
        "title": "Permutation Sequence",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/permutation-sequence/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/permutation-sequence/1",
        "frequency": 55
      },
      {
        "title": "Container With Most Water",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/container-with-most-water/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/container-with-most-water/1",
        "frequency": 55
      },
      {
        "title": "Candy",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/candy/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/candy/1",
        "frequency": 54
      },
      {
        "title": "Path Sum",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/path-sum/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/path-sum/1",
        "frequency": 54
      },
      {
        "title": "Subsets II",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/subsets-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/subsets-ii/1",
        "frequency": 52
      },
      {
        "title": "Longest Valid Parentheses",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/longest-valid-parentheses/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/longest-valid-parentheses/1",
        "frequency": 52
      },
      {
        "title": "Add Two Numbers",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/add-two-numbers/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/add-two-numbers/1",
        "frequency": 51
      },
      {
        "title": "Find the Index of the First Occurrence in a String",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/find-the-index-of-the-first-occurrence-in-a-string/1",
        "frequency": 51
      },
      {
        "title": "N-Queens",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/n-queens/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/n-queens/1",
        "frequency": 51
      },
      {
        "title": "Jump Game II",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/jump-game-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/jump-game-ii/1",
        "frequency": 50
      },
      {
        "title": "Construct Binary Tree from Preorder and Inorder Traversal",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/construct-binary-tree-from-preorder-and-inorder-traversal/1",
        "frequency": 48
      },
      {
        "title": "Longest Substring Without Repeating Characters",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/longest-substring-without-repeating-characters/1",
        "frequency": 47
      },
      {
        "title": "Reverse Integer",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/reverse-integer/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/reverse-integer/1",
        "frequency": 44
      },
      {
        "title": "Zigzag Conversion",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/zigzag-conversion/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/zigzag-conversion/1",
        "frequency": 44
      },
      {
        "title": "Remove Duplicates from Sorted Array II",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/remove-duplicates-from-sorted-array-ii/1",
        "frequency": 44
      },
      {
        "title": "Search in Rotated Sorted Array II",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/search-in-rotated-sorted-array-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/search-in-rotated-sorted-array-ii/1",
        "frequency": 43
      },
      {
        "title": "Binary Tree Zigzag Level Order Traversal",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/binary-tree-zigzag-level-order-traversal/1",
        "frequency": 43
      },
      {
        "title": "Maximum Subarray",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/maximum-subarray/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/maximum-subarray/1",
        "frequency": 42
      },
      {
        "title": "Maximum Depth of Binary Tree",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/maximum-depth-of-binary-tree/1",
        "frequency": 42
      },
      {
        "title": "Flatten Binary Tree to Linked List",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/flatten-binary-tree-to-linked-list/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/flatten-binary-tree-to-linked-list/1",
        "frequency": 42
      },
      {
        "title": "Recover Binary Search Tree",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/recover-binary-search-tree/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/recover-binary-search-tree/1",
        "frequency": 41
      },
      {
        "title": "Word Ladder",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/word-ladder/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/word-ladder/1",
        "frequency": 40
      },
      {
        "title": "Reverse Nodes in k-Group",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/reverse-nodes-in-k-group/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/reverse-nodes-in-k-group/1",
        "frequency": 36
      },
      {
        "title": "Sudoku Solver",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/sudoku-solver/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/sudoku-solver/1",
        "frequency": 36
      },
      {
        "title": "Next Permutation",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/next-permutation/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/next-permutation/1",
        "frequency": 35
      },
      {
        "title": "Spiral Matrix II",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/spiral-matrix-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/spiral-matrix-ii/1",
        "frequency": 34
      },
      {
        "title": "Median of Two Sorted Arrays",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/median-of-two-sorted-arrays/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/median-of-two-sorted-arrays/1",
        "frequency": 34
      },
      {
        "title": "Scramble String",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/scramble-string/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/scramble-string/1",
        "frequency": 33
      },
      {
        "title": "Search in Rotated Sorted Array",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/search-in-rotated-sorted-array/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/search-in-rotated-sorted-array/1",
        "frequency": 33
      },
      {
        "title": "Populating Next Right Pointers in Each Node II",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/populating-next-right-pointers-in-each-node-ii/1",
        "frequency": 32
      },
      {
        "title": "Search Insert Position",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/search-insert-position/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/search-insert-position/1",
        "frequency": 30
      },
      {
        "title": "Single Number",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/single-number/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/single-number/1",
        "frequency": 29
      },
      {
        "title": "3Sum",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/3sum/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/3sum/1",
        "frequency": 29
      },
      {
        "title": "Divide Two Integers",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/divide-two-integers/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/divide-two-integers/1",
        "frequency": 28
      },
      {
        "title": "Same Tree",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/same-tree/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/same-tree/1",
        "frequency": 28
      },
      {
        "title": "Multiply Strings",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/multiply-strings/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/multiply-strings/1",
        "frequency": 28
      },
      {
        "title": "Best Time to Buy and Sell Stock II",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/best-time-to-buy-and-sell-stock-ii/1",
        "frequency": 28
      },
      {
        "title": "Sum Root to Leaf Numbers",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/sum-root-to-leaf-numbers/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/sum-root-to-leaf-numbers/1",
        "frequency": 27
      },
      {
        "title": "Pow(x, n)",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/pow-x-n/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/pow-x-n/1",
        "frequency": 27
      },
      {
        "title": "Best Time to Buy and Sell Stock",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/best-time-to-buy-and-sell-stock/1",
        "frequency": 27
      },
      {
        "title": "Convert Sorted List to Binary Search Tree",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/convert-sorted-list-to-binary-search-tree/1",
        "frequency": 23
      },
      {
        "title": "Insert Interval",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/insert-interval/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/insert-interval/1",
        "frequency": 23
      }
    ]
  },
  {
    "name": "Microsoft",
    "slug": "microsoft",
    "logo": "🪟",
    "problemCount": 100,
    "tier": "FAANG",
    "problems": [
      {
        "title": "Path Sum II",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/path-sum-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/path-sum-ii/1",
        "frequency": 99
      },
      {
        "title": "Remove Element",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/remove-element/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/remove-element/1",
        "frequency": 99
      },
      {
        "title": "Minimum Window Substring",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/minimum-window-substring/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/minimum-window-substring/1",
        "frequency": 98
      },
      {
        "title": "Sum Root to Leaf Numbers",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/sum-root-to-leaf-numbers/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/sum-root-to-leaf-numbers/1",
        "frequency": 95
      },
      {
        "title": "Generate Parentheses",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/generate-parentheses/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/generate-parentheses/1",
        "frequency": 93
      },
      {
        "title": "Path Sum",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/path-sum/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/path-sum/1",
        "frequency": 93
      },
      {
        "title": "Populating Next Right Pointers in Each Node II",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/populating-next-right-pointers-in-each-node-ii/1",
        "frequency": 93
      },
      {
        "title": "Combinations",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/combinations/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/combinations/1",
        "frequency": 92
      },
      {
        "title": "Surrounded Regions",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/surrounded-regions/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/surrounded-regions/1",
        "frequency": 92
      },
      {
        "title": "Convert Sorted List to Binary Search Tree",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/convert-sorted-list-to-binary-search-tree/1",
        "frequency": 92
      },
      {
        "title": "Rotate Image",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/rotate-image/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/rotate-image/1",
        "frequency": 92
      },
      {
        "title": "Combination Sum II",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/combination-sum-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/combination-sum-ii/1",
        "frequency": 91
      },
      {
        "title": "Remove Duplicates from Sorted List II",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/remove-duplicates-from-sorted-list-ii/1",
        "frequency": 91
      },
      {
        "title": "Largest Rectangle in Histogram",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/largest-rectangle-in-histogram/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/largest-rectangle-in-histogram/1",
        "frequency": 90
      },
      {
        "title": "Permutation Sequence",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/permutation-sequence/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/permutation-sequence/1",
        "frequency": 90
      },
      {
        "title": "Two Sum",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/two-sum/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/two-sum/1",
        "frequency": 89
      },
      {
        "title": "Remove Duplicates from Sorted Array",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/remove-duplicates-from-sorted-array/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/remove-duplicates-from-sorted-array/1",
        "frequency": 89
      },
      {
        "title": "Longest Valid Parentheses",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/longest-valid-parentheses/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/longest-valid-parentheses/1",
        "frequency": 84
      },
      {
        "title": "Find First and Last Position of Element in Sorted Array",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/find-first-and-last-position-of-element-in-sorted-array/1",
        "frequency": 84
      },
      {
        "title": "Add Two Numbers",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/add-two-numbers/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/add-two-numbers/1",
        "frequency": 83
      },
      {
        "title": "N-Queens II",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/n-queens-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/n-queens-ii/1",
        "frequency": 82
      },
      {
        "title": "Word Search",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/word-search/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/word-search/1",
        "frequency": 81
      },
      {
        "title": "Merge Intervals",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/merge-intervals/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/merge-intervals/1",
        "frequency": 81
      },
      {
        "title": "Pow(x, n)",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/pow-x-n/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/pow-x-n/1",
        "frequency": 81
      },
      {
        "title": "Combination Sum",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/combination-sum/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/combination-sum/1",
        "frequency": 77
      },
      {
        "title": "Next Permutation",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/next-permutation/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/next-permutation/1",
        "frequency": 77
      },
      {
        "title": "Zigzag Conversion",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/zigzag-conversion/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/zigzag-conversion/1",
        "frequency": 76
      },
      {
        "title": "Unique Paths II",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/unique-paths-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/unique-paths-ii/1",
        "frequency": 76
      },
      {
        "title": "Multiply Strings",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/multiply-strings/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/multiply-strings/1",
        "frequency": 75
      },
      {
        "title": "Remove Duplicates from Sorted Array II",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/remove-duplicates-from-sorted-array-ii/1",
        "frequency": 75
      },
      {
        "title": "Roman to Integer",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/roman-to-integer/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/roman-to-integer/1",
        "frequency": 75
      },
      {
        "title": "3Sum Closest",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/3sum-closest/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/3sum-closest/1",
        "frequency": 74
      },
      {
        "title": "Restore IP Addresses",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/restore-ip-addresses/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/restore-ip-addresses/1",
        "frequency": 74
      },
      {
        "title": "Decode Ways",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/decode-ways/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/decode-ways/1",
        "frequency": 73
      },
      {
        "title": "3Sum",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/3sum/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/3sum/1",
        "frequency": 72
      },
      {
        "title": "Minimum Path Sum",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/minimum-path-sum/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/minimum-path-sum/1",
        "frequency": 71
      },
      {
        "title": "Maximum Subarray",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/maximum-subarray/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/maximum-subarray/1",
        "frequency": 71
      },
      {
        "title": "Minimum Depth of Binary Tree",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/minimum-depth-of-binary-tree/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/minimum-depth-of-binary-tree/1",
        "frequency": 71
      },
      {
        "title": "Spiral Matrix II",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/spiral-matrix-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/spiral-matrix-ii/1",
        "frequency": 70
      },
      {
        "title": "Subsets II",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/subsets-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/subsets-ii/1",
        "frequency": 70
      },
      {
        "title": "Subsets",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/subsets/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/subsets/1",
        "frequency": 69
      },
      {
        "title": "Single Number",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/single-number/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/single-number/1",
        "frequency": 67
      },
      {
        "title": "Palindrome Partitioning",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/palindrome-partitioning/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/palindrome-partitioning/1",
        "frequency": 66
      },
      {
        "title": "Maximal Rectangle",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/maximal-rectangle/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/maximal-rectangle/1",
        "frequency": 63
      },
      {
        "title": "Length of Last Word",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/length-of-last-word/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/length-of-last-word/1",
        "frequency": 62
      },
      {
        "title": "First Missing Positive",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/first-missing-positive/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/first-missing-positive/1",
        "frequency": 62
      },
      {
        "title": "Climbing Stairs",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/climbing-stairs/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/climbing-stairs/1",
        "frequency": 60
      },
      {
        "title": "N-Queens",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/n-queens/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/n-queens/1",
        "frequency": 60
      },
      {
        "title": "4Sum",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/4sum/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/4sum/1",
        "frequency": 59
      },
      {
        "title": "Candy",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/candy/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/candy/1",
        "frequency": 55
      },
      {
        "title": "Permutations II",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/permutations-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/permutations-ii/1",
        "frequency": 53
      },
      {
        "title": "Longest Common Prefix",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/longest-common-prefix/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/longest-common-prefix/1",
        "frequency": 53
      },
      {
        "title": "Merge k Sorted Lists",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/merge-k-sorted-lists/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/merge-k-sorted-lists/1",
        "frequency": 53
      },
      {
        "title": "Search Insert Position",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/search-insert-position/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/search-insert-position/1",
        "frequency": 52
      },
      {
        "title": "Word Ladder",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/word-ladder/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/word-ladder/1",
        "frequency": 52
      },
      {
        "title": "Group Anagrams",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/group-anagrams/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/group-anagrams/1",
        "frequency": 50
      },
      {
        "title": "Jump Game",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/jump-game/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/jump-game/1",
        "frequency": 50
      },
      {
        "title": "Flatten Binary Tree to Linked List",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/flatten-binary-tree-to-linked-list/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/flatten-binary-tree-to-linked-list/1",
        "frequency": 48
      },
      {
        "title": "Rotate List",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/rotate-list/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/rotate-list/1",
        "frequency": 48
      },
      {
        "title": "Find the Index of the First Occurrence in a String",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/find-the-index-of-the-first-occurrence-in-a-string/1",
        "frequency": 48
      },
      {
        "title": "Plus One",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/plus-one/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/plus-one/1",
        "frequency": 48
      },
      {
        "title": "Merge Two Sorted Lists",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/merge-two-sorted-lists/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/merge-two-sorted-lists/1",
        "frequency": 48
      },
      {
        "title": "Letter Combinations of a Phone Number",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/letter-combinations-of-a-phone-number/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/letter-combinations-of-a-phone-number/1",
        "frequency": 48
      },
      {
        "title": "Longest Palindromic Substring",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/longest-palindromic-substring/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/longest-palindromic-substring/1",
        "frequency": 46
      },
      {
        "title": "Swap Nodes in Pairs",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/swap-nodes-in-pairs/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/swap-nodes-in-pairs/1",
        "frequency": 46
      },
      {
        "title": "Valid Number",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/valid-number/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/valid-number/1",
        "frequency": 45
      },
      {
        "title": "Pascal's Triangle II",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/pascal-s-triangle-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/pascal-s-triangle-ii/1",
        "frequency": 45
      },
      {
        "title": "Binary Tree Level Order Traversal",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/binary-tree-level-order-traversal/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/binary-tree-level-order-traversal/1",
        "frequency": 45
      },
      {
        "title": "Validate Binary Search Tree",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/validate-binary-search-tree/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/validate-binary-search-tree/1",
        "frequency": 45
      },
      {
        "title": "Search in Rotated Sorted Array",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/search-in-rotated-sorted-array/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/search-in-rotated-sorted-array/1",
        "frequency": 44
      },
      {
        "title": "Same Tree",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/same-tree/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/same-tree/1",
        "frequency": 43
      },
      {
        "title": "Remove Duplicates from Sorted List",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/remove-duplicates-from-sorted-list/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/remove-duplicates-from-sorted-list/1",
        "frequency": 43
      },
      {
        "title": "Divide Two Integers",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/divide-two-integers/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/divide-two-integers/1",
        "frequency": 42
      },
      {
        "title": "Pascal's Triangle",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/pascal-s-triangle/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/pascal-s-triangle/1",
        "frequency": 42
      },
      {
        "title": "Gray Code",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/gray-code/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/gray-code/1",
        "frequency": 41
      },
      {
        "title": "Maximum Depth of Binary Tree",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/maximum-depth-of-binary-tree/1",
        "frequency": 40
      },
      {
        "title": "Sqrt(x)",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/sqrt-x/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/sqrt-x/1",
        "frequency": 39
      },
      {
        "title": "Reverse Integer",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/reverse-integer/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/reverse-integer/1",
        "frequency": 38
      },
      {
        "title": "Search a 2D Matrix",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/search-a-2d-matrix/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/search-a-2d-matrix/1",
        "frequency": 36
      },
      {
        "title": "Median of Two Sorted Arrays",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/median-of-two-sorted-arrays/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/median-of-two-sorted-arrays/1",
        "frequency": 35
      },
      {
        "title": "Clone Graph",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/clone-graph/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/clone-graph/1",
        "frequency": 35
      },
      {
        "title": "Wildcard Matching",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/wildcard-matching/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/wildcard-matching/1",
        "frequency": 34
      },
      {
        "title": "Set Matrix Zeroes",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/set-matrix-zeroes/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/set-matrix-zeroes/1",
        "frequency": 34
      },
      {
        "title": "Longest Substring Without Repeating Characters",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/longest-substring-without-repeating-characters/1",
        "frequency": 34
      },
      {
        "title": "Sudoku Solver",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/sudoku-solver/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/sudoku-solver/1",
        "frequency": 33
      },
      {
        "title": "Count and Say",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/count-and-say/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/count-and-say/1",
        "frequency": 33
      },
      {
        "title": "Spiral Matrix",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/spiral-matrix/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/spiral-matrix/1",
        "frequency": 32
      },
      {
        "title": "Merge Sorted Array",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/merge-sorted-array/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/merge-sorted-array/1",
        "frequency": 32
      },
      {
        "title": "Balanced Binary Tree",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/balanced-binary-tree/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/balanced-binary-tree/1",
        "frequency": 32
      },
      {
        "title": "Add Binary",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/add-binary/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/add-binary/1",
        "frequency": 31
      },
      {
        "title": "Reverse Linked List II",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/reverse-linked-list-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/reverse-linked-list-ii/1",
        "frequency": 30
      },
      {
        "title": "Valid Sudoku",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/valid-sudoku/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/valid-sudoku/1",
        "frequency": 29
      },
      {
        "title": "Partition List",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/partition-list/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/partition-list/1",
        "frequency": 29
      },
      {
        "title": "Trapping Rain Water",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/trapping-rain-water/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/trapping-rain-water/1",
        "frequency": 27
      },
      {
        "title": "Unique Paths",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/unique-paths/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/unique-paths/1",
        "frequency": 24
      },
      {
        "title": "Interleaving String",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/interleaving-string/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/interleaving-string/1",
        "frequency": 24
      },
      {
        "title": "Binary Tree Maximum Path Sum",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/binary-tree-maximum-path-sum/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/binary-tree-maximum-path-sum/1",
        "frequency": 24
      },
      {
        "title": "String to Integer (atoi)",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/string-to-integer-atoi/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/string-to-integer-atoi/1",
        "frequency": 22
      },
      {
        "title": "Unique Binary Search Trees II",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/unique-binary-search-trees-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/unique-binary-search-trees-ii/1",
        "frequency": 21
      },
      {
        "title": "Construct Binary Tree from Preorder and Inorder Traversal",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/construct-binary-tree-from-preorder-and-inorder-traversal/1",
        "frequency": 20
      }
    ]
  },
  {
    "name": "Meta",
    "slug": "meta",
    "logo": "♾️",
    "problemCount": 100,
    "tier": "FAANG",
    "problems": [
      {
        "title": "Best Time to Buy and Sell Stock",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/best-time-to-buy-and-sell-stock/1",
        "frequency": 99
      },
      {
        "title": "Two Sum",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/two-sum/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/two-sum/1",
        "frequency": 97
      },
      {
        "title": "Rotate List",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/rotate-list/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/rotate-list/1",
        "frequency": 97
      },
      {
        "title": "Minimum Depth of Binary Tree",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/minimum-depth-of-binary-tree/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/minimum-depth-of-binary-tree/1",
        "frequency": 97
      },
      {
        "title": "Merge Intervals",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/merge-intervals/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/merge-intervals/1",
        "frequency": 96
      },
      {
        "title": "Integer to Roman",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/integer-to-roman/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/integer-to-roman/1",
        "frequency": 96
      },
      {
        "title": "Remove Element",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/remove-element/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/remove-element/1",
        "frequency": 95
      },
      {
        "title": "Search in Rotated Sorted Array II",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/search-in-rotated-sorted-array-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/search-in-rotated-sorted-array-ii/1",
        "frequency": 95
      },
      {
        "title": "Remove Nth Node From End of List",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/remove-nth-node-from-end-of-list/1",
        "frequency": 95
      },
      {
        "title": "N-Queens",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/n-queens/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/n-queens/1",
        "frequency": 95
      },
      {
        "title": "Palindrome Partitioning",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/palindrome-partitioning/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/palindrome-partitioning/1",
        "frequency": 95
      },
      {
        "title": "Simplify Path",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/simplify-path/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/simplify-path/1",
        "frequency": 90
      },
      {
        "title": "Pow(x, n)",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/pow-x-n/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/pow-x-n/1",
        "frequency": 90
      },
      {
        "title": "Path Sum",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/path-sum/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/path-sum/1",
        "frequency": 90
      },
      {
        "title": "Insert Interval",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/insert-interval/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/insert-interval/1",
        "frequency": 89
      },
      {
        "title": "Clone Graph",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/clone-graph/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/clone-graph/1",
        "frequency": 88
      },
      {
        "title": "Unique Paths",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/unique-paths/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/unique-paths/1",
        "frequency": 87
      },
      {
        "title": "Median of Two Sorted Arrays",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/median-of-two-sorted-arrays/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/median-of-two-sorted-arrays/1",
        "frequency": 86
      },
      {
        "title": "Roman to Integer",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/roman-to-integer/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/roman-to-integer/1",
        "frequency": 84
      },
      {
        "title": "Reverse Linked List II",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/reverse-linked-list-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/reverse-linked-list-ii/1",
        "frequency": 84
      },
      {
        "title": "Edit Distance",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/edit-distance/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/edit-distance/1",
        "frequency": 82
      },
      {
        "title": "Maximal Rectangle",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/maximal-rectangle/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/maximal-rectangle/1",
        "frequency": 82
      },
      {
        "title": "Jump Game",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/jump-game/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/jump-game/1",
        "frequency": 81
      },
      {
        "title": "Regular Expression Matching",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/regular-expression-matching/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/regular-expression-matching/1",
        "frequency": 81
      },
      {
        "title": "Convert Sorted Array to Binary Search Tree",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/convert-sorted-array-to-binary-search-tree/1",
        "frequency": 80
      },
      {
        "title": "Reverse Integer",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/reverse-integer/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/reverse-integer/1",
        "frequency": 78
      },
      {
        "title": "Trapping Rain Water",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/trapping-rain-water/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/trapping-rain-water/1",
        "frequency": 77
      },
      {
        "title": "Combinations",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/combinations/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/combinations/1",
        "frequency": 77
      },
      {
        "title": "Triangle",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/triangle/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/triangle/1",
        "frequency": 76
      },
      {
        "title": "Search a 2D Matrix",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/search-a-2d-matrix/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/search-a-2d-matrix/1",
        "frequency": 75
      },
      {
        "title": "Single Number",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/single-number/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/single-number/1",
        "frequency": 74
      },
      {
        "title": "Find First and Last Position of Element in Sorted Array",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/find-first-and-last-position-of-element-in-sorted-array/1",
        "frequency": 72
      },
      {
        "title": "Count and Say",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/count-and-say/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/count-and-say/1",
        "frequency": 72
      },
      {
        "title": "Swap Nodes in Pairs",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/swap-nodes-in-pairs/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/swap-nodes-in-pairs/1",
        "frequency": 70
      },
      {
        "title": "Balanced Binary Tree",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/balanced-binary-tree/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/balanced-binary-tree/1",
        "frequency": 68
      },
      {
        "title": "Permutation Sequence",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/permutation-sequence/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/permutation-sequence/1",
        "frequency": 67
      },
      {
        "title": "Maximum Depth of Binary Tree",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/maximum-depth-of-binary-tree/1",
        "frequency": 66
      },
      {
        "title": "Path Sum II",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/path-sum-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/path-sum-ii/1",
        "frequency": 66
      },
      {
        "title": "Word Search",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/word-search/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/word-search/1",
        "frequency": 65
      },
      {
        "title": "Climbing Stairs",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/climbing-stairs/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/climbing-stairs/1",
        "frequency": 65
      },
      {
        "title": "Convert Sorted List to Binary Search Tree",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/convert-sorted-list-to-binary-search-tree/1",
        "frequency": 65
      },
      {
        "title": "Validate Binary Search Tree",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/validate-binary-search-tree/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/validate-binary-search-tree/1",
        "frequency": 64
      },
      {
        "title": "Merge Sorted Array",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/merge-sorted-array/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/merge-sorted-array/1",
        "frequency": 63
      },
      {
        "title": "Sum Root to Leaf Numbers",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/sum-root-to-leaf-numbers/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/sum-root-to-leaf-numbers/1",
        "frequency": 63
      },
      {
        "title": "Sort Colors",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/sort-colors/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/sort-colors/1",
        "frequency": 62
      },
      {
        "title": "Recover Binary Search Tree",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/recover-binary-search-tree/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/recover-binary-search-tree/1",
        "frequency": 62
      },
      {
        "title": "Remove Duplicates from Sorted List",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/remove-duplicates-from-sorted-list/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/remove-duplicates-from-sorted-list/1",
        "frequency": 60
      },
      {
        "title": "Populating Next Right Pointers in Each Node",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/populating-next-right-pointers-in-each-node/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/populating-next-right-pointers-in-each-node/1",
        "frequency": 60
      },
      {
        "title": "Best Time to Buy and Sell Stock III",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/best-time-to-buy-and-sell-stock-iii/1",
        "frequency": 58
      },
      {
        "title": "Palindrome Partitioning II",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/palindrome-partitioning-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/palindrome-partitioning-ii/1",
        "frequency": 57
      },
      {
        "title": "Valid Parentheses",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/valid-parentheses/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/valid-parentheses/1",
        "frequency": 57
      },
      {
        "title": "Longest Palindromic Substring",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/longest-palindromic-substring/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/longest-palindromic-substring/1",
        "frequency": 57
      },
      {
        "title": "Plus One",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/plus-one/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/plus-one/1",
        "frequency": 57
      },
      {
        "title": "Unique Binary Search Trees II",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/unique-binary-search-trees-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/unique-binary-search-trees-ii/1",
        "frequency": 56
      },
      {
        "title": "Candy",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/candy/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/candy/1",
        "frequency": 56
      },
      {
        "title": "Remove Duplicates from Sorted Array",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/remove-duplicates-from-sorted-array/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/remove-duplicates-from-sorted-array/1",
        "frequency": 55
      },
      {
        "title": "Multiply Strings",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/multiply-strings/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/multiply-strings/1",
        "frequency": 54
      },
      {
        "title": "Generate Parentheses",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/generate-parentheses/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/generate-parentheses/1",
        "frequency": 54
      },
      {
        "title": "Reverse Nodes in k-Group",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/reverse-nodes-in-k-group/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/reverse-nodes-in-k-group/1",
        "frequency": 53
      },
      {
        "title": "Zigzag Conversion",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/zigzag-conversion/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/zigzag-conversion/1",
        "frequency": 53
      },
      {
        "title": "Best Time to Buy and Sell Stock II",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/best-time-to-buy-and-sell-stock-ii/1",
        "frequency": 53
      },
      {
        "title": "Partition List",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/partition-list/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/partition-list/1",
        "frequency": 52
      },
      {
        "title": "Add Two Numbers",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/add-two-numbers/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/add-two-numbers/1",
        "frequency": 51
      },
      {
        "title": "Binary Tree Zigzag Level Order Traversal",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/binary-tree-zigzag-level-order-traversal/1",
        "frequency": 51
      },
      {
        "title": "Subsets",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/subsets/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/subsets/1",
        "frequency": 51
      },
      {
        "title": "Longest Consecutive Sequence",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/longest-consecutive-sequence/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/longest-consecutive-sequence/1",
        "frequency": 51
      },
      {
        "title": "First Missing Positive",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/first-missing-positive/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/first-missing-positive/1",
        "frequency": 50
      },
      {
        "title": "4Sum",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/4sum/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/4sum/1",
        "frequency": 48
      },
      {
        "title": "Add Binary",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/add-binary/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/add-binary/1",
        "frequency": 47
      },
      {
        "title": "Merge Two Sorted Lists",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/merge-two-sorted-lists/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/merge-two-sorted-lists/1",
        "frequency": 45
      },
      {
        "title": "Gray Code",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/gray-code/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/gray-code/1",
        "frequency": 44
      },
      {
        "title": "Longest Common Prefix",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/longest-common-prefix/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/longest-common-prefix/1",
        "frequency": 44
      },
      {
        "title": "Remove Duplicates from Sorted List II",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/remove-duplicates-from-sorted-list-ii/1",
        "frequency": 43
      },
      {
        "title": "Interleaving String",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/interleaving-string/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/interleaving-string/1",
        "frequency": 42
      },
      {
        "title": "Set Matrix Zeroes",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/set-matrix-zeroes/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/set-matrix-zeroes/1",
        "frequency": 41
      },
      {
        "title": "Valid Number",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/valid-number/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/valid-number/1",
        "frequency": 41
      },
      {
        "title": "Merge k Sorted Lists",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/merge-k-sorted-lists/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/merge-k-sorted-lists/1",
        "frequency": 40
      },
      {
        "title": "Single Number II",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/single-number-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/single-number-ii/1",
        "frequency": 40
      },
      {
        "title": "Remove Duplicates from Sorted Array II",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/remove-duplicates-from-sorted-array-ii/1",
        "frequency": 39
      },
      {
        "title": "Divide Two Integers",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/divide-two-integers/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/divide-two-integers/1",
        "frequency": 39
      },
      {
        "title": "Flatten Binary Tree to Linked List",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/flatten-binary-tree-to-linked-list/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/flatten-binary-tree-to-linked-list/1",
        "frequency": 39
      },
      {
        "title": "Combination Sum",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/combination-sum/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/combination-sum/1",
        "frequency": 38
      },
      {
        "title": "Wildcard Matching",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/wildcard-matching/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/wildcard-matching/1",
        "frequency": 37
      },
      {
        "title": "Surrounded Regions",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/surrounded-regions/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/surrounded-regions/1",
        "frequency": 37
      },
      {
        "title": "Group Anagrams",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/group-anagrams/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/group-anagrams/1",
        "frequency": 37
      },
      {
        "title": "Maximum Subarray",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/maximum-subarray/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/maximum-subarray/1",
        "frequency": 37
      },
      {
        "title": "Unique Paths II",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/unique-paths-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/unique-paths-ii/1",
        "frequency": 36
      },
      {
        "title": "3Sum Closest",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/3sum-closest/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/3sum-closest/1",
        "frequency": 35
      },
      {
        "title": "Construct Binary Tree from Inorder and Postorder Traversal",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/construct-binary-tree-from-inorder-and-postorder-traversal/1",
        "frequency": 34
      },
      {
        "title": "Construct Binary Tree from Preorder and Inorder Traversal",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/construct-binary-tree-from-preorder-and-inorder-traversal/1",
        "frequency": 33
      },
      {
        "title": "Jump Game II",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/jump-game-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/jump-game-ii/1",
        "frequency": 32
      },
      {
        "title": "Spiral Matrix II",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/spiral-matrix-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/spiral-matrix-ii/1",
        "frequency": 31
      },
      {
        "title": "Binary Tree Level Order Traversal II",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/binary-tree-level-order-traversal-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/binary-tree-level-order-traversal-ii/1",
        "frequency": 31
      },
      {
        "title": "Permutations II",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/permutations-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/permutations-ii/1",
        "frequency": 28
      },
      {
        "title": "Search Insert Position",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/search-insert-position/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/search-insert-position/1",
        "frequency": 27
      },
      {
        "title": "Combination Sum II",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/combination-sum-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/combination-sum-ii/1",
        "frequency": 27
      },
      {
        "title": "String to Integer (atoi)",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/string-to-integer-atoi/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/string-to-integer-atoi/1",
        "frequency": 27
      },
      {
        "title": "Container With Most Water",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/container-with-most-water/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/container-with-most-water/1",
        "frequency": 27
      },
      {
        "title": "Longest Valid Parentheses",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/longest-valid-parentheses/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/longest-valid-parentheses/1",
        "frequency": 27
      },
      {
        "title": "Binary Tree Inorder Traversal",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/binary-tree-inorder-traversal/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/binary-tree-inorder-traversal/1",
        "frequency": 24
      }
    ]
  },
  {
    "name": "Apple",
    "slug": "apple",
    "logo": "🍎",
    "problemCount": 100,
    "tier": "FAANG",
    "problems": [
      {
        "title": "Partition List",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/partition-list/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/partition-list/1",
        "frequency": 99
      },
      {
        "title": "Spiral Matrix II",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/spiral-matrix-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/spiral-matrix-ii/1",
        "frequency": 98
      },
      {
        "title": "Construct Binary Tree from Preorder and Inorder Traversal",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/construct-binary-tree-from-preorder-and-inorder-traversal/1",
        "frequency": 98
      },
      {
        "title": "Valid Sudoku",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/valid-sudoku/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/valid-sudoku/1",
        "frequency": 95
      },
      {
        "title": "Swap Nodes in Pairs",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/swap-nodes-in-pairs/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/swap-nodes-in-pairs/1",
        "frequency": 94
      },
      {
        "title": "Candy",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/candy/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/candy/1",
        "frequency": 94
      },
      {
        "title": "Best Time to Buy and Sell Stock",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/best-time-to-buy-and-sell-stock/1",
        "frequency": 93
      },
      {
        "title": "Single Number",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/single-number/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/single-number/1",
        "frequency": 93
      },
      {
        "title": "Combinations",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/combinations/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/combinations/1",
        "frequency": 91
      },
      {
        "title": "Binary Tree Inorder Traversal",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/binary-tree-inorder-traversal/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/binary-tree-inorder-traversal/1",
        "frequency": 90
      },
      {
        "title": "Valid Number",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/valid-number/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/valid-number/1",
        "frequency": 90
      },
      {
        "title": "Scramble String",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/scramble-string/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/scramble-string/1",
        "frequency": 89
      },
      {
        "title": "Binary Tree Level Order Traversal II",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/binary-tree-level-order-traversal-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/binary-tree-level-order-traversal-ii/1",
        "frequency": 89
      },
      {
        "title": "String to Integer (atoi)",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/string-to-integer-atoi/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/string-to-integer-atoi/1",
        "frequency": 88
      },
      {
        "title": "Remove Nth Node From End of List",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/remove-nth-node-from-end-of-list/1",
        "frequency": 87
      },
      {
        "title": "Container With Most Water",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/container-with-most-water/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/container-with-most-water/1",
        "frequency": 87
      },
      {
        "title": "Letter Combinations of a Phone Number",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/letter-combinations-of-a-phone-number/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/letter-combinations-of-a-phone-number/1",
        "frequency": 86
      },
      {
        "title": "Unique Binary Search Trees",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/unique-binary-search-trees/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/unique-binary-search-trees/1",
        "frequency": 86
      },
      {
        "title": "Construct Binary Tree from Inorder and Postorder Traversal",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/construct-binary-tree-from-inorder-and-postorder-traversal/1",
        "frequency": 86
      },
      {
        "title": "3Sum",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/3sum/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/3sum/1",
        "frequency": 84
      },
      {
        "title": "Search in Rotated Sorted Array",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/search-in-rotated-sorted-array/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/search-in-rotated-sorted-array/1",
        "frequency": 84
      },
      {
        "title": "Add Binary",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/add-binary/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/add-binary/1",
        "frequency": 84
      },
      {
        "title": "Unique Paths",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/unique-paths/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/unique-paths/1",
        "frequency": 83
      },
      {
        "title": "Edit Distance",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/edit-distance/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/edit-distance/1",
        "frequency": 83
      },
      {
        "title": "Subsets",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/subsets/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/subsets/1",
        "frequency": 83
      },
      {
        "title": "Search Insert Position",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/search-insert-position/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/search-insert-position/1",
        "frequency": 82
      },
      {
        "title": "Palindrome Partitioning II",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/palindrome-partitioning-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/palindrome-partitioning-ii/1",
        "frequency": 79
      },
      {
        "title": "Minimum Depth of Binary Tree",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/minimum-depth-of-binary-tree/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/minimum-depth-of-binary-tree/1",
        "frequency": 78
      },
      {
        "title": "Unique Binary Search Trees II",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/unique-binary-search-trees-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/unique-binary-search-trees-ii/1",
        "frequency": 78
      },
      {
        "title": "Merge k Sorted Lists",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/merge-k-sorted-lists/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/merge-k-sorted-lists/1",
        "frequency": 78
      },
      {
        "title": "Maximal Rectangle",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/maximal-rectangle/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/maximal-rectangle/1",
        "frequency": 78
      },
      {
        "title": "Add Two Numbers",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/add-two-numbers/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/add-two-numbers/1",
        "frequency": 77
      },
      {
        "title": "Set Matrix Zeroes",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/set-matrix-zeroes/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/set-matrix-zeroes/1",
        "frequency": 77
      },
      {
        "title": "Best Time to Buy and Sell Stock II",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/best-time-to-buy-and-sell-stock-ii/1",
        "frequency": 76
      },
      {
        "title": "Longest Valid Parentheses",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/longest-valid-parentheses/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/longest-valid-parentheses/1",
        "frequency": 76
      },
      {
        "title": "Next Permutation",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/next-permutation/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/next-permutation/1",
        "frequency": 74
      },
      {
        "title": "Spiral Matrix",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/spiral-matrix/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/spiral-matrix/1",
        "frequency": 74
      },
      {
        "title": "Path Sum II",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/path-sum-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/path-sum-ii/1",
        "frequency": 74
      },
      {
        "title": "Permutations",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/permutations/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/permutations/1",
        "frequency": 74
      },
      {
        "title": "Maximum Depth of Binary Tree",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/maximum-depth-of-binary-tree/1",
        "frequency": 74
      },
      {
        "title": "Search a 2D Matrix",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/search-a-2d-matrix/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/search-a-2d-matrix/1",
        "frequency": 74
      },
      {
        "title": "Word Ladder II",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/word-ladder-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/word-ladder-ii/1",
        "frequency": 73
      },
      {
        "title": "Find First and Last Position of Element in Sorted Array",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/find-first-and-last-position-of-element-in-sorted-array/1",
        "frequency": 73
      },
      {
        "title": "Gray Code",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/gray-code/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/gray-code/1",
        "frequency": 73
      },
      {
        "title": "Binary Tree Maximum Path Sum",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/binary-tree-maximum-path-sum/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/binary-tree-maximum-path-sum/1",
        "frequency": 71
      },
      {
        "title": "Simplify Path",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/simplify-path/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/simplify-path/1",
        "frequency": 71
      },
      {
        "title": "Single Number II",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/single-number-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/single-number-ii/1",
        "frequency": 69
      },
      {
        "title": "Climbing Stairs",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/climbing-stairs/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/climbing-stairs/1",
        "frequency": 66
      },
      {
        "title": "Integer to Roman",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/integer-to-roman/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/integer-to-roman/1",
        "frequency": 66
      },
      {
        "title": "Group Anagrams",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/group-anagrams/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/group-anagrams/1",
        "frequency": 64
      },
      {
        "title": "Interleaving String",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/interleaving-string/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/interleaving-string/1",
        "frequency": 60
      },
      {
        "title": "Reverse Nodes in k-Group",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/reverse-nodes-in-k-group/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/reverse-nodes-in-k-group/1",
        "frequency": 59
      },
      {
        "title": "Triangle",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/triangle/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/triangle/1",
        "frequency": 58
      },
      {
        "title": "Populating Next Right Pointers in Each Node II",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/populating-next-right-pointers-in-each-node-ii/1",
        "frequency": 57
      },
      {
        "title": "Symmetric Tree",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/symmetric-tree/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/symmetric-tree/1",
        "frequency": 55
      },
      {
        "title": "Remove Element",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/remove-element/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/remove-element/1",
        "frequency": 55
      },
      {
        "title": "Combination Sum",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/combination-sum/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/combination-sum/1",
        "frequency": 54
      },
      {
        "title": "Word Search",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/word-search/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/word-search/1",
        "frequency": 51
      },
      {
        "title": "Unique Paths II",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/unique-paths-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/unique-paths-ii/1",
        "frequency": 51
      },
      {
        "title": "Roman to Integer",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/roman-to-integer/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/roman-to-integer/1",
        "frequency": 51
      },
      {
        "title": "Valid Palindrome",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/valid-palindrome/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/valid-palindrome/1",
        "frequency": 50
      },
      {
        "title": "Convert Sorted Array to Binary Search Tree",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/convert-sorted-array-to-binary-search-tree/1",
        "frequency": 49
      },
      {
        "title": "Pascal's Triangle",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/pascal-s-triangle/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/pascal-s-triangle/1",
        "frequency": 47
      },
      {
        "title": "Surrounded Regions",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/surrounded-regions/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/surrounded-regions/1",
        "frequency": 46
      },
      {
        "title": "Insert Interval",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/insert-interval/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/insert-interval/1",
        "frequency": 46
      },
      {
        "title": "Permutation Sequence",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/permutation-sequence/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/permutation-sequence/1",
        "frequency": 46
      },
      {
        "title": "Longest Substring Without Repeating Characters",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/longest-substring-without-repeating-characters/1",
        "frequency": 46
      },
      {
        "title": "Reverse Linked List II",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/reverse-linked-list-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/reverse-linked-list-ii/1",
        "frequency": 44
      },
      {
        "title": "Largest Rectangle in Histogram",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/largest-rectangle-in-histogram/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/largest-rectangle-in-histogram/1",
        "frequency": 44
      },
      {
        "title": "Remove Duplicates from Sorted List II",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/remove-duplicates-from-sorted-list-ii/1",
        "frequency": 43
      },
      {
        "title": "Count and Say",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/count-and-say/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/count-and-say/1",
        "frequency": 43
      },
      {
        "title": "Sudoku Solver",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/sudoku-solver/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/sudoku-solver/1",
        "frequency": 42
      },
      {
        "title": "Merge Two Sorted Lists",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/merge-two-sorted-lists/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/merge-two-sorted-lists/1",
        "frequency": 42
      },
      {
        "title": "4Sum",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/4sum/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/4sum/1",
        "frequency": 42
      },
      {
        "title": "Two Sum",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/two-sum/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/two-sum/1",
        "frequency": 41
      },
      {
        "title": "Regular Expression Matching",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/regular-expression-matching/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/regular-expression-matching/1",
        "frequency": 40
      },
      {
        "title": "Divide Two Integers",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/divide-two-integers/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/divide-two-integers/1",
        "frequency": 40
      },
      {
        "title": "Subsets II",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/subsets-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/subsets-ii/1",
        "frequency": 39
      },
      {
        "title": "Trapping Rain Water",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/trapping-rain-water/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/trapping-rain-water/1",
        "frequency": 37
      },
      {
        "title": "Wildcard Matching",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/wildcard-matching/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/wildcard-matching/1",
        "frequency": 37
      },
      {
        "title": "Minimum Window Substring",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/minimum-window-substring/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/minimum-window-substring/1",
        "frequency": 36
      },
      {
        "title": "Sqrt(x)",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/sqrt-x/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/sqrt-x/1",
        "frequency": 36
      },
      {
        "title": "Palindrome Number",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/palindrome-number/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/palindrome-number/1",
        "frequency": 34
      },
      {
        "title": "Multiply Strings",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/multiply-strings/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/multiply-strings/1",
        "frequency": 32
      },
      {
        "title": "Substring with Concatenation of All Words",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/substring-with-concatenation-of-all-words/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/substring-with-concatenation-of-all-words/1",
        "frequency": 31
      },
      {
        "title": "Zigzag Conversion",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/zigzag-conversion/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/zigzag-conversion/1",
        "frequency": 31
      },
      {
        "title": "Populating Next Right Pointers in Each Node",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/populating-next-right-pointers-in-each-node/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/populating-next-right-pointers-in-each-node/1",
        "frequency": 31
      },
      {
        "title": "Jump Game II",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/jump-game-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/jump-game-ii/1",
        "frequency": 31
      },
      {
        "title": "Word Ladder",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/word-ladder/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/word-ladder/1",
        "frequency": 30
      },
      {
        "title": "N-Queens II",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/n-queens-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/n-queens-ii/1",
        "frequency": 30
      },
      {
        "title": "Generate Parentheses",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/generate-parentheses/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/generate-parentheses/1",
        "frequency": 29
      },
      {
        "title": "Merge Intervals",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/merge-intervals/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/merge-intervals/1",
        "frequency": 26
      },
      {
        "title": "Valid Parentheses",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/valid-parentheses/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/valid-parentheses/1",
        "frequency": 26
      },
      {
        "title": "Sort Colors",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/sort-colors/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/sort-colors/1",
        "frequency": 24
      },
      {
        "title": "Longest Palindromic Substring",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/longest-palindromic-substring/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/longest-palindromic-substring/1",
        "frequency": 23
      },
      {
        "title": "Path Sum",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/path-sum/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/path-sum/1",
        "frequency": 23
      },
      {
        "title": "Flatten Binary Tree to Linked List",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/flatten-binary-tree-to-linked-list/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/flatten-binary-tree-to-linked-list/1",
        "frequency": 21
      },
      {
        "title": "Decode Ways",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/decode-ways/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/decode-ways/1",
        "frequency": 21
      },
      {
        "title": "Clone Graph",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/clone-graph/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/clone-graph/1",
        "frequency": 21
      },
      {
        "title": "Reverse Integer",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/reverse-integer/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/reverse-integer/1",
        "frequency": 20
      }
    ]
  },
  {
    "name": "Netflix",
    "slug": "netflix",
    "logo": "🍿",
    "problemCount": 100,
    "tier": "FAANG",
    "problems": [
      {
        "title": "Valid Palindrome",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/valid-palindrome/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/valid-palindrome/1",
        "frequency": 98
      },
      {
        "title": "Climbing Stairs",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/climbing-stairs/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/climbing-stairs/1",
        "frequency": 97
      },
      {
        "title": "Two Sum",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/two-sum/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/two-sum/1",
        "frequency": 96
      },
      {
        "title": "Decode Ways",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/decode-ways/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/decode-ways/1",
        "frequency": 96
      },
      {
        "title": "Binary Tree Zigzag Level Order Traversal",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/binary-tree-zigzag-level-order-traversal/1",
        "frequency": 93
      },
      {
        "title": "Restore IP Addresses",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/restore-ip-addresses/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/restore-ip-addresses/1",
        "frequency": 93
      },
      {
        "title": "Search in Rotated Sorted Array II",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/search-in-rotated-sorted-array-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/search-in-rotated-sorted-array-ii/1",
        "frequency": 87
      },
      {
        "title": "Add Binary",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/add-binary/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/add-binary/1",
        "frequency": 86
      },
      {
        "title": "Construct Binary Tree from Inorder and Postorder Traversal",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/construct-binary-tree-from-inorder-and-postorder-traversal/1",
        "frequency": 86
      },
      {
        "title": "Merge Intervals",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/merge-intervals/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/merge-intervals/1",
        "frequency": 86
      },
      {
        "title": "Balanced Binary Tree",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/balanced-binary-tree/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/balanced-binary-tree/1",
        "frequency": 86
      },
      {
        "title": "Combination Sum II",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/combination-sum-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/combination-sum-ii/1",
        "frequency": 85
      },
      {
        "title": "Pow(x, n)",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/pow-x-n/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/pow-x-n/1",
        "frequency": 85
      },
      {
        "title": "Word Ladder II",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/word-ladder-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/word-ladder-ii/1",
        "frequency": 84
      },
      {
        "title": "4Sum",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/4sum/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/4sum/1",
        "frequency": 83
      },
      {
        "title": "Binary Tree Inorder Traversal",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/binary-tree-inorder-traversal/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/binary-tree-inorder-traversal/1",
        "frequency": 83
      },
      {
        "title": "Unique Binary Search Trees II",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/unique-binary-search-trees-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/unique-binary-search-trees-ii/1",
        "frequency": 81
      },
      {
        "title": "Search in Rotated Sorted Array",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/search-in-rotated-sorted-array/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/search-in-rotated-sorted-array/1",
        "frequency": 80
      },
      {
        "title": "Combinations",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/combinations/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/combinations/1",
        "frequency": 80
      },
      {
        "title": "Length of Last Word",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/length-of-last-word/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/length-of-last-word/1",
        "frequency": 77
      },
      {
        "title": "Best Time to Buy and Sell Stock",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/best-time-to-buy-and-sell-stock/1",
        "frequency": 77
      },
      {
        "title": "Divide Two Integers",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/divide-two-integers/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/divide-two-integers/1",
        "frequency": 77
      },
      {
        "title": "Zigzag Conversion",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/zigzag-conversion/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/zigzag-conversion/1",
        "frequency": 76
      },
      {
        "title": "Spiral Matrix II",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/spiral-matrix-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/spiral-matrix-ii/1",
        "frequency": 75
      },
      {
        "title": "Pascal's Triangle II",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/pascal-s-triangle-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/pascal-s-triangle-ii/1",
        "frequency": 75
      },
      {
        "title": "Permutation Sequence",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/permutation-sequence/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/permutation-sequence/1",
        "frequency": 73
      },
      {
        "title": "Find First and Last Position of Element in Sorted Array",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/find-first-and-last-position-of-element-in-sorted-array/1",
        "frequency": 73
      },
      {
        "title": "Word Search",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/word-search/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/word-search/1",
        "frequency": 73
      },
      {
        "title": "Search a 2D Matrix",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/search-a-2d-matrix/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/search-a-2d-matrix/1",
        "frequency": 70
      },
      {
        "title": "Subsets",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/subsets/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/subsets/1",
        "frequency": 70
      },
      {
        "title": "Path Sum II",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/path-sum-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/path-sum-ii/1",
        "frequency": 69
      },
      {
        "title": "Combination Sum",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/combination-sum/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/combination-sum/1",
        "frequency": 68
      },
      {
        "title": "N-Queens",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/n-queens/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/n-queens/1",
        "frequency": 68
      },
      {
        "title": "Binary Tree Level Order Traversal",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/binary-tree-level-order-traversal/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/binary-tree-level-order-traversal/1",
        "frequency": 67
      },
      {
        "title": "Insert Interval",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/insert-interval/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/insert-interval/1",
        "frequency": 67
      },
      {
        "title": "Edit Distance",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/edit-distance/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/edit-distance/1",
        "frequency": 66
      },
      {
        "title": "Candy",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/candy/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/candy/1",
        "frequency": 66
      },
      {
        "title": "Maximum Depth of Binary Tree",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/maximum-depth-of-binary-tree/1",
        "frequency": 66
      },
      {
        "title": "Valid Sudoku",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/valid-sudoku/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/valid-sudoku/1",
        "frequency": 63
      },
      {
        "title": "Validate Binary Search Tree",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/validate-binary-search-tree/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/validate-binary-search-tree/1",
        "frequency": 63
      },
      {
        "title": "Partition List",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/partition-list/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/partition-list/1",
        "frequency": 62
      },
      {
        "title": "Subsets II",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/subsets-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/subsets-ii/1",
        "frequency": 61
      },
      {
        "title": "Scramble String",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/scramble-string/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/scramble-string/1",
        "frequency": 61
      },
      {
        "title": "Best Time to Buy and Sell Stock III",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/best-time-to-buy-and-sell-stock-iii/1",
        "frequency": 61
      },
      {
        "title": "Sudoku Solver",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/sudoku-solver/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/sudoku-solver/1",
        "frequency": 60
      },
      {
        "title": "Merge Two Sorted Lists",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/merge-two-sorted-lists/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/merge-two-sorted-lists/1",
        "frequency": 59
      },
      {
        "title": "Sqrt(x)",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/sqrt-x/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/sqrt-x/1",
        "frequency": 59
      },
      {
        "title": "Permutations",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/permutations/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/permutations/1",
        "frequency": 59
      },
      {
        "title": "Integer to Roman",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/integer-to-roman/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/integer-to-roman/1",
        "frequency": 58
      },
      {
        "title": "Gray Code",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/gray-code/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/gray-code/1",
        "frequency": 57
      },
      {
        "title": "Triangle",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/triangle/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/triangle/1",
        "frequency": 56
      },
      {
        "title": "Reverse Integer",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/reverse-integer/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/reverse-integer/1",
        "frequency": 56
      },
      {
        "title": "Longest Common Prefix",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/longest-common-prefix/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/longest-common-prefix/1",
        "frequency": 55
      },
      {
        "title": "Valid Number",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/valid-number/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/valid-number/1",
        "frequency": 55
      },
      {
        "title": "Spiral Matrix",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/spiral-matrix/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/spiral-matrix/1",
        "frequency": 53
      },
      {
        "title": "Jump Game II",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/jump-game-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/jump-game-ii/1",
        "frequency": 52
      },
      {
        "title": "Longest Valid Parentheses",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/longest-valid-parentheses/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/longest-valid-parentheses/1",
        "frequency": 52
      },
      {
        "title": "3Sum Closest",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/3sum-closest/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/3sum-closest/1",
        "frequency": 51
      },
      {
        "title": "First Missing Positive",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/first-missing-positive/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/first-missing-positive/1",
        "frequency": 51
      },
      {
        "title": "Unique Binary Search Trees",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/unique-binary-search-trees/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/unique-binary-search-trees/1",
        "frequency": 50
      },
      {
        "title": "Letter Combinations of a Phone Number",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/letter-combinations-of-a-phone-number/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/letter-combinations-of-a-phone-number/1",
        "frequency": 50
      },
      {
        "title": "Symmetric Tree",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/symmetric-tree/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/symmetric-tree/1",
        "frequency": 50
      },
      {
        "title": "Remove Duplicates from Sorted List II",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/remove-duplicates-from-sorted-list-ii/1",
        "frequency": 50
      },
      {
        "title": "Valid Parentheses",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/valid-parentheses/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/valid-parentheses/1",
        "frequency": 48
      },
      {
        "title": "Text Justification",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/text-justification/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/text-justification/1",
        "frequency": 47
      },
      {
        "title": "Multiply Strings",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/multiply-strings/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/multiply-strings/1",
        "frequency": 47
      },
      {
        "title": "Group Anagrams",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/group-anagrams/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/group-anagrams/1",
        "frequency": 47
      },
      {
        "title": "Best Time to Buy and Sell Stock II",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/best-time-to-buy-and-sell-stock-ii/1",
        "frequency": 45
      },
      {
        "title": "Binary Tree Level Order Traversal II",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/binary-tree-level-order-traversal-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/binary-tree-level-order-traversal-ii/1",
        "frequency": 43
      },
      {
        "title": "Container With Most Water",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/container-with-most-water/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/container-with-most-water/1",
        "frequency": 42
      },
      {
        "title": "Unique Paths",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/unique-paths/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/unique-paths/1",
        "frequency": 41
      },
      {
        "title": "Longest Substring Without Repeating Characters",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/longest-substring-without-repeating-characters/1",
        "frequency": 41
      },
      {
        "title": "Next Permutation",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/next-permutation/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/next-permutation/1",
        "frequency": 40
      },
      {
        "title": "Minimum Window Substring",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/minimum-window-substring/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/minimum-window-substring/1",
        "frequency": 40
      },
      {
        "title": "Minimum Path Sum",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/minimum-path-sum/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/minimum-path-sum/1",
        "frequency": 39
      },
      {
        "title": "Palindrome Number",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/palindrome-number/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/palindrome-number/1",
        "frequency": 39
      },
      {
        "title": "Regular Expression Matching",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/regular-expression-matching/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/regular-expression-matching/1",
        "frequency": 38
      },
      {
        "title": "Pascal's Triangle",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/pascal-s-triangle/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/pascal-s-triangle/1",
        "frequency": 37
      },
      {
        "title": "Reverse Nodes in k-Group",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/reverse-nodes-in-k-group/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/reverse-nodes-in-k-group/1",
        "frequency": 35
      },
      {
        "title": "Longest Palindromic Substring",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/longest-palindromic-substring/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/longest-palindromic-substring/1",
        "frequency": 35
      },
      {
        "title": "Surrounded Regions",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/surrounded-regions/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/surrounded-regions/1",
        "frequency": 35
      },
      {
        "title": "String to Integer (atoi)",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/string-to-integer-atoi/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/string-to-integer-atoi/1",
        "frequency": 34
      },
      {
        "title": "Maximum Subarray",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/maximum-subarray/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/maximum-subarray/1",
        "frequency": 34
      },
      {
        "title": "Flatten Binary Tree to Linked List",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/flatten-binary-tree-to-linked-list/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/flatten-binary-tree-to-linked-list/1",
        "frequency": 33
      },
      {
        "title": "Search Insert Position",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/search-insert-position/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/search-insert-position/1",
        "frequency": 32
      },
      {
        "title": "Jump Game",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/jump-game/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/jump-game/1",
        "frequency": 31
      },
      {
        "title": "Remove Duplicates from Sorted List",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/remove-duplicates-from-sorted-list/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/remove-duplicates-from-sorted-list/1",
        "frequency": 31
      },
      {
        "title": "Merge Sorted Array",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/merge-sorted-array/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/merge-sorted-array/1",
        "frequency": 31
      },
      {
        "title": "Substring with Concatenation of All Words",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/substring-with-concatenation-of-all-words/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/substring-with-concatenation-of-all-words/1",
        "frequency": 31
      },
      {
        "title": "Count and Say",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/count-and-say/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/count-and-say/1",
        "frequency": 30
      },
      {
        "title": "Populating Next Right Pointers in Each Node",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/populating-next-right-pointers-in-each-node/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/populating-next-right-pointers-in-each-node/1",
        "frequency": 30
      },
      {
        "title": "Unique Paths II",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/unique-paths-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/unique-paths-ii/1",
        "frequency": 28
      },
      {
        "title": "Same Tree",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/same-tree/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/same-tree/1",
        "frequency": 28
      },
      {
        "title": "Remove Nth Node From End of List",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/remove-nth-node-from-end-of-list/1",
        "frequency": 28
      },
      {
        "title": "Convert Sorted Array to Binary Search Tree",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/convert-sorted-array-to-binary-search-tree/1",
        "frequency": 27
      },
      {
        "title": "N-Queens II",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/n-queens-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/n-queens-ii/1",
        "frequency": 25
      },
      {
        "title": "Longest Consecutive Sequence",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/longest-consecutive-sequence/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/longest-consecutive-sequence/1",
        "frequency": 25
      },
      {
        "title": "Binary Tree Maximum Path Sum",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/binary-tree-maximum-path-sum/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/binary-tree-maximum-path-sum/1",
        "frequency": 25
      },
      {
        "title": "Merge k Sorted Lists",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/merge-k-sorted-lists/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/merge-k-sorted-lists/1",
        "frequency": 23
      },
      {
        "title": "Simplify Path",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/simplify-path/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/simplify-path/1",
        "frequency": 23
      }
    ]
  },
  {
    "name": "Bloomberg",
    "slug": "bloomberg",
    "logo": "🏢",
    "problemCount": 100,
    "tier": "Top Tier",
    "problems": [
      {
        "title": "Validate Binary Search Tree",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/validate-binary-search-tree/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/validate-binary-search-tree/1",
        "frequency": 99
      },
      {
        "title": "Populating Next Right Pointers in Each Node",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/populating-next-right-pointers-in-each-node/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/populating-next-right-pointers-in-each-node/1",
        "frequency": 99
      },
      {
        "title": "Text Justification",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/text-justification/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/text-justification/1",
        "frequency": 98
      },
      {
        "title": "Merge Intervals",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/merge-intervals/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/merge-intervals/1",
        "frequency": 97
      },
      {
        "title": "Convert Sorted Array to Binary Search Tree",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/convert-sorted-array-to-binary-search-tree/1",
        "frequency": 95
      },
      {
        "title": "Subsets",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/subsets/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/subsets/1",
        "frequency": 94
      },
      {
        "title": "Largest Rectangle in Histogram",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/largest-rectangle-in-histogram/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/largest-rectangle-in-histogram/1",
        "frequency": 93
      },
      {
        "title": "Maximal Rectangle",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/maximal-rectangle/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/maximal-rectangle/1",
        "frequency": 92
      },
      {
        "title": "Rotate List",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/rotate-list/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/rotate-list/1",
        "frequency": 91
      },
      {
        "title": "Restore IP Addresses",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/restore-ip-addresses/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/restore-ip-addresses/1",
        "frequency": 90
      },
      {
        "title": "Multiply Strings",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/multiply-strings/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/multiply-strings/1",
        "frequency": 88
      },
      {
        "title": "Generate Parentheses",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/generate-parentheses/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/generate-parentheses/1",
        "frequency": 88
      },
      {
        "title": "Minimum Depth of Binary Tree",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/minimum-depth-of-binary-tree/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/minimum-depth-of-binary-tree/1",
        "frequency": 87
      },
      {
        "title": "Reverse Nodes in k-Group",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/reverse-nodes-in-k-group/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/reverse-nodes-in-k-group/1",
        "frequency": 87
      },
      {
        "title": "Unique Binary Search Trees II",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/unique-binary-search-trees-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/unique-binary-search-trees-ii/1",
        "frequency": 87
      },
      {
        "title": "Swap Nodes in Pairs",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/swap-nodes-in-pairs/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/swap-nodes-in-pairs/1",
        "frequency": 87
      },
      {
        "title": "Remove Nth Node From End of List",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/remove-nth-node-from-end-of-list/1",
        "frequency": 86
      },
      {
        "title": "Permutations II",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/permutations-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/permutations-ii/1",
        "frequency": 84
      },
      {
        "title": "Sudoku Solver",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/sudoku-solver/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/sudoku-solver/1",
        "frequency": 83
      },
      {
        "title": "Same Tree",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/same-tree/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/same-tree/1",
        "frequency": 81
      },
      {
        "title": "Clone Graph",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/clone-graph/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/clone-graph/1",
        "frequency": 80
      },
      {
        "title": "Container With Most Water",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/container-with-most-water/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/container-with-most-water/1",
        "frequency": 80
      },
      {
        "title": "Remove Duplicates from Sorted List II",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/remove-duplicates-from-sorted-list-ii/1",
        "frequency": 78
      },
      {
        "title": "Longest Valid Parentheses",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/longest-valid-parentheses/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/longest-valid-parentheses/1",
        "frequency": 77
      },
      {
        "title": "Merge Two Sorted Lists",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/merge-two-sorted-lists/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/merge-two-sorted-lists/1",
        "frequency": 77
      },
      {
        "title": "Remove Duplicates from Sorted Array II",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/remove-duplicates-from-sorted-array-ii/1",
        "frequency": 77
      },
      {
        "title": "Reverse Integer",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/reverse-integer/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/reverse-integer/1",
        "frequency": 77
      },
      {
        "title": "Triangle",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/triangle/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/triangle/1",
        "frequency": 77
      },
      {
        "title": "Divide Two Integers",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/divide-two-integers/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/divide-two-integers/1",
        "frequency": 75
      },
      {
        "title": "Median of Two Sorted Arrays",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/median-of-two-sorted-arrays/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/median-of-two-sorted-arrays/1",
        "frequency": 75
      },
      {
        "title": "N-Queens",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/n-queens/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/n-queens/1",
        "frequency": 74
      },
      {
        "title": "Substring with Concatenation of All Words",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/substring-with-concatenation-of-all-words/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/substring-with-concatenation-of-all-words/1",
        "frequency": 74
      },
      {
        "title": "Single Number II",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/single-number-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/single-number-ii/1",
        "frequency": 73
      },
      {
        "title": "Pascal's Triangle II",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/pascal-s-triangle-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/pascal-s-triangle-ii/1",
        "frequency": 73
      },
      {
        "title": "Maximum Subarray",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/maximum-subarray/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/maximum-subarray/1",
        "frequency": 70
      },
      {
        "title": "Regular Expression Matching",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/regular-expression-matching/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/regular-expression-matching/1",
        "frequency": 70
      },
      {
        "title": "Binary Tree Maximum Path Sum",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/binary-tree-maximum-path-sum/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/binary-tree-maximum-path-sum/1",
        "frequency": 68
      },
      {
        "title": "Search a 2D Matrix",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/search-a-2d-matrix/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/search-a-2d-matrix/1",
        "frequency": 66
      },
      {
        "title": "Letter Combinations of a Phone Number",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/letter-combinations-of-a-phone-number/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/letter-combinations-of-a-phone-number/1",
        "frequency": 65
      },
      {
        "title": "Valid Sudoku",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/valid-sudoku/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/valid-sudoku/1",
        "frequency": 64
      },
      {
        "title": "Minimum Window Substring",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/minimum-window-substring/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/minimum-window-substring/1",
        "frequency": 64
      },
      {
        "title": "Count and Say",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/count-and-say/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/count-and-say/1",
        "frequency": 64
      },
      {
        "title": "Subsets II",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/subsets-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/subsets-ii/1",
        "frequency": 61
      },
      {
        "title": "Unique Binary Search Trees",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/unique-binary-search-trees/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/unique-binary-search-trees/1",
        "frequency": 61
      },
      {
        "title": "Surrounded Regions",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/surrounded-regions/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/surrounded-regions/1",
        "frequency": 61
      },
      {
        "title": "Insert Interval",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/insert-interval/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/insert-interval/1",
        "frequency": 60
      },
      {
        "title": "Combination Sum II",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/combination-sum-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/combination-sum-ii/1",
        "frequency": 60
      },
      {
        "title": "3Sum",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/3sum/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/3sum/1",
        "frequency": 58
      },
      {
        "title": "Next Permutation",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/next-permutation/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/next-permutation/1",
        "frequency": 57
      },
      {
        "title": "Word Ladder",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/word-ladder/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/word-ladder/1",
        "frequency": 56
      },
      {
        "title": "Add Two Numbers",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/add-two-numbers/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/add-two-numbers/1",
        "frequency": 55
      },
      {
        "title": "Word Search",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/word-search/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/word-search/1",
        "frequency": 55
      },
      {
        "title": "Longest Consecutive Sequence",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/longest-consecutive-sequence/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/longest-consecutive-sequence/1",
        "frequency": 55
      },
      {
        "title": "Search Insert Position",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/search-insert-position/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/search-insert-position/1",
        "frequency": 53
      },
      {
        "title": "Permutations",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/permutations/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/permutations/1",
        "frequency": 53
      },
      {
        "title": "Populating Next Right Pointers in Each Node II",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/populating-next-right-pointers-in-each-node-ii/1",
        "frequency": 53
      },
      {
        "title": "Set Matrix Zeroes",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/set-matrix-zeroes/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/set-matrix-zeroes/1",
        "frequency": 53
      },
      {
        "title": "Scramble String",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/scramble-string/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/scramble-string/1",
        "frequency": 51
      },
      {
        "title": "Two Sum",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/two-sum/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/two-sum/1",
        "frequency": 50
      },
      {
        "title": "Pascal's Triangle",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/pascal-s-triangle/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/pascal-s-triangle/1",
        "frequency": 50
      },
      {
        "title": "Unique Paths",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/unique-paths/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/unique-paths/1",
        "frequency": 50
      },
      {
        "title": "Path Sum II",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/path-sum-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/path-sum-ii/1",
        "frequency": 50
      },
      {
        "title": "Interleaving String",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/interleaving-string/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/interleaving-string/1",
        "frequency": 50
      },
      {
        "title": "Recover Binary Search Tree",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/recover-binary-search-tree/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/recover-binary-search-tree/1",
        "frequency": 49
      },
      {
        "title": "Sort Colors",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/sort-colors/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/sort-colors/1",
        "frequency": 49
      },
      {
        "title": "Binary Tree Inorder Traversal",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/binary-tree-inorder-traversal/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/binary-tree-inorder-traversal/1",
        "frequency": 49
      },
      {
        "title": "Search in Rotated Sorted Array II",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/search-in-rotated-sorted-array-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/search-in-rotated-sorted-array-ii/1",
        "frequency": 49
      },
      {
        "title": "Find First and Last Position of Element in Sorted Array",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/find-first-and-last-position-of-element-in-sorted-array/1",
        "frequency": 49
      },
      {
        "title": "Valid Parentheses",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/valid-parentheses/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/valid-parentheses/1",
        "frequency": 48
      },
      {
        "title": "Roman to Integer",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/roman-to-integer/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/roman-to-integer/1",
        "frequency": 47
      },
      {
        "title": "Construct Binary Tree from Inorder and Postorder Traversal",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/construct-binary-tree-from-inorder-and-postorder-traversal/1",
        "frequency": 46
      },
      {
        "title": "Distinct Subsequences",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/distinct-subsequences/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/distinct-subsequences/1",
        "frequency": 46
      },
      {
        "title": "Unique Paths II",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/unique-paths-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/unique-paths-ii/1",
        "frequency": 44
      },
      {
        "title": "First Missing Positive",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/first-missing-positive/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/first-missing-positive/1",
        "frequency": 43
      },
      {
        "title": "Minimum Path Sum",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/minimum-path-sum/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/minimum-path-sum/1",
        "frequency": 42
      },
      {
        "title": "Longest Palindromic Substring",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/longest-palindromic-substring/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/longest-palindromic-substring/1",
        "frequency": 42
      },
      {
        "title": "Binary Tree Level Order Traversal II",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/binary-tree-level-order-traversal-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/binary-tree-level-order-traversal-ii/1",
        "frequency": 42
      },
      {
        "title": "Valid Number",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/valid-number/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/valid-number/1",
        "frequency": 39
      },
      {
        "title": "N-Queens II",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/n-queens-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/n-queens-ii/1",
        "frequency": 38
      },
      {
        "title": "Palindrome Partitioning",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/palindrome-partitioning/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/palindrome-partitioning/1",
        "frequency": 37
      },
      {
        "title": "Decode Ways",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/decode-ways/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/decode-ways/1",
        "frequency": 36
      },
      {
        "title": "Integer to Roman",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/integer-to-roman/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/integer-to-roman/1",
        "frequency": 35
      },
      {
        "title": "Sum Root to Leaf Numbers",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/sum-root-to-leaf-numbers/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/sum-root-to-leaf-numbers/1",
        "frequency": 35
      },
      {
        "title": "4Sum",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/4sum/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/4sum/1",
        "frequency": 32
      },
      {
        "title": "Gray Code",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/gray-code/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/gray-code/1",
        "frequency": 32
      },
      {
        "title": "Plus One",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/plus-one/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/plus-one/1",
        "frequency": 32
      },
      {
        "title": "Binary Tree Zigzag Level Order Traversal",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/binary-tree-zigzag-level-order-traversal/1",
        "frequency": 32
      },
      {
        "title": "Jump Game II",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/jump-game-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/jump-game-ii/1",
        "frequency": 30
      },
      {
        "title": "Wildcard Matching",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/wildcard-matching/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/wildcard-matching/1",
        "frequency": 28
      },
      {
        "title": "Palindrome Number",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/palindrome-number/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/palindrome-number/1",
        "frequency": 28
      },
      {
        "title": "Partition List",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/partition-list/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/partition-list/1",
        "frequency": 27
      },
      {
        "title": "Spiral Matrix II",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/spiral-matrix-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/spiral-matrix-ii/1",
        "frequency": 27
      },
      {
        "title": "Rotate Image",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/rotate-image/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/rotate-image/1",
        "frequency": 26
      },
      {
        "title": "Length of Last Word",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/length-of-last-word/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/length-of-last-word/1",
        "frequency": 26
      },
      {
        "title": "Gas Station",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/gas-station/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/gas-station/1",
        "frequency": 26
      },
      {
        "title": "Best Time to Buy and Sell Stock II",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/best-time-to-buy-and-sell-stock-ii/1",
        "frequency": 24
      },
      {
        "title": "Symmetric Tree",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/symmetric-tree/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/symmetric-tree/1",
        "frequency": 24
      },
      {
        "title": "Path Sum",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/path-sum/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/path-sum/1",
        "frequency": 22
      },
      {
        "title": "Longest Substring Without Repeating Characters",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/longest-substring-without-repeating-characters/1",
        "frequency": 21
      },
      {
        "title": "Balanced Binary Tree",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/balanced-binary-tree/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/balanced-binary-tree/1",
        "frequency": 20
      }
    ]
  },
  {
    "name": "Uber",
    "slug": "uber",
    "logo": "🚗",
    "problemCount": 100,
    "tier": "Top Tier",
    "problems": [
      {
        "title": "Search a 2D Matrix",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/search-a-2d-matrix/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/search-a-2d-matrix/1",
        "frequency": 99
      },
      {
        "title": "Best Time to Buy and Sell Stock",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/best-time-to-buy-and-sell-stock/1",
        "frequency": 96
      },
      {
        "title": "Sort Colors",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/sort-colors/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/sort-colors/1",
        "frequency": 95
      },
      {
        "title": "Sum Root to Leaf Numbers",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/sum-root-to-leaf-numbers/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/sum-root-to-leaf-numbers/1",
        "frequency": 95
      },
      {
        "title": "Two Sum",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/two-sum/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/two-sum/1",
        "frequency": 94
      },
      {
        "title": "Combination Sum II",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/combination-sum-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/combination-sum-ii/1",
        "frequency": 93
      },
      {
        "title": "Permutations",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/permutations/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/permutations/1",
        "frequency": 93
      },
      {
        "title": "Rotate Image",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/rotate-image/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/rotate-image/1",
        "frequency": 93
      },
      {
        "title": "Merge k Sorted Lists",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/merge-k-sorted-lists/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/merge-k-sorted-lists/1",
        "frequency": 92
      },
      {
        "title": "Subsets",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/subsets/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/subsets/1",
        "frequency": 92
      },
      {
        "title": "Path Sum II",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/path-sum-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/path-sum-ii/1",
        "frequency": 92
      },
      {
        "title": "Construct Binary Tree from Preorder and Inorder Traversal",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/construct-binary-tree-from-preorder-and-inorder-traversal/1",
        "frequency": 92
      },
      {
        "title": "Longest Substring Without Repeating Characters",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/longest-substring-without-repeating-characters/1",
        "frequency": 90
      },
      {
        "title": "Binary Tree Level Order Traversal",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/binary-tree-level-order-traversal/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/binary-tree-level-order-traversal/1",
        "frequency": 90
      },
      {
        "title": "Subsets II",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/subsets-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/subsets-ii/1",
        "frequency": 89
      },
      {
        "title": "Palindrome Partitioning II",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/palindrome-partitioning-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/palindrome-partitioning-ii/1",
        "frequency": 88
      },
      {
        "title": "Insert Interval",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/insert-interval/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/insert-interval/1",
        "frequency": 87
      },
      {
        "title": "Binary Tree Inorder Traversal",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/binary-tree-inorder-traversal/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/binary-tree-inorder-traversal/1",
        "frequency": 85
      },
      {
        "title": "Simplify Path",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/simplify-path/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/simplify-path/1",
        "frequency": 84
      },
      {
        "title": "Permutations II",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/permutations-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/permutations-ii/1",
        "frequency": 84
      },
      {
        "title": "Maximum Depth of Binary Tree",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/maximum-depth-of-binary-tree/1",
        "frequency": 83
      },
      {
        "title": "Reverse Nodes in k-Group",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/reverse-nodes-in-k-group/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/reverse-nodes-in-k-group/1",
        "frequency": 82
      },
      {
        "title": "Longest Valid Parentheses",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/longest-valid-parentheses/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/longest-valid-parentheses/1",
        "frequency": 82
      },
      {
        "title": "4Sum",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/4sum/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/4sum/1",
        "frequency": 81
      },
      {
        "title": "Valid Parentheses",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/valid-parentheses/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/valid-parentheses/1",
        "frequency": 80
      },
      {
        "title": "Construct Binary Tree from Inorder and Postorder Traversal",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/construct-binary-tree-from-inorder-and-postorder-traversal/1",
        "frequency": 80
      },
      {
        "title": "Divide Two Integers",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/divide-two-integers/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/divide-two-integers/1",
        "frequency": 80
      },
      {
        "title": "Zigzag Conversion",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/zigzag-conversion/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/zigzag-conversion/1",
        "frequency": 79
      },
      {
        "title": "Symmetric Tree",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/symmetric-tree/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/symmetric-tree/1",
        "frequency": 79
      },
      {
        "title": "Unique Binary Search Trees II",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/unique-binary-search-trees-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/unique-binary-search-trees-ii/1",
        "frequency": 79
      },
      {
        "title": "Populating Next Right Pointers in Each Node II",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/populating-next-right-pointers-in-each-node-ii/1",
        "frequency": 78
      },
      {
        "title": "Best Time to Buy and Sell Stock II",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/best-time-to-buy-and-sell-stock-ii/1",
        "frequency": 75
      },
      {
        "title": "Jump Game II",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/jump-game-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/jump-game-ii/1",
        "frequency": 74
      },
      {
        "title": "3Sum",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/3sum/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/3sum/1",
        "frequency": 73
      },
      {
        "title": "Edit Distance",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/edit-distance/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/edit-distance/1",
        "frequency": 72
      },
      {
        "title": "Maximum Subarray",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/maximum-subarray/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/maximum-subarray/1",
        "frequency": 71
      },
      {
        "title": "Length of Last Word",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/length-of-last-word/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/length-of-last-word/1",
        "frequency": 71
      },
      {
        "title": "Binary Tree Level Order Traversal II",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/binary-tree-level-order-traversal-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/binary-tree-level-order-traversal-ii/1",
        "frequency": 70
      },
      {
        "title": "Triangle",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/triangle/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/triangle/1",
        "frequency": 69
      },
      {
        "title": "Unique Binary Search Trees",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/unique-binary-search-trees/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/unique-binary-search-trees/1",
        "frequency": 68
      },
      {
        "title": "Trapping Rain Water",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/trapping-rain-water/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/trapping-rain-water/1",
        "frequency": 67
      },
      {
        "title": "Container With Most Water",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/container-with-most-water/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/container-with-most-water/1",
        "frequency": 66
      },
      {
        "title": "Median of Two Sorted Arrays",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/median-of-two-sorted-arrays/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/median-of-two-sorted-arrays/1",
        "frequency": 65
      },
      {
        "title": "Flatten Binary Tree to Linked List",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/flatten-binary-tree-to-linked-list/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/flatten-binary-tree-to-linked-list/1",
        "frequency": 65
      },
      {
        "title": "Merge Intervals",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/merge-intervals/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/merge-intervals/1",
        "frequency": 64
      },
      {
        "title": "Unique Paths",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/unique-paths/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/unique-paths/1",
        "frequency": 63
      },
      {
        "title": "Spiral Matrix II",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/spiral-matrix-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/spiral-matrix-ii/1",
        "frequency": 62
      },
      {
        "title": "Surrounded Regions",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/surrounded-regions/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/surrounded-regions/1",
        "frequency": 62
      },
      {
        "title": "Roman to Integer",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/roman-to-integer/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/roman-to-integer/1",
        "frequency": 61
      },
      {
        "title": "Add Two Numbers",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/add-two-numbers/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/add-two-numbers/1",
        "frequency": 59
      },
      {
        "title": "Interleaving String",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/interleaving-string/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/interleaving-string/1",
        "frequency": 59
      },
      {
        "title": "Path Sum",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/path-sum/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/path-sum/1",
        "frequency": 59
      },
      {
        "title": "Pascal's Triangle II",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/pascal-s-triangle-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/pascal-s-triangle-ii/1",
        "frequency": 58
      },
      {
        "title": "Next Permutation",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/next-permutation/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/next-permutation/1",
        "frequency": 56
      },
      {
        "title": "Recover Binary Search Tree",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/recover-binary-search-tree/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/recover-binary-search-tree/1",
        "frequency": 56
      },
      {
        "title": "Jump Game",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/jump-game/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/jump-game/1",
        "frequency": 55
      },
      {
        "title": "Text Justification",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/text-justification/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/text-justification/1",
        "frequency": 55
      },
      {
        "title": "Merge Sorted Array",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/merge-sorted-array/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/merge-sorted-array/1",
        "frequency": 54
      },
      {
        "title": "Count and Say",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/count-and-say/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/count-and-say/1",
        "frequency": 54
      },
      {
        "title": "Swap Nodes in Pairs",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/swap-nodes-in-pairs/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/swap-nodes-in-pairs/1",
        "frequency": 53
      },
      {
        "title": "Set Matrix Zeroes",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/set-matrix-zeroes/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/set-matrix-zeroes/1",
        "frequency": 53
      },
      {
        "title": "Word Search",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/word-search/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/word-search/1",
        "frequency": 52
      },
      {
        "title": "Search Insert Position",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/search-insert-position/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/search-insert-position/1",
        "frequency": 51
      },
      {
        "title": "Find the Index of the First Occurrence in a String",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/find-the-index-of-the-first-occurrence-in-a-string/1",
        "frequency": 51
      },
      {
        "title": "Letter Combinations of a Phone Number",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/letter-combinations-of-a-phone-number/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/letter-combinations-of-a-phone-number/1",
        "frequency": 51
      },
      {
        "title": "Combination Sum",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/combination-sum/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/combination-sum/1",
        "frequency": 51
      },
      {
        "title": "Remove Duplicates from Sorted List",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/remove-duplicates-from-sorted-list/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/remove-duplicates-from-sorted-list/1",
        "frequency": 51
      },
      {
        "title": "Binary Tree Zigzag Level Order Traversal",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/binary-tree-zigzag-level-order-traversal/1",
        "frequency": 47
      },
      {
        "title": "Remove Duplicates from Sorted List II",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/remove-duplicates-from-sorted-list-ii/1",
        "frequency": 46
      },
      {
        "title": "Remove Nth Node From End of List",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/remove-nth-node-from-end-of-list/1",
        "frequency": 46
      },
      {
        "title": "Minimum Depth of Binary Tree",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/minimum-depth-of-binary-tree/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/minimum-depth-of-binary-tree/1",
        "frequency": 45
      },
      {
        "title": "Unique Paths II",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/unique-paths-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/unique-paths-ii/1",
        "frequency": 45
      },
      {
        "title": "3Sum Closest",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/3sum-closest/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/3sum-closest/1",
        "frequency": 44
      },
      {
        "title": "Best Time to Buy and Sell Stock III",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/best-time-to-buy-and-sell-stock-iii/1",
        "frequency": 44
      },
      {
        "title": "Sudoku Solver",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/sudoku-solver/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/sudoku-solver/1",
        "frequency": 43
      },
      {
        "title": "Convert Sorted List to Binary Search Tree",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/convert-sorted-list-to-binary-search-tree/1",
        "frequency": 43
      },
      {
        "title": "Rotate List",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/rotate-list/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/rotate-list/1",
        "frequency": 42
      },
      {
        "title": "Group Anagrams",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/group-anagrams/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/group-anagrams/1",
        "frequency": 40
      },
      {
        "title": "First Missing Positive",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/first-missing-positive/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/first-missing-positive/1",
        "frequency": 40
      },
      {
        "title": "Sqrt(x)",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/sqrt-x/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/sqrt-x/1",
        "frequency": 40
      },
      {
        "title": "Largest Rectangle in Histogram",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/largest-rectangle-in-histogram/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/largest-rectangle-in-histogram/1",
        "frequency": 39
      },
      {
        "title": "Reverse Linked List II",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/reverse-linked-list-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/reverse-linked-list-ii/1",
        "frequency": 38
      },
      {
        "title": "Substring with Concatenation of All Words",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/substring-with-concatenation-of-all-words/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/substring-with-concatenation-of-all-words/1",
        "frequency": 37
      },
      {
        "title": "Validate Binary Search Tree",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/validate-binary-search-tree/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/validate-binary-search-tree/1",
        "frequency": 36
      },
      {
        "title": "Single Number II",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/single-number-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/single-number-ii/1",
        "frequency": 33
      },
      {
        "title": "Single Number",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/single-number/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/single-number/1",
        "frequency": 31
      },
      {
        "title": "Gray Code",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/gray-code/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/gray-code/1",
        "frequency": 29
      },
      {
        "title": "Search in Rotated Sorted Array",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/search-in-rotated-sorted-array/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/search-in-rotated-sorted-array/1",
        "frequency": 29
      },
      {
        "title": "Combinations",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/combinations/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/combinations/1",
        "frequency": 28
      },
      {
        "title": "Restore IP Addresses",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/restore-ip-addresses/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/restore-ip-addresses/1",
        "frequency": 28
      },
      {
        "title": "Minimum Path Sum",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/minimum-path-sum/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/minimum-path-sum/1",
        "frequency": 26
      },
      {
        "title": "Word Ladder II",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/word-ladder-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/word-ladder-ii/1",
        "frequency": 25
      },
      {
        "title": "Merge Two Sorted Lists",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/merge-two-sorted-lists/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/merge-two-sorted-lists/1",
        "frequency": 24
      },
      {
        "title": "Partition List",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/partition-list/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/partition-list/1",
        "frequency": 24
      },
      {
        "title": "Minimum Window Substring",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/minimum-window-substring/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/minimum-window-substring/1",
        "frequency": 24
      },
      {
        "title": "Find First and Last Position of Element in Sorted Array",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/find-first-and-last-position-of-element-in-sorted-array/1",
        "frequency": 23
      },
      {
        "title": "Convert Sorted Array to Binary Search Tree",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/convert-sorted-array-to-binary-search-tree/1",
        "frequency": 23
      },
      {
        "title": "Clone Graph",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/clone-graph/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/clone-graph/1",
        "frequency": 21
      },
      {
        "title": "Regular Expression Matching",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/regular-expression-matching/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/regular-expression-matching/1",
        "frequency": 20
      },
      {
        "title": "Palindrome Number",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/palindrome-number/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/palindrome-number/1",
        "frequency": 20
      }
    ]
  },
  {
    "name": "Linkedin",
    "slug": "linkedin",
    "logo": "🏢",
    "problemCount": 100,
    "tier": "Top Tier",
    "problems": [
      {
        "title": "Longest Common Prefix",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/longest-common-prefix/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/longest-common-prefix/1",
        "frequency": 98
      },
      {
        "title": "Permutation Sequence",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/permutation-sequence/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/permutation-sequence/1",
        "frequency": 95
      },
      {
        "title": "Word Ladder",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/word-ladder/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/word-ladder/1",
        "frequency": 95
      },
      {
        "title": "Multiply Strings",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/multiply-strings/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/multiply-strings/1",
        "frequency": 95
      },
      {
        "title": "Swap Nodes in Pairs",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/swap-nodes-in-pairs/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/swap-nodes-in-pairs/1",
        "frequency": 95
      },
      {
        "title": "Construct Binary Tree from Preorder and Inorder Traversal",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/construct-binary-tree-from-preorder-and-inorder-traversal/1",
        "frequency": 94
      },
      {
        "title": "Word Ladder II",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/word-ladder-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/word-ladder-ii/1",
        "frequency": 94
      },
      {
        "title": "Palindrome Partitioning II",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/palindrome-partitioning-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/palindrome-partitioning-ii/1",
        "frequency": 91
      },
      {
        "title": "Binary Tree Inorder Traversal",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/binary-tree-inorder-traversal/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/binary-tree-inorder-traversal/1",
        "frequency": 91
      },
      {
        "title": "Regular Expression Matching",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/regular-expression-matching/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/regular-expression-matching/1",
        "frequency": 90
      },
      {
        "title": "Restore IP Addresses",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/restore-ip-addresses/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/restore-ip-addresses/1",
        "frequency": 89
      },
      {
        "title": "Combination Sum II",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/combination-sum-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/combination-sum-ii/1",
        "frequency": 88
      },
      {
        "title": "String to Integer (atoi)",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/string-to-integer-atoi/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/string-to-integer-atoi/1",
        "frequency": 87
      },
      {
        "title": "Simplify Path",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/simplify-path/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/simplify-path/1",
        "frequency": 87
      },
      {
        "title": "Add Two Numbers",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/add-two-numbers/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/add-two-numbers/1",
        "frequency": 85
      },
      {
        "title": "Partition List",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/partition-list/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/partition-list/1",
        "frequency": 83
      },
      {
        "title": "Largest Rectangle in Histogram",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/largest-rectangle-in-histogram/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/largest-rectangle-in-histogram/1",
        "frequency": 82
      },
      {
        "title": "Symmetric Tree",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/symmetric-tree/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/symmetric-tree/1",
        "frequency": 82
      },
      {
        "title": "4Sum",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/4sum/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/4sum/1",
        "frequency": 81
      },
      {
        "title": "Binary Tree Level Order Traversal II",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/binary-tree-level-order-traversal-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/binary-tree-level-order-traversal-ii/1",
        "frequency": 81
      },
      {
        "title": "Combination Sum",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/combination-sum/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/combination-sum/1",
        "frequency": 79
      },
      {
        "title": "Search Insert Position",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/search-insert-position/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/search-insert-position/1",
        "frequency": 79
      },
      {
        "title": "Sort Colors",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/sort-colors/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/sort-colors/1",
        "frequency": 78
      },
      {
        "title": "Sudoku Solver",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/sudoku-solver/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/sudoku-solver/1",
        "frequency": 78
      },
      {
        "title": "Longest Consecutive Sequence",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/longest-consecutive-sequence/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/longest-consecutive-sequence/1",
        "frequency": 78
      },
      {
        "title": "Single Number",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/single-number/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/single-number/1",
        "frequency": 77
      },
      {
        "title": "Length of Last Word",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/length-of-last-word/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/length-of-last-word/1",
        "frequency": 76
      },
      {
        "title": "Rotate List",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/rotate-list/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/rotate-list/1",
        "frequency": 76
      },
      {
        "title": "Divide Two Integers",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/divide-two-integers/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/divide-two-integers/1",
        "frequency": 74
      },
      {
        "title": "Count and Say",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/count-and-say/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/count-and-say/1",
        "frequency": 73
      },
      {
        "title": "Longest Substring Without Repeating Characters",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/longest-substring-without-repeating-characters/1",
        "frequency": 73
      },
      {
        "title": "Valid Parentheses",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/valid-parentheses/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/valid-parentheses/1",
        "frequency": 73
      },
      {
        "title": "Text Justification",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/text-justification/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/text-justification/1",
        "frequency": 72
      },
      {
        "title": "Insert Interval",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/insert-interval/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/insert-interval/1",
        "frequency": 71
      },
      {
        "title": "Gray Code",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/gray-code/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/gray-code/1",
        "frequency": 71
      },
      {
        "title": "Reverse Linked List II",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/reverse-linked-list-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/reverse-linked-list-ii/1",
        "frequency": 70
      },
      {
        "title": "Binary Tree Level Order Traversal",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/binary-tree-level-order-traversal/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/binary-tree-level-order-traversal/1",
        "frequency": 69
      },
      {
        "title": "Search in Rotated Sorted Array II",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/search-in-rotated-sorted-array-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/search-in-rotated-sorted-array-ii/1",
        "frequency": 69
      },
      {
        "title": "Scramble String",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/scramble-string/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/scramble-string/1",
        "frequency": 69
      },
      {
        "title": "Merge Two Sorted Lists",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/merge-two-sorted-lists/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/merge-two-sorted-lists/1",
        "frequency": 69
      },
      {
        "title": "Convert Sorted List to Binary Search Tree",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/convert-sorted-list-to-binary-search-tree/1",
        "frequency": 67
      },
      {
        "title": "Add Binary",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/add-binary/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/add-binary/1",
        "frequency": 66
      },
      {
        "title": "Edit Distance",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/edit-distance/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/edit-distance/1",
        "frequency": 66
      },
      {
        "title": "Find the Index of the First Occurrence in a String",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/find-the-index-of-the-first-occurrence-in-a-string/1",
        "frequency": 66
      },
      {
        "title": "Subsets II",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/subsets-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/subsets-ii/1",
        "frequency": 65
      },
      {
        "title": "Sqrt(x)",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/sqrt-x/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/sqrt-x/1",
        "frequency": 65
      },
      {
        "title": "Generate Parentheses",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/generate-parentheses/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/generate-parentheses/1",
        "frequency": 65
      },
      {
        "title": "Unique Binary Search Trees",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/unique-binary-search-trees/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/unique-binary-search-trees/1",
        "frequency": 64
      },
      {
        "title": "Recover Binary Search Tree",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/recover-binary-search-tree/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/recover-binary-search-tree/1",
        "frequency": 63
      },
      {
        "title": "Substring with Concatenation of All Words",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/substring-with-concatenation-of-all-words/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/substring-with-concatenation-of-all-words/1",
        "frequency": 63
      },
      {
        "title": "Roman to Integer",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/roman-to-integer/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/roman-to-integer/1",
        "frequency": 63
      },
      {
        "title": "Search a 2D Matrix",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/search-a-2d-matrix/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/search-a-2d-matrix/1",
        "frequency": 62
      },
      {
        "title": "Remove Duplicates from Sorted List",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/remove-duplicates-from-sorted-list/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/remove-duplicates-from-sorted-list/1",
        "frequency": 62
      },
      {
        "title": "Median of Two Sorted Arrays",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/median-of-two-sorted-arrays/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/median-of-two-sorted-arrays/1",
        "frequency": 61
      },
      {
        "title": "Minimum Depth of Binary Tree",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/minimum-depth-of-binary-tree/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/minimum-depth-of-binary-tree/1",
        "frequency": 61
      },
      {
        "title": "Valid Palindrome",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/valid-palindrome/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/valid-palindrome/1",
        "frequency": 60
      },
      {
        "title": "Interleaving String",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/interleaving-string/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/interleaving-string/1",
        "frequency": 58
      },
      {
        "title": "Subsets",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/subsets/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/subsets/1",
        "frequency": 58
      },
      {
        "title": "Palindrome Partitioning",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/palindrome-partitioning/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/palindrome-partitioning/1",
        "frequency": 58
      },
      {
        "title": "Merge k Sorted Lists",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/merge-k-sorted-lists/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/merge-k-sorted-lists/1",
        "frequency": 56
      },
      {
        "title": "Spiral Matrix II",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/spiral-matrix-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/spiral-matrix-ii/1",
        "frequency": 56
      },
      {
        "title": "Same Tree",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/same-tree/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/same-tree/1",
        "frequency": 55
      },
      {
        "title": "Construct Binary Tree from Inorder and Postorder Traversal",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/construct-binary-tree-from-inorder-and-postorder-traversal/1",
        "frequency": 55
      },
      {
        "title": "Plus One",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/plus-one/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/plus-one/1",
        "frequency": 54
      },
      {
        "title": "Unique Binary Search Trees II",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/unique-binary-search-trees-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/unique-binary-search-trees-ii/1",
        "frequency": 54
      },
      {
        "title": "Remove Duplicates from Sorted List II",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/remove-duplicates-from-sorted-list-ii/1",
        "frequency": 51
      },
      {
        "title": "Jump Game II",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/jump-game-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/jump-game-ii/1",
        "frequency": 51
      },
      {
        "title": "Palindrome Number",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/palindrome-number/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/palindrome-number/1",
        "frequency": 48
      },
      {
        "title": "Longest Valid Parentheses",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/longest-valid-parentheses/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/longest-valid-parentheses/1",
        "frequency": 47
      },
      {
        "title": "Maximal Rectangle",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/maximal-rectangle/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/maximal-rectangle/1",
        "frequency": 46
      },
      {
        "title": "Reverse Nodes in k-Group",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/reverse-nodes-in-k-group/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/reverse-nodes-in-k-group/1",
        "frequency": 46
      },
      {
        "title": "Maximum Depth of Binary Tree",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/maximum-depth-of-binary-tree/1",
        "frequency": 45
      },
      {
        "title": "Container With Most Water",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/container-with-most-water/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/container-with-most-water/1",
        "frequency": 44
      },
      {
        "title": "Candy",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/candy/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/candy/1",
        "frequency": 43
      },
      {
        "title": "Decode Ways",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/decode-ways/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/decode-ways/1",
        "frequency": 42
      },
      {
        "title": "Merge Sorted Array",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/merge-sorted-array/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/merge-sorted-array/1",
        "frequency": 42
      },
      {
        "title": "Remove Duplicates from Sorted Array II",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/remove-duplicates-from-sorted-array-ii/1",
        "frequency": 42
      },
      {
        "title": "Reverse Integer",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/reverse-integer/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/reverse-integer/1",
        "frequency": 42
      },
      {
        "title": "Integer to Roman",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/integer-to-roman/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/integer-to-roman/1",
        "frequency": 41
      },
      {
        "title": "Binary Tree Maximum Path Sum",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/binary-tree-maximum-path-sum/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/binary-tree-maximum-path-sum/1",
        "frequency": 40
      },
      {
        "title": "Permutations II",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/permutations-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/permutations-ii/1",
        "frequency": 40
      },
      {
        "title": "Word Search",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/word-search/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/word-search/1",
        "frequency": 39
      },
      {
        "title": "Search in Rotated Sorted Array",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/search-in-rotated-sorted-array/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/search-in-rotated-sorted-array/1",
        "frequency": 38
      },
      {
        "title": "Jump Game",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/jump-game/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/jump-game/1",
        "frequency": 38
      },
      {
        "title": "Spiral Matrix",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/spiral-matrix/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/spiral-matrix/1",
        "frequency": 37
      },
      {
        "title": "Unique Paths II",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/unique-paths-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/unique-paths-ii/1",
        "frequency": 36
      },
      {
        "title": "Set Matrix Zeroes",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/set-matrix-zeroes/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/set-matrix-zeroes/1",
        "frequency": 35
      },
      {
        "title": "Rotate Image",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/rotate-image/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/rotate-image/1",
        "frequency": 34
      },
      {
        "title": "Remove Duplicates from Sorted Array",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/remove-duplicates-from-sorted-array/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/remove-duplicates-from-sorted-array/1",
        "frequency": 34
      },
      {
        "title": "Letter Combinations of a Phone Number",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/letter-combinations-of-a-phone-number/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/letter-combinations-of-a-phone-number/1",
        "frequency": 33
      },
      {
        "title": "Validate Binary Search Tree",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/validate-binary-search-tree/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/validate-binary-search-tree/1",
        "frequency": 33
      },
      {
        "title": "Pascal's Triangle",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/pascal-s-triangle/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/pascal-s-triangle/1",
        "frequency": 33
      },
      {
        "title": "Combinations",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/combinations/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/combinations/1",
        "frequency": 32
      },
      {
        "title": "Binary Tree Zigzag Level Order Traversal",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/binary-tree-zigzag-level-order-traversal/1",
        "frequency": 31
      },
      {
        "title": "Maximum Subarray",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/maximum-subarray/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/maximum-subarray/1",
        "frequency": 31
      },
      {
        "title": "Single Number II",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/single-number-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/single-number-ii/1",
        "frequency": 31
      },
      {
        "title": "Minimum Window Substring",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/minimum-window-substring/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/minimum-window-substring/1",
        "frequency": 29
      },
      {
        "title": "Remove Nth Node From End of List",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/remove-nth-node-from-end-of-list/1",
        "frequency": 25
      },
      {
        "title": "Climbing Stairs",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/climbing-stairs/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/climbing-stairs/1",
        "frequency": 21
      },
      {
        "title": "Longest Palindromic Substring",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/longest-palindromic-substring/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/longest-palindromic-substring/1",
        "frequency": 20
      }
    ]
  },
  {
    "name": "Tcs",
    "slug": "tcs",
    "logo": "🏢",
    "problemCount": 100,
    "tier": null,
    "problems": [
      {
        "title": "Median of Two Sorted Arrays",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/median-of-two-sorted-arrays/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/median-of-two-sorted-arrays/1",
        "frequency": 98
      },
      {
        "title": "Trapping Rain Water",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/trapping-rain-water/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/trapping-rain-water/1",
        "frequency": 98
      },
      {
        "title": "Rotate List",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/rotate-list/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/rotate-list/1",
        "frequency": 98
      },
      {
        "title": "Zigzag Conversion",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/zigzag-conversion/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/zigzag-conversion/1",
        "frequency": 98
      },
      {
        "title": "Find First and Last Position of Element in Sorted Array",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/find-first-and-last-position-of-element-in-sorted-array/1",
        "frequency": 98
      },
      {
        "title": "Permutations II",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/permutations-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/permutations-ii/1",
        "frequency": 98
      },
      {
        "title": "Valid Palindrome",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/valid-palindrome/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/valid-palindrome/1",
        "frequency": 97
      },
      {
        "title": "Group Anagrams",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/group-anagrams/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/group-anagrams/1",
        "frequency": 96
      },
      {
        "title": "Plus One",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/plus-one/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/plus-one/1",
        "frequency": 96
      },
      {
        "title": "Palindrome Partitioning",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/palindrome-partitioning/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/palindrome-partitioning/1",
        "frequency": 95
      },
      {
        "title": "Palindrome Number",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/palindrome-number/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/palindrome-number/1",
        "frequency": 95
      },
      {
        "title": "Unique Binary Search Trees",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/unique-binary-search-trees/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/unique-binary-search-trees/1",
        "frequency": 95
      },
      {
        "title": "Search a 2D Matrix",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/search-a-2d-matrix/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/search-a-2d-matrix/1",
        "frequency": 95
      },
      {
        "title": "Populating Next Right Pointers in Each Node II",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/populating-next-right-pointers-in-each-node-ii/1",
        "frequency": 93
      },
      {
        "title": "Longest Common Prefix",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/longest-common-prefix/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/longest-common-prefix/1",
        "frequency": 93
      },
      {
        "title": "Next Permutation",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/next-permutation/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/next-permutation/1",
        "frequency": 90
      },
      {
        "title": "Reverse Integer",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/reverse-integer/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/reverse-integer/1",
        "frequency": 90
      },
      {
        "title": "Remove Element",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/remove-element/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/remove-element/1",
        "frequency": 88
      },
      {
        "title": "Surrounded Regions",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/surrounded-regions/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/surrounded-regions/1",
        "frequency": 88
      },
      {
        "title": "Maximal Rectangle",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/maximal-rectangle/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/maximal-rectangle/1",
        "frequency": 87
      },
      {
        "title": "Unique Paths II",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/unique-paths-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/unique-paths-ii/1",
        "frequency": 87
      },
      {
        "title": "Convert Sorted List to Binary Search Tree",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/convert-sorted-list-to-binary-search-tree/1",
        "frequency": 85
      },
      {
        "title": "Merge k Sorted Lists",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/merge-k-sorted-lists/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/merge-k-sorted-lists/1",
        "frequency": 85
      },
      {
        "title": "Sqrt(x)",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/sqrt-x/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/sqrt-x/1",
        "frequency": 85
      },
      {
        "title": "N-Queens II",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/n-queens-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/n-queens-ii/1",
        "frequency": 85
      },
      {
        "title": "Minimum Depth of Binary Tree",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/minimum-depth-of-binary-tree/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/minimum-depth-of-binary-tree/1",
        "frequency": 85
      },
      {
        "title": "Climbing Stairs",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/climbing-stairs/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/climbing-stairs/1",
        "frequency": 81
      },
      {
        "title": "Distinct Subsequences",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/distinct-subsequences/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/distinct-subsequences/1",
        "frequency": 80
      },
      {
        "title": "Best Time to Buy and Sell Stock II",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/best-time-to-buy-and-sell-stock-ii/1",
        "frequency": 79
      },
      {
        "title": "Word Ladder",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/word-ladder/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/word-ladder/1",
        "frequency": 78
      },
      {
        "title": "Pow(x, n)",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/pow-x-n/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/pow-x-n/1",
        "frequency": 78
      },
      {
        "title": "Generate Parentheses",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/generate-parentheses/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/generate-parentheses/1",
        "frequency": 78
      },
      {
        "title": "Maximum Depth of Binary Tree",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/maximum-depth-of-binary-tree/1",
        "frequency": 77
      },
      {
        "title": "Permutations",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/permutations/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/permutations/1",
        "frequency": 77
      },
      {
        "title": "Sum Root to Leaf Numbers",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/sum-root-to-leaf-numbers/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/sum-root-to-leaf-numbers/1",
        "frequency": 75
      },
      {
        "title": "Populating Next Right Pointers in Each Node",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/populating-next-right-pointers-in-each-node/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/populating-next-right-pointers-in-each-node/1",
        "frequency": 75
      },
      {
        "title": "Sort Colors",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/sort-colors/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/sort-colors/1",
        "frequency": 74
      },
      {
        "title": "Construct Binary Tree from Preorder and Inorder Traversal",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/construct-binary-tree-from-preorder-and-inorder-traversal/1",
        "frequency": 73
      },
      {
        "title": "Jump Game II",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/jump-game-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/jump-game-ii/1",
        "frequency": 72
      },
      {
        "title": "Validate Binary Search Tree",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/validate-binary-search-tree/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/validate-binary-search-tree/1",
        "frequency": 72
      },
      {
        "title": "Jump Game",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/jump-game/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/jump-game/1",
        "frequency": 70
      },
      {
        "title": "Insert Interval",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/insert-interval/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/insert-interval/1",
        "frequency": 69
      },
      {
        "title": "Longest Substring Without Repeating Characters",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/longest-substring-without-repeating-characters/1",
        "frequency": 69
      },
      {
        "title": "Pascal's Triangle",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/pascal-s-triangle/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/pascal-s-triangle/1",
        "frequency": 69
      },
      {
        "title": "Reverse Nodes in k-Group",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/reverse-nodes-in-k-group/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/reverse-nodes-in-k-group/1",
        "frequency": 67
      },
      {
        "title": "Valid Parentheses",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/valid-parentheses/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/valid-parentheses/1",
        "frequency": 66
      },
      {
        "title": "Longest Consecutive Sequence",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/longest-consecutive-sequence/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/longest-consecutive-sequence/1",
        "frequency": 64
      },
      {
        "title": "Add Binary",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/add-binary/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/add-binary/1",
        "frequency": 64
      },
      {
        "title": "Construct Binary Tree from Inorder and Postorder Traversal",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/construct-binary-tree-from-inorder-and-postorder-traversal/1",
        "frequency": 64
      },
      {
        "title": "Text Justification",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/text-justification/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/text-justification/1",
        "frequency": 64
      },
      {
        "title": "Subsets",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/subsets/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/subsets/1",
        "frequency": 64
      },
      {
        "title": "Binary Tree Maximum Path Sum",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/binary-tree-maximum-path-sum/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/binary-tree-maximum-path-sum/1",
        "frequency": 63
      },
      {
        "title": "Longest Palindromic Substring",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/longest-palindromic-substring/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/longest-palindromic-substring/1",
        "frequency": 61
      },
      {
        "title": "Longest Valid Parentheses",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/longest-valid-parentheses/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/longest-valid-parentheses/1",
        "frequency": 60
      },
      {
        "title": "Add Two Numbers",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/add-two-numbers/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/add-two-numbers/1",
        "frequency": 60
      },
      {
        "title": "Valid Sudoku",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/valid-sudoku/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/valid-sudoku/1",
        "frequency": 56
      },
      {
        "title": "Valid Number",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/valid-number/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/valid-number/1",
        "frequency": 56
      },
      {
        "title": "Reverse Linked List II",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/reverse-linked-list-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/reverse-linked-list-ii/1",
        "frequency": 53
      },
      {
        "title": "Scramble String",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/scramble-string/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/scramble-string/1",
        "frequency": 53
      },
      {
        "title": "Decode Ways",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/decode-ways/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/decode-ways/1",
        "frequency": 51
      },
      {
        "title": "Single Number II",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/single-number-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/single-number-ii/1",
        "frequency": 48
      },
      {
        "title": "Container With Most Water",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/container-with-most-water/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/container-with-most-water/1",
        "frequency": 48
      },
      {
        "title": "Recover Binary Search Tree",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/recover-binary-search-tree/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/recover-binary-search-tree/1",
        "frequency": 47
      },
      {
        "title": "Search in Rotated Sorted Array",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/search-in-rotated-sorted-array/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/search-in-rotated-sorted-array/1",
        "frequency": 47
      },
      {
        "title": "Merge Sorted Array",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/merge-sorted-array/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/merge-sorted-array/1",
        "frequency": 45
      },
      {
        "title": "Remove Duplicates from Sorted List II",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/remove-duplicates-from-sorted-list-ii/1",
        "frequency": 45
      },
      {
        "title": "Spiral Matrix",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/spiral-matrix/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/spiral-matrix/1",
        "frequency": 44
      },
      {
        "title": "Remove Nth Node From End of List",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/remove-nth-node-from-end-of-list/1",
        "frequency": 43
      },
      {
        "title": "Clone Graph",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/clone-graph/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/clone-graph/1",
        "frequency": 41
      },
      {
        "title": "Balanced Binary Tree",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/balanced-binary-tree/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/balanced-binary-tree/1",
        "frequency": 41
      },
      {
        "title": "Search Insert Position",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/search-insert-position/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/search-insert-position/1",
        "frequency": 40
      },
      {
        "title": "Largest Rectangle in Histogram",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/largest-rectangle-in-histogram/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/largest-rectangle-in-histogram/1",
        "frequency": 40
      },
      {
        "title": "Binary Tree Level Order Traversal",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/binary-tree-level-order-traversal/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/binary-tree-level-order-traversal/1",
        "frequency": 40
      },
      {
        "title": "Triangle",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/triangle/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/triangle/1",
        "frequency": 38
      },
      {
        "title": "Combinations",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/combinations/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/combinations/1",
        "frequency": 38
      },
      {
        "title": "Search in Rotated Sorted Array II",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/search-in-rotated-sorted-array-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/search-in-rotated-sorted-array-ii/1",
        "frequency": 38
      },
      {
        "title": "Pascal's Triangle II",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/pascal-s-triangle-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/pascal-s-triangle-ii/1",
        "frequency": 36
      },
      {
        "title": "Set Matrix Zeroes",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/set-matrix-zeroes/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/set-matrix-zeroes/1",
        "frequency": 35
      },
      {
        "title": "3Sum Closest",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/3sum-closest/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/3sum-closest/1",
        "frequency": 35
      },
      {
        "title": "Palindrome Partitioning II",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/palindrome-partitioning-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/palindrome-partitioning-ii/1",
        "frequency": 34
      },
      {
        "title": "Letter Combinations of a Phone Number",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/letter-combinations-of-a-phone-number/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/letter-combinations-of-a-phone-number/1",
        "frequency": 33
      },
      {
        "title": "Single Number",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/single-number/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/single-number/1",
        "frequency": 32
      },
      {
        "title": "Rotate Image",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/rotate-image/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/rotate-image/1",
        "frequency": 31
      },
      {
        "title": "Interleaving String",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/interleaving-string/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/interleaving-string/1",
        "frequency": 30
      },
      {
        "title": "Flatten Binary Tree to Linked List",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/flatten-binary-tree-to-linked-list/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/flatten-binary-tree-to-linked-list/1",
        "frequency": 30
      },
      {
        "title": "Combination Sum",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/combination-sum/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/combination-sum/1",
        "frequency": 29
      },
      {
        "title": "Find the Index of the First Occurrence in a String",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/find-the-index-of-the-first-occurrence-in-a-string/1",
        "frequency": 28
      },
      {
        "title": "Gas Station",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/gas-station/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/gas-station/1",
        "frequency": 27
      },
      {
        "title": "Divide Two Integers",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/divide-two-integers/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/divide-two-integers/1",
        "frequency": 27
      },
      {
        "title": "Subsets II",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/subsets-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/subsets-ii/1",
        "frequency": 27
      },
      {
        "title": "Permutation Sequence",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/permutation-sequence/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/permutation-sequence/1",
        "frequency": 26
      },
      {
        "title": "Wildcard Matching",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/wildcard-matching/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/wildcard-matching/1",
        "frequency": 25
      },
      {
        "title": "4Sum",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/4sum/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/4sum/1",
        "frequency": 23
      },
      {
        "title": "Multiply Strings",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/multiply-strings/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/multiply-strings/1",
        "frequency": 23
      },
      {
        "title": "Roman to Integer",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/roman-to-integer/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/roman-to-integer/1",
        "frequency": 22
      },
      {
        "title": "Partition List",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/partition-list/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/partition-list/1",
        "frequency": 22
      },
      {
        "title": "Edit Distance",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/edit-distance/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/edit-distance/1",
        "frequency": 22
      },
      {
        "title": "Count and Say",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/count-and-say/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/count-and-say/1",
        "frequency": 22
      },
      {
        "title": "Two Sum",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/two-sum/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/two-sum/1",
        "frequency": 22
      },
      {
        "title": "String to Integer (atoi)",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/string-to-integer-atoi/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/string-to-integer-atoi/1",
        "frequency": 20
      }
    ]
  },
  {
    "name": "Infosys",
    "slug": "infosys",
    "logo": "🏢",
    "problemCount": 100,
    "tier": null,
    "problems": [
      {
        "title": "Unique Paths",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/unique-paths/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/unique-paths/1",
        "frequency": 99
      },
      {
        "title": "Remove Duplicates from Sorted Array",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/remove-duplicates-from-sorted-array/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/remove-duplicates-from-sorted-array/1",
        "frequency": 98
      },
      {
        "title": "Unique Binary Search Trees",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/unique-binary-search-trees/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/unique-binary-search-trees/1",
        "frequency": 97
      },
      {
        "title": "Add Two Numbers",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/add-two-numbers/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/add-two-numbers/1",
        "frequency": 97
      },
      {
        "title": "Binary Tree Zigzag Level Order Traversal",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/binary-tree-zigzag-level-order-traversal/1",
        "frequency": 96
      },
      {
        "title": "Gray Code",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/gray-code/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/gray-code/1",
        "frequency": 96
      },
      {
        "title": "Generate Parentheses",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/generate-parentheses/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/generate-parentheses/1",
        "frequency": 95
      },
      {
        "title": "Valid Number",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/valid-number/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/valid-number/1",
        "frequency": 94
      },
      {
        "title": "Regular Expression Matching",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/regular-expression-matching/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/regular-expression-matching/1",
        "frequency": 93
      },
      {
        "title": "Spiral Matrix",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/spiral-matrix/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/spiral-matrix/1",
        "frequency": 92
      },
      {
        "title": "Palindrome Partitioning II",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/palindrome-partitioning-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/palindrome-partitioning-ii/1",
        "frequency": 92
      },
      {
        "title": "Valid Sudoku",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/valid-sudoku/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/valid-sudoku/1",
        "frequency": 91
      },
      {
        "title": "Multiply Strings",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/multiply-strings/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/multiply-strings/1",
        "frequency": 91
      },
      {
        "title": "Zigzag Conversion",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/zigzag-conversion/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/zigzag-conversion/1",
        "frequency": 91
      },
      {
        "title": "Permutation Sequence",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/permutation-sequence/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/permutation-sequence/1",
        "frequency": 90
      },
      {
        "title": "Container With Most Water",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/container-with-most-water/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/container-with-most-water/1",
        "frequency": 90
      },
      {
        "title": "Merge Intervals",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/merge-intervals/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/merge-intervals/1",
        "frequency": 89
      },
      {
        "title": "Surrounded Regions",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/surrounded-regions/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/surrounded-regions/1",
        "frequency": 88
      },
      {
        "title": "Merge k Sorted Lists",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/merge-k-sorted-lists/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/merge-k-sorted-lists/1",
        "frequency": 87
      },
      {
        "title": "Longest Substring Without Repeating Characters",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/longest-substring-without-repeating-characters/1",
        "frequency": 87
      },
      {
        "title": "Reverse Integer",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/reverse-integer/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/reverse-integer/1",
        "frequency": 87
      },
      {
        "title": "Integer to Roman",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/integer-to-roman/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/integer-to-roman/1",
        "frequency": 86
      },
      {
        "title": "Sort Colors",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/sort-colors/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/sort-colors/1",
        "frequency": 85
      },
      {
        "title": "Binary Tree Inorder Traversal",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/binary-tree-inorder-traversal/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/binary-tree-inorder-traversal/1",
        "frequency": 85
      },
      {
        "title": "Minimum Path Sum",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/minimum-path-sum/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/minimum-path-sum/1",
        "frequency": 84
      },
      {
        "title": "Search in Rotated Sorted Array",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/search-in-rotated-sorted-array/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/search-in-rotated-sorted-array/1",
        "frequency": 84
      },
      {
        "title": "Substring with Concatenation of All Words",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/substring-with-concatenation-of-all-words/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/substring-with-concatenation-of-all-words/1",
        "frequency": 84
      },
      {
        "title": "Remove Element",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/remove-element/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/remove-element/1",
        "frequency": 82
      },
      {
        "title": "Jump Game",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/jump-game/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/jump-game/1",
        "frequency": 81
      },
      {
        "title": "Valid Parentheses",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/valid-parentheses/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/valid-parentheses/1",
        "frequency": 81
      },
      {
        "title": "Two Sum",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/two-sum/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/two-sum/1",
        "frequency": 80
      },
      {
        "title": "Combinations",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/combinations/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/combinations/1",
        "frequency": 80
      },
      {
        "title": "Jump Game II",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/jump-game-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/jump-game-ii/1",
        "frequency": 80
      },
      {
        "title": "4Sum",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/4sum/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/4sum/1",
        "frequency": 80
      },
      {
        "title": "Word Ladder",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/word-ladder/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/word-ladder/1",
        "frequency": 79
      },
      {
        "title": "Sudoku Solver",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/sudoku-solver/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/sudoku-solver/1",
        "frequency": 79
      },
      {
        "title": "Longest Common Prefix",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/longest-common-prefix/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/longest-common-prefix/1",
        "frequency": 77
      },
      {
        "title": "Binary Tree Level Order Traversal II",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/binary-tree-level-order-traversal-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/binary-tree-level-order-traversal-ii/1",
        "frequency": 75
      },
      {
        "title": "Longest Consecutive Sequence",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/longest-consecutive-sequence/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/longest-consecutive-sequence/1",
        "frequency": 75
      },
      {
        "title": "Simplify Path",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/simplify-path/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/simplify-path/1",
        "frequency": 74
      },
      {
        "title": "Remove Duplicates from Sorted List",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/remove-duplicates-from-sorted-list/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/remove-duplicates-from-sorted-list/1",
        "frequency": 74
      },
      {
        "title": "N-Queens II",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/n-queens-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/n-queens-ii/1",
        "frequency": 73
      },
      {
        "title": "Valid Palindrome",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/valid-palindrome/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/valid-palindrome/1",
        "frequency": 73
      },
      {
        "title": "Text Justification",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/text-justification/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/text-justification/1",
        "frequency": 72
      },
      {
        "title": "String to Integer (atoi)",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/string-to-integer-atoi/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/string-to-integer-atoi/1",
        "frequency": 71
      },
      {
        "title": "Spiral Matrix II",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/spiral-matrix-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/spiral-matrix-ii/1",
        "frequency": 71
      },
      {
        "title": "Palindrome Number",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/palindrome-number/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/palindrome-number/1",
        "frequency": 70
      },
      {
        "title": "Recover Binary Search Tree",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/recover-binary-search-tree/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/recover-binary-search-tree/1",
        "frequency": 70
      },
      {
        "title": "Rotate Image",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/rotate-image/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/rotate-image/1",
        "frequency": 68
      },
      {
        "title": "Count and Say",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/count-and-say/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/count-and-say/1",
        "frequency": 68
      },
      {
        "title": "Decode Ways",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/decode-ways/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/decode-ways/1",
        "frequency": 68
      },
      {
        "title": "Letter Combinations of a Phone Number",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/letter-combinations-of-a-phone-number/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/letter-combinations-of-a-phone-number/1",
        "frequency": 67
      },
      {
        "title": "Construct Binary Tree from Preorder and Inorder Traversal",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/construct-binary-tree-from-preorder-and-inorder-traversal/1",
        "frequency": 67
      },
      {
        "title": "Longest Valid Parentheses",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/longest-valid-parentheses/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/longest-valid-parentheses/1",
        "frequency": 65
      },
      {
        "title": "Best Time to Buy and Sell Stock",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/best-time-to-buy-and-sell-stock/1",
        "frequency": 64
      },
      {
        "title": "Path Sum II",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/path-sum-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/path-sum-ii/1",
        "frequency": 62
      },
      {
        "title": "First Missing Positive",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/first-missing-positive/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/first-missing-positive/1",
        "frequency": 61
      },
      {
        "title": "Next Permutation",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/next-permutation/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/next-permutation/1",
        "frequency": 58
      },
      {
        "title": "Balanced Binary Tree",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/balanced-binary-tree/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/balanced-binary-tree/1",
        "frequency": 57
      },
      {
        "title": "Length of Last Word",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/length-of-last-word/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/length-of-last-word/1",
        "frequency": 57
      },
      {
        "title": "Edit Distance",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/edit-distance/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/edit-distance/1",
        "frequency": 57
      },
      {
        "title": "Clone Graph",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/clone-graph/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/clone-graph/1",
        "frequency": 53
      },
      {
        "title": "Swap Nodes in Pairs",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/swap-nodes-in-pairs/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/swap-nodes-in-pairs/1",
        "frequency": 53
      },
      {
        "title": "Path Sum",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/path-sum/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/path-sum/1",
        "frequency": 52
      },
      {
        "title": "Scramble String",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/scramble-string/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/scramble-string/1",
        "frequency": 50
      },
      {
        "title": "Trapping Rain Water",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/trapping-rain-water/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/trapping-rain-water/1",
        "frequency": 50
      },
      {
        "title": "Combination Sum II",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/combination-sum-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/combination-sum-ii/1",
        "frequency": 48
      },
      {
        "title": "Maximum Depth of Binary Tree",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/maximum-depth-of-binary-tree/1",
        "frequency": 48
      },
      {
        "title": "Best Time to Buy and Sell Stock II",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/best-time-to-buy-and-sell-stock-ii/1",
        "frequency": 47
      },
      {
        "title": "Minimum Depth of Binary Tree",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/minimum-depth-of-binary-tree/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/minimum-depth-of-binary-tree/1",
        "frequency": 46
      },
      {
        "title": "3Sum Closest",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/3sum-closest/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/3sum-closest/1",
        "frequency": 45
      },
      {
        "title": "Sum Root to Leaf Numbers",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/sum-root-to-leaf-numbers/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/sum-root-to-leaf-numbers/1",
        "frequency": 42
      },
      {
        "title": "Median of Two Sorted Arrays",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/median-of-two-sorted-arrays/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/median-of-two-sorted-arrays/1",
        "frequency": 42
      },
      {
        "title": "Maximum Subarray",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/maximum-subarray/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/maximum-subarray/1",
        "frequency": 42
      },
      {
        "title": "Search Insert Position",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/search-insert-position/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/search-insert-position/1",
        "frequency": 42
      },
      {
        "title": "Reverse Nodes in k-Group",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/reverse-nodes-in-k-group/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/reverse-nodes-in-k-group/1",
        "frequency": 41
      },
      {
        "title": "Convert Sorted List to Binary Search Tree",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/convert-sorted-list-to-binary-search-tree/1",
        "frequency": 41
      },
      {
        "title": "Binary Tree Maximum Path Sum",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/binary-tree-maximum-path-sum/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/binary-tree-maximum-path-sum/1",
        "frequency": 40
      },
      {
        "title": "Insert Interval",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/insert-interval/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/insert-interval/1",
        "frequency": 39
      },
      {
        "title": "Pow(x, n)",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/pow-x-n/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/pow-x-n/1",
        "frequency": 38
      },
      {
        "title": "Triangle",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/triangle/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/triangle/1",
        "frequency": 38
      },
      {
        "title": "Find the Index of the First Occurrence in a String",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/find-the-index-of-the-first-occurrence-in-a-string/1",
        "frequency": 38
      },
      {
        "title": "Unique Paths II",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/unique-paths-ii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/unique-paths-ii/1",
        "frequency": 37
      },
      {
        "title": "Find First and Last Position of Element in Sorted Array",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/find-first-and-last-position-of-element-in-sorted-array/1",
        "frequency": 36
      },
      {
        "title": "Maximal Rectangle",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/maximal-rectangle/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/maximal-rectangle/1",
        "frequency": 36
      },
      {
        "title": "Palindrome Partitioning",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/palindrome-partitioning/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/palindrome-partitioning/1",
        "frequency": 34
      },
      {
        "title": "Climbing Stairs",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/climbing-stairs/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/climbing-stairs/1",
        "frequency": 34
      },
      {
        "title": "Longest Palindromic Substring",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/longest-palindromic-substring/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/longest-palindromic-substring/1",
        "frequency": 33
      },
      {
        "title": "Divide Two Integers",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/divide-two-integers/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/divide-two-integers/1",
        "frequency": 30
      },
      {
        "title": "Search a 2D Matrix",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/search-a-2d-matrix/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/search-a-2d-matrix/1",
        "frequency": 29
      },
      {
        "title": "Combination Sum",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/combination-sum/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/combination-sum/1",
        "frequency": 28
      },
      {
        "title": "Same Tree",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/same-tree/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/same-tree/1",
        "frequency": 28
      },
      {
        "title": "Remove Nth Node From End of List",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/remove-nth-node-from-end-of-list/1",
        "frequency": 26
      },
      {
        "title": "Merge Two Sorted Lists",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/merge-two-sorted-lists/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/merge-two-sorted-lists/1",
        "frequency": 26
      },
      {
        "title": "Best Time to Buy and Sell Stock III",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/best-time-to-buy-and-sell-stock-iii/1",
        "frequency": 25
      },
      {
        "title": "Sqrt(x)",
        "difficulty": "Medium",
        "leetcodeLink": "https://leetcode.com/problems/sqrt-x/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/sqrt-x/1",
        "frequency": 24
      },
      {
        "title": "Merge Sorted Array",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/merge-sorted-array/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/merge-sorted-array/1",
        "frequency": 23
      },
      {
        "title": "Add Binary",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/add-binary/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/add-binary/1",
        "frequency": 23
      },
      {
        "title": "Group Anagrams",
        "difficulty": "Easy",
        "leetcodeLink": "https://leetcode.com/problems/group-anagrams/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/group-anagrams/1",
        "frequency": 20
      },
      {
        "title": "3Sum",
        "difficulty": "Hard",
        "leetcodeLink": "https://leetcode.com/problems/3sum/",
        "gfgLink": "https://practice.geeksforgeeks.org/problems/3sum/1",
        "frequency": 20
      }
    ]
  }
];

const seedCompanies = async () => {
  try {
    await Company.deleteMany({});
    await Company.insertMany(companiesData);
    console.log('✅ Seeded Comprehensive FAANG Companies Data Bank with 100 questions each.');
  } catch (err) {
    console.error('❌ Failed to seed companies:', err);
  }
};

module.exports = seedCompanies;
