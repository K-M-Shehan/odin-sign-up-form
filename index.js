const passwordInput = document.querySelector("#password");
const confirmPInput = document.querySelector("#confirm-password");

confirmPInput.addEventListener("keyup", () => {
  if(confirmPInput.value == passwordInput.value) {  // passwords match
    confirmPInput.style.borderColor = "green";
    confirmPInput.setCustomValidity("");
  }
  else {  // passwords don't match
    confirmPInput.style.borderColor = "red";
    confirmPInput.setCustomValidity("Passwords don't match");
  }
})
