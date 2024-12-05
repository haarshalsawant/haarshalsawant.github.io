(function() {
    emailjs.init("NUtf65TGtlO-03dTA"); // Initialize with User ID
  })();
  
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    emailjs.send("service_h0y2k0s", "template_nu4lrl9", {
      form_name: name,
      from_email: email,
      message_html: message
    })
    .then(function(response) {
      document.getElementById('response-message').innerText = "Message sent successfully!";
      document.getElementById("contact-form").reset(); // Clear form
    }, function(error) {
      document.getElementById('response-message').innerText = "Failed to send message. Please try again.";
    });
  });