// getStudentMW.js
module.exports = function (objRepo) {
    return function (req, res, next) {
        const teacherId = req.params.teacherid;
        const studentId = parseInt(req.params.studentid);
        
        const students = [
            { id: 1, name: "Nagy Dorottya", age: 10, parentEmail: "nagynekissnoemi@random.hu" },
            { id: 2, name: "Bognár Roland", age: 15, parentEmail: "bognartamas@random.hu" },
            { id: 3, name: "Tóth Emese", age: 8, parentEmail: "tothjozsef@random.hu" }
        ];

        // Keresés a diákok között
        const student = students.find(s => s.id === studentId);
        
        if (!student) {
            return res.status(404).send('Student not found');
        }

        res.locals.student = student;
        return next();
    };
};