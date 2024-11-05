const getStudentIdsSum = (getListStudents) => {
  let studentsTotal = 0;
  if (!Array.isArray(getListStudents)) {
    return studentsTotal;
  }
  const studentIds = getListStudents.map((student) => student.id);
  studentsTotal = studentIds.reduce((ids, value) => ids + value);
  return studentsTotal;
};

export default getStudentIdsSum;
