const inputName = document.getElementById('fullName');
const inputEmail =  document.getElementById('email');
const inputPassowrd = document.getElementById('password');
const inputConfirmPassword =  document.getElementById('confirmPassword');
const nameError = document.querySelector('.js-nameError');
const emailError = document.querySelector('.js-emailError');
const passwordError = document.querySelector('.js-passError');
const confirmPasswordError = document.querySelector('.js-confirmPassError');



export function validateName(){
  let name = inputName.value;

  if(!name){
    nameError.innerHTML = "Name is required!";
    nameError.previousElementSibling.classList.add('fa-xmark');
    return false;
  }

  if(!/\s/.test(name)){
    nameError.innerHTML = "Write full name!";
    nameError.previousElementSibling.classList.add('fa-xmark');
    return false;
  }else{
    nameError.previousElementSibling.classList.add('fa-check');
    nameError.innerHTML = '';
  }
  return true;
}

export function validateEmail(){
  let email = inputEmail.value;
  if(!email){
    emailError.innerHTML = 'Email is required';
    emailError.previousElementSibling.classList.add('fa-xmark');
    return false;
  }
  const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  if(!emailPattern.test(email)){
    emailError.innerHTML = 'Enter valid email';
    emailError.previousElementSibling.classList.add('fa-xmark');
    return false;
  }else{
    emailError.previousElementSibling.classList.add('fa-check');
    emailError.innerHTML = '';
  }
  return true;
}

let password;

export function validatePassword(){
  password = inputPassowrd.value;
  if(!password){
    passwordError.innerHTML = 'Password is required';
    passwordError.previousElementSibling.classList.add('fa-xmark');
    return false;
  }
  
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
  if(!passwordPattern.test(password)){
    passwordError.previousElementSibling.classList.add('fa-xmark');
    passwordError.innerHTML = 'Password must contain capital letters, small letters, numbers and symbols';
    return false;
  }else{
    passwordError.innerHTML = '';
    passwordError.previousElementSibling.classList.add('fa-check');
  }
  return true;
}

export function validatePasswordConfirmation(){
  let confirmPassword = inputConfirmPassword.value;
  
  if(!confirmPassword){
    confirmPasswordError.innerHTML = 'Confirm your password';
    confirmPasswordError.previousElementSibling.classList.add('fa-xmark');
    return false;
  }
  else if(confirmPassword !== password){
    confirmPasswordError.innerHTML = `Password doesn't match`;
    confirmPasswordError.previousElementSibling.classList.add('fa-xmark');
    return false;
  }else{
    confirmPasswordError.innerHTML = '';
    confirmPasswordError.previousElementSibling.classList.add('fa-check');
  }
  return true;
}