document.addEventListener("DOMContentLoaded", function () {
  // 🌿 Variables
  const startScreen = document.getElementById("start-screen");
  const quizContainer = document.getElementById("quiz-container");
  const resultContainer = document.getElementById("result-container");
  const questionText = document.getElementById("question-text");
  const questionImage = document.getElementById("question-image");
  const choicesContainer = document.getElementById("choices-container");
  const flowerImage = document.getElementById("flower-image");
  const resultText = document.querySelector("#result-container h2");

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
    {
      text: "The fairy plops onto your shelf, kicking her tiny legs. 'If your life had a color palette, what would it be?'",
      image: "images/question4.png",
      choices: ["Soft pastels.", "Deep, rich colors."],
    },
    {
      text: 'She twirls mid-air. "Do you believe in love at first sight?"',
      image: "images/question5.png",
      choices: [
        "I think I just fell for a fairy.",
        "Love? I barely believe in Wi-Fi.",
      ],
    },
    {
      text: 'She plucks a tiny petal and watches it drift down. "How do you handle your emotions?"',
      image: "images/question6.png",
      choices: ["I overanalyze them.", "No thoughts, just vibes."],
    },
    {
      text: 'She stops floating. "Wait. Are you more of a chaotic extrovert or a quiet mystery?"',
      image: "images/question7.png",
      choices: [
        "Main character of my friend group.",
        "People think I'm a spy, I'm just awkward.",
      ],
    },
    {
      text: '"If someone gave you flowers, what would you want them to say?"',
      image: "images/question8.png",
      choices: ["I see you. I appreciate you.", "You’re gorgeous and iconic."],
    },
    {
      text: 'The fairy tilts her head. "Okay but real talk… what’s your biggest ick?"',
      image: "images/question9.png",
      choices: ["People who take forever to text back.", "Fake deep people."],
    },
    {
      text: 'The fairy’s wings shimmer. "I think I know now… It’s time for my final transformation!"',
      image: "images/question10.png",
      choices: ["Ooo, suspense!", "I swear, if you turn into a cactus…"],
    },
  ];

  // 🌷 List of possible flower results
  const flowerResults = [
    { name: "Buttercup", image: "images/buttercup.png" },
    { name: "Gerbera Daisy", image: "images/gerbera_daisy.png" },
    { name: "White Rose", image: "images/white_rose.png" },
    { name: "Red Rose", image: "images/red_rose.png" },
    { name: "Tulip", image: "images/tulip.png" },
    { name: "Delphinium", image: "images/delphinium.png" },
    { name: "Hydrangea", image: "images/hydrangea.png" },
    { name: "Sunflower", image: "images/sunflower.png" },
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

  // 🌺 Show Result (Fairy transforms into a flower!)
  function showResult() {
    quizContainer.style.display = "none";
    resultContainer.style.display = "flex";

    const chosenFlower =
      flowerResults[Math.floor(Math.random() * flowerResults.length)];
    resultText.innerHTML = `The fairy transformed into a ${chosenFlower.name}!`;
    flowerImage.src = chosenFlower.image;
  }
});
