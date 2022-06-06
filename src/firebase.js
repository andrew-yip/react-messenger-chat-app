import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp ({
  apiKey: "AIzaSyDZRiM6KRPcO0SpxmiRUmgDbGpX9MP75wI",
  authDomain: "messenger-chat-app-f46b0.firebaseapp.com",
  projectId: "messenger-chat-app-f46b0",
  storageBucket: "messenger-chat-app-f46b0.appspot.com",
  messagingSenderId: "422045216919",
  appId: "1:422045216919:web:ea3666001e3be89c7139d2"
}).auth();