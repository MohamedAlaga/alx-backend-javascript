const updateStudentGradeByCity = (listStudents, city, newGrades) => {
  let listStudentGrades = [];
  if (!Array.isArray(listStudents)) {
    return listStudentGrades;
  }
  const studentWithCity = listStudents.filter(
    (student) => student.location === city
  );
  listStudentGrades = studentWithCity.map((student) => {
    newGrades.forEach((element) => {
      if (element.studentId === student.id) {
        student.grade = element.grade;
      }
    });
    if (student.grade == null) {
      student.grade = "N/A";
    }
    return student;
  });
  return listStudentGrades;
};

export default updateStudentGradeByCity;
