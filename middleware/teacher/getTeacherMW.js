/**
 * Load a teacher from the database using the :teacherid param
 * The result is saved to res.locals.teacher
 */
const requireOption = require('../requireOption');

module.exports = function (objRepo) {
  const TeacherModel = requireOption(objRepo, 'TeacherModel');

  return function (req, res, next) {
    TeacherModel.findById(req.params.teacherid)
      .then(teacher => {
        if (!teacher) return res.status(404).send('Teacher not found');
        res.locals.teacher = teacher;
        return next();
      })
      .catch(err => next(err));
  };
};



