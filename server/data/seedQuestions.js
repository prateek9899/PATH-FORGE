const mongoose = require('mongoose');
const Question = require('../models/Question');

const q = (title, diff, patt, comps, slug, acc) => ({
  title, difficulty: diff, pattern: patt,
  companies: comps, link: `https://leetcode.com/problems/${slug}/`,
  acceptance: acc, isPremium: false
});

const questionsData = [
  q("Two Sum", "Easy", "Arrays & Hashing", ["Google", "Amazon", "Apple", "Facebook"], "two-sum", 49.2),
  q("Add Two Numbers", "Medium", "Linked List", ["Amazon", "Bloomberg", "Microsoft"], "add-two-numbers", 40.0),
  q("Longest Substring Without Repeating Characters", "Medium", "Sliding Window", ["Amazon", "Bloomberg"], "longest-substring-without-repeating-characters", 33.8),
  q("Median of Two Sorted Arrays", "Hard", "Binary Search", ["Amazon", "Google", "Apple"], "median-of-two-sorted-arrays", 35.6),
  q("Longest Palindromic Substring", "Medium", "1D DP", ["Amazon", "Microsoft"], "longest-palindromic-substring", 32.3),
  q("Zigzag Conversion", "Medium", "String", ["Amazon", "Paypal"], "zigzag-conversion", 43.8),
  q("Reverse Integer", "Medium", "Math", ["Apple", "Bloomberg"], "reverse-integer", 27.2),
  q("String to Integer (atoi)", "Medium", "String", ["Amazon", "Microsoft"], "string-to-integer-atoi", 16.6),
  q("Palindrome Number", "Easy", "Math", ["Amazon", "Google"], "palindrome-number", 53.0),
  q("Container With Most Water", "Medium", "Two Pointers", ["Amazon", "Google", "Facebook"], "container-with-most-water", 54.0),
  q("3Sum", "Medium", "Two Pointers", ["Amazon", "Microsoft", "Facebook"], "3sum", 32.4),
  q("Valid Parentheses", "Easy", "Stack", ["Facebook", "Amazon", "Apple"], "valid-parentheses", 40.2),
  q("Merge Two Sorted Lists", "Easy", "Linked List", ["Amazon", "Microsoft"], "merge-two-sorted-lists", 62.1),
  q("Generate Parentheses", "Medium", "Backtracking", ["Facebook", "Microsoft"], "generate-parentheses", 72.3),
  q("Merge k Sorted Lists", "Hard", "Linked List", ["Google", "Amazon", "Facebook"], "merge-k-sorted-lists", 49.8),
  q("Search in Rotated Sorted Array", "Medium", "Binary Search", ["Amazon", "Microsoft", "Bloomberg"], "search-in-rotated-sorted-array", 38.9),
  q("Combination Sum", "Medium", "Backtracking", ["Amazon", "Apple"], "combination-sum", 68.4),
  q("First Missing Positive", "Hard", "Arrays & Hashing", ["Google", "Amazon"], "first-missing-positive", 36.8),
  q("Trapping Rain Water", "Hard", "Two Pointers", ["Google", "Amazon", "Apple"], "trapping-rain-water", 59.2),
  q("Group Anagrams", "Medium", "Arrays & Hashing", ["Amazon", "Google"], "group-anagrams", 66.6),
  q("Maximum Subarray", "Medium", "1D DP", ["Google", "Meta", "Apple"], "maximum-subarray", 50.1),
  q("Spiral Matrix", "Medium", "Math", ["Microsoft", "Google"], "spiral-matrix", 45.4),
  q("Jump Game", "Medium", "Greedy", ["Amazon", "Microsoft"], "jump-game", 38.4),
  q("Merge Intervals", "Medium", "Arrays & Hashing", ["Google", "LinkedIn", "Amazon"], "merge-intervals", 45.9),
  q("Insert Interval", "Medium", "Arrays & Hashing", ["Google", "Facebook"], "insert-interval", 38.6),
  q("Minimum Path Sum", "Medium", "2D DP", ["Amazon", "Google"], "minimum-path-sum", 61.3),
  q("Climbing Stairs", "Easy", "1D DP", ["Amazon", "Apple", "Google"], "climbing-stairs", 52.1),
  q("Edit Distance", "Hard", "2D DP", ["Google", "Meta"], "edit-distance", 53.5),
  q("Set Matrix Zeroes", "Medium", "Math", ["Microsoft", "Amazon"], "set-matrix-zeroes", 50.4),
  q("Sort Colors", "Medium", "Two Pointers", ["Microsoft", "Amazon", "Google"], "sort-colors", 58.1),
  q("Minimum Window Substring", "Hard", "Sliding Window", ["Facebook", "LinkedIn", "Amazon"], "minimum-window-substring", 40.7),
  q("Word Search", "Medium", "Backtracking", ["Amazon", "Microsoft", "Google"], "word-search", 40.3),
  q("Binary Tree Maximum Path Sum", "Hard", "Trees", ["Google", "Meta", "Amazon"], "binary-tree-maximum-path-sum", 39.1)
];

const seedQuestions = async () => {
  try {
    await Question.deleteMany({});
    await Question.insertMany(questionsData);
    console.log(`✅ Seeded ${questionsData.length} master Question Bank problems.`);
  } catch (err) {
    console.error('❌ Failed to seed Questions Bank:', err);
  }
};

module.exports = seedQuestions;
