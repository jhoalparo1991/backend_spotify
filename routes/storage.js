const express = require('express');
const multerStorage = require('../utils/uploadFiles');
const { uploadFile, getFiles, deleteItem, updateItem, getFile }= require('../controllers/storage');
const validationId = require('../validators/validationStorage');

// router
const router = express.Router();

router.get('/',getFiles);
router.get('/:id',validationId,getFile);
router.post('/',multerStorage.single('myfile'),uploadFile)
router.delete('/:id', validationId,deleteItem);
router.put('/:id', multerStorage.single('myfile') , updateItem)


module.exports = router;