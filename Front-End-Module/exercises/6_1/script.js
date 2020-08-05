const states = [
  'Selecione o Estado',
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

generateStates();
date.addEventListener('change', verifyDate);
