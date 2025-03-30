/**
 * update a student to the database
 * If res.locals.students is there, it's an update otherwise this middleware creates an entity
 * Redirects to /teachers/:teacherid/students after success
 */
const requireOption = require('../requireOption');

const getStudentMW = (objRepo) => {
    return (req, res, next) => {
        const { teacherid, studentid } = req.params;
        
        if (!objRepo.studentModel) {
            return res.status(500).send('Student model is not available');
        }
        
        const student = objRepo.studentModel.find(student => student.id === studentid && student.teacherId === teacherid);
        
        if (student) {
            res.locals.student = student;  // Átadjuk a student adatot a nézetnek
            next();
        } else {
            res.status(404).send('Student not found');
        }
    };
};

module.exports = getStudentMW;
