const { userSchema } = require('../models');
const { matchedData } = require('express-validator');
const { compare } = require('../utils/handlePassword');
const handle_errors  = require('../utils/handleErrors');
const { registerToken } = require('../middlewares/TokensMiddleware');

/**
 * Login
 * @param {*} req 
 * @param {*} res 
 */
const loginController = async (req,res) =>{
    try {
        
        req = matchedData(req);
        const {email,password } = req;

        const user = await userSchema.findOne({email});

        if(!user){return res.status(404).json({message: "email invalid"});}

        const passwordHash = user.password;
        const comparePassword = await compare(password, passwordHash)

        if(!comparePassword){
            return res.status(404).json({message: "password invalid"});
        }
        const token = registerToken(user);
        
        return res.status(200).json({
            token,
            user
        });
    } catch (error) {
        handle_errors(res,error);
    }
}


module.exports = {loginController};