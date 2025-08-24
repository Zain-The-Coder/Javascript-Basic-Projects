//simple calculator
function addition () {
    let x = parseInt(document.getElementById("firstNumber").value);
    let y = parseInt(document.getElementById("secondNumber").value);
    let output = " " ;
    output += (x + y);
    let printer = document.getElementById("output") ;
    printer.innerHTML = "The Addition of " + x + " and " + y + " is : " + output ;
}
function substraction () {
    let x = parseInt(document.getElementById("firstNumber").value);
    let y = parseInt(document.getElementById("secondNumber").value);
    let output = " " ;
    output += (x - y);
    let printer = document.getElementById("output") ;
    printer.innerHTML = "The Substraction of " + x + " and " + y + " is : " + output ;
}
function multiplication () {
    let x = parseInt(document.getElementById("firstNumber").value);
    let y = parseInt(document.getElementById("secondNumber").value);
    let output = " " ;
    output += (x * y);
    let printer = document.getElementById("output") ;
    printer.innerHTML = "The Multiplication of " + x + " and " + y + " is : " + output ;
}
function division () {
    let x = parseInt(document.getElementById("firstNumber").value);
    let y = parseInt(document.getElementById("secondNumber").value);
    let output = " " ;

    output += (x / y);
    let printer = document.getElementById("output") ;
    printer.innerHTML = "The Division of " + x + " and " + y + " is : " + output ;
}
function remainder () {
    let x = parseInt(document.getElementById("firstNumber").value);
    let y = parseInt(document.getElementById("secondNumber").value);
    let output = " " ;

    output += (x % y);
    let printer = document.getElementById("output");
    printer.innerHTML = "The Remainder left is : " + output;
}




