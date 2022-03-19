const express = require('express');
const { loginController } = require('../controllers/auth');
const {validateLogin} = require('../validators/validatorUsers');
// router
const router = express.Router();

router.post('/',validateLogin,loginController);


module.exports = router;