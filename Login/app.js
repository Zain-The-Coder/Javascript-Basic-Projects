
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
        output.innerHTML = "The New User Has Been Added" ;
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

// let saveData = localStorage.getItem("username");
// if(saveData) {
//     document.getElementById("output").innerHTML = "Welcome Back " + saveData + " !";
// }
// function saveName () {
//     let x = document.getElementById("usernameInput").value;
//     if(x) {
//         localStorage.setItem("username" , x);
//         document.getElementById("output").innerHTML = "Welcome " + x + " your name has been saved !";
//         document.getElementById("usernameInput").value = " " ;
//     } else {
//         document.getElementById("output").innerHTML = "Invalid Input !";
//     }
// }

// let saveName = localStorage.getItem("userName");
// let saveNotes = localStorage.getItem("userNote");

// if(saveName && saveNote) {
//     document.getElementById("output").innerHTML = "THE OLD USER IS : " + saveName + "<br>" + "YOUR NOTE : " + saveNotes ;
// }

// function saveNote () {
//     let x = document.getElementById("userName").value;
//     let y = document.getElementById("userNote").value;
//     if(x && y) {
//         document.getElementById("output").innerHTML = "Welcome " + x + " your name and note has been saved."
//         localStorage.setItem("userName" , x);
//         localStorage.setItem("userNote" , y);
//         document.getElementById("userName").value = " " ;
//         document.getElementById("userNote").value = " " ;
//     } else {
//         document.getElementById("output").innerHTML = "Please Fill All Requirements !";
//     }
// }

