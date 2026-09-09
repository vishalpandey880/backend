const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");
const path = require("path");

let db;

try {
    const serviceAccountPath = path.join(__dirname, "service.json");
    const serviceAccount = require(serviceAccountPath);

    initializeApp({
        credential: cert(serviceAccount)
    });

    db = getFirestore();
    console.log("Firebase connected successfully");
} catch (error) {
    console.error("Firebase connection error:", error.message);
}

module.exports = db;
