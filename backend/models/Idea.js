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
    required: true
  },
  username: {
    type: String,
    default: Date.now
  },
  date: {
    type: Date,
    default: Date.now
  }
});


module.exports = mongoose.model('Idea', IdeaSchema);