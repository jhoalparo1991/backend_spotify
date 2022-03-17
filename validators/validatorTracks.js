const { check, validationResult } = require("express-validator");

const validation = [
  check("name").notEmpty().withMessage('Name is required').exists().withMessage('name property not exist'),
  check("album").notEmpty().withMessage('album is required').exists().withMessage('album property not exist'),
  check("cover").notEmpty().withMessage('cover is required').exists().withMessage('cover property not exist'),
  check("artist").notEmpty().withMessage('artist is required').exists().withMessage('artist property not exist'),
  check("artist.name").notEmpty().withMessage('Artist name is required').exists().withMessage('artist name property not exist'),
  check("artist.nickname").notEmpty().withMessage('Artist nickname is required').exists().withMessage('artist nickname property not exist'),
  check("artist.nationality").notEmpty().withMessage('Artist nationality is required').exists().withMessage('artist nationality property not exist'),
  check("duration").notEmpty().withMessage('duration is required').exists(),
  check("duration.start").notEmpty().withMessage('duration start is required').exists(),
  check("duration.end").notEmpty().withMessage('duration end is required').exists(),
  check("mediaId").notEmpty().withMessage('the mongo id is empty').isMongoId().withMessage('the mongo id is not valid').exists().withMessage('the mongo id not exist'),
  (req, res,next) => {
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
  },
];

const validationId = [
  check("id")
    .notEmpty().withMessage('Id is required')
    .exists().withMessage('Id property not exist')
    .isMongoId().withMessage('Id is not valid')
    ,
  (req, res,next) => {
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
  },
];

module.exports = {validation, validationId};
