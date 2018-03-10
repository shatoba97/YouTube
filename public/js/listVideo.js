class SearchBar extends React.Component {
            
        tplawesome(e, t) { res = e; for (var n = 0; n < t.length; n++) { res = res.replace(/\{\{(.*?)\}\}/g, function(e, r) { return t[n][r] }) } return res }

            onClientLoad() {
                gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
            }

            onYouTubeApiLoad() {
                gapi.client.setApiKey('AIzaSyBTtNgEk-54vL6FOQ0bENBxakO-8SS7ClI');
                searchPreviousPage();
            }
            searchPreviousPage() {
                var url = decodeURIComponent(window.location.search.replace(/\+/g, " ")).replace("?search=", "");
                var request = gapi.client.youtube.search.list({
                    part: 'snippet',
                    q: url,
                    maxResult: 20
                });
                request.execute(onSearchResponse);
            }

            showResponse(response) {
                var results = response.result;
                $("#search-container").innerHTML = '';
                $.each(results.items, function(index, item) {
                    $.get("../html/item.html", function(data) {
                        $("#search-container").append(tplawesome(data, [{ "title": item.snippet.title, "width": 300, "height": 198, "videoid": item.id.videoId, "src": item.id.videoId + "/mqdefault.jpg" }]));
                    });
                });

            };    
            onSearchResponse(response) {
                showResponse(response);
            }

            search() {
                console.log("her");
                window.location.search = "?search=" + $("#query").val();
                var request = gapi.client.youtube.search.list({
                    part: 'snippet',
                    q: $("#query").val(),
                    maxResult: 20
                });
                request.execute(onSearchResponse);
            }

            render(){
                return(
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 ">
                            <div className="input-group">
                                <input id="query" type="text" name="search" className="form-control" placeholder="Search for..." />
                                
                                    <button id="search-button" className="btn btn-secondary" onClick={this.props.onclick}>{this.value="Go!"}</button>
                               

                            </div>
                        </div>
                    </div>
                );
            }
        } 
         ReactDOM.render(
        <SearchBar onclick="search()"/> , document.getElementById("root"));