const express = require('express');
const app = express();


app.use(express.json());

// Routes
app.use('/api/users', require('./routes/users'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on Port: ${PORT}`))