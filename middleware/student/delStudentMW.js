/**
 * Removes a student from the database, 
 * the entity used here is: res.locals.student
 * Redirects to /teachers after delete
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};
