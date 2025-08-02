
let heading = document.getElementById("heading1");
heading.innerHTML = "LOGIN APP" ;
let output = document.getElementById("output");

let userPasswords = [] ;
let userEmails = [] ;

function newUser (usEm , usPm) {
    let firstUserEmail = newUserEmail(usEm) ;
    let firstUserPassword = newUserPassword(usPm);
    oldUser();
    if(firstUserEmail && firstUserPassword) {
        userEmails.push(firstUserEmail);
        userPasswords.push(firstUserPassword);
        console.log(userEmails);
        console.log(userPasswords);
        output.innerHTML = " " ;
    } else {
        output.innerHTML = "Please Fill The Above Requirements !" ;
    }
}

function newUserEmail (usEm) {
    usEm = document.getElementById("formField1").value;
    return usEm ;
}
function newUserPassword (usPm) {
    usPm = document.getElementById("formField2").value;
    return usPm ;
} 

function oldUser () {
    let oldUserEmail = document.getElementById("formField1").value;
    let oldUserPassword = document.getElementById("formField2").value;
    let emailChecker = userEmails.indexOf(oldUserEmail);
    if(emailChecker !== -1 && userPasswords[emailChecker] === oldUserPassword) {
        output.innerHTML = "WELCOME USER ! Login successfully."
    } else if(emailChecker) {
        output.innerHTML = "Authentication Failed ." ;
    } else {
        output.innerHTML = "Wrong Information !"
    }
}