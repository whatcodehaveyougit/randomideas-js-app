const express = require('express');
require('dotenv').config();
const port = process.env.PORT || 5000;
const app = express();
const connectDB = require('./config/db');

connectDB();

// Body Parser Middleware
app.use(express.json()); // Allows use to send JSON to the server
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send({ message: 'helo world'});
})

const ideaRouter = require('./routes/ideas');
app.use('/api/ideas', ideaRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});