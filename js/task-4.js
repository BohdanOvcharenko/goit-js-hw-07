const formElem = document.querySelector('.login-form');
formElem.addEventListener('submit', e => {
  e.preventDefault();

  const { email, password } = formElem.elements;

  const trimEmail = email.value.trim();
  const trimPassword = password.value.trim();

  if (trimEmail === '' || trimPassword === '') {
    alert('All form fields must be filled in');
    return;
  }

  const obj = {
    email: trimEmail,
    password: trimPassword,
  };

  console.log(obj);

  formElem.reset();
});
