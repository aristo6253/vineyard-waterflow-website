// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, child } from "firebase/database";

console.log("Reading settings from the database...");

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCDKsVBAHOnWmf9QSq1RQVrWRDmoPD3JKM",
    authDomain: "waterflowcontrolusserver.firebaseapp.com",
    databaseURL: "https://waterflowcontrolusserver-default-rtdb.firebaseio.com",
    projectId: "waterflowcontrolusserver",
    storageBucket: "waterflowcontrolusserver.appspot.com",
    messagingSenderId: "69048758163",
    appId: "1:69048758163:web:e83f3152016b7d22ac0266",
    measurementId: "G-Q944XM83Z6"
};

// Initialize Firebase
console.log("Initializing Firebase...");
const app = initializeApp(firebaseConfig);
console.log("Firebase initialized:", app);

// Initialize Database and get a reference to the service
const database = getDatabase(app);
console.log("Database initialized:", database);

// Function to read settings from the database
const readSettings = () => {
    console.log("Reading settings from the database...");
    const dbRef = ref(database);
    get(child(dbRef, 'Settings')).then((snapshot) => {
        if (snapshot.exists()) {
            const settings = snapshot.val();
            console.log("Settings retrieved:", settings);
            displaySettings(settings);
        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.error('Error reading data:', error);
    });
};

// Function to display settings on the web page
const displaySettings = (settings) => {
    console.log("Displaying settings...");
    const settingsContainer = document.getElementById('settings-container');
    settingsContainer.innerHTML = ''; // Clear any existing content

    for (const [key, value] of Object.entries(settings)) {
        const settingElement = document.createElement('div');
        settingElement.innerText = `${key}: ${value}`;
        settingsContainer.appendChild(settingElement);
    }
};

// Example usage
readSettings();
