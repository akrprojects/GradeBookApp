function getAverage(scores) {
  let sum = 0;

  for (const score of scores) {
    sum += score;
  }

  return sum / scores.length;
}

function getGrade(score) {
  if (score === 100) {
    return "A++";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

function hasPassingGrade(score) {
  return getGrade(score) !== "F";
}

function studentMsg(totalScores, studentScore) {
  let classAverage = getAverage(totalScores);
  let studentGrade = getGrade(studentScore);
  let hasPassed = hasPassingGrade(studentScore);

  let resultStatus;
  if (hasPassed){
    resultStatus = "passed";
  } else {
    resultStatus = "failed";
  }

  return "Class average: " + classAverage + "." + " Your grade: " + studentGrade + "." + " You " + resultStatus + " the course.";
}

//console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 99));

// let num = prompt("Enter the number of students: ");
// num = Number(num);
// let studentScores = [];
// alert("Enter scores of students.");
// for (let i = 1; i <= num; i++){
//     let score = Number(prompt("Student " + i + " score: "));
//     studentScores.push(score);
// }
// let userScore = Number(prompt("Enter your score: "));
// alert("Ready for the result?");
// alert(studentMsg(studentScores, userScore));

function calculateGrades(){
    let numStudents = document.getElementById("numStudents").value;
    let studentScores = document.getElementById("studentScores").value;
    let yourScore = document.getElementById("yourScore").value;

    let studentScoresArray = studentScores.split(",").map(Number);

    let resultMsg = studentMsg(studentScoresArray, yourScore);

    document.getElementById("result").innerText = resultMsg;

}

