import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp ({
    apiKey: "API_KEY",
    authDomain: "API_KEY",
    projectId: "API_KEY",
    storageBucket: "API_KEY",
    messagingSenderId: "API_KEY",
    appId: "API_KEY"
}).auth();