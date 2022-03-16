const mongoose = require('mongoose');

const MONGO_URI = process.env.DB_MONGO_URI;

const connection = ()=>{

    mongoose.connect(MONGO_URI)
    .then(result => { console.log('******** DATABASE IS CONNECTED ********') })
    .catch(err =>{console.error('******** DATABASE IS NOT CONNECTED ********')})

}


module.exports = connection;