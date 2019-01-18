import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Admin from './admin';
import IRouter from "./pages/router-demo/router2/router";
import * as serviceWorker from './serviceWorker';

// ReactDOM.render( <Admin/ > , document.getElementById('root'));
ReactDOM.render( <IRouter/ > , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
