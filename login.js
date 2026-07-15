function loginUser(){

    let username = document.getElementById("username").value;

    let password = document.getElementById("password").value;

    if(username === "admin" && password === "12345"){

        window.location.href = "dashboard.html";

    } else {

        document.getElementById("errorMessage").innerHTML =

        "Invalid username or password";

    }

    return false;

}



