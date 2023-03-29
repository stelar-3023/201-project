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

// constructor function Message
function Message(name, email, subject, message) {
  this.name = name;
  this.email = email;
  this.subject = subject;
  this.message = message;
}

// send message to handle form submission
function sendMessage(event) {
  // prevent the default form submission
  event.preventDefault();

  // get the values from the form
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;

  // create a new message object
  const newMessage = new Message(name, email, subject, message);

  // store the message object in local storage
  localStorage.setItem('message', JSON.stringify(newMessage));

  // display a success message
  const confirmation = document.createElement('p');
  confirmation.textContent = 'Your message has been sent!';
  document.getElementById('contact-form').appendChild(confirmation);
}

// add event listener to the form submit button
const form = document.getElementById('contact-form');
form.addEventListener('submit', sendMessage);

// get the message object from local storage
const storedMessage = localStorage.getItem('message');

if (storedMessage) {
  // parse the message object
  const parsedMessage = JSON.parse(storedMessage);

  // display the message object
  document.getElementById('name').value = parsedMessage.name;
  document.getElementById('email').value = parsedMessage.email;
  document.getElementById('subject').value = parsedMessage.subject;
  document.getElementById('message').value = parsedMessage.message;
}
