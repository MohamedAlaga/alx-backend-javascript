const updateStudentGradeByCity = (listStudents, city, newGrades) => {
  const listStudentGrades = [];
  if (!Array.isArray(listStudents)) {
    return listStudentGrades;
  }
  return listStudents
    .filter((student) => student.location === city)
    .map((student) => {
      const updatedStudent = { ...student };
      const gradeInfo = newGrades.find(
        (grade) => grade.studentId === student.id
      );
      updatedStudent.grade = gradeInfo ? gradeInfo.grade : 'N/A';
      return updatedStudent;
    });
};

export default updateStudentGradeByCity;
