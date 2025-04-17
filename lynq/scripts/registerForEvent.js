const  id = localStorage.getItem("id");  
const db = firebase.database(); // Get the database instance
const userRef = firebase.database().ref('users/' + id); // Reference to the user's data

const userName = document.querySelector("[data-name]")
const phoneNum = document.querySelector("[data-phoneNumber]")
const email = document.querySelector("[data-email]")
const registerBtn = document.querySelector("[data-registerBtn]")
const errMsg  = document.querySelector("[data-errMsg]")

const users =[];


registerBtn.addEventListener("click", (e) => {
  e.preventDefault(); 
    const userNameValue = userName.value
    const phoneNumValue = phoneNum.value
    const emailValue = email.value
    if(userNameValue == "" || phoneNumValue == "" || emailValue == ""){
        errMsg.classList.add("show")
        errMsg.textContent = "Inputs can't be blank"
    }else{
        errMsg.classList.remove("show")
        const obj = {
            userName: userNameValue,
            phoneNumber: phoneNumValue,
            email: emailValue
        }
        users.push(obj)
        userRef.update({
            newField: users // Add the new field with the array as its value
          })
          .then(() => {
            console.log("New field added successfully!");
            const a = document.createElement("a")
            a.href = "./ticket.html"
            a.click();
          })
          .catch((error) => {
            console.error("Error adding new field: ", error);
          });
    }
})
