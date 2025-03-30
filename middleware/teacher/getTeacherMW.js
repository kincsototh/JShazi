/**
 * Load a teacher from the database using the :teacherid param
 * The result is saved to res.locals.teacher
 */
const requireOption = require('../requireOption');

module.exports = (objRepo) => {
    return (req, res, next) => {
        const teacherid = req.params.teacherid;
        const teacher = objRepo.teachers.find(t => t.id == teacherid);  // Itt történik a keresés

        if (!teacher) {
            return res.status(404).send('Teacher not found');
        }

        res.locals.teacher = teacher;
        return next();
    };
};


