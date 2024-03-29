const express = require('express');
const router = express.Router();
const Idea = require('../models/Idea');

// Get all ideas
router.get('/', async (req, res) => {
  try {
    const ideas = await Idea.find(); // our model has a .find() method
    res.json({ success: true, ideas: ideas });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
})

router.get('/:id', async (req, res) => {
  try {
    const idea = await Idea.findById(req.params.id);
    if (!idea) {
      return res.status(404).json({ success: false, message: `No idea with the id of ${req.params.id}` });
    }
    res.json({ success: true, data: idea });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
})

// Add idea

router.post('/', async (req, res) => {
  console.log(req.body)
  const { text, tag, username } = req.body;
  const idea = new Idea({
    text,
    tag,
    username,
  });
  try {
    const newIdea = await idea.save();
    res.json({ success: true, newIdea: newIdea });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
  // res.json({ success: true, data: ideas });
})

router.put('/:id', async (req, res) => {
  try {
    const idea = await Idea.findById(req.params.id);
    if (!idea) {
      return res.status(404).json({ success: false, message: `No idea with the id of ${req.params.id}` });
    }
    if(idea.username === req.body.username) {
      const { text, tag, username } = req.body;
      idea.text = text || idea.text;
      idea.tag = tag || idea.tag;
      idea.username = username || idea.username;
      const updatedIdea = await idea.save();
      return res.json({ success: true, data: updatedIdea });
    }
    res.status(403).json({ success: false, message: `You are not authorized to update this item` });

  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const idea = await Idea.findById(req.params.id);
    if(idea.username == req.body.username) {
      await idea.deleteOne();
      return res.json({ success: true, message: `Idea with id ${idea.id} deleted` });
    }
    if (!idea) {
      return res.status(404).json({ success: false, message: `No idea with the id of ${req.params.id}` });
    }
    res.status(403).json({ success: false, message: `You are not authorized to delete this item` });

  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
})


module.exports = router;