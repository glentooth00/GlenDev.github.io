function sendMail(){
    var params = {
        name: document.getElementById('name').value ,
        email: document.getElementById('email').value ,
        message: document.getElementById('message').value 
    };

    const serviceID = "service_fz0t31u";

    const templateID = "template_em51q5k";

emailjs
    .send(serviceID,templateID,params)
    .then(
        res => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";

            console.log(res);
                alert('Message has been sent, thank you.');
        }
    )
    .catch(err=>console.log(err))
}

