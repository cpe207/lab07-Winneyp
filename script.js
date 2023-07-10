const submitBtn = document.querySelector("#submit-btn");
const firstNameInput = document.querySelector("#first-name-input");
const lastNameInput = document.querySelector("#last-name-input");
const emailInput = document.querySelector("#email-input");
const passInput = document.querySelector("#password-input");
//simple email validation
function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}

firstNameInput.onkey = () => {
  firstNameInput.classList.remove("is-valid");
  firstNameInput.classList.remove("is-invalid");
};
lastNameInput.onkey = () => {
  lastNameInput.classList.remove("is-valid");
  lastNameInput.classList.remove("is-invalid");
};
emailInput.onkey = () => {
  emailInput.classList.remove("is-valid");
  emailInput.classList.remove("is-invalid");
};
passInput.onkey = () => {
  passInput.classList.remove("is-valid");
  passInput.classList.remove("is-invalid");
};

submitBtn.onclick = () => {
  let isFirstNameOk = false;
  let isLastNameOk = false;
  let isEmailOk = false;
  let isPassOk = false;

  if (firstNameInput.value === "") {
    firstNameInput.classList.add("is-invalid");
  } else {
    firstNameInput.classList.add("is-valid");
    isFirstNameOk = true;
  }

  if (lastNameInput.value === "") {
    lastNameInput.classList.add("is-invalid");
  } else {
    lastNameInput.classList.add("is-valid");
    isLastNameOk = true;
  }

  if (validateEmail(emailInput.value)) {
    emailInput.classList.add("is-valid");
    isEmailOk = true;
  } else {
    emailInput.classList.add("is-invalid");
  }

  if (passInput.value.length >= 6) {
    passInput.classList.add("is-valid");
    isPassOk = true;
  } else {
    passInput.classList.add("is-invalid");
  }
  //alert(isFirstNameOk + `` + isLastNameOk + `` + isEmailOk + `` + isPassOk);
  if (isFirstNameOk && isLastNameOk && isEmailOk && isPassOk) {
    alert("Registered successfully");
  }
};
