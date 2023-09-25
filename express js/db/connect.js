const mongoose = require('mongoose');

const connectDB = () => {
  // Remeber this is a tempeorty and needs to be replaced
  const connectString =
    'mongodb+srv://<username>:<password>@cluster0.i6ivqvm.mongodb.net/';

  mongoose
    .connect(connectString)
    .then(() => console.log('database connected successfully'))
    .catch((err) => console.log(err));
};

module.exports = connectDB;
