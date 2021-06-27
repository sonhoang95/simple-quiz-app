const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");
const scoreOutput = result.querySelector("span");
const userAnswers = Array.from(document.querySelectorAll(".answer"));

form.addEventListener("submit", e => {
  e.preventDefault();

  let score = 0;

  //Check answers
  const checkedAnswers = userAnswers.filter(answer => answer.checked);
  checkedAnswers.forEach(answer => {
    const isCorrect = answer.value === "true";
    const questionContainer = answer.closest("div");
    if (isCorrect) {
      questionContainer.classList.add("bg-success");
      questionContainer.classList.remove("bg-danger");
      score += 25;
    } else {
      questionContainer.classList.add("bg-danger");
      questionContainer.classList.remove("bg-success");
    }
  });

  //Show result page and scroll to the top of the page
  scrollTo(0, 0);
  result.classList.remove("d-none");

  //Score animation
  let output = 0;
  const timer = setInterval(() => {
    scoreOutput.textContent = `${output}%`;
    if (output === score) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 10);
});
