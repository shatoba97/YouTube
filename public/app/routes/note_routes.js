exports.way = function(app) {
    var ListVideos, Video;
    app.get('/list', (req, res, next) => {

        ListVideos = req.query.search;
        res.sendfile('./public/html/videoList.html');

    });

    app.get('/watch', (req, res) => {
        res.sendfile('./public/html/videoDetail.html');
    });
}