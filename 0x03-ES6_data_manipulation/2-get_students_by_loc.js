const getStudentsByLocation = (studentsList, city) => {
  let students = [];
  if (!(Array.isArray(students))) {
    return students;
  }
  students = studentsList.filter((student) => student.location === city);
  return students;
};

export default getStudentsByLocation;
