const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRET_KEY;
const handle_errors = require('../utils/handleErrors')

/**
 * Recibe el objeto del usuario que inicia sesion
 * @param {*} user
 * @returns token<String>
 */
const registerToken = (user)=>{
    return jwt.sign(
        {
        user_id : user.id,
        user_role: user.role,
        user_email : user.email
        },
        SECRET_KEY,
        {
            expiresIn:'2h'
        }
    )
}

/**
 * Verifica que el token sea correcto
 * @param {*} token
 * @returns Boolean
 */
const verifyTokens = (token) => {
        return jwt.verify(token,SECRET_KEY);
}

/**
 * Valida que rol del usuario que ingresa al sistema
 * @param {*} rol
 * @returns Boolean
 */
const validateRol = (rol)=>(req,res,next) => {
    const {  authorization } = req.headers;
    if(!authorization){
        return handle_errors(res,'Token not found',404)
    }
    const token = authorization.split(' ').pop();
    const user_token = verifyTokens(token);
    const get_rol = user_token["user_role"];
    const result = get_rol.some( user_rol => user_rol.includes( rol ));
    
    if(result){
        return next();
    }
    handle_errors(res,'Don´t have permission',401)
}



module.exports = {registerToken,verifyTokens,validateRol}