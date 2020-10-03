import firebase from 'firebase'
require('@firebase/firestore')
var firebaseConfig = {
    apiKey: "AIzaSyCMuFbHJ7FoQ5tazPsmXtUftZPOE0WUYks",
    authDomain: "story-hub-8c89a.firebaseapp.com",
    databaseURL: "https://story-hub-8c89a.firebaseio.com",
    projectId: "story-hub-8c89a",
    storageBucket: "story-hub-8c89a.appspot.com",
    messagingSenderId: "32071473248",
    appId: "1:32071473248:web:4570c990d89dc2a239cb05"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()