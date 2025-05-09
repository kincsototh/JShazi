var Schema = require('mongoose').Schema;
var db = require('../config/db');

var Teacher = db.model('Teacher', {
  name: String,
  field: String,
  email: String,
  phone: String
});

module.exports = Teacher;
