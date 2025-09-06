let userInput = document.getElementById("userInput");
let message = document.getElementById("message");
let changerdiv = document.getElementById("curdDiv");
let mainButton = document.getElementById("button");
let taskBeingEdited = null ;


function addItem () {
    let shortDiv = document.createElement("div");
    changerdiv.appendChild(shortDiv);

    if (taskBeingEdited) {
        taskBeingEdited.textContent = userInput.value ;
        message.style.color = "yellow" ;
        message.textContent = "Task Edited !" ;
        userInput.value = "" ;
        mainButton.textContent = "Add Task" ;
        taskBeingEdited = null ;
        return ;
    } 
    else if(userInput.value === "") {
    message.innerHTML = "Input Field Is Empty !" ;
    message.style.color = "red" ;
    return ;
    } 
    else {
    message.innerHTML = "Task Is Added !" ;
    message.style.color = "green" ;    
    let taskDiv = document.createElement("div");

    let taskHead = document.createElement("h2");
    let h2Txt = document.createTextNode("Remaining Task");
    taskHead.appendChild(h2Txt);
    taskDiv.appendChild(taskHead);

    
    let divLi = document.createElement("li");
    divLi.style.color = "bisque" ;
    divLi.textContent = userInput.value ;
    divLi.style.marginTop = "-15px" ;
    divLi.style.marginBottom = "5px"

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

    completeButton.style.color = "black" ;
    completeButton.style.backgroundColor = "lightblue" ;
    completeButton.style.height = "29px" ;
    completeButton.style.width = "100px" ;
    completeButton.style.borderRadius = "5px" ;
    completeButton.style.fontSize = "14px" ; 
    completeButton.style.padding = "0px" ;
    completeButton.style.cursor = "pointer" ;

    
    removeButton.style.color = "black" ;
    removeButton.style.backgroundColor = "red" ;
    removeButton.style.height = "29px" ;
    removeButton.style.width = "25px" ;
    removeButton.style.borderRadius = "5px" ;
    removeButton.style.fontSize = "14px" ;
    removeButton.style.padding = "0px" ;
    removeButton.style.width = "130px" ;
    removeButton.style.marginLeft = "10px" ;
    removeButton.style.marginRight = "10px" ;
    removeButton.style.cursor = "pointer" ;

    
    editButton.style.color = "black" ;
    editButton.style.backgroundColor = "green" ;
    editButton.style.height = "29px" ;
    editButton.style.width = "25px" ;
    editButton.style.borderRadius = "5px" ;
    editButton.style.fontSize = "14px" ;
    editButton.style.padding = "0px" ;
    editButton.style.width = "100px" ;
    editButton.style.cursor = "pointer" ;


    
    shortDiv.appendChild(taskDiv);
    shortDiv.appendChild(divLi);
    shortDiv.appendChild(buttonDiv);

    shortDiv.style.border = "2.5px solid gold" ;
    shortDiv.style.width = "80%"
    shortDiv.style.margin = "auto" ;
    shortDiv.style.padding = "10px" ;
    shortDiv.style.marginBottom = "20px" ;
    shortDiv.style.marginTop = "20px" ;
    shortDiv.style.borderRadius = "20px" ;
    shortDiv.style.animation = "come 10s ease" ;
    taskHead.style.color = "red" ;
    taskHead.style.marginTop = "-5px"

    removeButton.setAttribute("onClick" , "removal(this)"); 

    completeButton.addEventListener("click" , function () {
        let comRemoval = removeButton.nextSibling ;
        let edRemoval = removeButton.previousSibling ;
        buttonDiv.removeChild(comRemoval);
        buttonDiv.removeChild(edRemoval);
        shortDiv.style.backgroundColor  = "green" ;
        taskHead.textContent = "Completed Task" ;
        taskHead.style.color = "white" ;
        divLi.style.color = "black" ;
    })

    editButton.addEventListener("click" , function () {
        userInput.value = divLi.textContent ;
        message.innerHTML = "Your Task Is Being Editing..." ;
        message.style.color = "white" ;
        mainButton.textContent = "Edit Task" ;
        taskBeingEdited = divLi ;
    })
    userInput.value = "" ; 
}
}

const removal = (targetEl) => {
    let parentOfRemoval = targetEl.parentNode.parentNode ;
    changerdiv.removeChild(parentOfRemoval);
}
