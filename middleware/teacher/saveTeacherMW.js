/**
 * Using POST params save a teacher to the database
 * If res.locals.teacher is there, it's an update otherwise this middleware creates an entity
 * Redirects to /teacher after success
 */
const requireOption = require('../requireOption');

module.exports = function (objRepo) {
    return function (req, res, next) {
        return res.redirect('/teachers');
    };
};
