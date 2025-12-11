let user_name = document.getElementById("formField1");
let user_email = document.getElementById("formField2");
let user_password = document.getElementById("formField3");
let errorMessanger = document.getElementById("print");


let userName ;
let userEmail;
let userPassword;

let userNames = JSON.parse(localStorage.getItem("userNames")) || [] ;
let userEmails = JSON.parse(localStorage.getItem("userEmails")) || [] ;
let userPasswords = JSON.parse(localStorage.getItem("userPasswords")) || [] ;


function signUp () {
    errorHandler();
    if(errorMessanger.style.color === "red") {return};

    let x = localStorage.getItem("userNames")
    let y = localStorage.getItem("userEmails")
    let z = localStorage.getItem("userPasswords")

    if(x) {
        userNames = JSON.parse(x);
    }
    if(y) {
        userEmails = JSON.parse(y);
    }
    if(z) {
        userPasswords = JSON.parse(z);
    }

    localStorage.setItem("userNames" , JSON.stringify(userNames));
    localStorage.setItem("userEmails" , userEmail);
    localStorage.setItem("userPasswords" , userPassword);

}










function errorHandler () {
    userName = user_name.value ;
    userEmail = user_email.value ;
    userPassword = user_password.value ;

    //Error Messages 
    if(!userName || !userEmail || !userPassword) {
        errorMessanger.innerHTML = "Fill The Above All Requirements !" ;
        errorMessanger.style.color = "red" ;
        return ;
    }
    if(!userEmail.includes("@")) {
        errorMessanger.innerHTML = "Please Enter Correct Email !" ;
        errorMessanger.style.color = "red" ;

        return ;
    }
    if(userEmail.includes(" ")) {
        errorMessanger.innerHTML = "Remove Extra Spaces From Email" ;
        errorMessanger.style.color = "red" ;
        return ;
    }
    if(userPassword.length < 6) {
        errorMessanger.innerHTML = "Password Should Be Strong or 6 Letters !" ;
        errorMessanger.style.color = "red" ;
        return ;
    }
    errorMessanger.innerHTML = "Login Successfully !" ;
    errorMessanger.style.color = "green"
}