import React from 'react';

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

const arrayTasks = ['Estudar React', 'Brincar com o Cachorro', 'Dar comida para os pássaros', 'Fazer almoço de amanhã', 'Fazer projeto em React'];

function App() {
  return (
    arrayTasks.map(tasks => task(tasks))
  );
}

export default App;
