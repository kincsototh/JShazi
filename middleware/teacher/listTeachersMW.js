/**
 * Load all teacher from the database
 * The result is saved to res.locals.teachers
 */
const requireOption = require('../requireOption');

module.exports = function (objRepo) {
    return function (req, res, next) {
        if (!objRepo.teachers) {
            objRepo.teachers = []; // Üres lista, ha nincs adat
        }

        objRepo.teachers = [
            { id: 1, name: "Tóth Ádám", instrument: "Zongora", email: "adamtoth@zenesuli.hu", phone: "06309999" },
            { id: 2, name: "Nagy Zsófia", instrument: "Fuvola", email: "nagyzsofi@zenesuli.hu", phone: "06208888" },
            { id: 3, name: "Szabó Tamás", instrument: "Hegedű", email: "szabotamas@zenesuli.hu", phone: "06704444" },
            { id: 4, name: "Kiss Bence", instrument: "Szaxofon", email: "kissbence@zenesuli.hu", phone: "06305555" }
        ];

        res.locals.teachers = objRepo.teachers;
        return next();
    };
};

