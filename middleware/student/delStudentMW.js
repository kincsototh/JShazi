/**
 * Removes a student from the database, 
 * the entity used here is: res.locals.student
 * Redirects to /teachers after delete
 */
const requireOption = require('../requireOption');

module.exports = function (objRepo) {
  const StudentModel = requireOption(objRepo, 'StudentModel');

  return function (req, res, next) {
    if (!res.locals.student) {
      return next(new Error('Student not loaded'));
    }

    StudentModel.findByIdAndDelete(res.locals.student._id)
      .then(() => res.redirect(`/teachers/${req.params.teacherid}`))
      .catch(err => next(err));
  };
};

