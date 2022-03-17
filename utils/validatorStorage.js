const { check,validationResult } = require('express-validator');


const validation= [
    check('myfile')
        .notEmpty().withMessage('Not file found, file is required'),
        (req,res) =>{
            try {
               validationResult(req).throw();
              } catch (err) {
                return res.status(403).
                    json({ 
                        result:false,
                        error:err.errors[0].msg,
                        code:403});
              }
        }
];


module.exports = validation;