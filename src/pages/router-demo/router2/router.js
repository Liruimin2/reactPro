import React from 'react'
import {
  HashRouter as Router,
  Route,
  // Link,
  Switch
} from 'react-router-dom'
import Main from './main'
import Info from './info'
import About from './../router1/about'
import Topic from './../router1/topic'
import Home from './home'
export default class IRouter extends React.Component {

  render() {
    return ( <Router >
      {/* <Home > */}
      <Switch >
        < Route exact path = "/"
        component = {
          Home
        } /> 
      < Route  path = "/main"
      render = {
        () =>
        < Main >
        <Route path = "/main/:value"
        component = {
          Info
        } > 
        </Route>
        </Main>
      } > </Route> <Route  path = "/about"
      component = {
        About
      } > </Route> <Route exact = {
        true
      }
      path = "/about/abc"
      component = {
        About
      } > </Route> <Route  path = "/topics"
      component = {
        Topic
      } > </Route> 
      </Switch> 
      {/* </Home>  */}
      </Router>
    );
  }
}