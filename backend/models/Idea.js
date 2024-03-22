const mongoose = require('mongoose');

// This is a schema for the idea model. It defines the structure of the idea model.
// It will allow us to interact with the MongoDB database using the idea model.
const IdeaSchema = new mongoose.Schema({
  text: {
    type: String,
    required: [true, 'Please add some text']
  },
  tag: {
    type: String,
    required: [true, 'Please add some text']
  },
  username: {
    type: String,
    required: [true, 'Please add some text']
  },
  date: {
    type: Date,
    default: Date.now.slice(0, 8)
  }
});


module.exports = mongoose.model('Idea', IdeaSchema);