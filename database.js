const mongoose = require("mongoose");
const Config = require('./Config/config');

const url = `mongodb+srv://${Config.DATABASE_USERNAME}:${Config.DATABASE_PASSWORD}@taskmanagement.xfr4twu.mongodb.net/TaskManagement`;
// Connect to your MongoDB database
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
  console.log('Connected to the database');
});