import React, { Component } from "react";
class VideoDetail extends React.Component {
    constructor(props) {
      super(props);
     
      this.init();
      this.video = decodeURIComponent(window.location.pathname).replace("/watch/","")
      this.state={
        author:'',
        title:''
      }
      window['onYouTubeIframeAPIReady'] = (e) => {
        this.YT = window['YT'];
        this.reframed = false;
        this.player = new window['YT'].Player('player', {
          videoId: this.video,
          events: {
            'onError': this.onPlayerError.bind(this),
            'onReady': (e) => {
              console.log(e);
                this.setState({author: this.player.j.videoData.author,
                  title:this.player.j.videoData.title});
                
              
            }
          }
        });
        console.log(this.player);
        console.log(window.location);
      };
    }
    
    
    render() {
      
      return( 
        <div>
          
          
            <div className="embed-responsive embed-responsive-16by9" id="player"></div>
          
          <div id="title_videoDetail">
            <h5 id="author">{this.state.author}</h5>
            <div id="name">  {this.state.title}</div>
          </div>
        </div>
      );
    }
    init() {
      var tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }
  
    onPlayerError(event) {
      switch (event.data) {
        case 2:
          console.log('' + this.video)
          break;
        case 100:
          break;
        case 101 || 150:
          break;
      };
    };
  }
  
  
export default VideoDetail;