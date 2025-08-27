let firstImage = document.getElementById("firstImage");
let secondImage = document.getElementById("secondImage");
let thirdImage = document.getElementById("thirdImage");

const changer = () => {
    let generateNumber = Math.ceil(Math.random() * 3);
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
}