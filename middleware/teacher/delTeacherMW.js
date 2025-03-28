/**
 * Removes a teacher from the database, the entity used here is: res.locals.teacher
 * Redirects to /nagymama after delete
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};