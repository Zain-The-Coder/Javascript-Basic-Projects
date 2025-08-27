let firstImage = document.getElementById("firstImage");
let secondImage = document.getElementById("secondImage");
let thirdImage = document.getElementById("thirdImage");
let message = document.getElementById("message");
let isFlipped = false ; 

const changer = (userNumber) => {
    
    if(!isFlipped) {
        let generateNumber = Math.ceil(Math.random() * 3);
        console.log(generateNumber)
    if(generateNumber === 1) {
        firstImage.src = "./Images/king-card.jpg" ;
        secondImage.src = "./Images/joker.webp" ;
        thirdImage.src = "./Images/joker.webp" ;
    } else if (generateNumber === 2) {
        firstImage.src = "./Images/joker.webp" ;
        secondImage.src = "./Images/king-card.jpg" ;
        thirdImage.src = ".//Images/joker.webp" ;
    } else if(generateNumber === 3) {
        firstImage.src = "./Images/joker.webp" ;
        secondImage.src = "./Images/joker.webp" ;
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
    isFlipped = false ;
    message.innerHTML = ""
}
