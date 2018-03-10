class MyAppComponent extends React.Component {
    constructor(props) {
      super(props);
      this.init();
      this.video = '1cH2cerUpMQ' //video id
  
      window['onYouTubeIframeAPIReady'] = (e) => {
        this.YT = window['YT'];
        this.reframed = false;
        this.player = new window['YT'].Player('player', {
          videoId: this.video,
          events: {
            'onStateChange': this.onPlayerStateChange.bind(this),
            'onError': this.onPlayerError.bind(this),
            'onReady': (e) => {
              if (!this.reframed) {
                this.reframed = true;
                reframe(e.target.a);
              }
            }
          }
        });
      };
    }
    render() {
      const style = `.max-width-1024 { max-width: 1024px; margin: 0 auto; }`;
      return (<div>
          <style>{style}</style>
        <div className="max-width-1024">
        <div className="embed-responsive embed-responsive-16by9" id="player">
        </div>
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
    cleanTime() {
      return Math.round(this.player.getCurrentTime())
    };
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
  
  ReactDOM.render(<MyAppComponent />, document.getElementById('app'));





// var id = decodeURIComponent(window.location.search.replace(/\+/g, " ")).replace("?v=", "").replace("/mqdefault.jpg", "");


// function onClientLoad() {
//     gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
// }

// function tplawesome(e, t) { res = e; for (var n = 0; n < t.length; n++) { res = res.replace(/\{\{(.*?)\}\}/g, function(e, r) { return t[n][r] }) } return res }

// function onYouTubeApiLoad() {
//     gapi.client.setApiKey('AIzaSyBTtNgEk-54vL6FOQ0bENBxakO-8SS7ClI');

//     video();

// }

// function video() {
//     var request = gapi.client.youtube.videos.list({
//         part: 'snippet',
//         id: id
//     }).then(function(response) {

//         var label = document.getElementById("label");
//         console.log(response.result.items[0].snippet.title);
//         console.log(response.result.items[0]);
//         var start = "http://www.youtube.com/embed/";
//         var end = "?autoplay=1&origin=http://example.com";
//         var video = document.getElementById("ytplayer");
//         video.setAttribute('src', start + id + end);
//         label.textContent = response.result.items[0].snippet.title;


//     });
// }