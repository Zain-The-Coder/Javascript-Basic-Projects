



// let output = document.getElementById("output");
// let userEmails = [ ] ;
// let userPasswords = [ ] ;

// function newUser () {

//     let emailOfUser = takingEmail () ;
//     let passwordOfUser = takingPassword () ;
//     if(userEmails.includes(emailOfUser)) {
//         output.innerHTML = "This Email Is Already Registered !" ;
//         return ;
//     }
//     if(emailOfUser && passwordOfUser) {
//         let userinfo = {
//             email : emailOfUser , 
//             password : passwordOfUser ,
//         }
//         userEmails.push(userinfo.email);
//         userPasswords.push(userinfo.password);
//         console.log(userinfo);
//         output.innerHTML = "The New User Has Been Entered !" ;
//     } else {
//         output.innerHTML = "Please fill The Above Requirements !" ;
//     }
// }

// function takingEmail () {
//     let userEmail = document.getElementById("formField1").value ;
//     return userEmail ;
// }
// function takingPassword () {
//     let userPassword = document.getElementById("formField2").value ;
//     return userPassword ;
// }

// function oldUser () {
//     let oldUserEmail = document.getElementById("formField1").value ;
//     let oldUserPassword = document.getElementById("formField2").value ;
//     let matchedEmail = userEmails.indexOf(oldUserEmail) ;
//     if(matchedEmail !== -1 && userPasswords[matchedEmail] === oldUserPassword) {
//         output.innerHTML = "Welcome "+ oldUserEmail + " ! Login successfully." ;
//     } else if(matchedEmail !== -1) {
//         output.innerHTML = "Authentication Failed !" ;
//     } else {
//         output.innerHTML = "Invaild Input !"
//     }

// }



let userNames = [] ;
let userEmails = [] ;
let userPasswords = [] ;
let printer = document.getElementById("print"); 

function signIn () {
    let nameTaker = takingUsername () ;
    let emailTaker = takingUseremail () ;
    let passwordTaker = takingUserPassword () ;

    if(userNames.includes(nameTaker)) {
        printer.innerHTML = "This Username Is Already Been Taken !" ;
        return ;
    } else if(userEmails.includes(emailTaker)) {
        printer.innerHTML = "This Email Is Already Been Registered !" ;
        return ;
    } 

    let userInfo = {
        userName : nameTaker ,
        userEmail : emailTaker ,
        userPassword : passwordTaker,
    }

    userNames.push(userInfo.userName);
    userEmails.push(userInfo.userEmail);
    userPasswords.push(userInfo.userPassword);

    if(userInfo.userName && userInfo.userEmail && userInfo.userPassword) {
        printer.innerHTML = "Login Successfully !" ;
    } else {
        printer.innerHTML = "Please Fill The Above All Requirements !";
    }
    console.log(userInfo)
}
console.log(userNames);
console.log(userEmails);
console.log(userPasswords);

function takingUsername () {
    let nameOfUser = document.getElementById("formField1").value ;
    return nameOfUser ;
}

function takingUseremail () {
    let emailOfUser = document.getElementById("formField2").value ;
    return emailOfUser ;
}

function takingUserPassword () {
    let passwordOfUser = document.getElementById("formField3").value ;
    return passwordOfUser ;
}

let print = document.getElementById("priint");

function signUp () {
    let oldNameTaker = takingUsername () ;
    let OldEmailTaker = takingUseremail () ;
    let OldPasswordTaker = takingUserPassword () ;
    let matchedUsername = userNames.indexOf(oldNameTaker) ;
        
    if(matchedUsername !== -1) {
        print.innerHTML = "User Doesn't Exist !" ;
    } else if(userEmails[matchedUsername] !== OldEmailTaker) {
        print.innerHTML = "Your Email Is Wrong !" ;
    } else if(userPasswords[matchedUsername] !== OldPasswordTaker){
        print.innerHTML = "Wrong Password !" ;
    }

}