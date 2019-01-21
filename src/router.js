import React from 'react';
import App from './App';
import Admin from './admin';
import {
  HashRouter,
  Route,
  // Switch
}from 'react-router-dom';
// import Login from './pages/login';
import Nomatch from './pages/noMatch';
export default class ERouter extends React.Component {

 render() {
    return (
      <HashRouter>
        <App>
          {/* <Route path="/login" component={Login}/> */}
          <Route path="/admin" render={()=>
          <Admin>
            <Route path="/admin/ui/button"></Route>
            <Route component={Nomatch}></Route>
          </Admin>}>
          </Route>
        </App>
      </HashRouter>
    );
  }
}