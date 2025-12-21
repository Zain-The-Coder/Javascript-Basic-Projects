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
{
  id: 1,
  question: "Which part of the human brain is primarily responsible for balance and coordination?",
  options: ["Cerebrum", "Medulla", "Cerebellum", "Hypothalamus"],
  correctAnswer: "Cerebellum"
},

// CHEMISTRY
{
  id: 2,
  question: "Which acid is naturally present in citrus fruits and is responsible for their sour taste?",
  options: ["Acetic acid", "Citric acid", "Lactic acid", "Sulfuric acid"],
  correctAnswer: "Citric acid"
},

// MATHS
{
  id: 3,
  question: "Which of the following numbers is a prime number?",
  options: ["21", "27", "29", "33"],
  correctAnswer: "29"
},

// ISLAMIAT
{
  id: 4,
  question: "Which Surah of the Quran was revealed completely in Madinah?",
  options: ["Surah Al-Fatiha", "Surah Al-Ikhlas", "Surah Al-Baqarah", "Surah Al-Alaq"],
  correctAnswer: "Surah Al-Baqarah"
},

// COMPUTER
{
  id: 5,
  question: "Which type of memory is volatile and loses data when the computer is turned off?",
  options: ["ROM", "Hard Disk", "RAM", "SSD"],
  correctAnswer: "RAM"
},

// PHYSICS
{
  id: 6,
  question: "Which physical quantity is measured in Hertz (Hz)?",
  options: ["Force", "Energy", "Frequency", "Pressure"],
  correctAnswer: "Frequency"
},

// CHEMISTRY
{
  id: 7,
  question: "Which gas is released during the process of photosynthesis?",
  options: ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
  correctAnswer: "Oxygen"
},

// MATHS
{
  id: 8,
  question: "What is the value of π (pi) correct to two decimal places?",
  options: ["3.12", "3.14", "3.16", "3.18"],
  correctAnswer: "3.14"
},

// ISLAMIAT
{
  id: 9,
  question: "Which Islamic law deals with inheritance distribution?",
  options: ["Fiqh", "Tafsir", "Ilm-ul-Faraiz", "Hadith"],
  correctAnswer: "Ilm-ul-Faraiz"
},

// URDU
{
  id: 10,
  question: "Which literary term is used for a long narrative poem describing heroic deeds?",
  options: ["Ghazal", "Marsiya", "Qasida", "Masnavi"],
  correctAnswer: "Masnavi"
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
let second = 30 ;

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
    timer.innerHTML ="Timer : " + "0" + minute + " : " + second ;
  } else {
    timer.innerHTML ="Timer : " + "0" + minute + " : 0" + second ;
  }

}, 1000);