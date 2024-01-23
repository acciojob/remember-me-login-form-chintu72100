//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.querySelector("#loginform"); // Corrected ID to 'loginform'
  const rememberMe = document.querySelector("#rememberMe");
  const submit = document.querySelector("#submit");
  const existingButton = document.querySelector("#existing");

  // Saved user data
  const savedUsername = localStorage.getItem('username');
  const savedPassword = localStorage.getItem('password');

  // Event listener for form submission
  loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.querySelector("#username").value; // Corrected to get the value
    const password = document.querySelector("#password").value; // Corrected to get the value

    if (rememberMe.checked) {
      localStorage.setItem('username', username); // Corrected localStorage spelling
      localStorage.setItem('password', password); // Corrected localStorage spelling
    } else {
      localStorage.removeItem('username');
      localStorage.removeItem('password');
    }
    alert('Logged in as ' + username);
  });

  existingButton.addEventListener('click', function () {
    if (savedUsername) {
      alert('Logged in as ' + savedUsername);
    } else {
      alert('No existing user details found.');
    }
  });
});
