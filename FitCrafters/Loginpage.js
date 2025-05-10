const showPasswordCheckbox = document.getElementById('showPassword');
const passwordInput = document.getElementById('password');

showPasswordCheckbox.addEventListener('change', function() {
  passwordInput.type = this.checked ? 'text' : 'password';
});
const loginButton = document.getElementById('loginButton');

loginButton.addEventListener('click', function() {
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  if (email === "" || password === "") {
    alert("Please enter both email and password.");
  } else {
    // Successful login (you can later add real authentication here)
    window.location.href = "Homepage.html";  // Redirect to homepage
  }
});

