// PUBLIC VARIABELS
var loopCounter = 0;
var point = 0;
var isStarted = false;
var correctAnswers = new Array();
const startBtn = document.querySelector(".start-btn");
const startC = document.querySelector(".start-card");
const questionC = document.querySelector(".question-card");
const questionT = document.querySelector(".question-text");
const answerI = document.getElementsByClassName("answer-item");
const finishC = document.querySelector(".finish-card");
const pointT = document.querySelector(".point-text");
const finishB = document.querySelector(".finish-btn");
// PUBLIC VARIABELS

// HIDE START CARD
startBtn.addEventListener("click", hideStart);
function hideStart() {
  startC.classList.add("hide");
  setTimeout(() => {
    startC.classList.add("remove");
    startC.classList.remove("hide");
    questionC.classList.add("show");
    questionC.classList.add("stay");
  }, 2000);
}
// HIDE START CARD

// QUESTIONS
var questions = [
  {
    qText: "کدوم درسته؟",
    a: [
      { text: "صلامح", isCorrect: false },
      { text: "ثلام", isCorrect: false },
      { text: "سلاخ", isCorrect: true },
      { text: "سلام", isCorrect: false },
    ],
  },
  {
    qText: "کدوم درسته؟",
    a: [
      { text: "صامین", isCorrect: true },
      { text: "ثمین", isCorrect: false },
      { text: "ثمینه", isCorrect: false },
      { text: "سامین", isCorrect: false },
    ],
  },
  {
    qText: "کی رعد و برقیه؟",
    a: [
      { text: "رضا", isCorrect: false },
      { text: "آسمون", isCorrect: false },
      { text: "عباس", isCorrect: false },
      { text: "صمین", isCorrect: true },
    ],
  },
  {
    qText: "اگه چشم سیاه نداشتی، .....نداشتی",
    a: [
      { text: "میمون و گاو", isCorrect: false },
      { text: "دیگه کار باهام", isCorrect: false },
      { text: "خط ایرانسل", isCorrect: false },
      { text: "مهره مار", isCorrect: true },
    ],
  },
  {
    qText: "رضا چیه؟",
    a: [
      { text: "گی", isCorrect: false },
      { text: "خیابون", isCorrect: false },
      { text: "گودو", isCorrect: false },
      { text: "گودرتی", isCorrect: true },
    ],
  },
];
// QUESTIONS

function loop(index) {
  questionT.innerHTML = questions[index].qText;
  let tempCorrect = questions[index].a.findIndex( (c) => c.isCorrect == true);
  correctAnswers.push(tempCorrect);

  // CREATE RANDOM NUMBER
  var randoms = new Array();
  for (var a = [0, 1, 2, 3], i = a.length; i--; ) {
    let temp = a.splice(Math.floor(Math.random() * (i + 1)), 1)[0];
    randoms.push(temp);
  }
  // CREATE RANDOM NUMBER

  // INSERT ANSWERS
  for (let i = 0; i < 4; i++) {
    answerI[i].innerHTML = questions[index].a[randoms[i]].text;
  }
  // INSERT ANSWERS
}

// QUESTION COUNTER

// START FROM 0
if (!isStarted) {
  isStarted = true;
  loop(loopCounter);
}
// START FROM 0

// 1 TO LAST
for (let i = 0; i < 4; i++) {
  answerI[i].addEventListener("click", () => {
    // FIND CORRECT ANSWERS
    if (answerI[i].innerHTML == questions[loopCounter].a[correctAnswers[loopCounter]].text) {
        answerI[i].classList.add("correct");
        setTimeout( () => {answerI[i].classList.remove("correct")}, 1000 );
        point++;
    } else {
        answerI[i].classList.add("wrong");
        setTimeout( () => {answerI[i].classList.remove("wrong")}, 1000 );
    }
    // FIND CORRECT ANSWERS
    loopCounter++;
    if (loopCounter < questions.length) {
        questionC.classList.remove("show");
        questionC.classList.add("refresh");
        setTimeout( () => {loop(loopCounter)}, 1000 );
        setTimeout( () => {questionC.classList.remove("refresh")}, 2000 );
    } else {
        questionC.classList.add("hide");
        setTimeout( () => {
            questionC.classList.remove("stay");
            questionC.classList.remove("hide");
            questionC.classList.add("remove");
            // -------
            finishC.classList.add("stay");
            finishC.classList.add("show");
        }, 2000 );
    }
    pointT.innerHTML = point;
  });
}
// 1 TO LAST
// QUESTION COUNTER
finishB.addEventListener("click", () => {
    location.reload();
} );