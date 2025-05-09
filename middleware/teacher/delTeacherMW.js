/**
 * Removes a teacher from the database, the entity used here is: res.locals.teacher
 * Redirects to /nagymama after delete
 */
const requireOption = require('../requireOption');

module.exports = function (objRepo) {
  const TeacherModel = requireOption(objRepo, 'TeacherModel');
  const StudentModel = requireOption(objRepo, 'StudentModel');

  return function (req, res, next) {
    if (!res.locals.teacher) {
      return next(new Error('Teacher not loaded'));
    }

    TeacherModel.findByIdAndDelete(res.locals.teacher._id)
      .then(() => StudentModel.deleteMany({ _teacher: res.locals.teacher._id }))
      .then(() => next())
      .catch(err => next(err));
  };
};
