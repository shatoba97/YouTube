const url = require('url');
const fs = require('fs');

const noteroutes = require('./note_routes');
module.exports = function(app) {
    noteroutes(app);
};