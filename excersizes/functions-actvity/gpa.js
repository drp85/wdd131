function getGrades(inputSelector) {
    //take input and convert to array
  const input = document.querySelector(inputSelector);
  const gradesString = input.value;
  const gradesArray = gradesString.split(',').map(grade => grade.trim().toUpperCase());
  return gradesArray;
}

function lookupGrade(grade) {
  // converts the letter grade to it's GPA point value and returns it
  let points = 0.0;
  if (grade === 'A') {
    points = 4.0;
  } else if (grade === 'B') {
    points = 3.0;
  } else if (grade === 'C') {
    points = 2.0;
  } else if (grade === 'D') {
    points = 1.0;
  } else if (grade === 'F') {
    points = 0.0;
  }
  return points;
}
function calculateGpa(grades) {
  // convert array from letter to point, calculate gpa
  const gradePoints = grades.map((grade) => lookupGrade(grade));
  const gpa = gradePoints.reduce((total, num) => total + num) / gradePoints.length;
  return gpa.toFixed(2);
}

function outputGpa(gpa, selector) {
  // takes a gpa value and displays it in the HTML in the element identified by the selector
  const outputElement = document.querySelector(selector);
  outputElement.innerText = gpa;
}

function clickHandler() {
  // when button clicked, get grades, calculate gpa, display gpa
  const grades = getGrades("#grades");
  const gpa = calculateGpa(grades);
  outputGpa(gpa, "#output");
}

document.querySelector("#submitButton").addEventListener("click", clickHandler);