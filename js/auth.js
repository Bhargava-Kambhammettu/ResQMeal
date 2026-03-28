// Firebase config (PASTE YOURS HERE)
 const firebaseConfig = {
    apiKey: "AIzaSyA7ejaSBBEFvQxRqb7KxHRXtknZlk-4HDM",
    authDomain: "resqmeal-f3a0f.firebaseapp.com",
    projectId: "resqmeal-f3a0f",
    storageBucket: "resqmeal-f3a0f.firebasestorage.app",
    messagingSenderId: "829065601848",
    appId: "1:829065601848:web:97a95237a4bb6ce51397cd",
    measurementId: "G-3G9ZLEMDX0"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Google Login
function googleLogin() {
  const provider = new firebase.auth.GoogleAuthProvider();

  auth.signInWithPopup(provider)
    .then((result) => {
      const user = result.user;

      alert("Welcome " + user.displayName);

      localStorage.setItem("user", JSON.stringify(user));

      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      alert(error.message);
    });
}