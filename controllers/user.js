const { userSchema } = require('../models');
const { matchedData } = require('express-validator');
const handle_errors = require('../utils/handleErrors');
const { encrypt } = require('../utils/handlePassword');

/**
 * Get all users
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const getUsers = async(req,res) => {
    try {
        const users = await userSchema.find();
        return res.status(200).json({users})
    } catch (error) {
        handle_errors(res,error);
    }
};


/**
 * Get one user
 * @param {*} req 
 * @param {*} res 
 */
const getUser = async(req,res) => {
    try {
        
        req =  matchedData(req);

        const { id } = req;

        const result = await userSchema.findById(id);
        
        if(!result) return res.status(200).json({ message:'User not found' });

        return res.status(200).json({result})

    } catch (error) {
        handle_errors(res,error);
    }
};


/**
 * Create user
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const createUser = async(req,res) => {
    try {
        req =  matchedData(req);
        const {  name,lastname,email,password,role,age } = req;
        
        const exist_email = await userSchema.findOne({email});

        if(exist_email){
            return res.status(200).json({message: "This email already exist"});
        }

      
        const pass = await encrypt(password);
        // console.log(pass);
        // res.send(pass);
        const newUser = await userSchema({
            name,lastname,email,password:pass,role,age
        })

        const result = await newUser.save();

        return res.status(200).json({result})

        

    } catch (error) {
        
        handle_errors(res,error,500);
    }
};


const updateUser = async(req,res) => {
    res.send('AuthController -> updateUser')
};

/**
 *Delete user 
 *
 * @param {*} req
 * @param {*} res
 * @return {*} 
 */
const deleteUser = async(req,res) => {
    try {
        req =  matchedData(req);
        const {  id } = req;

        const exists_user = await userSchema.findOne({_id:id});

        if(!exists_user){
            return res.status(200).json({message: "User not found"});
        }

        const userDelete = await userSchema.delete({_id:id});

        return res.status(200).json({userDelete})
        

    } catch (error) {
        handle_errors(res,error);
    }
};


module.exports = {
    getUsers
    ,deleteUser
    ,getUser
    ,createUser
    ,updateUser
}