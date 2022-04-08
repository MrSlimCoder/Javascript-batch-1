// 3rd Party Modules - FIREBASE
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js";
import { getDatabase, ref, onValue, set } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-database.js";

// Configuration - FIREBASE
const firebaseConfig = {
    apiKey: "AIzaSyBeREoscRTpVNT1l1KR2XOLMhtD2zpQKYA",
    authDomain: "js-batch-1-18b09.firebaseapp.com",
    databaseURL: "https://js-batch-1-18b09-default-rtdb.firebaseio.com",
    projectId: "js-batch-1-18b09",
    storageBucket: "js-batch-1-18b09.appspot.com",
    messagingSenderId: "591336610150",
    appId: "1:591336610150:web:1ed6836b8602e1c36510a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Database Reference
const database = getDatabase(app);

// Database User Document Reference
const userRef = ref(database, `user`);

// Element Count
let count = 0;

// Firebase Snapshot Event
const snap = (snapshots) => {
    // Nullify User Div
    document.getElementById("user").innerHTML = "";
    // Snapshot Data Traverse
    snapshots.forEach(function (childSnapshot) {
        // Snapshot Value - Child Data
        var childData = childSnapshot.val();
        // User Div Append
        document.getElementById("user").innerHTML += `<p>${childData?.name}</p>`;
        // Element Count Increment
        ++count;
    });
}

// onValue Event Listener - FIREBASE
onValue(userRef, snap);

// DELETE OPERATION - JAVASCRIPT
function deleteJavaScript() {
    var btnDel = document.getElementById("del");
    btnDel.addEventListener("click", function () {
        deleteFirebase();
    });
}
deleteJavaScript();

// DELETE OPERATION - FIREBASE 
function deleteFirebase() {
    // Set User Document to Null
    set(ref(database, 'user/' + count), null);
}


// WRITE OPERATION - JAVASCRIPT
function writeJavaScript() {
    var btnWri = document.getElementById('sub');
    btnWri.addEventListener("click", function () {
        writeFirebase();
    });
}
writeJavaScript();

// WRITE OPERATION - FIREBASE
function writeFirebase() {
    // Get user name & password 
    const name = document.getElementById("name").value;
    const password = document.getElementById("password").value;
    // Set User Document (name, password)
    set(ref(database, 'user/' + count), {
        name,
        password
    });
}