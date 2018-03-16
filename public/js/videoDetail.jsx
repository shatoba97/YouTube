import React, { Component } from "react";
import ReactDOM from "react-dom";
class VideoDetail extends React.Component {
    constructor(props) {
      super(props);
     
      this.init();
      this.video = decodeURIComponent(window.location).replace("http://localhost:8080/watch/","")
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
            'onStateChange': this.onPlayerStateChange.bind(this),
            'onError': this.onPlayerError.bind(this),
            'onReady': (e) => {
              
                this.setState({author: this.player.j.videoData.author,
                  title:this.player.j.videoData.title});
                
              
            }
          }
        });
        console.log(this.player);
      };
    }
    
    render() {
      const style = `.max-width-1024 { max-width: 1024px; margin: 0 auto; }`;
      return( 
        <div>
          <style>{style}</style>
        <div className="max-width-1024">
        <div className="embed-responsive embed-responsive-16by9" id="player">
        </div>
      </div>
      <div>
        {this.state.author}
      </div>
      <div>
        {this.state.title}
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
  
    onPlayerStateChange(event) {
      console.log(event)
      switch (event.data) {
        case window['YT'].PlayerState.PLAYING:
          if (this.cleanTime() == 0) {
            console.log('started ' + this.cleanTime());
          } else {
            console.log('playing ' + this.cleanTime())
          };
          break;
        case window['YT'].PlayerState.PAUSED:
          if (this.player.getDuration() - this.player.getCurrentTime() != 0) {
            console.log('paused' + ' @ ' + this.cleanTime());
          };
          break;
        case window['YT'].PlayerState.ENDED:
          console.log('ended ');
          break;
      };
    };
    //utility
    
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