import firebase from 'firebase';

// add SDK Firebase
    const firebaseConfig = {
    apiKey: "AIzaSyCAv0SWmMCAJfEubeoVWl1hQk73MzM_czo",
    authDomain: "voting-3fdb6.firebaseapp.com",
    databaseURL: "https://voting-3fdb6-default-rtdb.firebaseio.com",
    projectId: "voting-3fdb6",
    storageBucket: "voting-3fdb6.appspot.com",
    messagingSenderId: "297713038678",
    appId: "1:297713038678:web:a9a6eca64d0ce0043ed2f7"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();