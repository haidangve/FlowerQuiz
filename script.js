document.addEventListener("DOMContentLoaded", function () {
  // 🌿 Variables
  const startScreen = document.getElementById("start-screen");
  const quizContainer = document.getElementById("quiz-container");
  const resultContainer = document.getElementById("result-container");
  const thankYouScreen = document.getElementById("thank-you-screen");

  const questionText = document.getElementById("question-text");
  const questionImage = document.getElementById("question-image");
  const choicesContainer = document.getElementById("choices-container");
  const flowerImage = document.getElementById("flower-image");
  const resultText = document.getElementById("result-text");

  const restartBtn = document.getElementById("restart-btn");

  let questionIndex = 0;

  // 🌸 Storyline-Based Quiz Questions
  const questions = [
    {
      text: "You just moved into a new home. Boxes everywhere. You stretch, yawn—when suddenly, a floating bouquet appears outside your window. What do you do?",
      image: "images/question1.png",
      choices: [
        "Squint suspiciously and check it out.",
        "Grab the bouquet like it’s your destiny.",
      ],
    },
    {
      text: 'The moment your fingers touch the petals—FLASH! A tiny flower fairy appears. "Oh! A mortal can see me? That means you must be beautiful. Only the beautiful ones deserve flowers." How do you respond?',
      image: "images/question2.png",
      choices: [
        '"So I’m *so* fine that I unlocked a secret fairy realm?"',
        '"Who’s been sending magical flowers to my window?"',
      ],
    },
    {
      text: 'She floats around, inspecting you. "I only appear when someone needs their true flower. But even I don’t know what it is yet! You have to help me figure it out!" What kind of energy do you think you give off?',
      image: "images/question3.png",
      choices: [
        "Golden retriever energy—warm, chaotic, probably sending memes at 3 AM.",
        "Mysterious main character energy—people will never know what’s on my mind.",
      ],
    },
    {
      text: 'The fairy plops onto your shelf, kicking her tiny legs. "If your life had a color palette, what would it be?"',
      image: "images/question4.png",
      choices: [
        "Soft pastels—dreamy, delicate, and a little nostalgic.",
        "Deep, rich colors—high contrast, dramatic, impossible to ignore.",
      ],
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
      choices: [
        "I overanalyze them, make a playlist, and let them haunt me at 2 AM.",
        "I just vibe. No thoughts, just floating through life.",
      ],
    },
    {
      text: 'She stops floating. "Wait. Are you more of a chaotic extrovert or a quiet mystery?"',
      image: "images/question7.png",
      choices: [
        "Main character of my friend group.",
        "People think I’m a spy, I’m just awkward.",
      ],
    },
    {
      text: '"If someone gave you flowers, what would you want them to say?"',
      image: "images/question8.png",
      choices: [
        "I see you. I appreciate you. You deserve this.",
        "You’re gorgeous, you’re iconic, and the world is lucky to have you.",
      ],
    },
    {
      text: 'The fairy tilts her head. "Okay but real talk… what’s your biggest ick?"',
      image: "images/question9.png",
      choices: [
        "People who take forever to text back.",
        "Fake deep people. You’re not misunderstood, you just need therapy.",
      ],
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

  // 🌸 Display Quiz Question (Automatically moves to next question)
  function displayQuestion() {
    questionText.textContent = questions[questionIndex].text;
    questionImage.src = questions[questionIndex].image;
    questionImage.style.display = "block";
    choicesContainer.innerHTML = "";

    questions[questionIndex].choices.forEach((choice) => {
      let btn = document.createElement("button");
      btn.textContent = choice;
      btn.classList.add("choice-btn");

      btn.onclick = () => {
        setTimeout(() => {
          questionIndex++;
          if (questionIndex < questions.length) {
            displayQuestion();
          } else {
            displayResult();
          }
        }, 400);
      };

      choicesContainer.appendChild(btn);
    });
  }

  // 🌺 Display Result
  function displayResult() {
    quizContainer.style.display = "none";
    resultContainer.style.display = "flex";

    const chosenFlower =
      flowerResults[Math.floor(Math.random() * flowerResults.length)];
    document.getElementById(
      "result-text"
    ).textContent = `The fairy transformed into a ${chosenFlower.name}!`;
    flowerImage.src = chosenFlower.image;
  }

  // 🌼 Handle Form Submission (Go to Thank You Screen)
  document
    .getElementById("flower-form")
    .addEventListener("submit", function (e) {
      e.preventDefault();
      resultContainer.style.display = "none";
      thankYouScreen.style.display = "flex";
    });

  // 🔄 Restart Quiz
  restartBtn.addEventListener("click", function () {
    thankYouScreen.style.display = "none";
    startScreen.style.display = "flex";
    questionIndex = 0;
  });
});
