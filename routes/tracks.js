const express = require('express');
const { getItems,createItem, getItem, updateItem, deleteItem } = require('../controllers/tracks');
const {validation, validationId } = require('../validators/validatorTracks');
const {validateRol} = require('../middlewares/TokensMiddleware')
// router
const router = express.Router();


router.get('/',getItems)
router.get('/:id', validationId ,getItem)
router.post('/',validateRol(['admin']),validation,createItem)
router.put('/:id',validateRol(['admin']), validationId,validation ,updateItem)
router.delete('/:id',validateRol(['admin']), validationId , deleteItem)


module.exports = router;