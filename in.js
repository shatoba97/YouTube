
import ReactDOM from "react-dom";
import { Switch } from 'react-router-dom'
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Index from "./public/js/index";

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
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/abou">About</Link></li>
        <li><Link to="/topics">Topics</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Index}/>
      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}/>
    </div>
  </Router>
), document.getElementById('root'))
