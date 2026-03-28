// firebase-config.js

// Replace with your actual Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyD5d6wqD4Ns8N-wvSpgNY6PsLfueTN3kGQ",
    authDomain: "nahom-furniture.firebaseapp.com",
    projectId: "nahom-furniture",
    storageBucket: "nahom-furniture.firebasestorage.app",
    messagingSenderId: "469732586271",
    appId: "1:469732586271:web:58af15538c29dcf576b62a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Replace with your actual Cloudinary details
const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dw1ohipim/image/upload";
const CLOUDINARY_UPLOAD_PRESET = "car_images";