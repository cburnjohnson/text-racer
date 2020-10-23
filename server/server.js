const express = require('express');
const app = express();
const connectDB = require('./config/db');
require('dotenv').config();
var bodyParser = require('body-parser');

// Connect DB
connectDB();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api/users', require('./routes/users'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on Port: ${PORT}`));
