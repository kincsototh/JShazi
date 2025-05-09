/**
 * update a student to the database
 * If res.locals.students is there, it's an update otherwise this middleware creates an entity
 * Redirects to /teachers/:teacherid/students after success
 */
const requireOption = require('../requireOption');

module.exports = function (objRepo) {
  const StudentModel = requireOption(objRepo, 'StudentModel');

  return function (req, res, next) {
    if (!res.locals.student) {
      return next(new Error('Student not loaded'));
    }

    if (req.method === 'GET') {
      return next();
    }

    res.locals.student.name = req.body.name;
    res.locals.student.age = req.body.age;
    res.locals.student.email_parent = req.body.email_parent;

    res.locals.student.save()
      .then(() => res.redirect(`/teachers/${req.params.teacherid}`))
      .catch(err => next(err));
  };
};
