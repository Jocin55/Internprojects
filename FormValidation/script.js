const form = document.getElementById('contactForm');
    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');
    const messageField = document.getElementById('message');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');
    const successMsg = document.getElementById('successMsg');

    form.addEventListener('submit', function(event) {
      event.preventDefault();
      
      let valid = true;
      successMsg.textContent = "";

      // Validate Name
      if (nameField.value.trim() === "") {
        nameError.textContent = "Name is required";
        valid = false;
      } else {
        nameError.textContent = "";
      }

      // Validate Email
      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (emailField.value.trim() === "") {
        emailError.textContent = "Email is required";
        valid = false;
      } else if (!emailField.value.match(emailPattern)) {
        emailError.textContent = "Enter a valid email";
        valid = false;
      } else {
        emailError.textContent = "";
      }

      // Validate Message
      if (messageField.value.trim().length < 10) {
        messageError.textContent = "Message must be at least 10 characters";
        valid = false;
      } else {
        messageError.textContent = "";
      }

      // Success
      if (valid) {
        successMsg.textContent = "Form submitted successfully!";
        form.reset();
      }
    });