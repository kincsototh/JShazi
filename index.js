var express = require('express');
var app = express();

app.set('view engine', 'ejs'); 

app.use(express.static('static'));

// Load routing
// EZT MAJD KI KELL VENNI
//require('./route/index')(app);

var server = app.listen(3000, function () {
    console.log("On :3000");
});