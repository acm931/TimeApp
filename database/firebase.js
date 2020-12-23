// database/firebaseDb.js

import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAD8MVWQ9YkH8o3vDk5ufRpxm4z_z5bFEQ",
    authDomain: "timeapp-ba917.firebaseapp.com",
    projectId: "timeapp-ba917",
    storageBucket: "timeapp-ba917.appspot.com",
    messagingSenderId: "525856851894",
    appId: "1:525856851894:web:63378bb25a368cde9e2317",
    measurementId: "G-K471WDHK1Q"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;