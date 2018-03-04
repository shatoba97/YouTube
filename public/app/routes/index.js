const url = require('url');
const fs = require('fs');

var noteroutes = require('./note_routes');
module.exports = function(app) {
    noteroutes.way(app);
};