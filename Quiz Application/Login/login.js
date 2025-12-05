
//For Dom Working Variables
let errorMessanger = document.getElementById("print");
let user_name = document.getElementById("formField1");
let user_email = document.getElementById("formField2");
let user_password = document.getElementById("formField3");

//Global Declarations
let userName;
let userEmail;
let userPassword;

//Error Checker Variables
let atCount = 0 ;
let error = false ;


function signUp () {
    errorHandler();
}




function errorHandler () {
    //Value Takers
    userName = user_name.value ;
    userEmail = user_email.value ;
    userPassword = user_password.value ;

    //Email @ Check
    for(let i = 0 ; i < userEmail.length ; i++) {
        if(userEmail[i] === "@") {
            atCount++ ;
        }
    }

    //Email Spaces Check
    for(let i = 0 ; i < userEmail.length ; i++) {
        if(userEmail[i] === " ") {
            error = true ;
        }
    }

    //Error Messages 
    if(!userName && !userEmail && !userPassword) {
        errorMessanger.innerHTML = "Fill The Above All Requirements !" ;
        return ;
    }
    if(userPassword.length < 6) {
        errorMessanger.innerHTML = "Password Should Be Strong or 6 Letters !" ;
        return ;
    }
    if(atCount !== 1) {
        errorMessanger.innerHTML = "Please Enter Correct Email !" ;
        return ;
    }
    if(error = true) {
        errorMessanger.innerHTML = "Remove Extra Spaces From Email" ;
        return ;
    }
}