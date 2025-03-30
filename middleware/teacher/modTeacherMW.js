/**
 * Update a teacher to the database
 * If res.locals.teacher is there, it's an update otherwise this middleware creates an entity
 * Redirects to /teacher after success
 */
const requireOption = require('../requireOption');

module.exports = function (objRepo) {
    return function (req, res, next) {
        if (!res.locals.teacher) {
            return next(new Error("Teacher not found"));
        }

        if (req.method === "GET") {
            return next();
        }

        return res.redirect('/teachers');
    };
};

