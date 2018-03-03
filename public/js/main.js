function tplawesome(e, t) { res = e; for (var n = 0; n < t.length; n++) { res = res.replace(/\{\{(.*?)\}\}/g, function(e, r) { return t[n][r] }) } return res }

function showResponse(response) {
    // var responseString = JSON.stringify(response, '', 2);
    // document.getElementById('search-container').innerHTML += responseString;
    var results = response.result;
    $("#results").html("");
    $.each(results.items, function(index, item) {
        $.get("../html/item.html", function(data) {
            $("#search-container").append(tplawesome(data, [{ "title": item.snippet.title, "videoid": item.id.videoId }]));
        });
    });
    resetVideoHeight();
};
$(window).on("resize", resetVideoHeight);

function resetVideoHeight() {
    $(".video").css("height", $("#results").width() * 9 / 16);

}
// Called automatically when JavaScript client library is loaded.
function onClientLoad() {
    gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
}

// Called automatically when YouTube API interface is loaded (see line 9).
function onYouTubeApiLoad() {
    // This API key is intended for use only in this lesson.
    // See http://goo.gl/PdPA1 to get a key for your own applications.
    gapi.client.setApiKey('AIzaSyBTtNgEk-54vL6FOQ0bENBxakO-8SS7ClI');
}

function search() {
    // Use the JavaScript client library to create a search.list() API call.
    var request = gapi.client.youtube.search.list({
        part: 'snippet',
        q: $("#query").val(),
        maxResult: 15
    });

    // Send the request to the API server,
    // and invoke onSearchRepsonse() with the response.
    request.execute(onSearchResponse);
}

// Called automatically with the response of the YouTube API request.
function onSearchResponse(response) {
    showResponse(response);
}