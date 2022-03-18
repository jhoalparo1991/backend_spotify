const { check, validationResult } = require('express-validator');


const validateRegister = [
    check('name')
    .exists().withMessage('Not exists the property name')
    .notEmpty().withMessage('Could´n be empty field name'),
    check('lastname')
    .exists().withMessage('Not exists the property lastname')
    .notEmpty().withMessage('Could´n be empty field lastname'),
    check('email')
    .exists().withMessage('Not exists the property email')
    .isEmail().withMessage('Could be email')
    .notEmpty().withMessage('Could´n be empty field email'),
    check('password')
    .exists().withMessage('Not exists the property password')
    .notEmpty().withMessage('Could´n be empty field password'),
    check('role')
    .exists().withMessage('Not exists the property role')
    .notEmpty().withMessage('Could´n be empty field role'),
    check('age')
    .exists().withMessage('Not exists the property age')
    .notEmpty().withMessage('Could´n be empty field age')
    .isNumeric().withMessage('Could be a number'),
    (req, res,next)=>{
        try {
            validationResult(req).throw();
            return next();
        } catch (err) {
            return res.status(403).json({
                result: false,
                error: err,
                code: 403,
              });
        }
    }

];

const validateId = [
    check('id')
    .exists().withMessage('Not exists the property id')
    .notEmpty().withMessage('Could´n be empty field id'),
    (req, res,next)=>{
        try {
            validationResult(req).throw();
            return next();
        } catch (err) {
            return res.status(403).json({
                result: false,
                error: err.array(),
                code: 403,
              });
        }
    }

];

const validateLogin = [
    check('password')
    .exists().withMessage('Not exists the property password')
    .notEmpty().withMessage('The password is required'),
    check('email')
    .exists().withMessage('Not exists the property email')
    .notEmpty().withMessage('The email is required'),
    (req, res,next)=>{
        try {
            validationResult(req).throw();
            return next();
        } catch (err) {
            return res.status(403).json({
                result: false,
                error: err.array(),
                code: 403,
              });
        }
    }

];

module.exports = {validateRegister,validateId,validateLogin}