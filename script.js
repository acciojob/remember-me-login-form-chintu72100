document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.querySelector("#loginform");
  const rememberMe = document.querySelector("#rememberMe");
  const submit = document.querySelector("#submit");
  const existingButton = document.querySelector("#existing");

  // Saved user data
  const savedUsername = localStorage.getItem('username');
  const savedPassword = localStorage.getItem('password');

  // Event listener for form submission
  loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;

    if (rememberMe.checked) {
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
    } else {
      localStorage.removeItem('username');
      localStorage.removeItem('password');
    }

    // Update the visibility of the 'Login as existing user' button
    toggleExistingButtonVisibility();

    alert('Logged in as ' + username);
  });

  // Event listener for 'Login as existing user' button
  existingButton.addEventListener('click', function () {
    if (savedUsername) {
      alert('Logged in as ' + savedUsername);
    } else {
      alert('No existing user details found.');
    }
  });

  // Function to toggle the visibility of the 'Login as existing user' button
  function toggleExistingButtonVisibility() {
    existingButton.style.display = savedUsername ? 'block' : 'none';
  }

  // Initial toggle based on saved user details
  toggleExistingButtonVisibility();
});
