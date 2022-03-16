const { storageSchema } = require('../models');


const getItems = async (req,res)=>{ 
    res.send('Works storage')
};


const createItem = async (req,res)=>{

}


module.exports = {
    getItems,
    createItem,
}