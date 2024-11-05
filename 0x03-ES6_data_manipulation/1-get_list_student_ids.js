export default function getListStudentIds(studentsList) {
  if (Array.isArray(studentsList)) {
    return studentsList.map(getStudentId);
  } else {
    return[];
  }
}

function getStudentId(student){
    return student["id"];
}
