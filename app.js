import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";


// DEINE FIREBASE KONFIGURATION
const firebaseConfig = {
    apiKey: "AIzaSyAQ3n3z7utduuPqQa6Zk4gq9vsPycqUMr0",
    authDomain: "kalender-99f7d.firebaseapp.com",
    projectId: "kalender-99f7d",
    storageBucket: "kalender-99f7d.firebasestorage.app",
    messagingSenderId: "875418298898",
    appId: "1:875418298898:web:b4b9c141fec63ef0f686cb"
};


// Firebase starten
const app = initializeApp(firebaseConfig);


// Authentifizierung starten
const auth = getAuth(app);


// HTML-Elemente
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const registerButton =
    document.getElementById("registerButton");

const loginButton =
    document.getElementById("loginButton");

const logoutButton =
    document.getElementById("logoutButton");

const loginSection =
    document.getElementById("loginSection");

const appSection =
    document.getElementById("appSection");

const authMessage =
    document.getElementById("authMessage");


// Registrierung
registerButton.addEventListener("click", async () => {

    const email = emailInput.value;
    const password = passwordInput.value;

    try {

        await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );

        authMessage.textContent =
            "Account erfolgreich erstellt!";

    } catch (error) {

        console.error(error);

        authMessage.textContent =
            "Fehler: " + error.message;
    }
});


// Anmeldung
loginButton.addEventListener("click", async () => {

    const email = emailInput.value;
    const password = passwordInput.value;

    try {

        await signInWithEmailAndPassword(
            auth,
            email,
            password
        );

        authMessage.textContent =
            "Erfolgreich angemeldet!";

    } catch (error) {

        console.error(error);

        authMessage.textContent =
            "Fehler: " + error.message;
    }
});


// Abmelden
logoutButton.addEventListener("click", async () => {

    await signOut(auth);

});


// Überprüfen, ob jemand eingeloggt ist
onAuthStateChanged(auth, (user) => {

    if (user) {

        console.log("Eingeloggt:", user.uid);

        loginSection.hidden = true;
        appSection.hidden = false;

    } else {

        loginSection.hidden = false;
        appSection.hidden = true;

    }

});