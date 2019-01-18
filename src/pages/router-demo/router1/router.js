import React from "react";
import {
  Redirect
} from "react-router";
import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";
import Main from "./main";
import Home from "./home";
import Topics from "./topic";
import About from "./about";
export default class IRouter extends React.Component {
  render() {
    return ( <BrowserRouter >
              <Switch>
                <Route exact path = "/"
                component = {
                  Home
                }/> 
                < Route exact path = "/main"
                render = {
                  () => ( <Main >
                    {/* <Topics / > */}
                    {/* <Route path="/main/:id" component={Topics}></Route> */}
                    </Main>
                  )
                }/> 
                
                < Route exact path = "/about"
                component = {
                  About
                }> </Route>
                < Route exact path = "/topics"
                component = {
                Topics
                } > </Route>
                {/* <Redirect to = "/" / > */}
              </Switch> 
      </BrowserRouter>
    );
  }
}

