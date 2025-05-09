var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/D28B59', 
    {useNewUrlParser : true});

module.exports = mongoose;