let option1 = document.getElementById("option-1")
let option2 = document.getElementById("option-2")
let option3 = document.getElementById("option-3")
let option4 = document.getElementById("option-4")
let question = document.getElementById("question");
let questionNo = document.getElementById("questionNo");
let button = document.getElementById("btn");
let finishBtn = document.getElementById("button");
finishBtn.style.display = "none" ;

const questions = [
  // PHYSICS
  {
    id: 1,
    question: "Which instrument is used to measure temperature?",
    options: ["Barometer", "Thermometer", "Hygrometer", "Ammeter"],
    correctAnswer: "Thermometer"
  },

  // CHEMISTRY
  {
    id: 2,
    question: "What is the chemical symbol of water?",
    options: ["O2", "CO2", "H2O", "HO"],
    correctAnswer: "H2O"
  },

  // MATHS
  {
    id: 3,
    question: "What is the square of 5?",
    options: ["10", "20", "25", "30"],
    correctAnswer: "25"
  },

  // ISLAMIAT
  {
    id: 4,
    question: "How many daily prayers (Farz) are there in Islam?",
    options: ["3", "4", "5", "6"],
    correctAnswer: "5"
  },

  // COMPUTER
  {
    id: 5,
    question: "Which button is used to turn ON a computer?",
    options: ["Reset", "Power", "Shift", "Enter"],
    correctAnswer: "Power"
  },

  // PHYSICS
  {
    id: 6,
    question: "Which unit is used to measure force?",
    options: ["Joule", "Newton", "Watt", "Pascal"],
    correctAnswer: "Newton"
  },

  // CHEMISTRY
  {
    id: 7,
    question: "Which gas is essential for breathing?",
    options: ["Nitrogen", "Hydrogen", "Oxygen", "Carbon dioxide"],
    correctAnswer: "Oxygen"
  },

  // MATHS
  {
    id: 8,
    question: "What is the value of 7 × 6?",
    options: ["36", "40", "42", "48"],
    correctAnswer: "42"
  },

  // ISLAMIAT
  {
    id: 9,
    question: "Which month do Muslims fast in?",
    options: ["Shaban", "Ramadan", "Muharram", "Safar"],
    correctAnswer: "Ramadan"
  },

  // URDU
  {
    id: 10,
    question: "Who is known as the national poet of Pakistan?",
    options: ["Mirza Ghalib", "Allama Iqbal", "Faiz Ahmed Faiz", "Josh Malihabadi"],
    correctAnswer: "Allama Iqbal"
  }
];

button.innerHTML = "Next" ;
let userAnswer;


questionNo.innerHTML = "Question No 1" ;
question.innerHTML = questions[0].question;
option1.textContent = questions[0].options[0];
option2.textContent = questions[0].options[1];
option3.textContent = questions[0].options[2];
option4.textContent = questions[0].options[3];


let questionIndex = 2;
let questionName = 1 ;
let questionOption = 0 ;
let correctAnswers = 0 ;

finishBtn.addEventListener("click" , () => {
  let correct = questions[9].correctAnswer ;
    if(correct === userAnswer) {
    correctAnswers++ ;
  }
  localStorage.setItem("correctAnswers" , correctAnswers);
  if(localStorage.getItem("correctAnswers") >= 5) {
    window.location.href = "./winner.html" ;
  } else {
    window.location.href = "./fail.html" ;
  }
    button.style.display = "none" ;
    finishBtn.style.display = "block" ;



})

function indexPlus () {
  addAllEventListeners();
  if(option1.style.backgroundColor === "black" || option2.style.backgroundColor === "black" ||
    option3.style.backgroundColor === "black" || option4.style.backgroundColor === "black") {
      option1.style.backgroundColor = "#374151" ;
      option2.style.backgroundColor = "#374151" ;
      option3.style.backgroundColor = "#374151" ;
      option4.style.backgroundColor = "#374151" ;


  questionNo.innerHTML = "Question No " + questionIndex++ ;

//question wala error 
  question.innerHTML = questions[questionName].question;

  let correct = questions[questionOption].correctAnswer;
  if(correct == userAnswer) {
    correctAnswers++ ;
  }


  console.log(correctAnswers);
  questionName++ ;


  questionOption++;
  if (questionOption >= questions.length) {
    questionOption = 0;
  }

  option1.textContent = questions[questionOption].options[0];
  option2.textContent = questions[questionOption].options[1];
  option3.textContent = questions[questionOption].options[2];
  option4.textContent = questions[questionOption].options[3];



  if(question[questionName] === 10) {
    questionName = -1;
  }
  if(questionIndex === 11) {
    button.style.display = "none" ;
    finishBtn.style.display = "block" ;
  }

}
}


function addAllEventListeners() {
    option1.addEventListener("click", firstFunction);
    option2.addEventListener("click", secondFunction);
    option3.addEventListener("click", thirdFunction);
    option4.addEventListener("click", fourthFunction);
}

function removeAllEventListeners() {
    option1.removeEventListener("click", firstFunction);
    option2.removeEventListener("click", secondFunction);
    option3.removeEventListener("click", thirdFunction);
    option4.removeEventListener("click", fourthFunction);
}

function firstFunction () {
  option1.style.backgroundColor = "black" ;
  removeAllEventListeners();
    userAnswer = option1.textContent ;
};

function secondFunction () {
  option2.style.backgroundColor = "black" ;
  removeAllEventListeners();
    userAnswer = option2.textContent ;
};
function thirdFunction () {
  option3.style.backgroundColor = "black" ;
  removeAllEventListeners();
    userAnswer = option3.textContent ;
};
function fourthFunction () {
  option4.style.backgroundColor = "black" ;
    removeAllEventListeners();
    userAnswer = option4.textContent ;
};
addAllEventListeners();


function old () {
      // Remove old event listeners (safety)
    option1.replaceWith(option1.cloneNode(true));
    option2.replaceWith(option2.cloneNode(true));
    option3.replaceWith(option3.cloneNode(true));
    option4.replaceWith(option4.cloneNode(true));

    // Re-select the new elements after cloning
    option1 = document.getElementById("option1");
    option2 = document.getElementById("option2");
    option3 = document.getElementById("option3");
    option4 = document.getElementById("option4");

    // Re-attach event listeners
    option1.addEventListener("click", firstFunction);
    option2.addEventListener("click", secondFunction);
    option3.addEventListener("click", thirdFunction);
    option4.addEventListener("click", fourthFunction);
}

let timer = document.getElementById("timer");
let userName = document.getElementById("userName");

userName.innerHTML = "User Name : " + localStorage.getItem("userName");

let minute = 1;
let second = 60 ;

let myInterval = setInterval(() => {
  if(second === 0 && minute === 0) {
    clearInterval(myInterval);
    window.location.href = "./timeup.html" ;
    return;
  }
  if (second === 0) {
    minute--;
    second = 59;
  } else {
    second--;
  } 
   if(second > 9) {
    timer.innerHTML = "0" + minute + " : " + second ;
  } else {
    timer.innerHTML = "0" + minute + " : 0" + second ;
  }

}, 1000);