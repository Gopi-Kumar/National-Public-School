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

        fetch(`${endpoint}/postletter/letterbox`, requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(res)
        })
        .catch(error => {
            console.log("error",error);
        });
    }else{
        console.log("Fill all field.")
    }
}