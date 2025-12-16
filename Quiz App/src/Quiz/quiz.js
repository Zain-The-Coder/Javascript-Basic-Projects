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

let minute = 59;
let second;;

function decrement () {
    for(let i = second ; i <= 0 ; i--) {
        console.log(i);
    }
}