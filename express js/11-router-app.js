const express = require('express');
require('dotenv').config();
require('./db/connect');
const app = express();

const people = require('./routes/people-controller');
const auth = require('./routes/auth');
const connectDB = require('./db/connect');

// Static Assests
app.use(express.static('./public'));
// Parse Form Data
app.use(express.urlencoded({ extended: false }));
// Parse JSON Data
app.use(express.json());
// Routes/Router
app.use('/api/people', people);
app.use('/login', auth);
// Server Listen

const initServer = async () => {
  try {
    // await connectDB(process.env.MONGO_URI);
    app.listen(5000, () => {
      console.log('listening on 5000');
    });
  } catch (error) {
    console.log('error');
  }
};
initServer();
