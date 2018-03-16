
import ReactDOM from "react-dom";
import { Switch } from 'react-router-dom'
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import SearchBar from "./public/js/index";
import VideoList from "./public/js/videoList";
import VideoDetail from "./public/js/videoDetail";

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{window.location.search}</h3>
  </div>
)

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/?search=цв`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.path}/`+decodeURIComponent(window.location.search)} component={Topic}/>
    <Route exact path={`${match.path}/:id`} render={() => (
      <h3>{
        
        //console.log(decodeURIComponent(window.location.search.replace(/\+/g, " ")).replace("?search=", ""))
        console.log(`${match.path}/`+decodeURIComponent(window.location.search))
      }</h3>
    )}/>
  </div>
)
ReactDOM.render((
  <Router>
    <div>
      <Route exact path="/" component={SearchBar}/>
      <Route path="/list/" component={VideoList}/>
      <Route path="/watch/" component={VideoDetail}/>
    </div>
  </Router>
), document.getElementById('root'))
