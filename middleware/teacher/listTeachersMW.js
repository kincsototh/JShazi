/**
 * Load all teacher from the database
 * The result is saved to res.locals.teachers
 */
const requireOption = require('../requireOption');

module.exports = function (objRepo) {
  const TeacherModel = requireOption(objRepo, 'TeacherModel');

  return function (req, res, next) {
    TeacherModel.find({})
      .then(teachers => {
        res.locals.teachers = teachers;
        return next();
      })
      .catch(err => next(err));
  };
};

