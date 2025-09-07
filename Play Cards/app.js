
let firstImage = document.getElementById("firstImage");
let secondImage = document.getElementById("secondImage");
let thirdImage = document.getElementById("thirdImage");
let message = document.getElementById("message");
let generateNumber = Math.ceil(Math.random() * 3);
console.log(generateNumber);
let isFlipped = false ;     

const changer1 = (userNumber) => {
    if(!isFlipped) {
    if(generateNumber === 1) {
        firstImage.src = "./Images/king-card.jpg" ;
    } 
    else if (generateNumber === 2) {
        firstImage.src = "./Images/joker.webp" ;
    }
     else if(generateNumber === 3) {
        firstImage.src = "./Images/joker.webp" ;
    }
    isFlipped = true ;
    if(userNumber === generateNumber) {
        message.innerHTML = "🎉 You Guessed Right ! " + "<br>" + "Congratulation , You Won the Game ." ;
        message.style.color = "green"
       // message.style.fontFamily = "poppins"

    } else {
        message.innerHTML = "❌ Better Luck Next Time ! " + "<br>" + "You Lost ."
        message.style.color = "red";
    }
}
}

const changer2 = (userNumber) => {
    if(!isFlipped) {
    if(generateNumber === 1) {
        secondImage.src = "./Images/joker.webp" ;
    } 
    else if(generateNumber === 2) {
        secondImage.src = "./Images/king-card.jpg" ;
    } 
    else if(generateNumber === 3) {
        secondImage.src = "./Images/joker.webp" ;
    }
    isFlipped = true ;
    if(userNumber === generateNumber) {
        message.innerHTML = "🎉 You Guessed Right ! " + "<br>" + "Congratulation , You Won the Game ." ;
        message.style.color = "green"
       // message.style.fontFamily = "poppins"

    } else {
        message.innerHTML = "❌ Better Luck Next Time ! " + "<br>" + "You Lost ."
        message.style.color = "red";
    }

}
}

const changer3 = (userNumber) => {
    if(!isFlipped) {
    if(generateNumber === 1) {
        thirdImage.src = "./Images/joker.webp" ;
    } 
    else if(generateNumber === 2) {
        thirdImage.src = "./Images/joker.webp" ;
    }
    else if(generateNumber === 3) {
        thirdImage.src = "./Images/king-card.jpg" ;
    }
    isFlipped = true ;

    if(userNumber === generateNumber) {
        message.innerHTML = "🎉 You Guessed Right ! " + "<br>" + "Congratulation , You Won the Game ." ;
        message.style.color = "green"
       // message.style.fontFamily = "poppins"

    } else {
        message.innerHTML = "❌ Better Luck Next Time ! " + "<br>" + "You Lost ."
        message.style.color = "red";
    }
}

}

const reset = () => {
    firstImage.src = "./Images/back-of-card.png" ;
    secondImage.src = "./Images/back-of-card.png" ;
    thirdImage.src = "./Images/back-of-card.png" ;
    generateNumber = Math.ceil(Math.random() * 3);
    isFlipped = false ;
    message.innerHTML = ""
}
