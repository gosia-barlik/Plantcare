import App from "./components/App";
import React from 'react';
import ReactDOM from 'react-dom';
import app from "firebase/app";
import 'firebase/database';
import 'firebase/storage';
import {firebaseConfig} from './config/firebase';

// Initialize Firebase
app.initializeApp(firebaseConfig);
const firebase = app;

ReactDOM.render(
    <App firebase={firebase}/>
    , document.getElementById("app"));