const express = require('express');

// router
const router = express.Router();


router.get('/',(req,res)=>{
    res.send('user works.')
})


module.exports = router;