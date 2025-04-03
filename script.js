let attempts = 0;
let timeout = false;

function validateLogin(event) {
  event.preventDefault();

  if (timeout) {
    document.getElementById('error-message').innerText = "Please wait 10 seconds before trying again.";
    return;
  }

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

 
  const correctUsername = 'admin123';
  const correctPassword = 'admin123';

  if (username === correctUsername && password === correctPassword) {
   
    alert('Login successful!');
    window.location.href = 'The art loftver2.html';
    attempts = 0;
    
  } else {
    attempts++;
    document.getElementById('error-message').innerText = "Incorrect username or password.";
    
    if (attempts >= 3) {
      timeout = true;
      document.getElementById('error-message').innerText = "Too many incorrect attempts. Please wait 10 seconds.";
      setTimeout(() => {
        timeout = false;
        attempts = 0;
        document.getElementById('error-message').innerText = "You may try again.";
      }, 10000);
    }
  }
}