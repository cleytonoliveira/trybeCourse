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

const createReport = (lessons, teacher) => {
  let allLessons = [];
  let allStudents = 0;
  const searchTeacher = Object.values(lessons);
  for (let index in searchTeacher) {
    if (searchTeacher[index].professor === teacher) {
      allLessons.push(searchTeacher[index].materia);
      allStudents += searchTeacher[index].numeroEstudantes;
    }
  }
  return { professor: teacher, aulas: allLessons, estudantes: allStudents};
}

console.log(createReport(allLessons, 'Maria Clara'));