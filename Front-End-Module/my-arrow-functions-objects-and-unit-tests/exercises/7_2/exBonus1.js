const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
  turno: 'noite',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

const countMathVisit = lessons => {
  let counter = 0;
  const lessonsCounter = Object.keys(lessons);
  for (let index in lessonsCounter) {
    if (lessons[lessonsCounter[index]].materia === 'Matemática') {
      counter += lessons[lessonsCounter[index]].numeroEstudantes;
    }
  }
  return counter;
}

console.log(countMathVisit(allLessons));
