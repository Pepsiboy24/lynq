firebase.initializeApp(firebaseConfig);

const userName = document.querySelector("[data-userName]")
const password = document.querySelector("[data-password]")
const confirmPassword = document.querySelector("[data-confirmPassword]")
const phoneNumber = document.querySelector("[data-phoneNumber]")
const signUpBtn = document.querySelector("[data-signUpBtn]")
const errMsg = document.querySelector("[data-errMsg]")

signUpBtn.addEventListener("click", () => {
  const userNameValue = userName.value
  const passwordValue = password.value
  const confirmPasswordValue = confirmPassword.value
  const phoneNumberValue = phoneNumber.value

  if(userNameValue == "" || passwordValue == "" || confirmPasswordValue == "" || phoneNumberValue == ""){
    errMsg.classList.add("show")
    errMsg.textContent = "Inputs can't be blank"
  }else{
    errMsg.classList.remove("show")
    writeUserData(userNameValue, phoneNumberValue, passwordValue, userNameValue)
  }


})

function writeUserData(userId, telNum, password, userName) {
  // Get a reference to the database
  const database = firebase.database();

  firebase.database().ref('users/' + userId).set({
    phoneNumber: telNum,
    password: password,
    userName: userName,
  })
    .then(() => {
      localStorage.setItem("id", userId)
      // const a = document.createElement("a")
      // a.href = "./home.html"
      // a.click();
      window.location.href = "./postEvent.htm";
    //   errMsg.classList.add("show")
    // errMsg.textContent = "Error: Failed to sign up"
      
      console.log("Hello");
    })
    .catch(error => {
      console.error("Error writing user data:", error);
    });

  console.log("HMmm");
}