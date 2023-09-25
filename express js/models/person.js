const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Must provide a name'],
    trim: true,
    maxLength: [20, 'The name cant exceed 20 characters'],
  },
  completed: {
    type: Number,
    default: 5,
  },
});

modules.expirts = mongoose.model('Person', personSchema);
Model.findOne({ completed: true });
