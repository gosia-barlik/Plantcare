import App from "./components/App";
import React from 'react';
import ReactDOM from 'react-dom';
import app from "firebase/app";
import 'firebase/database';
import {firebaseConfig} from './config/firebase';

// Initialize Firebase
app.initializeApp(firebaseConfig);
const firebaseDB = app.database();

ReactDOM.render(
    <App firebaseDB={firebaseDB}/>
    , document.getElementById("app"));