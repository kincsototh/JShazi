/**
 * Load all befott from the database
 * The result is saved to res.locals.student
 */
const requireOption = require('../requireOption');

module.exports = function (objRepo) {
  const StudentModel = requireOption(objRepo, 'StudentModel');

  return function (req, res, next) {
    StudentModel.find({ _teacher: req.params.teacherid })
      .then(students => {
        res.locals.students = students;
        return next();
      })
      .catch(err => next(err));
  };
};
