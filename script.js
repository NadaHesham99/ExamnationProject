////=========Register Validation==========/// 
var fname = document.getElementById("fname"),
    lname = document.getElementById("lname"),
    email = document.getElementById("email"),
    pass = document.getElementById("pass"),
    rePass = document.getElementById("rePass"),
    rememberMe = document.getElementById("rememberMe"),
    loginEmail = document.getElementById("loginEmail"),
    loginPassword = document.getElementById("loginPassword"),
    checkEmail,
    check,
    ValidFname,
    ValidLname,
    ValidPass,
    ValidEmail,
    rPass;
function validation() {
    if (ValidFname === undefined || ValidLname === undefined || ValidPass === undefined || ValidEmail === undefined) {

        var inpFname = fname.value;
        var hint1 = document.getElementById("hint1");
        if (inpFname === "") {
            hint1.textContent = "required";
        }
        else if (isFinite(inpFname)) {
            hint1.textContent = "you must enter Text";
        }
        else {
            hint1.style.display = "none";
            ValidFname = inpFname;
        }

        var inpLname = lname.value;
        var hint2 = document.getElementById("hint2");
        if (inpLname === "") {
            hint2.textContent = "required"
        }
        else if (isFinite(inpLname)) {
            hint2.textContent = "you must enter Text";
        }
        else {
            hint2.style.display = "none";
            ValidLname = inpLname;
        }

        var inpvalEmail = email.value;
        var hint3 = document.getElementById("hint3");
        var regMail = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

        if (inpvalEmail === "") {
            hint3.textContent = "required"
        }
        else if (!regMail.test(inpvalEmail)) {
            hint3.textContent = "you must enter Right Email With @";
        }
        else {
            hint3.style.display = "none";
            ValidEmail = inpvalEmail;
        }


        var inpvalPass = pass.value;
        var hint4 = document.getElementById("hint4");
        if (inpvalPass === "") {
            hint4.textContent = "Password field is required"
        }
        else if (inpvalPass.length < 9 || inpvalPass.length > 15) {
            hint4.textContent = "Password must be between 9 and 15 Character";
        }
        else {
            hint4.style.display = "none";
            ValidPass = inpvalPass;
        }

        if (rePass.value !== inpvalPass) {
            document.getElementById("hint5").textContent = "Password must be matched";
        }
    } else {
        window.location.replace("login.html")

    }
    setCookie("email", ValidEmail, new Date());
    setCookie("password", ValidPass, new Date());
    setCookie("lastName", ValidLname, new Date());
    setCookie("fName", ValidFname, new Date());
}
function setCookie(key, value, date) {
    var mydate = new Date();
    if (key !== '' && value !== '' && date >= mydate)
        document.cookie = key + "=" + value + ";expires=" + date;
    else
        throw ("Error");

}
function getCookie(key) {
    var res = "not found";
    var data = document.cookie;
    var arr = data.split("; ");
    arr.forEach(function (el) {
        var keyAndValue = el.split("=");
        if (keyAndValue[0] === key) {
            res = keyAndValue[1];
        }

    })
    return res;

}
// if(getCookie("email")!== "not found" && getCookie("password")!== "not found"){
//     loginEmail.value = getCookie("email");
//     loginEmail.value = getCookie("password");
// }
function deleteCookie(key) {
    document.cookie = key + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

function goExam() {
    if (loginEmail.value === getCookie("email") && loginPassword.value === getCookie("password")) {
        window.location.replace("exam.html");
        document.getElementById("logHint").style.display = "none";
    }
    else {
        // console.log("error");
        document.getElementById("logHint").textContent = "Email or Password is incorrect";
    }
}







