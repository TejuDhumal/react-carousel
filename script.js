const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
const signUpButton2 = document.getElementById('sign-up-btn2');
const signInButton2 = document.getElementById('sign-in-btn2');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

signUpButton2.addEventListener('click', () => {
	container.classList.add("right-panel-active2");
});

signInButton2.addEventListener('click', () => {
	container.classList.remove("right-panel-active2");
});

//hide/show password
const togglePassword = document.querySelector('#togglePassword-signup');
const password = document.querySelector("#id_password-signup");

togglePassword.addEventListener('click', function (e) {
  // toggle the type attribute
  const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
  password.setAttribute('type', type);
  // toggle the eye slash icon
  this.classList.toggle('fa-eye-slash');
});

const togglePassword2 = document.querySelector('#togglePassword-signin');
const password2 = document.querySelector("#id_password-signin");

togglePassword2.addEventListener('click', function (e) {
  const type = password2.getAttribute('type') === 'password' ? 'text' : 'password';
  password2.setAttribute('type', type);
  this.classList.toggle('fa-eye-slash');
});
