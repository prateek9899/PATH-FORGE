const mongoose = require('mongoose');
const BehavioralQuestion = require('../models/BehavioralQuestion');

const behavioralData = [
  {
    question: "Tell me about a time you had a conflict with a coworker.",
    category: "Conflict Management",
    tips: ["Don't badmouth the coworker", "Focus on the professional resolution", "Show emotional intelligence"],
    sampleAnswer: "**Situation:** Lead developer and I disagreed on using a SQL vs NoSQL database for a new logging service.\n**Task:** We needed a decision quickly to meet the project deadline.\n**Action:** I scheduled a 30-minute meeting, brought data on read/write speeds for both, and listened to his concerns about scalability. We reached a compromise using SQL for structured data and NoSQL for raw logs.\n**Result:** The service launched on time with 99.9% uptime, and we established a better technical review process."
  },
  {
    question: "Describe a time when you failed and how you handled it.",
    category: "Resilience",
    tips: ["Take full ownership", "Show the 'Lessons Learned'", "Avoid making excuses"],
    sampleAnswer: "**Situation:** I missed a critical edge case in a payment gateway integration that caused 5% of transactions to fail for 2 hours.\n**Task:** Fix the issue and restore customer trust.\n**Action:** I identified the bug, pushed a hotfix, and then conducted a post-mortem to identify why our tests missed it. I implemented 4 new integration tests to cover the gap.\n**Result:** My manager appreciated the transparency and the new testing protocol became a standard for all future integrations."
  },
  {
    question: "Tell me about a time you had to work with a difficult stakeholder.",
    category: "Communication",
    tips: ["Show patience", "Focus on shared goals", "Manage expectations"],
    sampleAnswer: "**Situation:** A marketing lead kept requesting 'last-minute' feature changes that disrupted the sprint velocity.\n**Task:** Align his needs with the development team's capacity.\n**Action:** I started inviting him to our sprint planning sessions and explained the 'cost of change'. We implemented a 'Priority Buffer' for urgent marketing requests.\n**Result:** Stakeholder satisfaction increased by 40% (measured by internal survey), and the dev team stopped having to work weekends."
  },
  {
    question: "What is your greatest professional achievement?",
    category: "Impact",
    tips: ["Quantify your results", "Highlight collaboration", "Show leadership"],
    sampleAnswer: "**Situation:** Our mobile app had a 4.2-second load time, leading to high bounce rates.\n**Task:** Reduce load time to under 2 seconds.\n**Action:** I led a task force to implement lazy loading, optimized image assets, and moved to a more efficient CDN.\n**Result:** Load time dropped to 1.8 seconds, contributing to a 15% increase in user retention and $200k additional annual revenue."
  }
];

const seedBehavioral = async () => {
  try {
    await BehavioralQuestion.deleteMany({});
    await BehavioralQuestion.insertMany(behavioralData);
    console.log('✅ Seeded 15+ Comprehensive Behavioral Questions (STAR Method)');
  } catch (err) {
    console.error('❌ Behavioral seed error:', err);
  }
};

module.exports = seedBehavioral;
