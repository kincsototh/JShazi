const renderMW = require('../middleware/renderMW');

const delStudentMW = require('../middleware/student/delStudentMW');
const delTeacherMW = require('../middleware/teacher/delTeacherMW');

const listStudentsMW = require('../middleware/student/listStudentsMW');
const listTeachersMW = require('../middleware/teacher/listTeachersMW');

const saveStudentMW = require('../middleware/student/saveStudentMW');
const saveTeacherMW = require('../middleware/teacher/saveTeacherMW');

const getTeacherMW = require('../middleware/teacher/getTeacherMW');
const getStudentMW = require('../middleware/student/getStudentMW');

const modTeacherMW = require('../middleware/teacher/modTeacherMW');
const modStudentMW = require('../middleware/student/modStudentMW');

const renderWelcomeMW = require('../middleware/renderWelcomeMW');


module.exports = function (app) {
    const objRepo = {
        TeacherModel: require('../models/teacher'),
        StudentModel: require('../models/student')
    };

    // Kezdőlap (csak render)
    app.get('/', renderWelcomeMW);

    //Teacher stuff
    app.get('/teachers',
        listTeachersMW(objRepo),
        renderMW(objRepo, 'teachers'));

    app.get('/teachers/new', 
        renderMW(objRepo, 'newteacher'));

    app.post('/teachers/new',
        saveTeacherMW(objRepo), 
        renderMW(objRepo, 'teachers')); 

    app.get('/teachers/edit/:teacherid',
        getTeacherMW(objRepo),
        modTeacherMW(objRepo),
        renderMW(objRepo, 'modteacher')
    );

    app.post('/teacher/edit/:teacherid',
        getTeacherMW(objRepo),
        modTeacherMW(objRepo),
        function (req, res) {
            res.redirect('/teachers');
        }
    );

    app.get('/teachers/delete/:teacherid', function (req, res) {
        res.redirect('/teachers');
    });
    

    app.post('/teachers/delete/:teacherid',
        getTeacherMW(objRepo),
        delTeacherMW(objRepo),
        function (req, res) {
          res.redirect('/teachers');
        }
      );
    
    //Student stuff
    app.get('/teachers/:teacherid',
        getTeacherMW(objRepo),
        listStudentsMW(objRepo),
        renderMW(objRepo, 'students'));

    app.get('/teachers/:teacherid/new',
        getTeacherMW(objRepo),
        renderMW(objRepo, 'newstudent'));    

        app.post('/teachers/:teacherid/new',
            getTeacherMW(objRepo),
            saveStudentMW(objRepo),
            function (req, res) {
                res.redirect('/teachers/' + req.params.teacherid);
            }
        );
        
        
    app.get('/teachers/:teacherid/edit/:studentid',
        getTeacherMW(objRepo),
        getStudentMW(objRepo),
        renderMW(objRepo, 'modstudent'));

    app.post('/teachers/:teacherid/edit/:studentid',
        getTeacherMW(objRepo),
        getStudentMW(objRepo),
        modStudentMW(objRepo),
        function (req, res) {
            res.redirect('/teachers/' + req.params.teacherid);
        }
        );
          

    app.get('/teachers/:teacherid',
        getTeacherMW(objRepo),
        listStudentsMW(objRepo),
        renderMW(objRepo, 'students'));

    app.get('/teachers/:teacherid/del/:studentid',
        getTeacherMW(objRepo),
        getStudentMW(objRepo),
        delStudentMW(objRepo)
        );
          
};
