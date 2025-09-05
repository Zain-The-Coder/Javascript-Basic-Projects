let userInput = document.getElementById("userInput");
let message = document.getElementById("message");
let changerdiv = document.getElementById("curdDiv");


function addItem () {
if(userInput.value === "") {
    message.innerHTML = "Input Field Is Empty !" ;
    message.style.color = "red" ;
} else {
    message.innerHTML = "Task Is Added !" ;
    message.style.color = "green" ;
    
    let taskDiv = document.createElement("div");

    let taskHead = document.createElement("h2");
    let h2Txt = document.createTextNode("Remaining Task");
    taskHead.appendChild(h2Txt);
    taskDiv.appendChild(taskHead);
    
    let divLi = document.createElement("li");
    let liTxt = document.createTextNode(userInput.value);
    divLi.appendChild(liTxt) ;

    let buttonDiv = document.createElement("div");
    let editButton = document.createElement("button");
    let removeButton = document.createElement("button");
    let completeButton = document.createElement("button");

    editButton.textContent = "Edit Task" ;
    removeButton.textContent = "Remove Task" ;
    completeButton.textContent = "Completed !" ;

    buttonDiv.appendChild(editButton) ;
    buttonDiv.appendChild(removeButton) ;
    buttonDiv.appendChild(completeButton);
    
    changerdiv.appendChild(taskDiv);
    changerdiv.appendChild(divLi);
    changerdiv.appendChild(buttonDiv);
}
}