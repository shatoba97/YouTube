const API = 'AIzaSyBTtNgEk-54vL6FOQ0bENBxakO-8SS7ClI'
const result = 20;
const url = decodeURIComponent(window.location.search.replace(/\+/g, " ")).replace("?search=", "");
var val;


function onClientLoad (){
    gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
}

function onYouTubeApiLoad(){
    gapi.client.setApiKey('AIzaSyBTtNgEk-54vL6FOQ0bENBxakO-8SS7ClI');
 
}
class Youtube extends React.Component {
    constructor(props){
        super(props);
        this.state={
            resultyt:[],
            val:''
        };
        this.clicked=this.clicked.bind(this);
        this.onChangeHandler=this.onChangeHandler.bind(this);
    }
    onChangeHandler(e){
        this.setState({val:e.target.value});
    }
    clicked(){
        if(this.state.val!=''){
            window.location.search = "?search=" + this.state.val;
        }
        var finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&part=snippet,id&order=date&maxResults=${result}`;
              
        fetch(finalURL)
        .then((response)=>(response.json()))
        .then((responseJson)=>{
            const resultyt=responseJson.items.map((obj)=>"https://www.youtube.com/embed/"+obj.id.videoId);
            console.log(resultyt);
        });
        
        
    }
    render(){

        return(
            <div className="input-group">
                <input type="text" name="search" className="form-control" onChange={this.onChangeHandler} placeholder="Search for..." />
                <span className="input-group-btn">
                console.log(this.state.resultyt)
                    <button className="btn btn-secondary"  onClick={this.clicked}>Go!</button>
                    {
                        
                        this.state.resultyt.map((link,i)=>{
                            {console.log("link="+link+"i="+i)}
                            var frame = <div key={i} className="youtube"><iframe  width="560" height="315" src={link} frameBorder="0" allowFullScreen></iframe></div>
                            return frame;
                        })
                    }
                    {this.frame}
                </span>
                
            </div>
        )
    }
}

ReactDOM.render(
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 ">
                        
                            
                                <Youtube />            
                            
                        
                    </div>
                </div>
    , document.getElementById('root'));







    // function tplawesome(e, t) { res = e; for (var n = 0; n < t.length; n++) { res = res.replace(/\{\{(.*?)\}\}/g, function(e, r) { return t[n][r] }) } return res }

    // function showResponse(response) {
    //     // var responseString = JSON.stringify(response, '', 2);
    //     // document.getElementById('search-container').innerHTML += responseString;
    //     var results = response.result;
    //     $("#search-container").innerHTML = '';
    //     $.each(results.items, function(index, item) {
    //         $.get("../html/item.html", function(data) {
    //             $("#search-container").append(tplawesome(data, [{ "title": item.snippet.title, "width": 300, "height": 198, "videoid": item.id.videoId, "src": item.id.videoId + "/mqdefault.jpg" }]));
    //         });
    //     });
    
    // };
    
    
    
    // // Called automatically when JavaScript client library is loaded.
    // function onClientLoad() {
    //     gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
    // }
    
    // function onYouTubeApiLoad() {
    //     gapi.client.setApiKey('AIzaSyBTtNgEk-54vL6FOQ0bENBxakO-8SS7ClI');
    //     searchPreviousPage();
    // }
    
    
    // function searchPreviousPage() {
    //     var url = decodeURIComponent(window.location.search.replace(/\+/g, " ")).replace("?search=", "");
        // var request = gapi.client.youtube.search.list({
        //     part: 'snippet',
        //     q: url,
        //     maxResult: 20
        // });
        // request.execute(onSearchResponse);
    // }
    
    // function search() {
    //     console.log("her");
    //     window.location.search = "?search=" + $("#query").val();
    //     var request = gapi.client.youtube.search.list({
    //         part: 'snippet',
    //         q: $("#query").val(),
    //         maxResult: 20
    //     });
    //     request.execute(onSearchResponse);
    // }
    
    
    // // Called automatically with the response of the YouTube API request.
    // function onSearchResponse(response) {
    //     showResponse(response);
    // }















