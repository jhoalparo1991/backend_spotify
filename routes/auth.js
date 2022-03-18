const express = require('express');
const { login } = require('../controllers/auth');
const {validateLogin} = require('../validators/validatorUsers');
// router
const router = express.Router();

router.post('/',validateLogin,login);


module.exports = router;