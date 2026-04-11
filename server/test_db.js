require('dotenv').config({ path: __dirname + '/.env' });
console.log('MONGO_URI:', process.env.MONGO_URI);
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/pathforge')
  .then(conn => {
    console.log('Connected to:', conn.connection.host);
    process.exit(0);
  })
  .catch(err => {
    console.error('Error:', err.message);
    process.exit(1);
  });
