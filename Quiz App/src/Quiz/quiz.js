let option1 = document.getElementById("option-1")
let option2 = document.getElementById("option-2")
let option3 = document.getElementById("option-3")
let option4 = document.getElementById("option-4")
let question = document.getElementById("question");
let questionNo = document.getElementById("questionNo");

const questions = [
  {
    id: 1,
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyperlinks and Text Markup Language",
      "Home Tool Markup Language"
    ],
    correctAnswer: "Hyper Text Markup Language"
  },
  {
    id: 2,
    question: "Which tag is used to create a hyperlink in HTML?",
    options: ["<a>", "<link>", "<href>", "<url>"],
    correctAnswer: "<a>"
  },
  {
    id: 3,
    question: "Which CSS property is used to change text color?",
    options: ["color", "background-color", "font-color", "text-style"],
    correctAnswer: "color"
  },
  {
    id: 4,
    question: "Which symbol is used for comments in JavaScript?",
    options: ["//", "<!-- -->", "#", "**"],
    correctAnswer: "//"
  },
  {
    id: 5,
    question: "Which keyword is used to declare a variable in JavaScript?",
    options: ["var", "let", "const", "All of these"],
    correctAnswer: "All of these"
  },
  {
    id: 6,
    question: "Which method is used to print something in the console?",
    options: ["console.log()", "print()", "log.console()", "show()"],
    correctAnswer: "console.log()"
  },
  {
    id: 7,
    question: "Which HTML tag is used to display an image?",
    options: ["<img>", "<image>", "<pic>", "<src>"],
    correctAnswer: "<img>"
  },
  {
    id: 8,
    question: "Which CSS unit is relative to the screen size?",
    options: ["px", "em", "vh", "cm"],
    correctAnswer: "vh"
  },
  {
    id: 9,
    question: "Which JavaScript framework is developed by Facebook?",
    options: ["Angular", "Vue", "React", "Svelte"],
    correctAnswer: "React"
  },
  {
    id: 10,
    question: "Which hook is used to manage state in React?",
    options: ["useEffect", "useState", "useRef", "useContext"],
    correctAnswer: "useState"
  }
];

let index = 0 ;

function indexPlus () {
  index++ ;
  if(index === 10) {
    index = 0 ;
  }
  console.log(index);
}

questions.forEach((i , v) => {
  console.log(i , v);
  
});







// function questionsSelector () {

// }

// function optionsSelector () {
// }


// questions.forEach((value) => {
//   let firstOption = value.options[0];
//   let secondOption = value.options[1];
//   let thirdOption = value.options[2];
//   let fourthOption = value.options[3];
// })





// let x = document.getElementById("list-item");
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

}, 100);