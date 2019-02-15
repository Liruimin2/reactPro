import React from 'react';
import App from './App';
import Admin from './admin';
import {
  HashRouter,
  Route,
  Switch,
  Redirect
}from 'react-router-dom';
import Home from './pages/home';
// import Login from './pages/login/login'
import Buttons from './pages/ui/buttons';
import Modals from './pages/ui/modals';
import Loading from './pages/ui/loading'
import Notification from './pages/ui/notification'
import Message from './pages/ui/message'
import Tabs from './pages/ui/tab'
import Gallery from './pages/ui/gallery'
import Carousel from './pages/ui/carousel';
import Registers from './pages/form/register'
import FormLogin from './pages/form/login'
import BasicTable from './pages/table/basicTable'
import HighTable from './pages/table/highTable'
import City from './pages/city/index'
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
                < Route path = "/admin/ui/gallery"
                component={Gallery}> 
                </Route>
                < Route path = "/admin/ui/carousel"
                component = {
                  Carousel
                } > 
                </Route>
                < Route path = "/admin/form/login"
                component = {
                  FormLogin
                } > 
                </Route>
                < Route path = "/admin/form/register"
                component = {
                    Registers
                  } >
                </Route>
                < Route path = "/admin/table/basic"
                component = {
                    BasicTable
                  } >
                </Route>
                < Route path = "/admin/table/high"
                component = {
                    HighTable
                  } >
                </Route>
                 < Route path = "/admin/city"
                 component = {
                    City
                   } 
                >
                </Route>
                 <Route component = {
                   Home
                 } >
                 </Route> 
                 
                 </Switch>
                 </Admin>}
                 > 
                 </Route>
                 < Redirect to="/admin" />
          </Switch>
        </App>
      </HashRouter>
    );
  }
}