require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const dbConnectMongoDB = require('./config/mongo');
const {dbConnectMysql} = require('./config/mysql');

const morganBody = require('morgan-body');
const loggerStream = require('./utils/handleLoggers');
// Initialization
const app = express();

// Engine Database
const ENGINE_DB = process.env.ENGINE_DB; //mongodb - mysql
(ENGINE_DB === 'mongodb') ? dbConnectMongoDB() : dbConnectMysql();
// Settings
const port = process.env.PORT || 3000

// Middlewares
app.use(cors());
app.use(express.static(path.join(__dirname,'public/upload')));
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(morgan('dev'));



/**
 * Sending log for slack api
 */
morganBody(app,{
    noColors:true,
    stream: loggerStream,
    skip:function(req,res){
        return res.statusCode < 400
    }
})

// Routes
app.use('/api/v1',require('./routes'));


// Start server
app.listen(port, ()=>{
    console.log(`Server on port ${port}`);
})