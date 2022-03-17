const express = require('express');
const multerStorage = require('../utils/uploadFiles');
const { uploadFile, getFiles }= require('../controllers/storage');
// router
const router = express.Router();

router.get('/',getFiles);
router.post('/',multerStorage.single('myfile'),uploadFile)


module.exports = router;