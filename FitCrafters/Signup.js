const showPassword1 = document.getElementById('showPassword1');
const passwordInput = document.getElementById('password');

const showPassword2 = document.getElementById('showPassword2');
const repasswordInput = document.getElementById('repassword');

showPassword1.addEventListener('change', function() {
  passwordInput.type = this.checked ? 'text' : 'password';
});

showPassword2.addEventListener('change', function() {
  repasswordInput.type = this.checked ? 'text' : 'password';
});
const createbutton = document.getElementById('createbutton');

createbutton.addEventListener('click', function() {

    // Successful login (you can later add real authentication here)
    window.location.href = "index.html";  // Redirect to homepage
  });