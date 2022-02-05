//Image slide 
let imgsrc = [1,2,3,4,5,6,7,8,9,10,11,12,13,15,16,19,20,21,22,23,24,25,26,27,28,30,31,32,33,34,35];
let img = document.querySelector(".img_slide_show img");

img.src = './images/1.jpg';
let numberOfImage = imgsrc.length;
console.log(numberOfImage)
let i=0;
function prevImage(){
   if(i <= 0){
       i = imgsrc.length;
   }
    i -= 1;
   img.src = `./images/${imgsrc[i]}.jpg`
}
function nextImage(){
    if(i == imgsrc.length - 1){
        i = -1;
    }
     i += 1;
     console.log(i)
     img.src = `./images/${imgsrc[i]}.jpg`

}
setInterval(nextImage, 3500)
//Message box
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