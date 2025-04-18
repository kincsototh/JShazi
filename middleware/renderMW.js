/**
 * Using the template engine render the values into the template
 */

const requireOption = require('./requireOption');

module.exports = function (objRepo, viewName) {
    return function (req, res) {
        res.render(viewName, res.locals);
        console.log('render: ' + viewName);
        //res.end('Template: ' + viewName);
    };

};