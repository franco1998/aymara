import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
var firebaseConfig = {
   apiKey: "AIzaSyCoVvo-3B19_aEIKi8K7hLNcpvAsriXkKM",
   authDomain: "prueba-ebbae.firebaseapp.com",
   databaseURL: "https://prueba-ebbae.firebaseio.com",
   projectId: "prueba-ebbae",
   storageBucket: "prueba-ebbae.appspot.com",
   messagingSenderId: "348027903547",
   appId: "1:348027903547:web:46af22b57aff834a"
 };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
