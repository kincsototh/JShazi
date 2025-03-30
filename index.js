var express = require('express');
var app = express();

app.set('view engine', 'ejs'); 

app.use(express.static('static'));

require('./route')(app);

var server = app.listen(3000, function () {
    console.log("On :3000");
});