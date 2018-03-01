const noteroutes = require('./note_routes');
module.exports = function(app) {
    noteroutes(app);
};