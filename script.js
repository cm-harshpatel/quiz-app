const questions = [
    {
        question: "Who is making the Web Standards?",
        a: "Mozilla",
        b: "Microsoft",
        c: "Apple",
        d: "The World Wide Web Consortium",
        correct: "d",

    },
    {
        question: "What does HTML stand for?",
        a: "Hyper Text Markup Language",
        b: "Hyperlinks and Text Markup Language",
        c: "Home Tool Markup Language",
        d: "None of the Above",
        correct: "a",

    },
    {
        question: "Choose the correct HTML tag for the largest heading.",
        a: "H1",
        b: "Heading",
        c: "Head",
        d: "H6",
        correct: "a",

    },
    {
        question: "How can you make a list that lists the items with numbers?",
        a: "OL",
        b: "UL",
        c: "DL",
        d: "List",
        correct: "a",

    }

]

let questionPos = 0;
let score = 0;

const quizBox = document.getElementById("quiz-box")
const livequestion = document.getElementById("question-container")
const liveOptionA = document.getElementById("a_text")
const liveOptionB = document.getElementById("b_text")
const liveOptionC = document.getElementById("c_text")
const liveOptionD = document.getElementById("d_text")
const submit = document.getElementById("submit")

const ischecked = document.querySelectorAll(".answer");
let finalAnswer = undefined;


loadquestion();

function loadquestion() {

    deselect();


    const currentQuestion = questions[questionPos];

    livequestion.innerText = currentQuestion.question;
    liveOptionA.innerText = currentQuestion.a;
    liveOptionB.innerText = currentQuestion.b;
    liveOptionC.innerText = currentQuestion.c;
    liveOptionD.innerText = currentQuestion.d;



}


function deselect() {
    ischecked.forEach(
        (answerEl) => {

            answerEl.checked = false;
        }
    )

}


function answer() {
    console.log(ischecked);

    ischecked.forEach(
        (answerEl) => {
            if (answerEl.checked) {

                return finalAnswer = answerEl.id;
            }

        }
    );
    return finalAnswer;

}

submit.addEventListener("click", () => {


    let currentAnswer = answer();


    if (currentAnswer === questions[questionPos].correct) {
        score++;
        console.log("correct answer clicked");

    }

    questionPos++;


    if (questionPos < questions.length) {

        loadquestion();
    }
    else {
        quizBox.innerHTML = `<h1>Quiz is over</h1><h2> You answered correctly at ${score}/${questions.length} questions. <h2>`;
    }


})