firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
const  id = localStorage.getItem("id");  
const database = firebase.database();
const span = document.querySelector("[data-span]")

// Read data once
firebase.database().ref('/your/data/path').once('value').then(function(snapshot) {
    console.log(snapshot.val());
});

    // Listen for changes
    firebase.database().ref(`/users/${id}`).on('value', function(snapshot) {
        if (snapshot.exists()) {
            // Data exists at the specified path
            console.log("Data exists!");
            console.log(snapshot.val().newField[0]);
            span.textContent = snapshot.val().newField[0].userName
            // Perform actions with the data here
          } else {
            // Data does not exist at the specified path
            console.log("Data does not exist.");
            // Handle the case where data doesn't exist
          }
      // ...
    });
