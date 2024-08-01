import { validateName, validateEmail, validatePassword, validatePasswordConfirmation } from "./validations.js";


const createAccountBtn = document.querySelector('.js-create-account-btn');

createAccountBtn.addEventListener('click', (e) => {
  e.preventDefault();
 
  if(validateName() && validateEmail() && validatePassword() && validatePasswordConfirmation()){
    alert("Form Submitted Successfully");
  }
})