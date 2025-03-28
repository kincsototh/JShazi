/**
 * update a student to the database
 * If res.locals.students is there, it's an update otherwise this middleware creates an entity
 * Redirects to /teachers/:teacherid/students after success
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};
