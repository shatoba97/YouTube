import ReactDOM from "react-dom";
import React from 'react'
import "./main.css"
import "./ListandVideo.css"
import "./videoDetail.css"
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import SearchBar from "./searchBar";
import VideoList from "./videoList";
import VideoDetail from "./videoDetail";

ReactDOM.render((
  <Router>
    <div>
      <Route exact path="/" component={SearchBar}/>
      <Route path="/list/" component={VideoList}/>
      <Route path="/watch/" component={VideoDetail}/>
    </div>
  </Router>
), document.getElementById('root'))
registerServiceWorker();