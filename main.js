const javascriptQuestions = [
    { 
        question: "What is the most common abbreviation of JavaScript?", 
        a: "HTML", 
        b: "CSS", 
        c: "JS", 
        d: "Java",
        correctAnswer: 'c'
    }, 
    { 
        question: "<code>let message</code> <br> Is this viable code? ", 
        a: "yes, <code>message</code> has been declared;", 
        b: "no, you need <code>let message = ''</code>", 
        c: "yes, <code>message</code> will now be a string", 
        d: "no, you need message content liek <let message = 'hello'</code>",
        correctAnswer: 'a'
    },
    { 
        question: "What are the 2 outputs? <code>let hello = 'Hello World!' <br> let message; <br> message=hello; <br> alert(hello); <br> alert(message);</code>", 
        a: "1: Hello world! 2: undefined", 
        b: "1: Hello world! 2: Hello world!", 
        c: "1: undefined 2: undefined", 
        d: "1: undefined 2: Hello world!", 
        correctAnswer: 'b'
    },
    { 
        question: "Which variable name is NOT allowed?", 
        a: "<code>let my-name = 'Bob'</code>", 
        b: "<code>let $bills = 'Cash Money'</code>",  
        c: "<code>let _ = 'underscore'</code>", 
        d: "<code>let bobBobbertson = 'Bob Bobbertson'</code>", 
        correctAnswer: 'a'
    },
    {
        question: "How do you see 'vanceFridge' in the console?", 
        a: "<code>(vanceFridge).log()</code>", 
        b: "<code>log.out(vanceFridge)</code>", 
        c: "<code>print(vanceFridge)</code>", 
        d: "<code>console.log(vanceFridge)</code>",
        correctAnswer: 'd'
    }, 
    { 
        question: "How can JavaScript interact with a webpage and HTML content?", 
        a: "DOM", 
        b: "MOD", 
        c: "HTTPS", 
        d: "console.log()",
        correctAnswer: 'a'
    },
    { 
        question: "How do you call <code>function gitErDun()</code>?", 
        a: "<code>function gitErDun()</code>", 
        b: "<code>gitErDun()</code>", 
        c: "<code>console.gitErDun()</code>", 
        d: "<code>console.log(gitErDun)</code>",
        correctAnswer: 'b'
    },
    { 
        question: "Which way should you NOT declare a variable?", 
        a: "<code>const x = 5</code>", 
        b: "<code>var x = 5</code>", 
        c: "<code>let x = '5'</code>", 
        d: "<code>x = 5</code>",
        correctAnswer: 'd'
    },
    { 
        question: "Which is a conventional way to name a variable?", 
        a: "<code>best_pizza_place = 'Papa Johns'</code>", 
        b: "<code>NumberOnePizza = 'Papa Johns'</code>", 
        c: "<code>theBestPizza = 'Dominos'</code>", 
        d: "<code>pizzashop = 'Dominos'</code>",
        correctAnswer: 'c'
    },
    { 
        question: "How can you pass paramaters to a <code>function readInfo()</code>?", 
        a: "<code>function readInfo(params: param1, param2)</code>", 
        b: "<code>function readInfo(param1, param2)</code>",
        c: "<code>function readInfo(let params = 'param1', 'param2')</code>", 
        d: "<code>function readInfo('param1', 'param2')</code>",
        correctAnswer: 'b'
    },
    { 
        question: `In the function <br> <code>showCount(count) { <br> alert(count ?? "unknown")</code> <br>What will be shown when you call <code>showCount(0)</code>?`, 
        a: "unknown", 
        b: "0", 
        c: "nothing", 
        d: "count unknown",
        correctAnswer: 'b'
    },
    { 
        question: "<code>function sum(a, b) { return a + b; }  <br>  alert(sum(5,2))</code> should return what value?", 
        a: "3", 
        b: "10", 
        c: "52", 
        d: "7",
        correctAnswer: 'd'
    },
    { 
        question: "Which is NOT a common way to name a function?", 
        a: "<code>calcSum(...)</code>", 
        b: "<code>seeResult(...)</code>", 
        c: "<code>primesReturned(...)</code>", 
        d: "<code>getVariable(...)</code>",
        correctAnswer: 'c'
    },
    { 
        question: "How long should a function be?", 
        a: "at least 10 lines", 
        b: "short enough to easily read", 
        c: "long enough to do one thing", 
        d: "short and contain a few outputs if necessary",
        correctAnswer: 'c'
    },
    { 
        question: "<code>function checkForClass(day) { <br> if (day === 'tuesday') { return true; <br> } return 'did you get your days mixed up?'</code> <br> Is this a valid function?", 
        a: "Yes, it does not need an <code>else</code>", 
        b: "No, it needs an <code>else</code>", 
        c: "", 
        d: "",
        correctAnswer: 'a'
    },
    { 
        question: "What is wrong with this code? <code>for (let i = 1; i <= 5; i++) { <br> console.log(i); } <br> console.log(i); </code> ", 
        a: "the code will never equal 5 and will run forever", 
        b: "the final <code>console.log(i)</code> doesn't have a variable to log", 
        c: "nothing, this would be fine code", 
        d: "you can't start code with <code>for</code>",
        correctAnswer: 'b'
    },
    { 
        question: "How many numbers will be output with this code? <code> for (let i = 1; i <= 5; i++) { <br>   console.log(i); <br> i++; <br> }", 
        a: "1", 
        b: "3", 
        c: "5", 
        d: "6",
        correctAnswer: 'b'
    },
    { 
        question: "When is it appropriate to use a <code>while</code> as opposed to a <code>for</code> loop?", 
        a: "when the user must input data", 
        b: "when the user needs to enter his name", 
        c: "when the user will be experiencing a media query", 
        d: "when the programmer needs to provide a long number of tries",
        correctAnswer: 'a'
    },
    { 
        question: "<code>let func = (arg1, arg2, ..., argN => expression;</code> What type of function is this called?", 
        a: "conditional", 
        b: "recurring", 
        c: "declaration", 
        d: "arrow",
        correctAnswer: 'd'
    },
    { 
        question: "<code>let product = (a, b) => { return a * b }; </code> How can we test to see whether this code works?", 
        a: "<code>console.log(product(a,b))</code>", 
        b: "<code>console.log(product(9,2))</code>", 
        c: "<code>console.log(product(let a=9, let b=2))</code>", 
        d: "<code>console.log(9,2)</code>", 
        correctAnswer: 'b'
    }

];


const cssQuestions = [
    { 
        question: "What is continuous cascade styling commonly referred to?", 
        a: "HTML", 
        b: "CSS", 
        c: "JS", 
        d: "Java",
        correctAnswer: 'b'
    }, 
    {
        question: "Can you center a div?", 
        a: "no, impossible", 
        b: "yes, it's easy with floats", 
        c: "there are multiple ways, but it's a meme", 
        d: "yes. flex, justify, and align",
        correctAnswer: 'd'
    }, 
    { 
        question: "Why is CSS separate from HTML and JS?", 
        a: "fun", 
        b: "separation of identity", 
        c: "for confusion", 
        d: "for clarity",
        correctAnswer: 'b'
    }, 
    {
        question: "This is a test test question. The answer is A", 
        a: 'my brain is fried, I need to take a break '  , 
        b: "ouch, that's it i'm done", 
        c: "it's a meme. i need to add pictures", 
        d: "DOH! goes Homer Simpson",
        correctAnswer: 'a'
    }, 
    {
        question: "This is a test test question. The answer is A", 
        a: 'my brain is fried, I need to take a break '  , 
        b: "ouch, that's it i'm done", 
        c: "it's a meme. i need to add pictures", 
        d: "DOH! goes Homer Simpson",
        correctAnswer: 'a'
    }, 
    {
        question: "This is a test test question. The answer is A", 
        a: 'my brain is fried, I need to take a break '  , 
        b: "ouch, that's it i'm done", 
        c: "it's a meme. i need to add pictures", 
        d: "DOH! goes Homer Simpson",
        correctAnswer: 'a'
    }, 
    {
        question: "This is a test test question. The answer is A", 
        a: 'my brain is fried, I need to take a break '  , 
        b: "ouch, that's it i'm done", 
        c: "it's a meme. i need to add pictures", 
        d: "DOH! goes Homer Simpson",
        correctAnswer: 'a'
    }, 
    {
        question: "This is a test test question. The answer is A", 
        a: 'my brain is fried, I need to take a break '  , 
        b: "ouch, that's it i'm done", 
        c: "it's a meme. i need to add pictures", 
        d: "DOH! goes Homer Simpson",
        correctAnswer: 'a'
    }, 
    {
        question: "This is a test test question. The answer is A", 
        a: 'my brain is fried, I need to take a break '  , 
        b: "ouch, that's it i'm done", 
        c: "it's a meme. i need to add pictures", 
        d: "DOH! goes Homer Simpson",
        correctAnswer: 'a'
    }, 
    {
        question: "This is a test test question. The answer is A", 
        a: 'my brain is fried, I need to take a break '  , 
        b: "ouch, that's it i'm done", 
        c: "it's a meme. i need to add pictures", 
        d: "DOH! goes Homer Simpson",
        correctAnswer: 'a'
    }, 
    {
        question: "This is a test test question. The answer is A", 
        a: 'my brain is fried, I need to take a break '  , 
        b: "ouch, that's it i'm done", 
        c: "it's a meme. i need to add pictures", 
        d: "DOH! goes Homer Simpson",
        correctAnswer: 'a'
    }, 
    {
        question: "This is a test test question. The answer is A", 
        a: 'my brain is fried, I need to take a break '  , 
        b: "ouch, that's it i'm done", 
        c: "it's a meme. i need to add pictures", 
        d: "DOH! goes Homer Simpson",
        correctAnswer: 'a'
    }, 
    {
        question: "This is a test test question. The answer is A", 
        a: 'my brain is fried, I need to take a break '  , 
        b: "ouch, that's it i'm done", 
        c: "it's a meme. i need to add pictures", 
        d: "DOH! goes Homer Simpson",
        correctAnswer: 'a'
    }, 
    {
        question: "This is a test test question. The answer is A", 
        a: 'my brain is fried, I need to take a break '  , 
        b: "ouch, that's it i'm done", 
        c: "it's a meme. i need to add pictures", 
        d: "DOH! goes Homer Simpson",
        correctAnswer: 'a'
    }, 
    {
        question: "This is a test test question. The answer is A", 
        a: 'my brain is fried, I need to take a break '  , 
        b: "ouch, that's it i'm done", 
        c: "it's a meme. i need to add pictures", 
        d: "DOH! goes Homer Simpson",
        correctAnswer: 'a'
    }, 
    {
        question: "This is a test test question. The answer is A", 
        a: 'my brain is fried, I need to take a break '  , 
        b: "ouch, that's it i'm done", 
        c: "it's a meme. i need to add pictures", 
        d: "DOH! goes Homer Simpson",
        correctAnswer: 'a'
    }, 
    {
        question: "This is a test test question. The answer is A", 
        a: 'my brain is fried, I need to take a break '  , 
        b: "ouch, that's it i'm done", 
        c: "it's a meme. i need to add pictures", 
        d: "DOH! goes Homer Simpson",
        correctAnswer: 'a'
    }, 
    {
        question: "This is a test test question. The answer is A", 
        a: 'my brain is fried, I need to take a break '  , 
        b: "ouch, that's it i'm done", 
        c: "it's a meme. i need to add pictures", 
        d: "DOH! goes Homer Simpson",
        correctAnswer: 'a'
    }, 
    {
        question: "This is a test test question. The answer is A", 
        a: 'my brain is fried, I need to take a break '  , 
        b: "ouch, that's it i'm done", 
        c: "it's a meme. i need to add pictures", 
        d: "DOH! goes Homer Simpson",
        correctAnswer: 'a'
    }, 
    {
        question: "This is a test test question. The answer is A", 
        a: 'my brain is fried, I need to take a break '  , 
        b: "ouch, that's it i'm done", 
        c: "it's a meme. i need to add pictures", 
        d: "DOH! goes Homer Simpson",
        correctAnswer: 'a'
    }
    
];



const htmlQuestions = [
    { 
        question: "What is Hypertext Markup Language", 
        a: "HTML", 
        b: "CSS", 
        c: "JS", 
        d: "Java",
        correctAnswer: 'a'
    }, 
    {
        question: "Which is not a proper HTML element?", 
        a: "div", 
        b: "bold", 
        c: "h1", 
        d: "anchor",
        correctAnswer: 'b'
    }, 
    { 
        question: "Why is HTML so important?", 
        a: "it's the content, everything else is just fluff", 
        b: "because Tim Burners Lee", 
        c: "without it, there would be no CSS or JS", 
        d: "this is a good question",
        correctAnswer: 'a'
    }, 
    {
        question: "This is a test test question. The answer is A", 
        a: 'my brain is fried, I need to take a break '  , 
        b: "ouch, that's it i'm done", 
        c: "it's a meme. i need to add pictures", 
        d: "DOH! goes Homer Simpson",
        correctAnswer: 'a'
    }, 
    {
        question: "This is a test test question. The answer is A", 
        a: 'my brain is fried, I need to take a break '  , 
        b: "ouch, that's it i'm done", 
        c: "it's a meme. i need to add pictures", 
        d: "DOH! goes Homer Simpson",
        correctAnswer: 'a'
    }, 
    {
        question: "This is a test test question. The answer is A", 
        a: 'my brain is fried, I need to take a break '  , 
        b: "ouch, that's it i'm done", 
        c: "it's a meme. i need to add pictures", 
        d: "DOH! goes Homer Simpson",
        correctAnswer: 'a'
    }, 
    {
        question: "This is a test test question. The answer is A", 
        a: 'my brain is fried, I need to take a break '  , 
        b: "ouch, that's it i'm done", 
        c: "it's a meme. i need to add pictures", 
        d: "DOH! goes Homer Simpson",
        correctAnswer: 'a'
    }, 
    {
        question: "This is a test test question. The answer is A", 
        a: 'my brain is fried, I need to take a break '  , 
        b: "ouch, that's it i'm done", 
        c: "it's a meme. i need to add pictures", 
        d: "DOH! goes Homer Simpson",
        correctAnswer: 'a'
    }, 
    {
        question: "This is a test test question. The answer is A", 
        a: 'my brain is fried, I need to take a break '  , 
        b: "ouch, that's it i'm done", 
        c: "it's a meme. i need to add pictures", 
        d: "DOH! goes Homer Simpson",
        correctAnswer: 'a'
    }, 
    {
        question: "This is a test test question. The answer is A", 
        a: 'my brain is fried, I need to take a break '  , 
        b: "ouch, that's it i'm done", 
        c: "it's a meme. i need to add pictures", 
        d: "DOH! goes Homer Simpson",
        correctAnswer: 'a'
    }, 
    {
        question: "This is a test test question. The answer is A", 
        a: 'my brain is fried, I need to take a break '  , 
        b: "ouch, that's it i'm done", 
        c: "it's a meme. i need to add pictures", 
        d: "DOH! goes Homer Simpson",
        correctAnswer: 'a'
    }, 
    {
        question: "This is a test test question. The answer is A", 
        a: 'my brain is fried, I need to take a break '  , 
        b: "ouch, that's it i'm done", 
        c: "it's a meme. i need to add pictures", 
        d: "DOH! goes Homer Simpson",
        correctAnswer: 'a'
    }, 
    {
        question: "This is a test test question. The answer is A", 
        a: 'my brain is fried, I need to take a break '  , 
        b: "ouch, that's it i'm done", 
        c: "it's a meme. i need to add pictures", 
        d: "DOH! goes Homer Simpson",
        correctAnswer: 'a'
    }, 
    {
        question: "This is a test test question. The answer is A", 
        a: 'my brain is fried, I need to take a break '  , 
        b: "ouch, that's it i'm done", 
        c: "it's a meme. i need to add pictures", 
        d: "DOH! goes Homer Simpson",
        correctAnswer: 'a'
    }, 
    {
        question: "This is a test test question. The answer is A", 
        a: 'my brain is fried, I need to take a break '  , 
        b: "ouch, that's it i'm done", 
        c: "it's a meme. i need to add pictures", 
        d: "DOH! goes Homer Simpson",
        correctAnswer: 'a'
    }, 
    {
        question: "This is a test test question. The answer is A", 
        a: 'my brain is fried, I need to take a break '  , 
        b: "ouch, that's it i'm done", 
        c: "it's a meme. i need to add pictures", 
        d: "DOH! goes Homer Simpson",
        correctAnswer: 'a'
    }, 
    {
        question: "This is a test test question. The answer is A", 
        a: 'my brain is fried, I need to take a break '  , 
        b: "ouch, that's it i'm done", 
        c: "it's a meme. i need to add pictures", 
        d: "DOH! goes Homer Simpson",
        correctAnswer: 'a'
    }, 
    {
        question: "This is a test test question. The answer is A", 
        a: 'my brain is fried, I need to take a break '  , 
        b: "ouch, that's it i'm done", 
        c: "it's a meme. i need to add pictures", 
        d: "DOH! goes Homer Simpson",
        correctAnswer: 'a'
    }, 
    {
        question: "This is a test test question. The answer is A", 
        a: 'my brain is fried, I need to take a break '  , 
        b: "ouch, that's it i'm done", 
        c: "it's a meme. i need to add pictures", 
        d: "DOH! goes Homer Simpson",
        correctAnswer: 'a'
    }, 
    {
        question: "This is a test test question. The answer is A", 
        a: 'my brain is fried, I need to take a break '  , 
        b: "ouch, that's it i'm done", 
        c: "it's a meme. i need to add pictures", 
        d: "DOH! goes Homer Simpson",
        correctAnswer: 'a'
    }
];


// the buttons for html, css, and js
let htmlBtn = document.querySelector('#html');
let cssBtn = document.querySelector('#css');
let javascriptBtn = document.querySelector('#javascript');



let currentQuizQuestion = 0;
let score = 0;


const questionText = document.querySelector('#quiz-question');
const a_text = document.querySelector('#a_text');
const b_text = document.querySelector('#b_text');
const c_text = document.querySelector('#c_text');
const d_text = document.querySelector('#d_text');
const answerEls = document.querySelectorAll('.answer');

const submitBtn = document.getElementById('submit');

function loadQuiz(questionBank) {
    deselectAnswers();

    // have to change with each click of the html, css, js buttons...
    const currentQuizData = questionBank[currentQuizQuestion]


    questionText.innerHTML = `${currentQuizQuestion + 1}.   ${currentQuizData.question}`;
    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;


}


// ecouragement on final score modal 
let encouragment = document.querySelector("#encouragement");
let scorePercent = document.querySelector('#score-percent');

// get the next question to display on the screen
submitBtn.addEventListener('click', () => {
    // get the answer the user selected
    const answer = getSelected();
    

    // this hasn't been checked!! uh oh
    if (answer) {
        console.log('here is the problem' + score)

        if (answer === questionsToAsk[currentQuizQuestion].correctAnswer) {
            score++;
        }

        currentQuizQuestion++; 
        if (currentQuizQuestion < questionsToAsk.length) {
            loadQuiz(questionsToAsk);
        } else {
            // enter the score into the score tag 
            document.querySelector("#score").innerText = score;

            // show score in percentage 
            scorePercent.innerText = (((score / 20) * 100).toFixed(0))

            // enter an encouragement message 
            if (score === 20) {
                encouragment.innerHTML = "That was amazing! &#128512;"
            } else if (score > 17) {
                encouragment.innerHTML = "Great work! &#128512; <br> You have been doing your Anki!"
            } else if (score > 16) {
                encouragment.innerHTML = "Not bad! &#128533; <br> We'll have to find the ones you got wrong (on our next version) so you can study some more!"
            } else if (score > 11) {
                encouragment.innerHTML = "Oh, so close! &#128533; <br> I'd recommend trying again! Or visiting <a href='https://javascript.info/'>JavaScript.info</a> to get more practice."
            } else if (score <= 11) {
                encouragment.innerHTML = "Hey! Nice try &#128533; <br> but you need to study a bit more. <br> Don't give up! <br> Visit <a href='https://www.w3schools.com/'>w3schools.com</a>  for some good practice"
            }


            leaderboardModal.style.display = 'none';
            questionsModal.style.display = 'none'; 
            finalScoreModal.style.display = 'flex';
            selectionModal.style.display = 'none';

        }
    }  
});


// get the selected answers and store them for the score
function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

// on next question, don't have any selected
function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    })
}



// get the modal elements and be able to show them...
const questionsModal = document.querySelector("#questions-modal");
const selectionModal = document.querySelector("#selection-modal");
const finalScoreModal = document.querySelector("#final-score-modal");
const leaderboardModal = document.querySelector("#leaderboard");
const beginTestBtn = document.querySelector("#begin");



// check whether the quiz-type was chosen
beginTestBtn.addEventListener('click', () => {
    console.log(questionsToAsk)
    if (questionsToAsk === undefined) { 
        document.querySelector("#choose-type").style.outline = "3px solid red"
    } else {
        questionsModal.style.display = 'flex'; 
        finalScoreModal.style.display = 'none';
        selectionModal.style.display = 'none';
    } 
});



// load the appropriate questionBank to the Quiz Data
let questionsToAsk = [];

javascriptBtn.addEventListener('click', () => {
    // todo 
    // shuffle the javascriptQuestions
    questionsToAsk = javascriptQuestions;
    loadQuiz(javascriptQuestions);
});
cssBtn.addEventListener('click', () => {
    questionsToAsk = cssQuestions;
    loadQuiz(cssQuestions)
});
htmlBtn.addEventListener('click', () => {
    questionsToAsk = htmlQuestions;
    loadQuiz(htmlQuestions)
});



// set up a try again and show the opening page
const tryAgainBtn = document.querySelectorAll(".tryagain");
const leaderBoardBtn = document.querySelectorAll('.leaderboard');


// this will reset everything and send you back to the homepage
for (let i=0; i<tryAgainBtn.length; i++) {
    tryAgainBtn[i].addEventListener("click", () => {
        leaderboardModal.style.display = 'none';
        questionsModal.style.display = 'none'; 
        finalScoreModal.style.display = 'none';
        selectionModal.style.display = 'flex';
    
        // unselect all the quiz types on the main page
        const radioEls = document.querySelectorAll(".quiz-type")
        radioEls.forEach((radioEl) => {
            radioEl.checked = false;
        })
    
        currentQuizQuestion = 0;
        score = 0;
        questionsToAsk = [];
    })
}


for (let i=0; i<leaderBoardBtn.length; i++) {
    leaderBoardBtn[i].addEventListener('click', () => {
        leaderboardModal.style.display = 'flex';
        questionsModal.style.display = 'none'; 
        finalScoreModal.style.display = 'none';
        selectionModal.style.display = 'none';
    })

}
