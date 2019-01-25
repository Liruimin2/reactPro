import React from 'react';
import App from './App';
import Admin from './admin';
import {
  HashRouter,
  Route,
  Switch
}from 'react-router-dom';
import Home from './pages/home';
// import Login from './pages/login/login'
import Buttons from './pages/ui/buttons';
import Modals from './pages/ui/modals';
import Loading from './pages/ui/loading'
import Notification from './pages/ui/notification'
import Message from './pages/ui/message'
import Tabs from './pages/ui/tab'
// import Nomatch from './pages/noMatch';
export default class ERouter extends React.Component {

 render() {
    return (
      <HashRouter>
        <App>
          < Switch >
             {/* < Route path = "/"
             component = {
               Home
             }
             />  */}
             <Route path = "/admin"
             render = {
                 () =>
                 <Admin >
                 < Switch >
                 <Route path = "/admin/ui/buttons"
                 component = {
                   Buttons
                 } > </Route> 
                 < Route path = "/admin/ui/modals"
                  component = {
                   Modals
                 } > </Route>
                 < Route path = "/admin/ui/loading"
                 component = {
                   Loading
                 } > 
                 </Route>
                 < Route path = "/admin/ui/notification"
                 component = {
                    Notification
                   } >
                </Route>
                < Route path = "/admin/ui/message"
                component = {
                    Message
                  } >
                </Route>
                < Route path = "/admin/ui/tabs"
                component = {
                   Tabs
                  } >
                  </Route>
                 <Route component = {
                   Home
                 } >
                 </Route> 
                 </Switch>
                 </Admin>}
                 > 
                 </Route>
          </Switch>
        </App>
      </HashRouter>
    );
  }
}