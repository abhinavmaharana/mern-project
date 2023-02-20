const express = require('express');
const app = express();

const errorMiddleware = require("./middleware/error");

app.use(express.json())

// Route Imports
const courses = require('./routes/courseRoute'); 

app.use('/api/v1',courses);

// Middleware
app.use(errorMiddleware);

module.exports = app