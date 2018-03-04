var id = decodeURIComponent(window.location.search.replace(/\+/g, " ")).replace("?v=", "").replace("/mqdefault.jpg", "");


function onClientLoad() {
    gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
}

function tplawesome(e, t) { res = e; for (var n = 0; n < t.length; n++) { res = res.replace(/\{\{(.*?)\}\}/g, function(e, r) { return t[n][r] }) } return res }

function onYouTubeApiLoad() {
    gapi.client.setApiKey('AIzaSyBTtNgEk-54vL6FOQ0bENBxakO-8SS7ClI');

    video();

}

function video() {
    var request = gapi.client.youtube.videos.list({
        part: 'snippet',
        id: id
    }).then(function(response) {

        var label = document.getElementById("label");
        console.log(response.result.items[0].snippet.title);
        console.log(response.result.items[0]);
        var start = "http://www.youtube.com/embed/";
        var end = "?autoplay=1&origin=http://example.com";
        var video = document.getElementById("ytplayer");
        video.setAttribute('src', start + id + end);
        label.textContent = response.result.items[0].snippet.title;


    });
}