var Schema = require('mongoose').Schema;
var db = require('../config/db');

var Student = db.model('Student', {
  name: String,
  age: Number,
  email_parent: String,
  password: String,
  _teacher: {
    type: Schema.Types.ObjectId,
    ref: 'Teacher'
  }
});

module.exports = Student;
