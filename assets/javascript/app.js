$(document).ready(function () {

    console.log("test");
    
    // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyDOT7mATLVmlyeN7PauFXyLg3ipA70mq7w",
        authDomain: "train-scheduler-8349f.firebaseapp.com",
        databaseURL: "https://train-scheduler-8349f.firebaseio.com",
        projectId: "train-scheduler-8349f",
        storageBucket: "",
        messagingSenderId: "875390957399",
        appId: "1:875390957399:web:eee467e87acc4bdb2a3012"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    let db = firebase.database();

    db.ref().set({
        test: "hi"
    })

});