module.exports = function(app) {
    var ListVideos, Video;

    app.get('/list', (req, res, next) => {

        ListVideos = req.query.search;
        console.log(ListVideos);

        res.sendfile('./public/html/videoList.html');
        module.exports.lestvideo = ListVideos;
    });

    app.get('/watch', (req, res) => {
        res.send("hellow get watch");
    });
}