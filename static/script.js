function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const gender = document.querySelector('input[name="gender"]:checked');
    let errorMessages = '';
    // Name validation
    if (name === '') {
      errorMessages += 'Name is required.<br>';
    }
  // Email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (email === '' || !email.match(emailPattern)) {
      errorMessages += 'Please enter a valid email address.<br>';
    }
  // Phone validation
    const phonePattern = /^[0-9]{10}$/;
    if (phone === '' || !phone.match(phonePattern)) {
      errorMessages += 'Please enter a valid 10-digit phone number.<br>';
    }
  // Gender validation
    if (!gender) {
      errorMessages += 'Gender is required.<br>';
    }
  // Display errors
    if (errorMessages) {
      document.getElementById('errorMessages').innerHTML = errorMessages;
      return false; // Prevent form submission
    }
    alert('Registration Successful!');
    return true; // Allow form submission
  }