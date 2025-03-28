const renderMW = require('../middleware/renderMW');

const delStudentMW = require('../middleware/student/delStudentMW');
const delTeacherMW = require('../middleware/teacher/delTeacherMW');

const listStudentsMW = require('../middleware/student/listStudentsMW');
const listTeachersMW = require('../middleware/teacher/listTeachersMW');

const saveStudentMW = require('../middleware/student/saveStudentMW');
const saveTeacherMW = require('../middleware/teacher/saveTeacherMW');

const getTeacherMW = require('../middleware/teacher/getTeacherMW');

const modTeacherMW = require('../middleware/teacher/modTeacherMW');
const modStudentMW = require('../middleware/student/modStudentMW');

const renderWelcomeMW = require('../middleware/renderWelcomeMW');

module.exports = function (app) {
    const objRepo = {};

    // Kezdőlap (csak render)
    app.get('/', renderWelcomeMW());


    //Teacher stuff
    app.get('/teacher',
        listTeachersMW(objRepo),
        renderMW(objRepo, 'teachers'));

    app.post('/teacher/new',
        saveTeacherMW(objRepo),
        renderMW(objRepo, 'newteacher'));

    app.get('/teacher/edit/:teacherid',
        getTeacherMW(objRepo),
        modTeacherMW(objRepo),
        renderMW(objRepo, 'modteacher'));

    app.get('/teachers/:teacherid/delete',
        getTeacherMW(objRepo),
        delTeacherMW(objRepo));

    //Student stuff
    app.get('/teachers/:teacherid/students',
        getTeacherMW(objRepo),
        listStudentsMW(objRepo),
        renderMW(objRepo, 'students'));

    app.post('/teachers/:teacherid/new',
        getTeacherMW(objRepo),
        saveStudentMW(objRepo),
        renderMW(objRepo, 'newstudent'));

    app.get('/teachers/:teacherid/edit/:studentid',
        getTeacherMW(objRepo),
        listStudentsMW(objRepo),
        modStudentMW(objRepo),
        renderMW(objRepo, 'modstudent'));

    app.get('/teachers/:teacherid/del/:studentid',
        getTeacherMW(objRepo),
        listStudentsMW(objRepo),
        delStudentMW(objRepo),
        renderMW(objRepo, 'students'));
};
