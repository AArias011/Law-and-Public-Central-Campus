// The following function causes the slide show displayed in the Index page to move automatically
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
window.addEventListener("load", function () {
  document.getElementById("submitButton").onclick = runSubmit;
  document.getElementById("emailInput").oninput = validateEmail;
  document.getElementById("nameInput").oninput = validateName;
  document.getElementById("subjectInput").oninput = validateSubject;
  document.getElementById("textBox").oninput = validateTextBox;
});

function runSubmit() {
  validateName();
  validateEmail();
  validateSubject();
  validateText();
}

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