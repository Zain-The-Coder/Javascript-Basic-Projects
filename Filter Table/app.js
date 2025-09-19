
let userInput = document.getElementById("form-field");
let table = document.getElementById("myTable");

userInput.addEventListener("keyup" , () => {
    let tableData = table.childNodes;
    for(let i = 0 ; i < tableData.length ; i++) {
        if(tableData[i].nodeType === 1) {
            let data = tableData[i].childNodes;
            for(let j = 0 ; j < data.length ; j++) {
                if(data[j].nodeType === 1) {
                    let element = data[j];

                    let countryName = (data[j].childNodes[0].textContent);
                    if(countryName.toLowerCase().indexOf(userInput.value) !== -1) {
                        element.style.display = "" ;

                    } else {
                        element.style.display = "none" ;
                    }
                }
            }
        }
    }
})