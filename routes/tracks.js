const express = require('express');
const { getItems,createItem, getItem, updateItem, deleteItem } = require('../controllers/tracks');
const {validation, validationId } = require('../validators/validatorTracks');
// router
const router = express.Router();


router.get('/',getItems)
router.get('/:id', validationId ,getItem)
router.post('/',validation,createItem)
router.put('/:id', validationId,validation ,updateItem)
router.delete('/:id', validationId , deleteItem)


module.exports = router;