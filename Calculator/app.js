//Declaring A Varibales


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
let row5_1 = document.getElementById("row5-1");
let row5_2 = document.getElementById("row5-2");
let row5_3 = document.getElementById("row5-3");
let finalEl = document.getElementById("row5-4");



//Flages

let isPercentage = false ;
let isAdd = false ;
let isSub = false ;
let isMulti = false ;
let isDiv = false ;
let isDot = false ;


row1_1.addEventListener("click" , () => {
    if(isPercentage === false) {
    userInput.value  += "%"; 
    isPercentage = true ;
    }
});

row1_2.addEventListener("click" , () => {
    userInput.value = "" ;
});

row1_3.addEventListener("click" , () => {
    if(isDiv === false) {
    userInput.value += "÷" ;
    operation += "/" ;
    isDiv = true ;
    }
});  

row1_4.addEventListener("click" , () => {
    userInput.value = userInput.value.slice(0 , -1) ;
});

row2_1.addEventListener("click" , () => {
    userInput.value += "7" ;
    isAdd = false ;
    isSub = false ;
    isMulti = false ;
    isDiv = false ;
    isPercentage = false ;
});

row2_2.addEventListener("click" , () => {
    userInput.value += "8" ;
    isAdd = false ;
    isSub = false ;
    isMulti = false ;
    isDiv = false ;
    isPercentage = false ;
});

row2_3.addEventListener("click" , () => {
    userInput.value += "9" ;
    isAdd = false ;
    isSub = false ;
    isMulti = false ;
    isDiv = false ;
    isPercentage = false ;
});

row2_4.addEventListener("click" , () => {
    if(isMulti === false) {
        userInput.value += "x" ;
        operation += "x" ;
        isMulti = true ;
    }

});

row3_1.addEventListener("click" , () => {
    userInput.value += "4" ;
    isAdd = false ;
    isSub = false ;
    isMulti = false ;
    isDiv = false ;
    isPercentage = false ;
});

row3_2.addEventListener("click" , () => {
    userInput.value += "5" ;
    isAdd = false ;
    isSub = false ;
    isMulti = false ;
    isDiv = false ;
    isPercentage = false ;
});

row3_3.addEventListener("click" , () => {
    userInput.value += "6" ;
    isAdd = false ;
    isSub = false ;
    isMulti = false ;
    isDiv = false ;
    isPercentage = false ;
});

row3_4.addEventListener("click" , () => {
    if(isSub === false) {
        userInput.value += "-" ;
        operation += "-" ;
        isSub = true ;
    }
});

row4_1.addEventListener("click" , () => {
    userInput.value += "1" ;
    isAdd = false ;
    isSub = false ;
    isMulti = false ;
    isDiv = false ;
    isPercentage = false ;
});

row4_2.addEventListener("click" , () => {
    userInput.value += "2" ;
    isAdd = false ;
    isSub = false ;
    isMulti = false ;
    isDiv = false ;
    isPercentage = false ;
});


row4_3.addEventListener("click" , () => {
    userInput.value += "3" ;
    isAdd = false ;
    isSub = false ;
    isMulti = false ;
    isDiv = false ;
    isPercentage = false ;
});

row4_4.addEventListener("click" , () => {
    if(isAdd === false) {
        userInput.value += "+" ;
        operation += "+" ;
        isAdd = true ;
    }
})

row5_1.addEventListener("click" , () => {
    isAdd = false ;
    isSub = false ;
    isMulti = false ;
    isDiv = false ;
    isPercentage = false ;
    let x = userInput.value ;
    userInput.value = "" ;
    userInput.value += x * x ;

    
}) ;

row5_2.addEventListener("click" , () => {
    userInput.value += "0" ;
    isAdd = false ;
    isSub = false ;
    isMulti = false ;
    isDiv = false ;
    isPercentage = false ;
});

row5_3.addEventListener("click" , () => {
    if(isDot === false) {
        userInput.value += "." ;
        isDot = true ;
    }
})

finalEl.addEventListener("click" , () => {
    isAdd = false ;
    isSub = false ;
    isMulti = false ;
    isDiv = false ;
    isPercentage = false ;

    try {
        let exp = userInput.value.replace(/x/g , "*").replace(/÷/g , "/");
        let buildFunction = new Function ("return " + exp);
        userInput.value = buildFunction ;
    } catch (e) {
        userInput.value = "Syntax Error !" ;
        console.log(e);
    }
})

