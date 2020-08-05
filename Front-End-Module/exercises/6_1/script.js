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

const selectStates = document.getElementById('states');
for (let index = 0; index < states.length; index += 1) {
  const statesOptions = document.createElement('option');
  selectStates.appendChild(statesOptions);
  statesOptions.innerHTML = states[index];
  statesOptions.value = states[index];
}

