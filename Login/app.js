let heading = document.getElementById("heading1");
heading.innerHTML = "LOGIN APP" ;

let userEmails = [] ;
let userPasswords = [] ;

function emailReceiver () {
    let first = document.getElementById("formField1").value;
    return first;   
}

function passwordReceiver () {
    let second = document.getElementById("formField2").value ;
    return second ;

}

function newUser () {
    let firstEmails = emailReceiver();
    let firstPasswords = passwordReceiver () ;
    userEmails.push(firstEmails);
    userPasswords.push(firstPasswords);
    console.log(userEmails);
    console.log(userPasswords);
}

function oldUser () {

}