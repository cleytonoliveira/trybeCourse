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
  field: document.getElementById('date'),
  format: 'DD/MM/YY',
  toString(date) {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const formattedDate = [day < 10 ? '0' + day : day, month < 10 ? '0' + month : month, year].join('/');
    return formattedDate;
  }
});

new window.JustValidate('.js-form', {
  rules: {
    name: {
      required: true,
      minLength: 3,
      maxLength: 40
    },
    email: {
      required: true,
      email: true,
      maxLength: 50
    },
    cpf: {
      required: true,
      maxLength: 11
    },
    address: {
      required: true,
      maxLength: 200
    },
    city: {
      required: true,
      maxLength: 28
    },
    state: {
      required: true,
    },
    radio: {
      required: true,
    },
    text: {
      required: true,
      maxLength: 1000
    },
    position: {
      required: true,
      maxLength: 40
    },
    positionDescription: {
      required: true,
      maxLength: 500
    },
    date: {
      required: true,
    }
  },
  messages: {
    name: {
      required: 'O campo de nome é obrigatório.',
      maxLength: 'O limite é de 40 caracteres.'
    },
    email: {
      required: 'O campo de email é obrigatório.',
      email: 'O email digitado não é válido.',
      maxLength: 'O limite é de 50 caracteres.'
    },
    cpf: {
      required: 'O campo de CPF é obrigatório.',
      maxLength: 'O limite é de 11 caracteres.'
    },
    address: {
      required: 'O campo endereço é obrigatório.',
      maxLength: 'O limite é de 200 caracteres.'
    },
    city: {
      required: 'O campo cidade é obrigatório.',
      maxLength: 'O limite é de 28 caracteres.'
    },
    state: {
      required: 'O campo estado é obrigatório.',
    },
    radio: {
      required: 'A escolha de um item é obrigatória.',
    },
    text: {
      required: 'Este campo é obrigatório.',
      maxLength: 'O limite é de 1000 caracteres.'
    },
    position: {
      required: 'Este campo é obrigatório.',
      maxLength: 'O limite é de 40 caracteres.'
    },
    positionDescription: {
      required: 'Este campo é obrigatório.',
      maxLength: 'O limite é de 500 caracteres.'
    },
    date: {
      required: 'Este campo é obrigatório.',
    }
  },
  submitHandler: function (form, values) {
    console.log(form, values);
  },
});

generateStates();
form.addEventListener('submit', outputInformantions);
btnReset.addEventListener('click', function () {
  output.innerHTML = '';
})
