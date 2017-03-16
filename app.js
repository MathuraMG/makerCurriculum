function showTeacher() {
  $(".student-container").hide();
  $(".teacher-container").show();
}

function showStudent() {
  $(".student-container").show();
  $(".teacher-container").hide();
}

function showProblem() {
  $(".solution-container").hide();
  $(".problem-container").show();
}

function showSolution() {
  $(".solution-container").show();
  $(".problem-container").hide();
}
