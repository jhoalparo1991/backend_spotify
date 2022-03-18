const express = require('express');
const { getUsers,getUser,createUser,updateUser,deleteUser } = require('../controllers/user');
const { validateRegister, validateId} = require('../validators/validatorUsers');

// router
const router = express.Router();


router.get('/', getUsers);
router.get('/:id',validateId, getUser);
router.post('/',validateRegister,createUser);
router.delete('/:id',validateId ,deleteUser);
router.put('/:id', updateUser);


module.exports = router;