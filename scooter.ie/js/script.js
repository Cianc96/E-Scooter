//email validation
function ValidateEmail(inputText) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (inputText.value.match(mailformat)) {
    swal("Valid email address!");
    document.nextForm.email.focus();
    return true;
  } else {
    swal("You have entered an invalid email address!");
    document.nextForm.email.focus();
    return false;
  }
}

window.onload = function() {
  var form2 = document.getElementById("nextForm");
  form2.addEventListener('submit', validateForm2);
};

function validateForm2(event) {

  var name = document.getElementById("name");
  var email = document.getElementById("email");
  var text = document.getElementById("text");
  var phone = document.getElementById("phone");
  var phoneVal = phone.value;
  var nameVal = name.value;
  var emailVal = email.value;
  var textVal = text.value;

  if (nameVal === null || nameVal === "") {
    swal("Please enter your name.")
      .then(() => {
        name.focus();
      });
    event.preventDefault();
    return false;
  } else if (emailVal === null || emailVal === "") {
    swal("Email cannot be blank.")
      .then(() => {
        email.focus();
      });
    event.preventDefault();
    return false;
  } else if (!parseInt(phone.value.trim())) {
    swal("Phone must be in numeric.")
      .then(() => {
        phone.focus();
      });
    event.preventDefault();
    return false;
  } else if (textVal === null || textVal === "") {
    swal("Please type your message.")
      .then(() => {
        text.focus();
      });
    event.preventDefault();
    return false;
  }

  swal("Thank you for your e-mail.");

}

//Scroll Back To Top button
//https://mdbootstrap.com/docs/standard/extended/back-to-top/
let mybutton = document.getElementById("btn-back-to-top");

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
