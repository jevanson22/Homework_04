var timeLeft = 75
var timerDisplay = document.getElementById("timerDisplay");

var startEl = document.getElementById("rulesAndQues");

var question = document.getElementById("question");

var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var answer4 = document.getElementById("answer4");

var ques1El = document.getElementById("question1");
var ques2El = document.getElementById("question2");
var ques3El = document.getElementById("question3");
var ques4El = document.getElementById("question4");
var ques5El = document.getElementById("question5");
var ques6El = document.getElementById("question6");
var ques7El = document.getElementById("question7");
var ques8El = document.getElementById("question8");
var ques9El = document.getElementById("question9");
var ques10El = document.getElementById("question10");

var answerBtns = document.querySelectorAll(".answer")


function tick(){
    timeLeft=timeLeft-1;
    timerDisplay.textContent= "Time:"+ timeLeft;
    
}
function startQuiz(){
    //hide startpage & load first question
    startEl.classList.add("hidden");
    ques1El.classList.remove("hidden");
     
}

function startTimer(){
    setInterval(tick,1000);
    startQuiz()
}
function btnClick(){
    if (this.id="b3"){
        console.log("correct")
    
    }
    else {
        console.log("wrong")
    }
}



for (i=0; i<4; i++){
    answerBtn=answerBtns[i]
    answerBtn.addEventListener('click', btnClick)
}
  
  //for as long as quesNum is =< 0, place the key values into elementsById. let button answer carry true false to penalty function and load next quesNum

//if //onclick return = noTimePenalty then load next array
  //else subtract 10 from setTimeout then load next array
  //else timerDisplay !<0
  //than gameOver
//define one iteration of quesNum in for loop?

//function gameOver(){
   //Loads Highscore page;
//};

var quizQuestion= [ 
{quesNum:0,question:"Questions will be written in this style",answer1:"Answer 1",answer2:"Answer 2",answer3:"Answer 3",answer4:"Answer 4",noTimePenalty:"answer2"},   
{quesNum:1,question:"What does the G in GNU stand for?",answer1:"GNU's Not Unix",answer2:"General Network Unifier",answer3:"General Network Unicode",answer4:"Group of Nine Unicorns",noTimePenalty:"answer1"},
{quesNum:2,question:"The oldest written language is?",answer1:"Egyptian",answer2:"Sumerian",answer3:"Greek",answer4:"Sanskirt",noTimePenalty:"answer2"},
{quesNum:3,question:"Sumerian writing system is known as?",answer1:"Heiroglyphics",answer2:"Runes",answer3:"Cuneiform",answer4:"Ziggurat",noTimePenalty:"answer3"},
{quesNum:4,question:"Cuneiform was written using?",answer1:"Stone and chisel",answer2:"Ink quils and papyrus",answer3:"Paints and sandstone",answer4:"Clay and sharpened reeds",noTimePenalty:"answer4"},
{quesNum:5,question:"The Correct answer to this question is answer 3",answer1:"Answer 1",answer2:"Answer 2",answer3:"Answer 3",answer4:"Answer 4",noTimePenalty:"answer3"},
{quesNum:6,question:"The Correct answer to this question is answer 2",answer1:"Answer 1",answer2:"Answer 2",answer3:"Answer 3",answer4:"Answer 4",noTimePenalty:"answer2"},
{quesNum:7,question:"The Correct answer to this question is answer 1",answer1:"Answer 1",answer2:"Answer 2",answer3:"Answer 3",answer4:"Answer 4",noTimePenalty:"answer1"},
{quesNum:8,question:"The Correct answer to this question is answer 4",answer1:"Answer 1",answer2:"Answer 2",answer3:"Answer 3",answer4:"Answer 4",noTimePenalty:"answer4"},
{quesNum:9,question:"The Correct answer to this question is answer 4",answer1:"Answer 1",answer2:"Answer 2",answer3:"Answer 3",answer4:"Answer 4",noTimePenalty:"answer4"},
{quesNum:10,question:"The Correct answer to this question is answer 2",answer1:"Answer 1",answer2:"Answer 2",answer3:"Answer 3",answer4:"Answer 4",noTimePenalty:"answer2"},
];
console.log(quizQuestion);

































        //Link to high scores in top left-timer to right
        //multiple choice with answer buttons stylized button
        //hover to select-click to submit
        //display score-obtain/record user data
            //correct- no effect loads next question    
            //incorrect- subtracts x amount of seconds- loads next question
            //timer reaches zero buttons stop reacting- field for high scores name entry not responsive
        //time left at end = score-prompts user name- records name & score- displays top X scores & names
            //if no score i.e. player ran out of time/wrong answers- highscore field alerts they need a score restart to start on ok
        //display High Scores/buttons to restart & clear High Score data
        //line break

        //return answer status


//HANDLED BY BROWSER-USER UNCONTROLLED
        //store list of questions & answers
        //timer 
        //styling
        //determative action event