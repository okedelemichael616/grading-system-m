let studentName = document.getElementById("studentName");

let scoreInput = document.getElementById("score");

let level = document.getElementById("level");

let result = document.getElementById("result");


function checkGrade() {

    let name = studentName.value;

    let score = Number(scoreInput.value);

    let school = level.innerText;


    if (name == "" || school == "" || scoreInput.value == "") {

        result.innerHTML = "Kindly fill in all fields.";

    }

    else if (score < 0 || score > 100) {

        result.innerHTML = "INVALID SCORE";

    }

    else if (score >= 75 && score <= 100) {

        result.innerHTML = "Student: " + name +
            "<br>Level: " + school +
            "<br>Grade: A1";

    }

    else if (score >= 70 && score <= 74) {
        result.innerHTML = "Student: " + name +
            "<br>Level: " + school +
            "<br>Grade: B2";
    }

    else if (score >= 65 && score <= 69) {
        result.innerHTML = "Student: " + name +
            "<br>Level: " + school +
            "<br>Grade: B3";
    }

    else if (score >= 60 && score <= 64) {
        result.innerHTML = "Student: " + name +
            "<br>Level: " + school +
            "<br>Grade: C4";
    }

    else if (score >= 55 && score <= 59) {
        result.innerHTML = "Student: " + name +
            "<br>Level: " + school +
            "<br>Grade: C5";
    }

    else if (score >= 50 && score <= 54) {
        result.innerHTML = "Student: " + name +
            "<br>Level: " + school +
            "<br>Grade: c6";
    }

    else if (score >= 45 && score <= 49) {
        result.innerHTML = "Student: " + name +
            "<br>Level: " + school +
            "<br>Grade: D7";
    }

    else if (score >= 40 && score <= 44) {
        result.innerHTML = "Student: " + name +
            "<br>Level: " + school +
            "<br>Grade: E8";
    }

    else if (score >= 0 && score <= 39) {
        result.innerHTML = "Student: " + name +
            "<br>Level: " + school +
            "<br>Grade: c4";
    }
}


let uniStudentName = document.getElementById("uniStudentName");

let uniScore = document.getElementById("uniScore");

let uniLevel = document.getElementById("uniLevel");

let uniResult = document.getElementById("uniResult");



function checkUniversityGrade() {

    let name = uniStudentName.value;
    let score = Number(uniScore.value);
    let school = uniLevel.innerText;

    if (name == "" || uniScore.value == "") {
        uniResult.innerHTML = "Kindly fill in all fields.";
    }

    else if (score < 0 || score > 5.0) {
        uniResult.innerHTML = "INVALID SCORE";
    }

    else if (score >= 4.5 && score <= 5.0) {
        uniResult.innerHTML = "Student: " + name +
            "<br>Level: " + school +
            "<br>Grade: First-class";
    }

    else if (score >= 3.5 && score <= 4.49) {
        uniResult.innerHTML = "Student: " + name +
            "<br>Level: " + school +
            "<br>Grade: Second-class upper";
    }

    else if (score >= 2.5 && score <= 3.49) {
        uniResult.innerHTML = "Student: " + name +
            "<br>Level: " + school +
            "<br>Grade: Second-class lower"
    }

    else if (score >= 1.5 && score <= 2.49) {
        uniResult.innerHTML = "Student: " + name +
            "<br>Level: " + school +
            "<br>Grade: Third-class"
    }

    else if (score >= 0 && score <= 1.49) {
        uniResult.innerHTML = "Student: " + name +
            "<br>Level: " + school +
            "<br>Grade: Fail"
    }

    else {
        uniResult.innerHTML = "Student: " + name +
            "<br>Level: " + school +
            "<br>Grade: F" +
            "<br>Grade Point: 0";
    }
}


let polyStudentName = document.getElementById("polyStudentName");

let polyScore = document.getElementById("polyScore");

let polyLevel = document.getElementById("polyLevel");

let polyResult = document.getElementById("polyResult");

function calculatePolytechnic() {

    let name = polyStudentName.value;
    let score = Number(polyScore.value);
    let school = polyLevel.innerText;

    if (name == "" || polyScore.value == "") {
        polyResult.innerHTML = "Kindly fill in all fields.";
    }

    else if (score < 0 || score > 4.0) {
        polyResult.innerHTML = "INVALID SCORE";
    }

    else if (score >= 3.5 && score <= 4.0) {
        polyResult.innerHTML = "Student: " + name +
            "<br>Level: " + school +
            "<br>Grade: Distinction";
    }


    else if (score >= 3.0 && score <= 3.49) {
        polyResult.innerHTML = "Student: " + name +
            "<br>Level: " + school +
            "<br>Grade: Upper-credit";
    }


    else if (score >= 2.5 && score <= 2.9) {
        polyResult.innerHTML = "Student: " + name +
            "<br>Level: " + school +
            "<br>Grade: Lower-credit";
    }


    else if (score >= 2.0 && score <= 2.49) {
        polyResult.innerHTML = "Student: " + name +
            "<br>Level: " + school +
            "<br>Grade: Pass";
    }

    else if (score >= 0.00 && score <= 1.99) {
        polyResult.innerHTML = "Student: " + name +
            "<br>Level: " + school +
            "<br>Grade: Pass";
    }
}
