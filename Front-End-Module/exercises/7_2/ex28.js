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

const verifyPair = (lessons, key, value) => {
  const verify = Object.entries(lessons);
  let isEqual = false;
  for (let index in verify) {
    if (verify[index][0] === key && verify[index][1] === value) {
      isEqual = true;
    }
  }
  return isEqual;
}

console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
