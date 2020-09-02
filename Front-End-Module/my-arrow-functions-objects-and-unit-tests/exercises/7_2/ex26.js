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

const getNumberAllStudents = lessons => {
  let counter = 0;
  const countObject = Object.keys(lessons);
  for (let index in countObject) {
    counter += lessons[countObject[index]].numeroEstudantes;
  }
  return counter;
}

console.log(getNumberAllStudents(allLessons));
