$(document).ready(function () {

    console.log("test log");
    
    // Your web app's Firebase configuration
    // var firebaseConfig = {
    //     apiKey: "AIzaSyDOT7mATLVmlyeN7PauFXyLg3ipA70mq7w",
    //     authDomain: "train-scheduler-8349f.firebaseapp.com",
    //     databaseURL: "https://train-scheduler-8349f.firebaseio.com",
    //     projectId: "train-scheduler-8349f",
    //     storageBucket: "",
    //     messagingSenderId: "875390957399",
    //     appId: "1:875390957399:web:eee467e87acc4bdb2a3012"
    // };
    // Initialize Firebase
    // firebase.initializeApp(firebaseConfig);

    // let db = firebase.database();




    $("#submit-btn").on("click", function(){
        let trainName = $("#train-name").val();
        let destination = $("#destination").val();
        let firstTrainTime = $("#first-train-time").val();
        let frequency = $("#frequency").val();
        populateList(trainName, destination, frequency);
    })


    function populateList (trainName, destination, frequency) {
        let newTrain = $("<tr>");
        newTrain.html(`
            <td>${trainName}</td>
            <td>${destination}</td>
            <td>${frequency}</td>`
            // <td>${nextArrival}</td>
            // <td>${minutesAway}</td>
            );

        $("#train-list").append(newTrain);
    };
   
    

});