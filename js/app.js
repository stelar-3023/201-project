// Check if login data is already stored in cookies or local storage
let username = getStoredValue('username');
let password = getStoredValue('password');

// If login data is stored, use it to log in
if (username && password) {
  document.getElementById('username').value = username;
  document.getElementById('password').value = password;
  document.getElementById('login-form').style.display = 'block';
}

// Add an event listener to the login button
document.getElementById('login-btn').addEventListener('click', function () {
  // Show the login form when the button is clicked
  document.getElementById('login-form').style.display = 'block';
});

// Add an event listener to the login form submission
document.querySelector('form').addEventListener('submit', function (event) {
  // Prevent the default form submission
  event.preventDefault();

  // Get the entered username and password
  let username = document.getElementById('username').value;
  let password = document.getElementById('password').value;

  // Store the login data in cookies or local storage
  setStoredValue('username', username);
  setStoredValue('password', password);

  // Hide the login form
  document.getElementById('login-form').style.display = 'none';
});

// Function to get a stored value from cookies or local storage
function getStoredValue(key) {
  if (document.cookie.includes(key)) {
    return document.cookie
      .split('; ')
      .find((row) => row.startsWith(key))
      .split('=')[1];
  } else {
    return localStorage.getItem(key);
  }
}

// Function to set a stored value in cookies or local storage
function setStoredValue(key, value) {
  if (typeof Storage !== 'undefined') {
    localStorage.setItem(key, value);
  } else {
    document.cookie = `${key}=${value}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
  }
}
