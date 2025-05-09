/**
 * Using POST params to save a student to the database
 * If res.locals.student is there, it's an update otherwise this middleware creates an entity
 * Redirects to /teachers/:teacherid/students after success
 */
const requireOption = require('../requireOption');

module.exports = function (objRepo) {
  const StudentModel = requireOption(objRepo, 'StudentModel');

  return function (req, res, next) {
    if (!req.body.name || !req.body.age || !req.body.email_parent) {
      return res.status(400).send('Missing student fields');
    }

    const student = new StudentModel({
      name: req.body.name,
      age: req.body.age,
      email_parent: req.body.email_parent,
      _teacher: req.params.teacherid
    });

    student.save()
      .then(() => res.redirect(`/teachers/${req.params.teacherid}`))
      .catch(err => next(err));
  };
};
