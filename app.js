const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');
const port = 4201;

const app = express();

// Routes to handle api requests
const route = require('./routes/route');

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/articles', { useNewUrlParser: true, useUnifiedTopology: true });

// Connection handler
mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB')
});

// Connection error handler
mongoose.connection.on('error', (err) => {
    console.log(`Connection failed to MongoDB: ${err}`);
});

// Middleware
app.use(cors());

// Body parser
app.use(bodyparser.json()); 

// Route initializer
app.use('/api', route);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${ port }`);
});