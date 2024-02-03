var username2 = document.getElementById("UserName")
var email2 = document.getElementById("Email")
var password2 = document.getElementById("Password")
function set() {
    localStorage.setItem("Name",username2.value)
    localStorage.setItem("Email",email2.value)
    localStorage.setItem("Password",password2.value)  
    if (username2.value === "" && email2.value === "" && password2.value === "") {
        alert ("Please fill all requirments")
    } 
}
var username3 = localStorage.getItem("Name")
var email3 = localStorage.getItem("Email")
var pass = localStorage.getItem("Password")

function show() {
    var email4 = document.getElementById("Email".value)
    var password4 = document.getElementById("Password".value)
    if (email4 === email3 && password4 === pass) {
        alert(`${username3} logged in !`)
    }
    else{
        alert("Please Enter a correct email and password")
    }
}