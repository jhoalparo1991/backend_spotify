const { check, validationResult } = require('express-validator');

const validationId = [
    check("id")
      .notEmpty().withMessage('Id is required')
      .exists().withMessage('Id property not exist'),
    (req, res,next) => {
      try {
        validationResult(req).throw();
        return next();
  
      } catch (err) {
        console.log('ERROR -> ',err);
        return res.status(403).json({
          result: false,
          error: err.array(),
          code: 403,
        });
      }
    },
  ];

  module.exports = validationId;