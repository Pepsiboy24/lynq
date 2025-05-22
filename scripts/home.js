firebase.initializeApp(firebaseConfig);

const template = document.querySelector("[data-template]")
const container = document.querySelector("[data-all-events]")


const dbRef = firebase.database().ref(); //Use CDN Syntax
        firebase.database().ref('events').once('value')
        .then((snapshot) => {
          if (snapshot.exists()) {
            console.log(snapshot.val());
            const snap1 = snapshot.val();
            const eventArray = Object.entries(snap1).map(([id, data]) => ({id,...data}));
            console.log(eventArray)

            eventArray.forEach(element => {
                const card = template.content.cloneNode(true).children[0]
                const month = card.querySelector("[data-month]")
                const day = card.querySelector("[data-day]")
                const event_name = card.querySelector("[data-nameOfEvent]")
                const event_type = card.querySelector("[data-type]")
                
                month.textContent = element.eventDate.day
                day.textContent = element.eventDate.month
                event_name.textContent = element.eventName
                event_type.textContent = element.eventType
                console.log(event_name)
                container.append(card)

            });
          }
        })
        .catch((error) => {
          console.error("error", error);
        });