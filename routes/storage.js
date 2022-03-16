const express = require('express');

// router
const router = express.Router();

const multer = require('multer');
const path = require('path');


const options = multer({
    destination:function(req,file,cb){
        const route_file = path.resolve(__dirname,'../','public','upload')
        cb(null,route_file);
    },
    filename:function(req,file,cb){
        const ext = file.originalname.split('.').pop();
        const newName = `file-${Date.now()}.${ext}`;
        console.log(newName);
        cb(null,newName);
    }
});

const multerStorage = multer({options});

router.post('/',multerStorage.single('myfile'),(req,res)=>{
    const {originalname} = req.file;
    res.send({originalname});
})


module.exports = router;