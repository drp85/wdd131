//  arrays.js
const steps = ["one", "two", "three"];
function listTemplate(step) {
  return `<li>${step}</li>`;//the html string made from step
}
const stepsHtml = steps.map(listTemplate)// use map to convert the list from strings to HTML
document.querySelector("#myList").innerHTML = stepsHtml.join();//set the innerHTML

//2: Map
const grades = ['A','B','A']
function convertGrade(grade) {
    let points = 0;
    if (grade === 'A') {
        points = 4;
    }
    else if (grade === 'B') {
        points = 3;
    }
    return points;
}
const gpaPoints = grades.map(convertGrade);
//3: Reduce
const pointTotal = gpaPoints.reduce((function (total, item){
    return total + item;
}));
const gpa = pointTotal / gpaPoints.length
