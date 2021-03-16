import React, { useContext, useState } from 'react'
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebaseConfig'
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 } else {
    firebase.app(); // if already initialized, use that one
 }

function App() {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const fbProvider= new firebase.auth.FacebookAuthProvider();
  const ghProvider = new firebase.auth.GithubAuthProvider();
  const [loggedUser, setLoggedUser]= useContext(userContext);

  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const handleGoogleSignIn= ()=> {
    firebase.auth()
  .signInWithPopup(googleProvider)
  .then((result) => {
    var credential = result.credential;
    var token = credential.accessToken;
    var user = result.user;
    setLoggedUser(user);
    history.replace(from);
  }).catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
    console.log(error);
  });
  }

  const handleFbSignIn= ()=> {
    firebase
    .auth()
    .signInWithPopup(fbProvider)
    .then((result) => {
      var credential = result.credential;
      var user = result.user;
      var accessToken = credential.accessToken;
      console.log(user);
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
      console.log(error);
    });
  }

  const handleGHSignIn= ()=> {
    firebase
  .auth()
  .signInWithPopup(ghProvider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a GitHub Access Token. You can use it to access the GitHub API.
    var token = credential.accessToken;

    // The signed-in user info.
    var user = result.user;
    console.log('correct', user);
    // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
    console.log('error', error);
  });
  }

  return (
    <div style={{textAlign: 'center'}}>
    <h1>Revising the authentication system</h1>
    <button style={{display: 'inline-block', padding: '10px', backgroundColor: 'salmon', color: 'white', border: 'none', borderRadius: '5px'}} onClick={handleGoogleSignIn}>Sign In with GOOGLE</button>
   
    <button style={{display: 'inline-block', padding: '10px', backgroundColor: 'teal',marginLeft: '10px', color: 'white', border: 'none', borderRadius: '5px'}} onClick={handleFbSignIn}>Sign In with FACEBOOK</button>
    <button style={{display: 'inline-block', padding: '10px', backgroundColor: 'orange',marginLeft: '10px', color: 'white', border: 'none', borderRadius: '5px'}} onClick={handleGHSignIn}>Sign In with GitHub</button>
    </div>
)}


export default App;
