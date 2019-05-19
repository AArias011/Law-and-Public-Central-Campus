// The following function causes the slide show displayed in the Index page to move automatically, changing the images every two seconds.
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("slideShowImages");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1
  }
  x[myIndex - 1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}

//Form Validation
// The code block below runs each of the following functions upon the user either clicking the element or typing information into the element.
window.addEventListener("load", function () {
  document.getElementById("submitButton").onclick = runSubmit;
  document.getElementById("emailInput").oninput = validateEmail;
  document.getElementById("nameInput").oninput = validateName;
  document.getElementById("subjectInput").oninput = validateSubject;
  document.getElementById("textBox").oninput = validateTextBox;
});

// The following code block creates a function which will run all of the other validation functions that are created within this document. This will allow for the page to stop the user from submitting their information if they have forgotten a certain section of the form.
function runSubmit() {
  validateName();
  validateEmail();
  validateSubject();
  validateText();
}

// The following functions all serve they same purpose. They allow for the error message that is displayed when the user forgets to input certain information to be set to something else rather than the default text. this allows for the massage to specify what information the user should put into any field that they missed.
function validateEmail() {
  var email = document.getElementById("emailInput");
  if (email.validity.valueMissing) {
    email.setCustomValidity("Please enter a valid email");
  } else {
    email.setCustomValidity("");
  }
}

function validateName() {
  var name = document.getElementById("nameInput");
  if (name.validity.valueMissing) {
    name.setCustomValidity("Please enter your full name");
  } else {
    name.setCustomValidity("");
  }
}

function validateSubject() {
  var subject = document.getElementById("subjectInput");
  if (subject.validity.valueMissing) {
    subject.setCustomValidity("Please enter a subject here");
  } else {
    subject.setCustomValidity("");
  }
}

function validateTextBox() {
  var textBox = document.getElementById("textBox");
  if (textBox.validity.valueMissing) {
    textBox.setCustomValidity("Please write your message here");
  } else {
    textBox.setCustomValidity("");
  }
}

// Email Array
// The array below serves to store the emails which are inputted by the user when enterign one into the contact form. Due to the time contraints of the project, we were not able to finish this section before the due date and thus it does not work properly.
var userEmails = [];
var email = document.getElementById("emailInput").innerHTML;

userEmails.push(email);
