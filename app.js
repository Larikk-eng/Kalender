
// ========================================
// FIREBASE IMPORTS
// ========================================

import { initializeApp } from
    "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

import {
    getFirestore,
    collection,
    addDoc
} from
    "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";


// ========================================
// DEINE FIREBASE KONFIGURATION
// ========================================

const firebaseConfig = {
    apiKey: "AIzaSyAQ3n3z7utduuPqQa6Zk4gq9vsPycqUMr0",
    authDomain: "kalender-99f7d.firebaseapp.com",
    projectId: "kalender-99f7d",
    storageBucket: "kalender-99f7d.firebasestorage.app",
    messagingSenderId: "875418298898",
    appId: "1:875418298898:web:b4b9c141fec63ef0f686cb"
};


// ========================================
// FIREBASE STARTEN
// ========================================

const app = initializeApp(firebaseConfig);


// ========================================
// FIRESTORE STARTEN
// ========================================

const db = getFirestore(app);


// ========================================
// STATUS AUF DER WEBSITE
// ========================================

const status = document.getElementById("status");


// ========================================
// FIREBASE TESTEN
// ========================================

async function firebaseTest() {

    try {

        console.log("Firebase wird getestet...");


        // Test-Dokument in Firestore erstellen
        const docRef = await addDoc(
            collection(db, "test"),
            {
                nachricht: "Firebase funktioniert!",
                zeit: new Date().toISOString()
            }
        );


        // Erfolg in der Browser-Konsole
        console.log(
            "Firebase funktioniert!",
            "Dokument-ID:",
            docRef.id
        );


        // Erfolg auf der Website anzeigen
        if (status) {
            status.textContent =
                "✅ Firebase und Firestore funktionieren!";
        }


    } catch (error) {

        console.error(
            "Firebase Fehler:",
            error
        );


        if (status) {
            status.textContent =
                "❌ Firebase-Fehler: " +
                error.message;
        }

    }

}


// Test starten
firebaseTest();