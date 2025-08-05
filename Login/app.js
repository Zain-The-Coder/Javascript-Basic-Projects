



let output = document.getElementById("output");
let userEmails = [ ] ;
let userPasswords = [ ] ;

function newUser () {
    oldUser()
    let emailOfUser = takingEmail () ;
    let passwordOfUser = takingPassword () ;
    if(emailOfUser && passwordOfUser) {
        let userinfo = {
            email : emailOfUser , 
            password : passwordOfUser ,
        }
        userEmails.push(userinfo.email);
        userPasswords.push(userinfo.password);
        console.log(userinfo);
        output.innerHTML = "The New User Has Been Entered !" ;
    } else {
        output.innerHTML = "Please fill The Above Requirements !" ;
    }
}

function takingEmail () {
    let userEmail = document.getElementById("formField1").value ;
    return userEmail ;
}
function takingPassword () {
    let userPassword = document.getElementById("formField2").value ;
    return userPassword ;
}

function oldUser () {
    let oldUserEmail = document.getElementById("formField1").value ;
    let oldUserPassword = document.getElementById("formField2").value ;
    let matchedEmail = userEmails.indexOf(oldUserEmail) ;
    if(matchedEmail !== -1 && userPasswords[matchedEmail] === oldUserPassword) {
        output.innerHTML = "Welcome "+ oldUserEmail + " ! Login successfully." ;
    } else if(matchedEmail !== -1) {
        output.innerHTML = "Authentication Failed !" ;
    } else {
        output.innerHTML = "Invaild Input !"
    }

}