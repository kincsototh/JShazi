// getStudentMW.js
const requireOption = require('../requireOption');

module.exports = function (objRepo) {
  const StudentModel = requireOption(objRepo, 'StudentModel');

  return function (req, res, next) {
    StudentModel.findById(req.params.studentid)
      .then(student => {
        if (!student) return res.status(404).send('Student not found');
        res.locals.student = student;
        return next();
      })
      .catch(err => next(err));
  };
};
