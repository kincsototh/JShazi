/**
 * Using POST params save a teacher to the database
 * If res.locals.teacher is there, it's an update otherwise this middleware creates an entity
 * Redirects to /teacher after success
 */
const requireOption = require('../requireOption');

module.exports = function (objRepo) {
  const TeacherModel = requireOption(objRepo, 'TeacherModel');

  return function (req, res, next) {
    if (!req.body.name || !req.body.field || !req.body.email || !req.body.phone) {
      return res.status(400).send('Missing fields');
    }

    const teacher = new TeacherModel({
      name: req.body.name,
      field: req.body.field,
      email: req.body.email,
      phone: req.body.phone
    });

    teacher.save()
      .then(() => res.redirect('/teachers'))
      .catch(err => next(err));
  };
};

