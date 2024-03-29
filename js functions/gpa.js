function getGrades(inputSelector) {

    const grades = document.querySelector("#grades").value;

    const gradesArray = grades.split(",");

    const cleanGrades = gradesArray.map((grades) => grades.trim.toUpperCase());

    console.log(cleanGrades);

    return cleanGrades;
}

function lookUpGrade(grade) {
 
    let points = 0;
    if (grade === "A") {
        points = 4;
    } else if (grades === "B") {
        points = 3;
    } else if (grades === " C") {
        points = 2;
    } else if (grade === "D") {
        points = 1;
    }
    return points;
}

function calculateGpa(grades) {
    
    const gradePaoints = grades.map((grade) => lookUpGpa(grade));

    const gpa = gradesPoint.reduce((total, num) => total + num) / gradePaoints.length;

    return gpa.toFixed(2)
}

function outPutGpa() {

    const outPutElement = document.querySelector(selector);

    outPutElement.innerText = gpa;

}

function clickHandler() {

    const grades = getGrades();

    const gpa = calculateGpa(grades);

    outPutGpa(gpa, "#output");
}

document.querySelector("#submitButton").addEventListener("click", clickHandler);
