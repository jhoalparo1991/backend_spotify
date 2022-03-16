require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const connection = require('./config/mongo');


// Initialization
const app = express();
connection();

// Settings
const port = process.env.PORT || 3000

// Middlewares
app.use(cors());
app.use(express.static(path.join(__dirname,'public','upload')));
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/api/v1',require('./routes'));



// Start server
app.listen(port, ()=>{
    console.log(`Server on port ${port}`);
})