let name = prompt("Enter your Name :")
if (name == 'Admin'){
    let password = prompt("Enter your password")
    if (password == "TheMaster") {
        alert("Welcome")
    } else if (password == '' || password == null){
        alert("Canceled")
    } else {
        alert("Wrong Password")
    }
} else if (name == '' || name == null) {
    alert("Canceled")
} else {
    alert("I don't know you")
}