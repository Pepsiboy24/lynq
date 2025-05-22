firebase.initializeApp(firebaseConfig);


const userName = document.querySelector("[data-userName]");
const password = document.querySelector("[data-password]")
const logInBtn = document.querySelector("[data-signUpBtn]")
const errMsg = document.querySelector("[data-errMsg]")

logInBtn.addEventListener("click", () => {
    const userNameValue = userName.value
    const passwordValue = password.value
    // Form Validation:
    if(userNameValue == "" || passwordValue == ""){
        errMsg.classList.add("show")
        errMsg.textContent = "Input's can't be empty"
        // console.log("Input's can't be empty")
        return
    }else{
        const dbRef = firebase.database().ref(); //Use CDN Syntax
        firebase.database().ref('users/' + userNameValue).once('value')
        .then((snapshot) => {
          if (snapshot.exists()) {
            console.log(snapshot.val());
            localStorage.setItem("id", userNameValue);
            if(snapshot.val().userName == userNameValue && snapshot.val().password == passwordValue){
              // errMsg.classList.add("show");
              // errMsg.textContent = "Err: Routing error pls try later";
              window.location.href = "./postEvent.htm";
              console.log(snapshot.val());
            }else{
          errMsg.classList.add("show");
              errMsg.textContent = "User name or Password is incorrect";  
            }
            console.log(localStorage.getItem("id"));
          } else {
          }
        })
        .catch((error) => {
          errMsg.classList.add("show");
          errMsg.textContent = "Error: " + error;
          console.error("error", error);
        });
    
    }


})
