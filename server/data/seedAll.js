require('dotenv').config({ path: __dirname + '/../.env' });
const mongoose = require('mongoose');
const seedRoadmaps = require('./seedRoadmaps');

const seedSheets = require('./seedSheets');
const seedQuestions = require('./seedQuestions');
const seedFundamentals = require('./seedFundamentals');
const seedCompanies = require('./seedCompanies');
const seedSystemDesign = require('./seedSystemDesign');
const seedBehavioral = require('./seedBehavioral');

const connectDB = require('../config/db');

const seedAll = async () => {
  try {
    await connectDB();
    
    console.log('--- Starting Master Seed Process ---');
    
    console.log('🌱 Seeding Roadmaps & Notes...');
    await seedRoadmaps();
    
    console.log('🌱 Seeding DSA Sheets...');
    await seedSheets();
    
    console.log('🌱 Seeding Question Bank...');
    await seedQuestions();
    
    console.log('🌱 Seeding Fundamentals Content...');
    await seedFundamentals();
    
    console.log('🌱 Seeding Company-Specific Questions (100 per card)...');
    await seedCompanies();
    
    console.log('🌱 Seeding System Design Deep Dives...');
    await seedSystemDesign();
    
    console.log('🌱 Seeding Behavioral STAR Answers...');
    await seedBehavioral();
    
    console.log('✅ ALL SYSTEMS SEEDED SUCCESSFULLY!');
  } catch (error) {
    console.error('❌ SEED PROCESS FAILED:', error);
    process.exit(1);
  } finally {
    mongoose.connection.close();
    process.exit(0);
  }
};

seedAll();
