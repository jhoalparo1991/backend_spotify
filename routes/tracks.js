const express = require('express');

// router
const router = express.Router();


router.get('/',(req,res)=>{
    res.send('hello world')
})


module.exports = router;