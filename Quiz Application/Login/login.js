let errorMessanger = document.getElementById("print");
let user_name = document.getElementById("formField1");
let user_email = document.getElementById("formField2");
let user_password = document.getElementById("formField3");


function signUp () {
    errorDetector();
}

function errorDetector () {
    let userName = user_name.value;
    let userEmail = user_email.value ;
    let userPassword = user_password.value ;


     if(!userName || !userEmail || !userPassword) {
        errorMessanger.innerHTML = "Please Fill The Above Required Fields !" ;
        errorMessanger.style.color = "red" ;
        errorMessanger.style.fontWeight = "bold";
        return ;
    }

    for(let i = 0 ; i < userEmail.length ; i++) {
        if(userEmail[i] !== "@") {
            errorMessanger.innerHTML = "Please Enter Valid Email !" ;
            errorMessanger.style.color = "red" ;
            errorMessanger.style.fontWeight = "bold";
        }
        return ;
    }

    if(userPassword.length < 6) {
        errorMessanger.innerHTML = "Password Must Be 6 Characters !";
        errorMessanger.style.color = "red" ;
        errorMessanger.style.fontWeight = "bold";
        return ;
    }
}