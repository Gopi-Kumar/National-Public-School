let endpoint  = "http://localhost:3002"
function sendMessage(){
    let name = document.getElementById("name").value,
    email= document.getElementById("email").value,
    message= document.getElementById("message").value;
    if(name && email && message){
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "name" : name, 
            "email" : email,
            "message" : message,
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(`${endpoint}/postletter/nps`, requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result)
        })
        .catch(error => {
            console.log("error",error);
        });
    }else{
        console.log("Fill all field.")
    }
}


//Drop Down functions

let dropdownMenu = document.querySelector(".header .navbar__container");
let showDropdownButton = document.getElementById("showDropdownButton");
let closeDropdownButton = document.getElementById("closeDropdownButton");

function showDropdownMenu(){
    dropdownMenu.style.display = "flex";
    showDropdownButton.style.display = "none";
    closeDropdownButton.style.display = "flex";
}
function closeDropdownMenu(){
    dropdownMenu.style.display = "none";
    showDropdownButton.style.display = "flex";
    closeDropdownButton.style.display = "none";
}