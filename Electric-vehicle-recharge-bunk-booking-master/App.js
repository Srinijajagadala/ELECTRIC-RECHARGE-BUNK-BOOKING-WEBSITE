// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAERd9ZrQ9B3npKMmsW1NaJOazU3iGaVzI",
    authDomain: "ev-charging-app-91906.firebaseapp.com",
    projectId: "ev-charging-app-91906",
    storageBucket: "ev-charging-app-91906.appspot.com",
    messagingSenderId: "7946463719",
    appId: "1:7946463719:web:4cff66bd24653d8caf3542",
    measurementId: "G-LJDQHS5XYN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

// Password validation regex
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;

// Handle Registration
const registerForm = document.getElementById('registerForm');
if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const errorMsg = document.getElementById('errorMsg');

        // Clear previous errors
        errorMsg.textContent = '';

        // Validate password strength and match
        if (!password.match(passwordRegex)) {
            errorMsg.textContent = 'Password must be at least 8 characters long, contain uppercase, lowercase, a number, and a special character.';
            return;
        }
        if (password !== confirmPassword) {
            errorMsg.textContent = 'Passwords do not match!';
            return;
        }

        // Create user in Firebase Auth
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log('User registered:', userCredential.user);
                alert('Registration successful! Redirecting to login page.');
                window.location.href = "login.html";
            })
            .catch((error) => {
                console.error(error.code, error.message);
                errorMsg.textContent = error.message;
            });
    });
}

// Handle Login
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const loginErrorMsg = document.getElementById('loginErrorMsg');

        // Clear previous errors
        loginErrorMsg.textContent = '';

        // Sign in user
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log('User logged in:', userCredential.user);
                alert('Login successful! Redirecting to home page.');
                window.location.href = "user.html";
            })
            .catch((error) => {
                console.error(error.code, error.message);
                loginErrorMsg.textContent = error.message;
            });
    });
}
