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
        d: "no, you need message content like <code>let message = 'hello'</code>",
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
        question: `In the function <br> <code>showCount(count) { alert(count ?? "unknown")</code> <br> What will be shown when you call <code>showCount(0)</code>?`, 
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
        question: "What is Continuous Cascade Styling commonly referred to?", 
        a: "HTML", 
        b: "CSS", 
        c: "JS", 
        d: "Java",
        correctAnswer: 'b'
    }, 
    {
        question: "What does the property <code>background-clip</code> do?", 
        a: "defines how far the background should extend within an element", 
        b: "specifies a video attribute (or .gif) for a background", 
        c: "clips the borders of an image", 
        d: "sets how a background layer will appear",
        correctAnswer: 'a'
    }, 
    { 
        question: "What is the correct order to use when using the property <code>border</code>", 
        a: "border-style, border-width, border-color", 
        b: "border-style, border-color, border-width",
        c: "border-width, border-style, border-color",
        d: "border-width, border-color, border-style",
        correctAnswer: 'c'
    }, 
    {
        question: "When using the property <code>@charset</code> what are you referring to?", 
        a: 'specifies which character element will be selected', 
        b: "similar to a media query, it provides a character query", 
        c: "sets the color and character set of the text", 
        d: "specifies the character encoding used in the style sheet",
        correctAnswer: 'd'
    }, 
    {
        question: "Which is NOT a common property value of <code>display</code>?", 
        a: 'inline'  , 
        b: "flex", 
        c: "float", 
        d: "block",
        correctAnswer: 'c'
    }, 
    {
        question: "Which is the default <code>font-style</code>?", 
        a: 'san serif'  , 
        b: "normal", 
        c: "Verdana", 
        d: "inherit",
        correctAnswer: 'b'
    }, 
    {
        question: "How would you import another <code>font-family</code> in a stylesheet?", 
        a: '@import'  , 
        b: "@import_font", 
        c: "@font_import", 
        d: "@import font-family",
        correctAnswer: 'a'
    }, 
    {
        question: "How is <code>margin</code> best explained?", 
        a: "margin is the space between an element's border and and element inside"  , 
        b: "the margin sets a minimum amount of space", 
        c: "specififies the curve of the element", 
        d: "margin is the distance between elements",
        correctAnswer: 'd'
    }, 
    {
        question: "<code>div > p</code> What does this do?", 
        a: 'Selects all \< p \> elements where the parent is a \< div \> element'  , 
        b: "Selects all \< p \> elements inside \< div \> elements", 
        c: "Selects the first \< p \> element that is placed immediately after \< div \> elements", 
        d: "Selects all \< div \> elements and all \< p \> elements",
        correctAnswer: 'a'
    }, 
    {
        question: "What does <code>p::after</code> do?", 
        a: 'Inserts a \< p \> element after the content'  , 
        b: "Insert something before the content of each \< p \> element", 
        c: "Insert something after the content of each \< p \> element", 
        d: "Inserts a \< p \> where selected",
        correctAnswer: 'c'
    }, 
    {
        question: "What does <code>a:active</code> do?", 
        a: 'Automatically selects a link'  , 
        b: "Selects the active link", 
        c: "Activates the selected link", 
        d: "Selects every active <a> tag",
        correctAnswer: 'b'
    }, 
    { 
        question: "What is often found in the <code>:root</code> selector?", 
        a: 'colors'  , 
        b: "pictures", 
        c: "inputs", 
        d: "other selector elements",
        correctAnswer: 'a'
    }, 
    { 
        question: "How do you animate properties in CSS?", 
        a: '@animate'  , 
        b: "@keyframes", 
        c: "@move", 
        d: "@media",
        correctAnswer: 'b'
    }, 
    {
        question: "What does the funcion <code>calc()</code> do in CSS?", 
        a: 'inserts the value of a custom property'  , 
        b: "uses the smallest value, from a comma-separated list of values, as the property value", 
        c: "returns the current value of the named calculation", 
        d: "allows you to perform calculations to determine CSS property values",
        correctAnswer: 'd'
    }, 
    {
        question: "What does the funcion <code>cubic-bezier()</code> do in CSS?", 
        a: "defines a Cubic Bezier curve, often used for movement", 
        b: "defines a Cubic Bezier curve, often used for colors", 
        c: "defines a Cubic Bezier curve, often used for fonts", 
        d: "defines a Cubic Bezier curve, often used for width definition", 
        correctAnswer: 'a'
    }, 
    {
        question: "Which type of CSS unit is not used for length", 
        a: 'mm'  , 
        b: "px", 
        c: "em", 
        d: "vc",
        correctAnswer: 'd'
    }, 
    {
        question: "Does CSS assist with speech synthesis?", 
        a: 'yes, with Aural Reference'  , 
        b: "no, JavaScript is needed", 
        c: "", 
        d: "",
        correctAnswer: 'a'
    }, 
    {
        question: "What does the property <code>resize</code> do?", 
        a: 'specifies the alignment of resizable elements'  , 
        b: "defines if (and how) an element is resizable by the user", 
        c: "applies a 2D or 3D transformation to an element", 
        d: "specifies whether an element has a transformation",
        correctAnswer: 'b'
    }, 
    {
        question: "Which <code>tansform</code> property value does NOT exist?", 
        a: 'none'  , 
        b: "translate3d", 
        c: "scaleXYZ", 
        d: "perspective",
        correctAnswer: 'c'
    }, 
    {
        question: "Should you ever use the <code>float</code> property?", 
        a: "NEVER!", 
        b: "Floats are cool. I like floats.", 
        c: "I hate floats. Flex-box all the way", 
        d: "in very specific cases, like a newspaper with words wrapping around it",
        correctAnswer: 'd'
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
        question: "What tag do you put an image into?", 
        a: "<code><i></code>", 
        b: "<code><a></code>", 
        c: "<code><image></code>", 
        d: "<code><img></code>", 
        correctAnswer: 'd'
    }, 
    {
        question: "What do you add to an <code><a></code> tag to open a new web page?", 
        a: "rel = 'nofollow'",
        b: "href='https://www.website.com'",
        c: "target='_blank'", 
        d: "target='_new'",
        correctAnswer: 'c'
    }, 
    {
        question: "How would you jump to a footer with an <code><a></code> tag?", 
        a: "<code><a href='$footer'></a></code>", 
        b: "<code><a href='footer'></a></code>", 
        c: "<code><a href='%footer'></a></code>", 
        d: "<code><a name='footer'></a></code>", 
        correctAnswer: 'b'
    }, 
    {
        question: "What is a Wayne Gretzky quote?", 
        a: "you miss 100 of the shots you don't take" , 
        b: "one you've accepted your flaws, no one can use them against you", 
        c: "life is like riding a bicycle, to keep your balance you must keep moving", 
        d: "it does not matter how slowly ou go, as long as you do not stop",
        correctAnswer: 'a'
    }, 
    {
        question: "What is an Albert Einstein quote?", 
        a: "you miss 100 of the shots you don't take" , 
        b: "one you've accepted your flaws, no one can use them against you", 
        c: "life is like riding a bicycle, to keep your balance you must keep moving", 
        d: "it does not matter how slowly ou go, as long as you do not stop",
        correctAnswer: 'c'
    }, 
    {
        question: "What is a Confucious quote?", 
        a: "you miss 100 of the shots you don't take" , 
        b: "one you've accepted your flaws, no one can use them against you", 
        c: "life is like riding a bicycle, to keep your balance you must keep moving", 
        d: "it does not matter how slowly ou go, as long as you do not stop",
        correctAnswer: 'd'
    }, 
    {
        question: "What is a Tyrion Lannister quote?", 
        a: "you miss 100 of the shots you don't take" , 
        b: "one you've accepted your flaws, no one can use them against you", 
        c: "life is like riding a bicycle, to keep your balance you must keep moving", 
        d: "it does not matter how slowly ou go, as long as you do not stop",
        correctAnswer: 'b'
    }, 
    {
        question: "What is a Wayne Gretzky quote?", 
        a: "you miss 100 of the shots you don't take" , 
        b: "one you've accepted your flaws, no one can use them against you", 
        c: "life is like riding a bicycle, to keep your balance you must keep moving", 
        d: "it does not matter how slowly ou go, as long as you do not stop",
        correctAnswer: 'a'
    }, 
    {
        question: "What is an Albert Einstein quote?", 
        a: "you miss 100 of the shots you don't take" , 
        b: "one you've accepted your flaws, no one can use them against you", 
        c: "life is like riding a bicycle, to keep your balance you must keep moving", 
        d: "it does not matter how slowly ou go, as long as you do not stop",
        correctAnswer: 'c'
    }, 
    {
        question: "What is a Confucious quote?", 
        a: "you miss 100 of the shots you don't take" , 
        b: "one you've accepted your flaws, no one can use them against you", 
        c: "life is like riding a bicycle, to keep your balance you must keep moving", 
        d: "it does not matter how slowly ou go, as long as you do not stop",
        correctAnswer: 'd'
    }, 
    {
        question: "What is a Tyrion Lannister quote?", 
        a: "you miss 100 of the shots you don't take" , 
        b: "one you've accepted your flaws, no one can use them against you", 
        c: "life is like riding a bicycle, to keep your balance you must keep moving", 
        d: "it does not matter how slowly ou go, as long as you do not stop",
        correctAnswer: 'b'
    }, 
    {
        question: "What is a Wayne Gretzky quote?", 
        a: "you miss 100 of the shots you don't take" , 
        b: "one you've accepted your flaws, no one can use them against you", 
        c: "life is like riding a bicycle, to keep your balance you must keep moving", 
        d: "it does not matter how slowly ou go, as long as you do not stop",
        correctAnswer: 'a'
    }, 
    {
        question: "What is an Albert Einstein quote?", 
        a: "you miss 100 of the shots you don't take" , 
        b: "one you've accepted your flaws, no one can use them against you", 
        c: "life is like riding a bicycle, to keep your balance you must keep moving", 
        d: "it does not matter how slowly ou go, as long as you do not stop",
        correctAnswer: 'c'
    }, 
    {
        question: "What is a Confucious quote?", 
        a: "you miss 100 of the shots you don't take" , 
        b: "one you've accepted your flaws, no one can use them against you", 
        c: "life is like riding a bicycle, to keep your balance you must keep moving", 
        d: "it does not matter how slowly ou go, as long as you do not stop",
        correctAnswer: 'd'
    }, 
    {
        question: "What is a Tyrion Lannister quote?", 
        a: "you miss 100 of the shots you don't take" , 
        b: "one you've accepted your flaws, no one can use them against you", 
        c: "life is like riding a bicycle, to keep your balance you must keep moving", 
        d: "it does not matter how slowly ou go, as long as you do not stop",
        correctAnswer: 'b'
    }, 
    {
        question: "What is a Wayne Gretzky quote?", 
        a: "you miss 100 of the shots you don't take" , 
        b: "one you've accepted your flaws, no one can use them against you", 
        c: "life is like riding a bicycle, to keep your balance you must keep moving", 
        d: "it does not matter how slowly ou go, as long as you do not stop",
        correctAnswer: 'a'
    }, 
    {
        question: "What is an Albert Einstein quote?", 
        a: "you miss 100 of the shots you don't take" , 
        b: "one you've accepted your flaws, no one can use them against you", 
        c: "life is like riding a bicycle, to keep your balance you must keep moving", 
        d: "it does not matter how slowly ou go, as long as you do not stop",
        correctAnswer: 'c'
    }, 
    {
        question: "What is a Confucious quote?", 
        a: "you miss 100 of the shots you don't take" , 
        b: "one you've accepted your flaws, no one can use them against you", 
        c: "life is like riding a bicycle, to keep your balance you must keep moving", 
        d: "it does not matter how slowly ou go, as long as you do not stop",
        correctAnswer: 'd'
    }
];


// the buttons for html, css, and js
let htmlBtn = document.querySelector('#html');
let cssBtn = document.querySelector('#css');
let javascriptBtn = document.querySelector('#javascript');



let currentQuizQuestion = 0;
let score = 0;

// a hack to get the body overflow hidden 
document.body.style.overflow = 'hidden';




// select all the question and answers
const questionText = document.querySelector('#quiz-question');
const a_text = document.querySelector('#a_text');
const b_text = document.querySelector('#b_text');
const c_text = document.querySelector('#c_text');
const d_text = document.querySelector('#d_text');
const answerEls = document.querySelectorAll('.answer');

const submitBtn = document.getElementById('submit');
const questionNumberText = document.querySelector("#question-number");

function loadQuiz(questionBank) {
    deselectAnswers();

    // have to change with each click of the html, css, js buttons...
    const currentQuizData = questionBank[currentQuizQuestion]

    // post the questions from quiz to the actual modal
    questionText.innerHTML = `${currentQuizQuestion + 1}.   ${currentQuizData.question}`;
    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;

    // show question number and total the page
    questionNumberText.innerHTML = (currentQuizQuestion + 1)
}


// ecouragement on final score modal 
let encouragment = document.querySelector("#encouragement");
let scorePercent = document.querySelector('#score-percent');


// set up a place to show the wrong answers 
let wrongAnswers = [];

// select the area to show the wrong answers 
const wrongAnswerTextArea = document.querySelector("#wrong-answers");


// show the comments on the score modal 
function showComments() {
    // enter an encouragement message 
    if (score === 20) {
        encouragment.innerHTML = "That was amazing! &#128512;"
    } else if (score > 17) {
        encouragment.innerHTML = "Great work! &#128512; <br> You have been doing your Anki!"
    } else if (score > 16) {
        encouragment.innerHTML = "Not bad! &#128533; <br> We'll have to find the ones you got wrong (on our next version) so you can study some more!"
    } else if (score > 11) {
        encouragment.innerHTML = "Oh, so close! &#128533; <br> I'd recommend trying again! Or visiting <a href='https://www.w3schools.com/'>w3schools.com</a> to get more practice."
    } else if (score <= 11) {
        encouragment.innerHTML = "Hey! Nice try &#128533; <br> but you need to study a bit more. <br> Don't give up! <br> Visit <a href='https://www.w3schools.com/'>w3schools.com</a> for some good practice"
    }

}


// show the wrong answers from the quiz
function showWrongAnswers() {
    // create an h3 element to check the mistakes
    let tryAgain = document.createElement('h3');
    tryAgain.innerHTML = "...Check below for your mistakes..."
    wrongAnswerTextArea.appendChild(tryAgain);

    for (let i=0; i<wrongAnswers.length; i++) {
        // loop through the questions, select the wrong answer question and display it.
        let question = document.createElement('h3');
        question.innerHTML = `${wrongAnswers[i] + 1} - ${questionsToAsk[wrongAnswers[i]].question}`;
        wrongAnswerTextArea.appendChild(question);

        // create an answer and push the elemnt to it
        let answer_a = document.createElement('p');
        answer_a.innerHTML = `a. ${questionsToAsk[wrongAnswers[i]].a}`;
        wrongAnswerTextArea.appendChild(answer_a);

        let answer_b = document.createElement('p');
        answer_b.innerHTML = `b. ${questionsToAsk[wrongAnswers[i]].b}`;
        wrongAnswerTextArea.appendChild(answer_b);

        let answer_c = document.createElement('p');
        answer_c.innerHTML = `c. ${questionsToAsk[wrongAnswers[i]].c}`;
        wrongAnswerTextArea.appendChild(answer_c);

        let answer_d = document.createElement('p');
        answer_d.innerHTML = `d. ${questionsToAsk[wrongAnswers[i]].d}`;
        wrongAnswerTextArea.appendChild(answer_d);

        let correctAnswerText = document.createElement('p');
        correctAnswerText.innerHTML = `Correct Answer: ${questionsToAsk[wrongAnswers[i]].correctAnswer}`;
        correctAnswerText.style.color = 'red';
        wrongAnswerTextArea.appendChild(correctAnswerText);
    }
}




// get the next question to display on the screen
submitBtn.addEventListener('click', () => {
    // get the answer the user selected
    const answer = getSelected();
    

    // this hasn't been checked!! uh oh
    if (answer) {
        // check if the answer is right
        if (answer === questionsToAsk[currentQuizQuestion].correctAnswer) {
            score++;
        } else {
            console.log(currentQuizQuestion);
            wrongAnswers.push(currentQuizQuestion);
            
        }

        currentQuizQuestion++; 
        if (currentQuizQuestion < questionsToAsk.length) {
            loadQuiz(questionsToAsk);
        } else {
            // enter the score into the score tag 
            document.querySelector("#score").innerText = score;

            // show score in percentage 
            scorePercent.innerText = (((score / 20) * 100).toFixed(0))

            // show the score and comments function is called
            showComments();

            showWrongAnswers();
        

            // show the Final Score Modal
            leaderboardModal.style.display = 'none';
            questionsModal.style.display = 'none'; 
            finalScoreModal.style.display = 'flex';
            selectionModal.style.display = 'none';
            document.body.style.overflow = 'scroll';

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


// load the appropriate questionBank to the Quiz Data
let questionsToAsk;


beginTestBtn.addEventListener('click', () => {
    // check to see if the user has clicked quiz type
    if (questionsToAsk === undefined) { 
        document.querySelector("#choose-type").style.outline = "3px solid red"
    } else {
        questionsModal.style.display = 'flex'; 
        finalScoreModal.style.display = 'none';
        selectionModal.style.display = 'none';
    }
    
});



javascriptBtn.addEventListener('click', () => {
    // todo 
    // shuffle the javascriptQuestions
    questionsToAsk = javascriptQuestions;
    loadQuiz(questionsToAsk);
});
cssBtn.addEventListener('click', () => {
    questionsToAsk = cssQuestions;
    loadQuiz(questionsToAsk)
});
htmlBtn.addEventListener('click', () => {
    questionsToAsk = htmlQuestions;
    loadQuiz(questionsToAsk)
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
        wrongAnswers = [];
    })
}


// this is the button function to show the leaderboard (2 pages)
for (let i=0; i<leaderBoardBtn.length; i++) {
    leaderBoardBtn[i].addEventListener('click', () => {
        leaderboardModal.style.display = 'flex';
        questionsModal.style.display = 'none'; 
        finalScoreModal.style.display = 'none';
        selectionModal.style.display = 'none';
    })

}
