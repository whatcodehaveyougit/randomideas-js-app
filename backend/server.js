const path = require('path');
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 5000;

const app = express();
const connectDB = require('./config/db');

connectDB();

// This will make the public folder accessible to the browser / static
app.use(express.static(path.join(__dirname, 'public')));

// We want the public folder to be the dist folder,
// So when we run npm run build is will build all the assets and bang them in the public folder

// Body Parser Middleware
app.use(express.json()); // Allows use to send JSON to the server
app.use(express.urlencoded({ extended: false }));

app.use(cors({
  origin: ['http://localhost:5000', 'http://localhost:3000'],
  credentials: true,
}))

app.get('/', (req, res) => {
  res.send({ message: 'helo world'});
})

const ideaRouter = require('./routes/ideas');
app.use('/api/ideas', ideaRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});