function tplawesome(e, t) { res = e; for (var n = 0; n < t.length; n++) { res = res.replace(/\{\{(.*?)\}\}/g, function(e, r) { return t[n][r] }) } return res }

function showResponse(response) {
    // var responseString = JSON.stringify(response, '', 2);
    // document.getElementById('search-container').innerHTML += responseString;
    var results = response.result;
    $("#search-container").innerHTML = '';
    $.each(results.items, function(index, item) {
        $.get("../html/item.html", function(data) {
            $("#search-container").append(tplawesome(data, [{ "title": item.snippet.title, "width": 300, "height": 198, "videoid": item.id.videoId, "src": item.id.videoId + "/mqdefault.jpg" }]));
        });
    });
    $(window).on("resize", resetVideoHeight);
};



// Called automatically when JavaScript client library is loaded.
function onClientLoad() {
    gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
}

function onYouTubeApiLoad() {
    gapi.client.setApiKey('AIzaSyBTtNgEk-54vL6FOQ0bENBxakO-8SS7ClI');
    searchPreviousPage();
}


function searchPreviousPage() {
    var url = decodeURIComponent(window.location.search.replace(/\+/g, " ")).replace("?search=", "");
    var request = gapi.client.youtube.search.list({
        part: 'snippet',
        q: url,
        maxResult: 20
    });
    request.execute(onSearchResponse);
}

function search() {
    window.location.search = "?search=" + $("#query").val();
    var request = gapi.client.youtube.search.list({
        part: 'snippet',
        q: $("#query").val(),
        maxResult: 20
    });
    request.execute(onSearchResponse);
}


// Called automatically with the response of the YouTube API request.
function onSearchResponse(response) {
    showResponse(response);
}