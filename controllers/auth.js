const { userSchema } = require('../models');
const { matchedData } = require('express-validator');
const { compare } = require('../utils/handlePassword');
const handle_errors  = require('../utils/handleErrors');

/**
 * Login
 * @param {*} req 
 * @param {*} res 
 */
const login = async (req,res) =>{
    try {
        
        req = matchedData(req);
        const {email } = req;

        const email_exist = await userSchema.findOne({email});

        if(!email_exist){return res.status(404).json({message: "email or password invalid"});}

        res.send(email_exist)
    } catch (error) {
        handle_errors(res,error);
    }
}


module.exports = {login};