/**
 * Load all befott from the database
 * The result is saved to res.locals.student
 */
const requireOption = require('../requireOption');

module.exports = function (objRepo) {
    return function (req, res, next) {
        const teacherId = req.params.teacherid;
        //const teacherName = req.params.name;

        const teacher = { id: teacherId, name: "Tóth Ádám" };
        const students = [
            { id: 1, name: "Nagy Dorottya", age: 10, parentEmail: "nagynekissnoemi@random.hu" },
            { id: 2, name: "Bognár Roland", age: 15, parentEmail: "bognartamas@random.hu" },
            { id: 3, name: "Tóth Emese", age: 8, parentEmail: "tothjozsef@random.hu" }
        ];

        res.locals.teacher = teacher;
        res.locals.students = students;

        return next();
    };
};