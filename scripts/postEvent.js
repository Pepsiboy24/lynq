 const firebaseConfig2 = {
    apiKey: "AIzaSyDkb_EBSJhg2L2NbGU3adl3FFA7SZ7Rdjk",
    authDomain: "lynq-8ce64.firebaseapp.com",
    databaseURL: "https://lynq-8ce64-default-rtdb.firebaseio.com",
    projectId: "lynq-8ce64",
    storageBucket: "lynq-8ce64.appspot.com",
    messagingSenderId: "64299148207",
    appId: "1:64299148207:web:8998e7b3d3b45ddd8f455a",
    databaseURL: "https://lynq-8ce64-default-rtdb.firebaseio.com"
  };

  firebase.initializeApp(firebaseConfig2);

const createEvent = document.querySelector("[data-createEvent]")
const eventName = document.querySelector("[data-eventName]")
const eventType = document.querySelector("[data-eventType]")
const eventDate = document.querySelector("[data-eventDate]")


const storage = firebase.storage();
const database = firebase.database();
const firestore = firebase.firestore();

createEvent.addEventListener("click", () => {
  let eventNameValue = eventName.value
  let eventTypeValue = eventType.value
  let rawDate = eventDate.value
  const readableDate = new Date(rawDate)
  const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
  const eventDateValue = {
    month: months[readableDate.getMonth()],
    day: readableDate.getDate()
  }

  let eventID = eventNameValue + "_" + Date.now()
  if(eventNameValue == ""){
    console.log("err pls input event Name")
  }else if(eventTypeValue == ""){
    console.log("err pls input event Type")
  }else if(rawDate == ""){
    console.log("err pls select a date")
  }else{
    addNewEvent(eventID, eventNameValue, eventTypeValue, eventDateValue)
  }
})



function addNewEvent(userId, eventName, eventType, eventDate) {
  // Get a reference to the database
  const database = firebase.database();
  
  firebase.database().ref('events/' + userId).set({
    eventName: eventName,
    eventType: eventType,
    eventDate: eventDate
  })
  .then(() => window.location.href = "../index.html")
  .catch(error => console.error("Error writing user data:", error))
  console.log("HMmm");
} 