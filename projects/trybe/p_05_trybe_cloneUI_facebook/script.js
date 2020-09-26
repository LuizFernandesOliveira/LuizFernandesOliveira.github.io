function verifyEmptyInput(values) {
  for (let index = 0; index < values.length; index += 1) {
    if (values[index] === '') return true;
  }

  return false;
}

function login(user) {
  const rightContent = document.getElementsByClassName('right-content')[0];

  rightContent.innerHTML = `<p>Olá, ${user.firstname} ${user.lastname}</p>`;
  rightContent.innerHTML += `<p>${user.phoneEmail}</p>`;
  rightContent.innerHTML += `<p>${user.birthdate}</p>`;
  rightContent.innerHTML += `<p>${user.gender}</p>`;
}

const btnLogin = document.getElementById('button-login');
btnLogin.addEventListener('click', function () {
  const email = document.forms['form-login'].email.value;

  if (!verifyEmptyInput([email])) {
    alert(email);
  }
});

const btnValidate = document.getElementById('facebook-register');
btnValidate.addEventListener('click', function () {
  const firstname = document.forms['form-register'].firstname.value;
  const lastname = document.forms['form-register'].lastname.value;
  const phoneEmail = document.forms['form-register'].phone_email.value;
  const password = document.forms['form-register'].password.value;
  const birthdate = document.forms['form-register'].birthdate.value;
  const gender = document.forms['form-register'].gender.value;

  if (verifyEmptyInput([firstname, lastname, phoneEmail, password, birthdate, gender])) {
    const formRegister = document.getElementsByClassName('facebook-register')[0];
    formRegister.innerHTML += 'Campos inválidos';
  } else {
    login({ firstname, lastname, phoneEmail, birthdate, gender });
  }
});

const gender = document.forms['form-register'].gender;
gender[2].addEventListener('click', function () {
  const divGenderPersonalized = document.getElementsByClassName('gender-personalized')[0];

  if (!divGenderPersonalized.innerHTML) {
    const inputTextGender = document.createElement('input');
    inputTextGender.id = 'o-text';
    inputTextGender.name = 'gender-custom';
    inputTextGender.placeholder = 'Gênero (opcional)';

    divGenderPersonalized.appendChild(inputTextGender);
  }
});

gender[1].addEventListener('click', function () {
  const divGenderPersonalized = document.getElementsByClassName('gender-personalized')[0];
  divGenderPersonalized.innerHTML = '';
});

gender[0].addEventListener('click', function () {
  const divGenderPersonalized = document.getElementsByClassName('gender-personalized')[0];
  divGenderPersonalized.innerHTML = '';
});
