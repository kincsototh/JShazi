/**
 * Load a teacher from the database using the :teacherid param
 * The result is saved to res.locals.teacher
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};
