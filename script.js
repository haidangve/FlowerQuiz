// 🌸 Quiz Questions (10 questions, 4 answers each)
const questions = [
  {
    text: "How do you feel about receiving flowers? 🌸",
    choices: [
      "🎁 LOVE it!",
      "😊 Nice but not necessary!",
      "🤷‍♀️ Not really my thing.",
      "🙃 Depends on the sender!",
    ],
  },
  {
    text: "Which flower color feels most *you*? 🌈",
    choices: ["🔴 Red", "🟡 Yellow", "⚪ White", "💜 Purple"],
  },
  {
    text: "Where would you prefer to receive flowers? 🎀",
    choices: [
      "🏡 Home",
      "🏫 Work/School",
      "☕ A café",
      "📦 A surprise location",
    ],
  },
  {
    text: "Which word best describes your personality? 🌟",
    choices: ["🌞 Cheerful", "🎩 Elegant", "❤️ Romantic", "🌿 Unique"],
  },
  {
    text: "What would make you happiest? ✨",
    choices: [
      "📖 A heartfelt letter",
      "🎵 A meaningful song",
      "🍫 A surprise treat",
      "💐 A flower bouquet",
    ],
  },
  {
    text: "Do you prefer traditional or modern gifts? 🎁",
    choices: [
      "🏛 Traditional",
      "🌆 Modern",
      "📜 A mix of both",
      "🤷‍♀️ I don’t mind!",
    ],
  },
  {
    text: "If someone sent you flowers, how would you feel? 💝",
    choices: ["🥰 Loved", "😳 Shy", "😄 Happy", "🫠 Awkward"],
  },
  {
    text: "Pick a flower season! 🌷",
    choices: ["🌸 Spring", "☀️ Summer", "🍂 Autumn", "❄️ Winter"],
  },
  {
    text: "What would you do with a surprise bouquet? 💐",
    choices: [
      "📸 Take pictures!",
      "🏡 Decorate my room",
      "📝 Write about it",
      "🎁 Give it to someone",
    ],
  },
  {
    text: "What’s your love language? ❤️",
    choices: [
      "💬 Words of affirmation",
      "🎁 Receiving gifts",
      "💖 Physical touch",
      "⏳ Quality time",
    ],
  },
];

// 🌿 Variables
let questionIndex = 0;
let answerSelected = false;

// 🌷 Start Quiz
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("start-btn").addEventListener("click", function () {
    document.getElementById("start-screen").classList.add("hidden");
    document.getElementById("quiz-container").classList.remove("hidden");
    displayQuestion();
  });
});

// 🌸 Display Quiz Question
function displayQuestion() {
  answerSelected = false;
  document.getElementById("next-btn").disabled = true; // Disable Next initially
  document.getElementById("next-btn").classList.add("disabled-btn");

  document.getElementById("question-text").textContent =
    questions[questionIndex].text;
  const choicesContainer = document.getElementById("choices-container");
  choicesContainer.innerHTML = "";

  questions[questionIndex].choices.forEach((choice) => {
    let btn = document.createElement("button");
    btn.textContent = choice;
    btn.classList.add("choice-btn");

    btn.onclick = () => {
      answerSelected = true;
      document
        .querySelectorAll(".choice-btn")
        .forEach((b) => b.classList.remove("selected"));
      btn.classList.add("selected");
      document.getElementById("next-btn").disabled = false;
      document.getElementById("next-btn").classList.remove("disabled-btn");
    };

    choicesContainer.appendChild(btn);
  });
}

// 🌼 Handle Next Button Click
document.getElementById("next-btn").addEventListener("click", function () {
  if (!answerSelected) return;
  questionIndex++;
  if (questionIndex < questions.length) {
    displayQuestion();
  } else {
    displayResult();
  }
});

// 🌺 Display Result
function displayResult() {
  document.getElementById("quiz-container").classList.add("hidden");
  document.getElementById("result-container").classList.remove("hidden");

  document.getElementById("flower-image").src = "images/tulip.png";
  document.getElementById("flower-name").textContent = "Tulips ";
}
