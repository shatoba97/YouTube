var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

function onYouTubeIframeAPIReady() {
    var id = decodeURIComponent(window.location.search.replace(/\+/g, " ")).replace("?v=", "");

    player = new YT.Player('player', {
        height: '360',
        width: '640',
        videoId: id,
        events: {
            'onReady': onPlayerReady,
        }
    });
}

function onPlayerReady(event) {
    event.target.playVideo();
}