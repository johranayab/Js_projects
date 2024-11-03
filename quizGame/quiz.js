const quizData = [
  {
    question: " 1 What does HTML stand for?",
    options: [
      "Hypertext Markup Language",
      "Hyper Transfer Markup Language",
      "Hypertext Machine Language",
      "Hyperlink and Text Markup Language",
    ],
    correct: 0,
  },
  {
    question:
      " 2 Which CSS property is used to control the spacing between elements?",
    options: ["Margin", "Padding", "Spacing", "Border-spacing"],
    correct: 1,
  },
  {
    question: " 3 Which HTML tag is used to create a line break?",
    options: ["<break>", "<lb>", "<br>", "<line>"],
    correct: 2,
  },
  {
    question: " 4 Which JavaScript method is used to select an element by its ID?",
    options: [
      "getElementByClass()",
      "getElementById()",
      "getElement()",
      "selectById()",
    ],
    correct: 1,
  },
//   {
//     question: " 5 What CSS property is used to change text color?",
//     options: ["font-color", "text-color", "color", "text-style"],
//     correct: 2,
//   },
//   {
//     question: " 6 Which HTML element is used for the largest heading?",
//     options: ["<heading>", "<h1>", "<h6>", "<h0>"],
//     correct: 1,
//   },
//   {
//     question: " 7 What does CSS stand for?",
//     options: [
//       "Computer Style Sheets",
//       "Cascading Style Sheets",
//       "Creative Style Sheets",
//       "Colorful Style Sheets",
//     ],
//     correct: 1,
//   },
//   {
//     question:
//       " 8 Which attribute is used to specify a link’s destination in HTML?",
//     options: ["src", "link", "href", "url"],
//     correct: 2,
//   },
//   {
//     question: " 9 How do you add a comment in CSS?",
//     options: [
//       "// this is a comment",
//       "# this is a comment",
//       "/* this is a comment */",
//       "<!-- this is a comment -->",
//     ],
//     correct: 2,
//   },
//   {
//     question: " 10 Which JavaScript keyword is used to define a variable?",
//     options: ["var", "variable", "v", "const"],
//     correct: 0,
//   },
//   {
//     question: " 11 What is the default display value for a <div> element in CSS?",
//     options: ["inline", "block", "inline-block", "flex"],
//     correct: 1,
//   },
//   {
//     question:
//       " 12 Which HTML attribute is used to provide alternate text for an image?",
//     options: ["title", "src", "alt", "text"],
//     correct: 2,
//   },
//   {
//     question: " 13 What does DOM stand for in JavaScript?",
//     options: [
//       "Document Object Model",
//       "Data Object Model",
//       "Document Oriented Module",
//       "Data Oriented Module",
//     ],
//     correct: 0,
//   },
//   {
//     question:
//       " 14 Which CSS property is used to change the background color of an element?",
//     options: ["background-color", "bg-color", "color", "background"],
//     correct: 0,
//   },
//   {
//     question: " 15 Which HTML tag is used to create an ordered list?",
//     options: ["<ul>", "<ol>", "<li>", "<order>"],
//     correct: 1,
//   },
//   {
//     question:
//       " 16 Which JavaScript method is used to remove the last item of an array?",
//     options: ["removeLast()", "pop()", "delete()", "shift()"],
//     correct: 1,
//   },
//   {
//     question: " 17 Which HTML attribute is used to open a link in a new tab?",
//     options: [
//       "target='_new'",
//       "target='_blank'",
//       "window='_new'",
//       "open='_new'",
//     ],
//     correct: 1,
//   },
//   {
//     question: " 18 Which CSS property controls the text size?",
//     options: ["text-size", "font-style", "font-size", "size"],
//     correct: 2,
//   },
//   {
//     question: " 19 What symbol is used for IDs in CSS?",
//     options: ["#", ".", "*", "&"],
//     correct: 0,
//   },
//   {
//     question:
//       " 20 In JavaScript, which function is used to print something to the console?",
//     options: ["print()", "echo()", "log()", "console.log()"],
//     correct: 3,
//   },
];
quiz=document.querySelector("#quiz")
const answerElms = document.querySelectorAll(".answer");
const questionElm = document.querySelector(".question"); // Select question element
const option_1 = document.querySelector("#option-1"); // Select each option label individually
const option_2 = document.querySelector("#option-2");
const option_3 = document.querySelector("#option-3");
const option_4 = document.querySelector("#option-4");

const submitBtn = document.querySelector("#submit");
let currentQuiz = 0;


//3rd step

const loadQuiz = () => {
  let { question, options } = quizData[currentQuiz];
  console.log(question);

  questionElm.innerText = question;
  option_1.innerText = options[0];
  option_2.innerText = options[1];
  option_3.innerText = options[2];
  option_4.innerText = options[3];
};

loadQuiz();
//4
const getSelectedOption = () => {
  let ans_index;
  answerElms.forEach((curOption, index) => {
    if (curOption.checked) {
      ans_index = index;
    }
  });
  return ans_index;
};

const deselectedAnswer = () => {
  answerElms.forEach((curElem) => (curElem.checked = false));
};

submitBtn.addEventListener("click", () => {
  const selectedOptionIndex = getSelectedOption();
  console.log(selectedOptionIndex);

  if (selectedOptionIndex === quizData[currentQuiz].correct) {
    score = score + 1;
  }

  currentQuiz++;
  if (currentQuiz < quizData.length) {
    deselectedAnswer();
    loadQuiz();
  }
 
});
loadQuiz();