const express = require('express');
const app = express();
const connectDB = require('./config/db');

// Connect DB
connectDB();

app.use(express.json());

// Routes
app.use('/api/users', require('./routes/users'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on Port: ${PORT}`))