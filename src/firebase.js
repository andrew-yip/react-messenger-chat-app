import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp ({
    apiKey: "PRIVATE_KEY",
    authDomain: "PRIVATE_KEY",
    projectId: "PRIVATE_KEY",
    storageBucket: "PRIVATE_KEY",
    messagingSenderId: "PRIVATE_KEY",
    appId: "PRIVATE_KEY"
  }).auth();