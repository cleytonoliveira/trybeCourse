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

const picker = new Pikaday({ 
  field: document. getElementById('datepicker'),
  format: 'DD/MM/YYYY',
  toString(date) {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  },
  parse(dateString) {
    const parts = dateString.split('/');
      const day = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1;
      const year = parseInt(parts[2], 10);
      return new Date(year, month, day);
  }
});

generateStates();
form.addEventListener('submit', outputInformantions);
btnReset.addEventListener('click', function () {
  output.innerHTML = '';
})
