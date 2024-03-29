// Declare an array with values
const steps = ["one, two, three"];
// convert array of string into an array of Html
const stepHtml = steps.map(function(step) {
    return '<li>${step}</li>';
});
// settting up a list Html string 
document.getElementById("myList").innerHTML = stepHtml.join();


// Activity 2 Map
// Declare an array with letters
const grades = ["A", "B", "A"]
// function to take one letter grade return appropriate gpa points of that grade
function convertGradeToPoints(grades) {
    let points = 0;
    if (grade === "A") {
        points = 4;
    } else if (grade === "B") {
        points = 3;
    }
    return points;
}
// use map and the conversion function to convert the array in step 1 to gpa points
const gpaPoints = grades.map(convertGradeToPoints);

// Activity 3- Reduce
// const gpaPoints = grades.map(convertGradeToPoints);
// convert an array of grades into an array of gpapoints
const pointsTotal = gpaPoints.reduce(function (total, item){
    return total + item;
});
const gpa = pointsTotal / gpaPoints.length;

// Activity 4 - Filters
const words = ["watermelon", "peach", "apple", "tomato", "grape"];
// const shortWords = words.filter(function (word) {
//     return word.lenth < 6;
// });
// method 2
const shortWords = words.filter((word) => words.length < 6);

// Activity 5 - indexOf
const myarray = [12, 34, 21, 54];
const luckyNumber = 21;
let luckyIndex = myarray.indexOf(luckyNumber);