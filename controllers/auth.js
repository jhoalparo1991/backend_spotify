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

        if(!user){handle_errors(res,'Email or Password invalid',404);}

        const passwordHash = user.password;
        const comparePassword = await compare(password, passwordHash)

        if(!comparePassword){
            handle_errors(res,'Email or Password invalid',404);
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