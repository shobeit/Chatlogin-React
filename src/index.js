import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import LoginComponent from './login/login';
import SignupComponent from './signup/signup';
import DashboardComponent from './dashboard/dashboard';


const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
    apiKey: "AIzaSyDxh0dW-Rtt32xJFvmHbBXE5KezIUAdlg4",
    authDomain: "chatlogin-react.firebaseapp.com",
    databaseURL: "https://chatlogin-react.firebaseio.com",
    projectId: "chatlogin-react",
    storageBucket: "chatlogin-react.appspot.com",
    messagingSenderId: "936758930190",
    appId: "1:936758930190:web:2cf09c53af929444f4455f",
    measurementId: "G-X78MBMLZVJ"
});

const routing = (
    <Router>
    <div id='routing-container'>
     <Route path='/login' component={LoginComponent}></Route>
     <Route path='/signup' component={SignupComponent}></Route>
     <Route path='/dashboard' component={DashboardComponent}></Route>
    </div>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
