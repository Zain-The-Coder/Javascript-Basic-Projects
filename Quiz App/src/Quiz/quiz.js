let option1 = document.getElementById("option-1")
let option2 = document.getElementById("option-2")
let option3 = document.getElementById("option-3")
let option4 = document.getElementById("option-4")
let question = document.getElementById("question");
let questionNo = document.getElementById("questionNo");
let button = document.getElementById("btn");

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


questionNo.innerHTML = "Question No 1" ;
question.innerHTML = questions[0].question;
option1.textContent = questions[0].options[0];
option2.textContent = questions[0].options[1];
option3.textContent = questions[0].options[2];
option4.textContent = questions[0].options[3];


let questionIndex = 2;
let questionName = 1 ;
let questionOption = 0 ;

function indexPlus () {
  if(option1.style.backgroundColor === "black" || option2.style.backgroundColor === "black" ||
    option3.style.backgroundColor === "black" || option4.style.backgroundColor === "black") {
      option1.style.backgroundColor = "#374151" ;
      option2.style.backgroundColor = "#374151" ;
      option3.style.backgroundColor = "#374151" ;
      option4.style.backgroundColor = "#374151" ;

  questionNo.innerHTML = "Question No " + questionIndex++ ;

  question.innerHTML = questions[questionName].question;
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
    questionName = 0;
  }
  if(questionName === 10) {
    button.innerHTML = "End Quiz" ;
  }
}
}

function firstFunction () {
  option1.style.backgroundColor = "black" ;
    option2.removeEventListener("click" , secondFunction);
    option3.removeEventListener("click" , thirdFunction);
    option4.removeEventListener("click" , fourthFunction);
};

function secondFunction () {
  option2.style.backgroundColor = "black" ;
    option1.removeEventListener("click" , firstFunction);
    option3.removeEventListener("click" , thirdFunction);
    option4.removeEventListener("click" , fourthFunction);
};
function thirdFunction () {
  option3.style.backgroundColor = "black" ;
    option2.removeEventListener("click" , secondFunction);
    option1.removeEventListener("click" , firstFunction);
    option4.removeEventListener("click" , fourthFunction);
};
function fourthFunction () {
  option4.style.backgroundColor = "black" ;
    option2.removeEventListener("click" , secondFunction);
    option3.removeEventListener("click" , thirdFunction);
    option1.removeEventListener("click" , firstFunction);
};

option1.addEventListener("click" , firstFunction);
option2.addEventListener("click" , secondFunction);
option3.addEventListener("click" , thirdFunction);
option4.addEventListener("click" , fourthFunction);


let timer = document.getElementById("timer");
let userName = document.getElementById("userName");

userName.innerHTML = "User Name : " + localStorage.getItem("userName");

let minute = 1;
let second = 60 ;

let myInterval = setInterval(() => {
  if(second === 0 && minute === 0) {
    clearInterval(myInterval)
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