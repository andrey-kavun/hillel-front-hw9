const students = studentsMock.getStudentList(5);
console.log(students);
function getAvgMark(students) {
  for (let i = 0; i < students.length; i++) {
    let markSum = 0;
    for (let j = 0; j < students[i].marks.length; j++) {
      markSum += students[i].marks[j];
    }
    students[i].avgMark = markSum / students[i].marks.length;
  }
  return (students.reduce((result, students) => result + students.avgMark, 0) / students.length).toFixed(2);
}
console.log(getAvgMark(students));