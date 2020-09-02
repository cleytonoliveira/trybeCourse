const states = [
  '',
  'Acre',
  'Alagoas',
  'Amapá',
  'Amazonas',
  'Bahia',
  'Ceará',
  'Distrito Federal',
  'Espírito Santo',
  'Goiás',
  'Maranhão',
  'Mato Grosso',
  'Mato Grosso do Sul',
  'Minas Gerais',
  'Pará',
  'Paraíba',
  'Paraná',
  'Pernambuco',
  'Piauí',
  'Rio de Janeiro',
  'Rio Grande do Norte',
  'Rio Grande do Sul',
  'Rondônia',
  'Roraima',
  'Santa Catarina',
  'São Paulo',
  'Sergipe',
  'Tocantins',
];

function generateStates() {
  const selectStates = document.getElementById('states');
  for (let index = 0; index < states.length; index += 1) {
    const statesOptions = document.createElement('option');
    selectStates.appendChild(statesOptions);
    statesOptions.innerHTML = states[index];
    statesOptions.value = states[index];
  }
}

const date = document.getElementById('date');
function verifyDate() {
  const dateValue = date.value;
  const dateSplit = dateValue.split('/')
  if (dateSplit[0] > 31 || dateSplit[0] < 1){
    alert('Data inválida!');
  }
  if (dateSplit[1] > 12 || dateSplit[1] < 1){
    alert('Data inválida!');
  }
  if (dateSplit[2] < 0 || (dateSplit[2]).length > 4) {
    alert('Data inválida!');
  }
}

const output = document.querySelector('.output');
const form = document.getElementById('form');
const btnReset = document.getElementById('reset');

function outputInformantions(event) {
  event.preventDefault();
  const inputName = document.getElementById('name').value;
  const inputEmail = document.getElementById('email').value;
  const inputCpf = document.getElementById('cpf').value;
  const inputAddress = document.getElementById('address').value;
  const inputCity = document.getElementById('city').value;
  const inputStates = document.getElementById('states').value;
  const inputResume = document.getElementById('resume').value;
  const inputPosition = document.getElementById('position').value;
  const inputPositionDescription = document.getElementById('position-description').value;
  const inputDate = document.getElementById('date').value;

  const informations = [inputName, inputEmail, inputCpf, inputAddress, inputCity, inputStates, inputResume, inputPosition, inputPositionDescription, inputDate];

  for (let index = 0; index < informations.length; index += 1) {
    const aboutInformations = document.createElement('p');
    aboutInformations.innerHTML = informations[index];
    output.appendChild(aboutInformations);
  }
}

generateStates();
date.addEventListener('change', verifyDate);
form.addEventListener('submit', outputInformantions);
btnReset.addEventListener('click', function () {
  output.innerHTML = '';
})
