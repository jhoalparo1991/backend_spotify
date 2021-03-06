const multer = require('multer');
const path = require('path');


const storage = multer.diskStorage({
    destination:function(req,file,cb){
        const route_file = path.resolve(__dirname,'../public/upload')
        cb(null,route_file);
    },
    filename:function(req,file,cb){
        const ext = file.originalname.split('.').pop();
        const newName = `file-${Date.now()}.${ext}`;
        cb(null,newName);
    }
});

const multerStorage = multer({storage});

module.exports = multerStorage;