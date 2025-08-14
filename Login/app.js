



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



// let userNames = JSON.parse(localStorage.getItem("NamesOfUser")) || [] ;
// let userEmails = JSON.parse(localStorage.getItem("EmailsOfUser")) || [];
// let userPasswords = JSON.parse(localStorage.getItem("PasswordsOfUser")) || [];
// let printer = document.getElementById("print"); 

// function signIn () {
//     let nameTaker = takingUsername () ;
//     let emailTaker = takingUseremail () ;
//     let passwordTaker = takingUserPassword () ;
    
//     if(userNames.includes(nameTaker)) {
//         printer.innerHTML = "This Username Is Already Been Taken !" ;
//         return ;
//     } else if(userEmails.includes(emailTaker)) {
//         printer.innerHTML = "This Email Is Already Been Registered !" ;
//         return ;
//     } 
//     let atCount = 0;
//     for(let i = 0; i < emailTaker.length; i++) {
//         if(emailTaker[i] === "@") {
//             atCount++ ;
//         }
//     }
//     if(atCount !== 1) {
//         printer.innerHTML = "Use Valid Email !" ;
//         return ;
//     }
//     let userInfo = {
//         userName : nameTaker ,
//         userEmail : emailTaker ,
//         userPassword : passwordTaker,
//     }

//     userNames.push(userInfo.userName);
//     userEmails.push(userInfo.userEmail);
//     userPasswords.push(userInfo.userPassword);

//     if(userInfo.userName && userInfo.userEmail && userInfo.userPassword) {
//         printer.innerHTML = "Login Successfully !" ;
//     } else {
//         printer.innerHTML = "Please Fill The Above All Requirements !";
//     }
//     localStorage.setItem("NamesOfUser" , JSON.stringify(userNames));
//     localStorage.setItem("EmailsOfUser" , JSON.stringify(userEmails));
//     localStorage.setItem("PasswordsOfUser" , JSON.stringify(userPasswords));

//     console.log(userInfo)
//     document.getElementById("formField1").value = "" ;
//     document.getElementById("formField2").value = "" ;
//     document.getElementById("formField3").value = "" ;
// }
// console.log(userNames);
// console.log(userEmails);
// console.log(userPasswords);

// function takingUsername () {
//     let nameOfUser = document.getElementById("formField1").value ;
//     return nameOfUser ;
// }

// function takingUseremail () {
//     let emailOfUser = document.getElementById("formField2").value ;
//     return emailOfUser ;
// }

// function takingUserPassword () {
//     let passwordOfUser = document.getElementById("formField3").value ;
//     return passwordOfUser ;
// }

// let print = document.getElementById("priint");

// function signUp () {
//     let oldNameTaker = takingUsername () ;
//     let OldEmailTaker = takingUseremail () ;
//     let OldPasswordTaker = takingUserPassword () ;
//     let matchedUsername = userNames.indexOf(oldNameTaker) ;
        
//     if(matchedUsername === -1) {
//         print.innerHTML = "User Doesn't Exist !" ;
//     } else if(userEmails[matchedUsername] !== OldEmailTaker) {
//         print.innerHTML = "Your Email Is Wrong !" ;
//     } else if(userPasswords[matchedUsername] !== OldPasswordTaker){
//         print.innerHTML = "Wrong Password !" ;
//     } else {
//         print.innerHTML = "Welcome " + oldNameTaker + " Login Successfully !" ;
//     }

// }

// let userNames = JSON.parse(localStorage.getItem("userKnames")) || [] ;
// let userEmails = JSON.parse(localStorage.getItem("userKemails")) || [] ;
// let userPasswords = JSON.parse(localStorage.getItem("userKpasswords")) || [];
// let printer = document.getElementById("print");
// let print = document.getElementById("priint");

// function signIn () {
// let nameTaker = takingName();
// let emailTaker = takingemail();
// let passwordTaker = takingpassword();

// let atCount = 0;
// let error = false ;
//     for(let i = 0; i < emailTaker.length; i++) {
//         if(emailTaker[i] === "@") {
//             atCount++ ;
//         }
//     } 
//     for(let i = 0 ; i < emailTaker.length; i++) {
//         if (emailTaker[i] === " " ){
//                 error = true ;
//             }
//         }
    
//     if(!nameTaker || !emailTaker || !passwordTaker) {
//         printer.innerHTML = "Please Fill The Above All Requirements !" ;
//         return ;
//     } else {
//         printer.innerHTML = "Login Successfully !" ;
//     }
//     let userInfo = {
//         Name : nameTaker ,
//         Email : emailTaker , 
//         Password : passwordTaker,
//     }

//     if(atCount !== 1) {
//         printer.innerHTML = "Please Use Valid Email !" ;
//         return ;
//     } 
//     if(error === true) {
//         printer.innerHTML = "Please Remove Spaces From Email !" ;
//         return ;
//     }

//     if(userNames.includes(userInfo.Name)) {
//         printer.innerHTML = "The Username Is Already Been Taken !" ;
//         return ;
//     } 
//     if(userEmails.includes(userInfo.Email)) {
//         printer.innerHTML = "This Email Is Already Been Registered !" ;
//         return ;
//     }

// localStorage.setItem("userKnames " , JSON.stringify(userNames));
// localStorage.setItem("userKemails" , JSON.stringify(userEmails));
// localStorage.setItem("userKpasswords" , JSON.stringify(userPasswords));

// document.getElementById("formField1").value = "" ;
// document.getElementById("formField2").value = "" ;
// document.getElementById("formField3").value = "" ;

// userNames.push(userInfo.Name);
// userEmails.push(userInfo.Email);
// userPasswords.push(userInfo.Password);
// console.log(userEmails , userNames , userPasswords);


// }

// function takingName () {
//     let nameOfUser = document.getElementById("formField1").value;
//     return nameOfUser;
// }
// function takingemail () {
//     emailOfUser = document.getElementById("formField2").value ;
//     return emailOfUser;
// }
// function takingpassword () {
//     passwordOfUser = document.getElementById("formField3").value;
//     return passwordOfUser;
// }

// function signUp() {
//     let oldUserName = takingName() ;
//     let oldUserEmail = takingemail() ;
//     let oldUserPassword = takingpassword() ;
//     let matchedUsername = userNames.indexOf(oldUserName);
//     if(matchedUsername === -1) {
//         print.innerHTML = "User Doesn't Exist ! <br> You Should Check User Name." ;
//         return ;
//     }
//     if(userEmails[matchedUsername] !== oldUserEmail) {
//         print.innerHTML = "Incorrect Email !" ;
//     }
//     if(userPasswords[matchedUsername] !== oldUserPassword) {
//         print.innerHTML = "Incorrect Password !" ;
//     }
// }




let printer = document.getElementById("print");
let userName = [] ;
let userEmail = [] ;
let userPassword = [] ;

   function signIn () {
let nameTaker = nameChecker();
let emailTaker = emailChecker();
let passwordTaker = passwordChecker();

let atCount = 0;
let error = false ;
    for(let i = 0; i < emailTaker.length; i++) {
        if(emailTaker[i] === "@") {
            atCount++ ;
        }
    } 
    for(let i = 0 ; i < emailTaker.length; i++) {
        if (emailTaker[i] === " " ){
                error = true ;
            }
        }
    
    if(!nameTaker || !emailTaker || !passwordTaker) {
        printer.innerHTML = "Please Fill The Above All Requirements !" ;
        return ;
    } else {
        printer.innerHTML = "Login Successfully !" ;
    }
    let userInfo = {
        Name : nameTaker ,
        Email : emailTaker , 
        Password : passwordTaker,
    }
    let x = localStorage.getItem("theUserName") ;
    let y = localStorage.getItem("theUserEmail") ;
    let z = localStorage.getItem("theUserPassword") ;

    if(x) {
        userName.push(JSON.parse(x)) ;
    } 
    if(y) {
        userEmail.push(JSON.parse(y)) ;
    } 
    if(z) {
        userPassword.push(JSON.parse(z));
    }

    if(atCount !== 1) {
        printer.innerHTML = "Please Use Valid Email !" ;
        return ;
    } 
    if(error === true) {
        printer.innerHTML = "Please Remove Spaces From Email !" ;
        return ;
    } 


    if(userName.includes(userInfo.Name)) {
        printer.innerHTML = "The Username Is Already Been Taken !" ;
        return ;
    } 
    if(userEmail.includes(userInfo.Email)) {
        printer.innerHTML = "This Email Is Already Been Registered !" ;
        return ;
    }
    userName.push(nameTaker);
    userEmail.push(emailTaker) ;
    userPassword.push(passwordTaker);

    localStorage.setItem("theUserName" , JSON.stringify(userName)) ;
    localStorage.setItem("theUserEmail" , JSON.stringify(userEmail)) ;
    localStorage.setItem("theUserPassword " , JSON.stringify(userPassword)) ;

    document.getElementById("formField1").value = "" ;
    document.getElementById("formField2").value = "" ;
    document.getElementById("formField3").value = "" ;
    console.log(userName) ; console.log(userEmail) ; console.log(userPassword); 
}

function nameChecker () {
    let x = document.getElementById("formField1").value ;
    return x;
}
function emailChecker () {
    let y = document.getElementById("formField2").value ;
    return y;    
}
function passwordChecker () {
    let z = document.getElementById("formField3").value ;
    return z;
}

let printer2 = document.getElementById("priint");

function signUp () {
    
}
function 