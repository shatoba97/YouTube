const express = require('express');
const app = express();
const port = 8000;

require('./app/routes')(app);
app.listen(port, () => {
    console.log('Server work on port ' + port);
});
app.get('/', (rec, res) => {
    res.sendfile(index.html);
});