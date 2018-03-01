module.exports = function(app) {
    app.post('/', (req, res) => {
        console.log("hellow");
        res.send("hellow post index");
    });
    app.get('/list', (req, res) => {
        res.send("hellow get list");
    });
    app.get('/watch', (req, res) => {
        res.send("hellow get watch");
    });
}