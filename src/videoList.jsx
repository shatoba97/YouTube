import React from 'react'
import _ from "lodash"
import YTSearch from 'youtube-api-search'
import videoDetail from "./videoDetail.jsx";
import SearchBar from "./searchBar.jsx";
const API_KEY = 'AIzaSyBYf1d1OI9RrbBZ8ox-HppCUqyndH8herc';

const Video_list_item = ( { video, onVideoSelect } ) => {
    
    const imageUrl = video.snippet.thumbnails.high.url;
    console.log(video.snippet.thumbnails);
    return <li onClick={ () =>{window.location="/watch/"+video.id.videoId; onVideoSelect(video) } } className="list-group-item">
                <div className = "wraper">
                    <img className = "video" src={imageUrl}/>
                    
                    <div className ="title">
                      <h5>{video.snippet.title}</h5>
                      <div className="description">{video.snippet.description}</div>
                    </div>
                    
                </div>
          </li>
    
}

 const Video_list = (props) => {
    const videoItems = props.videos.map( video => {
        return <Video_list_item
        onVideoSelect = {props.onVideoSelect}
        key = {video.etag}
        video = {video}
        />
        
    });
    
  
    return(
      <ul id="ytplayer" >
        {videoItems}
       </ul>
    )
}

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch(decodeURIComponent(window.location.search).replace("?",""));
  }
  videoSearch(searchTerm) {
    //youtube search
    YTSearch({key: API_KEY, term:searchTerm}, (videos) => {
      this.setState({
        videos:videos,
        selectedVideo: videos[0]
       });
    });

  }
  render(){
    const videoSearch = _.debounce( (term) => {this.videoSearch(decodeURIComponent(window.location.search))},400)

      return (
        <div>
            <SearchBar onSearchTermChange={videoSearch}/>
            
            <Video_list
              videos={this.state.videos}
            />
            
        </div>
        )
  }
}
export default App;
