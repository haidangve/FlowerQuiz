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
  let flowerScores = {};

  // 🌷 List of Possible Flowers
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

  // 🌸 Initialize Flower Scores
  flowerResults.forEach((flower) => {
    flowerScores[flower.name] = 0;
  });

  // 🌸 Storyline-Based Quiz Questions (Each answer assigns points to a flower)
  const questions = [
    {
      text: "You just moved into a new home. Things are messy, boxes everywhere. Suddenly you see a floating bouquet appears outside your window. What do you do?",
      image: "images/question1.png",
      choices: [
        { text: "Squint suspiciously and check it out.", flower: "White Rose" },
        {
          text: "Grab the bouquet like it’s your destiny.",
          flower: "Buttercup",
        },
        { text: "Leave it alone. Seems suspicious.", flower: "Delphinium" },
        { text: "Carefully inspect it before deciding.", flower: "Hydrangea" },
      ],
    },
    {
      text: 'BOOM! The bouquet turns into a tiny flower fairy. You both seems surprised, as she said "Only selected beautiful mortals can see me!". How do you respond?',
      image: "images/question2.png",
      choices: [
        { text: '"So I unlocked a secret fairy realm?"', flower: "Red Rose" },
        {
          text: '"Who’s been sending magical flowers to my window?"',
          flower: "Tulip",
        },
        {
          text: '"Beauty is subjective, but I’ll take it!"',
          flower: "Sunflower",
        },
        {
          text: '"I think beauty is more than just looks."',
          flower: "Gerbera Daisy",
        },
      ],
    },
    {
      text: 'The fairy floats around inspecting you. "Im manifested when someone needs their true flower. But you have to help me figure your own flowers out!" What kind of energy do you think you give off?',
      image: "images/question3.png",
      choices: [
        {
          text: "Golden retriever energy—warm and chaotic.",
          flower: "Sunflower",
        },
        { text: "Mysterious main character energy.", flower: "Delphinium" },
        {
          text: "Lowkey, moody, tired but unpredictable.",
          flower: "Hydrangea",
        },
        { text: "Bright and vibrant, full of life!", flower: "Gerbera Daisy" },
      ],
    },
    {
      text: 'The fairy kicks her tiny legs. "If your life had a color palette, what would it be?"',
      image: "images/question4.png",
      choices: [
        { text: "Soft pastels—dreamy and nostalgic.", flower: "Tulip" },
        {
          text: "Deep, rich colors — dramatic and intense.",
          flower: "Red Rose",
        },
        { text: "Bright and playful, full of life.", flower: "Gerbera Daisy" },
        {
          text: "Black, white, grey,... I don't like colors.",
          flower: "White Rose",
        },
      ],
    },
    {
      text: 'She twirls mid-air. "Do you believe in love at first sight?"',
      image: "images/question5.png",
      choices: [
        { text: "I think I just fell for a fairy.", flower: "Buttercup" },
        { text: "Love? I barely believe in Wi-Fi.", flower: "White Rose" },
        {
          text: "Not at first sight, but maybe over time, slowburn typa.",
          flower: "Hydrangea",
        },
        { text: "Love is a choice you make every day.", flower: "Delphinium" },
      ],
    },
    {
      text: 'She watches a petal drift down. "Hmmmmm... How do you handle your emotions?"',
      image: "images/question6.png",
      choices: [
        {
          text: "I overanalyze them and let them haunt me.",
          flower: "White Rose",
        },
        {
          text: "I just vibe. No thoughts, just floating.",
          flower: "Buttercup",
        },
        {
          text: "I turn them into something creative.",
          flower: "Gerbera Daisy",
        },
        {
          text: "I keep them to myself, but they run deep.",
          flower: "Red Rose",
        },
      ],
    },
    {
      text: 'She stops floating. "Wait. Are you more of a chaotic extrovert or a quiet mystery?"',
      image: "images/question7.png",
      choices: [
        { text: "Main character of my friend group.", flower: "Sunflower" },
        {
          text: "People think I’m a spy, I’m just awkward.",
          flower: "Delphinium",
        },
        { text: "Depends on who I’m with. I'm flexible.", flower: "Hydrangea" },
        {
          text: "The life of the party, the class clown, every time.",
          flower: "Tulip",
        },
      ],
    },
    {
      text: '"If someone gave you flowers, what would you want them to say?"',
      image: "images/question8.png",
      choices: [
        {
          text: "I see you. I appreciate you. You deserve this.",
          flower: "White Rose",
        },
        {
          text: "You’re gorgeous, iconic, the best and the world is lucky to have you!!",
          flower: "Red Rose",
        },
        { text: "This reminds me of you.", flower: "Sunflower" },
        {
          text: "I don't give flowers but maybe I'll make an exception this time.",
          flower: "Hydrangea",
        },
      ],
    },
    {
      text: 'The fairy tilts her head. "Okay one more question… what’s your biggest ick?"',
      image: "images/question9.png",
      choices: [
        { text: "People who take forever to text back.", flower: "Tulip" },
        { text: "Fake deep people. Just get therapy.", flower: "Delphinium" },
        {
          text: "People who only talk about themselves.",
          flower: "Gerbera Daisy",
        },
        {
          text: "Flaky people who cancel plans last minute.",
          flower: "Buttercup",
        },
      ],
    },
    {
      text: 'The fairy’s wings shimmer. "I think I know now… It’s time for my final transformation!"',
      image: "images/question10.png",
      choices: [
        { text: "Ooo, suspense!", flower: "Buttercup" },
        { text: "I swear, if you turn into a cactus…", flower: "Hydrangea" },
        {
          text: "*Standing ovation* I’m ready for this.",
          flower: "Sunflower",
        },
        {
          text: "I feel like this is leading to something big.",
          flower: "Red Rose",
        },
      ],
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
    questionText.textContent = questions[questionIndex].text;
    questionImage.src = questions[questionIndex].image;
    choicesContainer.innerHTML = "";

    questions[questionIndex].choices.forEach((choice) => {
      let btn = document.createElement("button");
      btn.textContent = choice.text;
      btn.onclick = () => {
        flowerScores[choice.flower]++;
        questionIndex++;
        questionIndex < questions.length ? displayQuestion() : displayResult();
      };
      choicesContainer.appendChild(btn);
    });
  }

  // 🌺 Display Result
  function displayResult() {
    let bestFlower = Object.keys(flowerScores).reduce((a, b) =>
      flowerScores[a] > flowerScores[b] ? a : b
    );
    let chosenFlower = flowerResults.find(
      (flower) => flower.name === bestFlower
    );
    resultText.textContent = `The fairy transformed into a ${chosenFlower.name}!`;
    flowerImage.src = chosenFlower.image;
  }
});
