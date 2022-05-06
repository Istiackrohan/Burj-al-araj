// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANsayOEAPQt069FbZwiLSEBviP5ucR2Fc",
  authDomain: "burj-al-arab-f6b4f.firebaseapp.com",
  projectId: "burj-al-arab-f6b4f",
  storageBucket: "burj-al-arab-f6b4f.appspot.com",
  messagingSenderId: "182976524819",
  appId: "1:182976524819:web:af6fbe06ea21a478e705e6",
  measurementId: "G-D10081VREC"
};

// Initialize Firebase
const initializeAuthentication= () => initializeApp(firebaseConfig);
const analytics = getAnalytics(initializeAuthentication());

export default initializeAuthentication;