const express = require('express');
const fs = require('fs');

// router
const router = express.Router();
const PATH_FILE =__dirname;


const removeExtension = (fileName)=>{
    return fileName.split('.').shift();
}


fs.readdirSync(PATH_FILE).filter((file)=>{
    const name = removeExtension(file);
    if(name !== 'index'){
        router.use(`/${name}`,require(`./${file}`));
    }
});



module.exports = router;