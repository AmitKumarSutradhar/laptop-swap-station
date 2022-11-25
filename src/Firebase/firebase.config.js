// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB_9TGjtMAJd65baUcwBsqfMyE17UvEWso",
    authDomain: "laptop-swap-station.firebaseapp.com",
    projectId: "laptop-swap-station",
    storageBucket: "laptop-swap-station.appspot.com",
    messagingSenderId: "344303715899",
    appId: "1:344303715899:web:9e4291a16f132759dfbe1e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;