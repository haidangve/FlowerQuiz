document.addEventListener("DOMContentLoaded", function () {
  // 🌿 Variables
  const startScreen = document.getElementById("start-screen");
  const quizContainer = document.getElementById("quiz-container");
  const resultContainer = document.getElementById("result-container");
  const questionText = document.getElementById("question-text");
  const questionImage = document.getElementById("question-image");
  const choicesContainer = document.getElementById("choices-container");
  const flowerImage = document.getElementById("flower-image");

  let questionIndex = 0;

  // 🌸 Storyline-Based Quiz Questions
  const questions = [
    {
      text: "You just moved into a new home. Boxes everywhere. You stretch, yawn—when suddenly, a floating bouquet appears outside your window. What do you do?",
      image: "images/question1.png",
      choices: ["Check it out.", "Grab the bouquet."],
    },
    {
      text: 'The moment you touch the petals—FLASH! A tiny flower fairy appears. "Only the beautiful ones deserve flowers." How do you respond?',
      image: "images/question2.png",
      choices: ["I must be magical.", "Who’s been sending these?"],
    },
    {
      text: "The fairy hovers. 'I don’t know what flower you are yet! Help me figure it out!' What kind of energy do you have?",
      image: "images/question3.png",
      choices: ["Chaotic and warm.", "Mysterious and unreadable."],
    },
  ];

  // 🌷 Start Quiz
  document.getElementById("start-btn").addEventListener("click", function () {
    startScreen.style.display = "none";
    quizContainer.style.display = "flex";
    displayQuestion();
  });

  // 🌸 Display Quiz Question
  function displayQuestion() {
    if (questionIndex >= questions.length) {
      showResult();
      return;
    }

    const currentQuestion = questions[questionIndex];
    questionText.textContent = currentQuestion.text;
    questionImage.src = currentQuestion.image;
    choicesContainer.innerHTML = "";

    currentQuestion.choices.forEach((choice) => {
      let btn = document.createElement("button");
      btn.textContent = choice;
      btn.classList.add("choice-btn");

      btn.onclick = () => {
        questionIndex++;
        displayQuestion();
      };

      choicesContainer.appendChild(btn);
    });
  }

  // 🌺 Show Result
  function showResult() {
    quizContainer.style.display = "none";
    resultContainer.style.display = "flex";
    flowerImage.src = "images/result_flower.png";
  }
});
