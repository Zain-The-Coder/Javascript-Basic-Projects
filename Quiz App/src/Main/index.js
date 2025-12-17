    let firstInput = document.getElementById("form-field1");
    let secondInput = document.getElementById("form-field2");
    let thirdInput = document.getElementById("form-field3");
    let errorPrinter = document.getElementById("error")

function buttonPressed () {
    console.log("hello world")
    if(!firstInput.value || !secondInput.value || !thirdInput.value) {
        errorPrinter.innerHTML = "Please Fill The all fields";
        return ;
    }
    if(secondInput.value.length < 6) {
        errorPrinter.innerHTML = "Password Is Too Short !" ;
        return ;
    }
    if(secondInput.value !== thirdInput.value) {
        errorPrinter.innerHTML = "Check Password !";
        return ;
    }
    localStorage.setItem("userName" , firstInput.value)
    errorPrinter.innerHTML = "Let's go to quiz >" ;
    gotoQuiz();
    
}
function gotoQuiz () {
    window.location.href = "../Quiz/quiz.html";
}