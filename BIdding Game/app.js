// let heading = document.getElementById("heading1");
// let paragraph = document.getElementById("paragraph1");
// heading.innerHTML = 1000 ;

// function printer () {
//     let userBidAmount = parseInt(prompt("Enter your amount for bidding :"));
//     let userBidNumber = parseInt(prompt("enter your number for guess that you are right or no :"));
//     let bidNumber = generateRandom() ;
//     let IsOutputMatched = matched(userBidNumber , bidNumber);
//     output (userBidAmount , IsOutputMatched);
//     console.log(bidNumber);

// }
// function generateRandom () {
//     let randomNumber = Math.ceil(Math.random() * 5);
//     return randomNumber ;
// }
// function matched (userBidNumber , bidNumber) {
//     let isMatched = false ;
//     if(userBidNumber === bidNumber) {
//         isMatched = true ;
//     }
//     return isMatched ;
// }
// function output (userBidAmount , IsOutputMatched) {
//     if(IsOutputMatched === true) {
//         heading.innerHTML = (heading.innerHTML + userBidAmount);
//         paragraph.innerHTML = "Congratulations ! you win " + userBidAmount + " rupees";
//     } else {
//         heading.innerHTML = (heading.innerHTML - userBidAmount);
//         paragraph.innerHTML = "Oh ! you lose " + userBidAmount + " rupees ."
//     }
// }

