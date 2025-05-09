/**
 * Update a teacher to the database
 * If res.locals.teacher is there, it's an update otherwise this middleware creates an entity
 * Redirects to /teacher after success
 */
const requireOption = require('../requireOption');

module.exports = function (objRepo) {
  const TeacherModel = requireOption(objRepo, 'TeacherModel');

  return function (req, res, next) {
    if (!res.locals.teacher) {
      return next(new Error('Teacher not loaded'));
    }

    if (req.method === 'GET') {
      return next();
    }

    const t = res.locals.teacher;
    t.name = req.body.name;
    t.field = req.body.field;
    t.email = req.body.email;
    t.phone_num = req.body.phone;

    t.save()
      .then(() => res.redirect('/teachers'))
      .catch(err => next(err));
  };
};


