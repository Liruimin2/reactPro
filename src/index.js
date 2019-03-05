import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Admin from './admin';
// import IRouter from "./pages/router-demo/router2/router";
import Router from './router';
import {Provider} from 'react-redux';
import configureStore from './component/redux/store/configurestore'
import * as serviceWorker from './serviceWorker';
const store = configureStore();
// ReactDOM.render( <Admin/ > , document.getElementById('root'));
ReactDOM.render( 
// {/* <Router /> , document.getElementById('root') */}
<Provider store={store}>
  <Router/>
</Provider>,
document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
