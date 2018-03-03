const express = require('express');
bodyParser = require('body-parser');
var path = require('path');
const app = express();
const port = 8000;


require('./public/app/routes')(app);
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log('Server work on port ' + port);

});

app.get('/index', (req, res) => {
    res.sendfile('./index.html');
});