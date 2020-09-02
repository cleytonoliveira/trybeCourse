const userEmailPhone = document.getElementById('user-email-phone');
const btnLogin = document.getElementById('button-login');
const invalidMessage = document.querySelector('.invalid-input');
const genderOptions = document.getElementById('gender');
const genderCustom = document.querySelector('.custom-option');
const btnSingUp = document.getElementById('facebook-register');

function clickLoginButton() {
  alert(userEmailPhone.value);
}

function createNewInput() {
  const customInput = document.createElement('input');
  customInput.name = 'gender-custom';
  customInput.placeholder = 'Gênero (opcional)';
  customInput.autocomplete = 'off';
  genderCustom.appendChild(customInput);
}

function genderCheck(event) {
  const optionCheck = event.target;
  if (optionCheck.value === 'Personalizado') {
    genderCustom.style.display = 'flex';
  } else {
    genderCustom.style.display = 'none';
  }
}

function validateForm() {
  const newUser = document.forms.user;
  const firstName = newUser.elements.firstname.value;
  const lastName = newUser.elements.lastname.value;
  const phoneEmail = newUser.elements.phone_email.value;
  const password = newUser.elements.password.value;
  const birthdate = newUser.elements.birthdate.value;
  const gender = newUser.elements.gender.value;
  const allInputsRequired = [firstName, lastName, phoneEmail, password, birthdate, gender];
  let isValid = true;
  for (let index = 0; index < allInputsRequired.length; index += 1) {
    if (allInputsRequired[index] === '') {
      invalidMessage.innerHTML = 'Campos inválidos';
      isValid = false;
    }
  }
  return isValid;
}

function clearRightContent() {
  const rightContent = document.querySelector('.right-content');
  rightContent.remove();
}

function createRightContent() {
  const mainContent = document.querySelector('.main-content');
  const newRightContent = document.createElement('div');
  newRightContent.className = 'right-content';
  mainContent.appendChild(newRightContent);
}

function textMsgIfValidate() {
  const newUser = document.forms.user;
  const firstName = newUser.elements.firstname.value;
  const lastName = newUser.elements.lastname.value;
  const phoneEmail = newUser.elements.phone_email.value;
  const birthdate = newUser.elements.birthdate.value;
  const gender = newUser.elements.gender.value;
  clearRightContent();
  createRightContent();
  const newRightContent = document.querySelector('.right-content');
  newRightContent.innerHTML = `Olá, ${firstName} ${lastName}!
  O seu login é ${phoneEmail},
  sua data de nascimento é ${birthdate} e
  selecionou o gênero ${gender}.`;
  return newRightContent;
}

window.onload = () => {
  btnLogin.addEventListener('click', clickLoginButton);
  genderOptions.addEventListener('change', genderCheck);
  btnSingUp.addEventListener('click', function (event) {
    event.preventDefault();
    if (validateForm()) {
      textMsgIfValidate();
    }
  });
  createNewInput();
  genderCustom.style.display = 'none';
};
