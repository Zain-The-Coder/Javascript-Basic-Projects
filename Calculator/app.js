let userInput = document.getElementById("userInput");
let row1_1 = document.getElementById("row1-1");
let row1_2 = document.getElementById("row1-2");
let row1_3 = document.getElementById("row1-3");
let row1_4 = document.getElementById("row1-4");
let row2_1 = document.getElementById("row2-1");
let row2_2 = document.getElementById("row2-2");
let row2_3 = document.getElementById("row2-3");
let row2_4 = document.getElementById("row2-4");
let row3_1 = document.getElementById("row3-1");
let row3_2 = document.getElementById("row3-2");
let row3_3 = document.getElementById("row3-3");
let row3_4 = document.getElementById("row3-4");
let row4_1 = document.getElementById("row4-1");
let row4_2 = document.getElementById("row4-2");
let row4_3 = document.getElementById("row4-3");
let row4_4 = document.getElementById("row4-4");



row1_1.addEventListener("click" , () => {
    userInput.value  += "%"; 
});
row1_2.addEventListener("click" , () => {
    userInput.value = "" ;
})
row1_3.addEventListener("click" , () => {
    userInput.value += "÷" ;
})  
row1_4.addEventListener("click" , () => {
    userInput.value = "" ;
})