///==========Counter=============///
var countDownDate = 600000; //time of exam
var x = setInterval(function () { //to update counter every second
    countDownDate = (countDownDate) - 1000; //to decrease time by second
    //calculations for minutes and seconds
    var minutes = Math.floor((countDownDate % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((countDownDate % (1000 * 60)) / 1000);
    var time = minutes * 60 + seconds; //to convert the rest time to seconds
    document.getElementById("time").innerHTML = minutes + "m " + " : " + seconds + "s ";
    if (time <= 300 && time >= 120) {
        document.getElementsByClassName("time")[0].style.background = "#F9AB00";
    } else if (time <= 120) {
        document.getElementsByClassName("time")[0].style.background = "#FF0000";
    } else {
        document.getElementsByClassName("time")[0].style.background = "rgb(30, 173, 145)";
    }
    //to clear intervel when time finish
    if (countDownDate <= 0 && time <= 0) {
        clearInterval(x);
        window.location.replace("result.html");
    }
}, 1000);



////////-====Function Constructor========-/////////
var myQuesP = document.getElementById("question");
var myAnsSpan = document.getElementsByClassName("ansSpan");
var myCheckedAns = document.querySelectorAll('input[type=radio]');
var mydivQues = document.getElementsByClassName("bodyOfQuestion")[0];
var mybuttonNumber = document.getElementsByClassName("noOfQuestion")[0];
var bodyOfQuestion = document.getElementsByClassName('bodyOfQuestion')[0];
var markSection = document.getElementById("markSection");
var AllQuestion = [];
var Uanswer;
var result = 0;
var UserAnswer = [];
var noOfQues = 0;

function Question(id, value, answers, indexOfRight) {
    this.id = id,
        this.value = value,
        this.answers = answers;
    this.indexOfRight = indexOfRight;
}
function Answer(id, value) {
    this.id = id;
    this.value = value;
}

var ans1 = new Answer(1, "Syntax");
var ans2 = new Answer(2, "Interpretation");
var ans3 = new Answer(3, "Logic");
var ans4 = new Answer(4, "Customs");
var myQues = new Question(1, "The rules to any programming language are its _______", [ans1, ans2, ans3, ans4], 0);

var ans5 = new Answer(5, "Beta test");
var ans6 = new Answer(6, "Forerunner");
var ans7 = new Answer(7, "Outline");
var ans8 = new Answer(8, "Prototype");
var myQues2 = new Question(2, "The outline or the definition of a function is called its", [ans5, ans6, ans7, ans8], 3);

var ans9 = new Answer(9, "The null character");
var ans10 = new Answer(10, "The newline character");
var ans11 = new Answer(11, " The $ sign");
var ans12 = new Answer(12, "The / sign");

var myQues3 = new Question(3, "The end of string is recognized by", [ans9, ans10, ans11, ans12], 0);

var ans13 = new Answer(13, " *p.val");
var ans14 = new Answer(14, " *(p.val)");
var ans15 = new Answer(15, "  (*p).val");
var ans16 = new Answer(16, " p.val");

var myQues4 = new Question(4, "The C++ expression p --> val means the same thing as", [ans13, ans14, ans15, ans16], 2);

var ans17 = new Answer(17, "Type");
var ans18 = new Answer(18, "Type and name");
var ans19 = new Answer(19, "Type, name, and value");
var ans20 = new Answer(20, "Name and value");

var myQues5 = new Question(5, " When you declare a pointer, you must give it a ________", [ans17, ans18, ans19, ans20], 1);


var ans21 = new Answer(21, "May, as long as each version has the same arguments");
var ans22 = new Answer(22, "May, as long as each version has different arguments");
var ans23 = new Answer(23, "Must");
var ans24 = new Answer(24, "Must not");

var myQues6 = new Question(6, "You ________overload function templates", [ans21, ans22, ans23, ans24], 1);


var ans25 = new Answer(25, "Character");
var ans26 = new Answer(26, "Long Integer");
var ans27 = new Answer(27, "Float");
var ans28 = new Answer(28, " Short Integer");

var myQues7 = new Question(7, "The most efficient data type for a variable that the number 20000 is the _______ data type", [ans25, ans26, ans27, ans28], 3);


var ans29 = new Answer(29, " Single quotes");
var ans30 = new Answer(30, "Double quotes");
var ans31 = new Answer(31, "Parenthesis");
var ans32 = new Answer(32, "#");

var myQues8 = new Question(8, " In the C language, the character type of constant is delimited by using", [ans29, ans30, ans31, ans32], 0);


var ans33 = new Answer(33, "Student");
var ans34 = new Answer(34, " ~student");
var ans35 = new Answer(35, "Constructor");
var ans36 = new Answer(36, "Any legal C++ name");

var myQues9 = new Question(9, "A class named student must have a constructor whose name is", [ans33, ans34, ans35, ans36], 0);


var ans37 = new Answer(37, "Algorithm");
var ans38 = new Answer(38, "Cast application");
var ans39 = new Answer(39, "Console application");
var ans40 = new Answer(40, "Source application");

var myQues10 = new Question(10, "A C++ _______ is a program that runs in a DOS window", [ans37, ans38, ans39, ans40], 2);


AllQuestion = [myQues, myQues2, myQues3, myQues4, myQues5, myQues6, myQues7, myQues8, myQues9, myQues10];


for (var index = 0; index < AllQuestion.length; index++) {
    var btn = document.createElement("button");
    btn.textContent = AllQuestion[index].id;
    btn.setAttribute("onclick", "gotoQues(this)");
    mybuttonNumber.append(btn);
}

function randomElement(array) {
    var current = array.length;
    var temp;
    var random;
    while (current > 0) {
        random = Math.floor(Math.random() * current);
        current--;
        temp = array[current];
        array[current] = array[random];
        array[random] = temp;
    }
    return array;
}
var randomArray = randomElement(AllQuestion);
var Inpuarr = [];
var Xans = [];

function appendQuestion(e) {
    if (e !== undefined)
        noOfQues = e;
    myQuesP.textContent = randomArray[noOfQues].value;
    bodyOfQuestion.innerHTML = "";
    for (var i = 0; i < randomArray[0].answers.length; i++) {
        var divAnswer = document.createElement("div");
        divAnswer.setAttribute("class", "answer");
        var btn = document.createElement("button");
        btn.setAttribute("class", "AnswerBtn");
        btn.setAttribute("onclick", "getAnswer(this)");
        btn.textContent = randomArray[noOfQues].answers[i].value;
        Inpuarr.push(btn);
        divAnswer.append(btn);
        bodyOfQuestion.append(divAnswer);
    }
    var mark = document.createElement("button");
    mark.setAttribute("class", "markbtn");
    mark.innerHTML = "<i class='fas fa-thumbtack'></i>"
    mydivQues.append(mark);

    mark.addEventListener("click", function () {
        markFun(randomArray[noOfQues]);
    });
}

var ans;
function getAnswer(e) {
    var ansQues = [];
    for (var i = 0; i < Inpuarr.length; i++) {
        ansQues.push(Inpuarr[i].textContent);
        if (Inpuarr[i] === e) {
            e.classList.add("active");
            ans = e.textContent;
        }
        else {
            Inpuarr[i].classList.remove("active");
        }
    }
    UserAnswer = [];
    UserAnswer.push(ans, noOfQues);
    if (!ansQues.includes(ans)) {
        UserAnswer.pop();
        UserAnswer.push(ans, noOfQues);
    }
    storeUserAnswer();
}

var answersOfStudent = [];
function storeUserAnswer() {
    var btns = document.querySelectorAll("button");
    for (var i = 0; i < btns.length; i++) {
        if (btns[i].classList.contains("active")) {
            var answerOfUser = bodyOfQuestion.querySelector("button.active").innerHTML;
            var quesId = randomArray[noOfQues].id;
            if (answersOfStudent.length == 0) {
                answersOfStudent.push({ quesId, answerOfUser });
            }
            else {
                var flag = 0;
                for (var index = 0; index < answersOfStudent.length; index++) {
                    console.log(answersOfStudent[index].quesId);
                    if (answersOfStudent[index].quesId == quesId) {
                        answersOfStudent.splice(index, 1)
                        answersOfStudent.push({ quesId, answerOfUser });
                        flag = 1;
                    }
                }
                if (!flag) {
                    answersOfStudent.push({ quesId, answerOfUser });
                }

            }
        }

    }
    console.log(answersOfStudent);
}


window.onload = function () {
    appendQuestion();
    document.getElementById("timer").style.width = "10%";
}

function next() {
    if (noOfQues < AllQuestion.length - 1) {
        noOfQues++;
        appendQuestion();
        document.getElementById("timer").style.width = Number(document.getElementById("timer").style.width.substring(2, -1)) + 10 + '%';
    }
    saveActive(noOfQues);
}

function previos() {
    if (noOfQues > 0) {
        noOfQues--;
        appendQuestion();
        if (document.getElementById("timer").style.width === "100%")
            document.getElementById("timer").style.width = Number(document.getElementById("timer").style.width.substring(3, -1)) - 10 + '%';
        else
            document.getElementById("timer").style.width = Number(document.getElementById("timer").style.width.substring(2, -1)) - 10 + '%';
    }
    saveActive(noOfQues);
}
function saveActive(noOfQues) {
    var btns = bodyOfQuestion.querySelectorAll("button");
    for (var i = 0; i < btns.length; i++) {
        for (let j = 0; j < answersOfStudent.length; j++) {
            if (btns[i].innerHTML == answersOfStudent[j].answerOfUser && answersOfStudent[j].quesId == randomArray[noOfQues].id) {
                btns[i].classList.add("active");
            }
        }
    }
}

function gotoQues(e) {
    appendQuestion(e.textContent - 1);
    document.getElementById("timer").style.width = e.textContent + '0%';
    console.log(e.textContent);
    console.log(noOfQues);
}
var allMark = [];
function markFun(e) {
    var mBtn = document.createElement("button");
    mBtn.textContent = "Q" + (Number(randomArray.indexOf(e)) + 1);
    mBtn.setAttribute("class", "markQues");
    mBtn.setAttribute("onclick", " markQues(this)");
    if (!(allMark.includes(mBtn.innerHTML))) {
        allMark.push(mBtn.innerHTML);
        markSection.append(mBtn);
    }
}
function markQues(e) {
    appendQuestion(e.textContent.substring(1) - 1);
    document.getElementById("timer").style.width = e.textContent.substring(1) + "0%";
    saveActive(noOfQues);
}

function submitQues() {
    appendQuestion();
    if (UserAnswer[0] === randomArray[noOfQues].answers[randomArray[noOfQues].indexOfRight].value) {
        result++;
    }
    var mynoBtn = mybuttonNumber.querySelectorAll("button");
    for (var i = 0; i < mynoBtn.length; i++) {
        if (mynoBtn[i].innerHTML - 1 == noOfQues) {
            mynoBtn[i].style.background = "#C8C8C8";
            mynoBtn[i].style.borderBottom = "3px solid #3D89F8";
            mynoBtn[i].style.color = "#383838"
        }
    }
    next();
    if (noOfQues >= AllQuestion.length - 1) {
        sessionStorage.setItem("result", result);
    }
}

function getResult() {
    sessionStorage.setItem("result", result);
    window.location.replace("result.html");
}
