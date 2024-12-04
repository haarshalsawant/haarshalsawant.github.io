(function() {
    emailjs.init(""); //UsrID
})();

document.getElementById('contact-form').addEventListener('submit',
    function(event) {
        event.preventDefault(); //prevent from filling form

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        emailjs.sende("service_728p7e8", "", { // service,template ID
            form_name: name,
            from_email:email,
            message_html: message
        })
        
        .then(function(response) {
            document.getElementById('reponse-message').innerText = "Message sent succesfully!";
            document.getElementById("contact-form").reset(); //clear form.
        }, function(error) {
            document.getElementById('response-message').innerText = "Faild to send message. Please try again.";
        });
})();