let first = '<div id="container"<div></div><div></div><div></div><div class="first"></div><div></div><div></div><div></div><div></div</div>';

let second = '<div id="container"<div></div><div></div><div></div><div class="first"></div><div></div><div class="first"></div><div></div><div></div><div></div</div>';

let third = ' <div id="container"><div class="first"></div><div></div><div></div><div></div><div class="first"></div><div></div><div></div><div></div><div class="first"></div</div>';

let fourth = '<div id="container"<div class="first"></div><div></div><div class="first"></div><div></div><div></div><div></div><div class="first"></div><div></div><div class="first"></div </div>'

let fifth = '<div id="container"<div class="first"></div><div></div> <div class="first"></div><div></div><div class="first"></div><div></div><div class="first"></div><div></div><div class="first"></div </div>'

let sixth = '<div id="container"><div class="first"></div><div></div><div class="first"></div><div class="first"></div><div></div><div class="first"></div><div class="first"></div><div></div><div class="first"></div</div>'




function play () {
    let y = document.getElementById("printer");
    let x = Math.ceil(Math.random() * 6) ;
    console.log(x)
        if(x === 1) {
        y.innerHTML = first ;
    } else if (x === 2) {
        y.innerHTML = second ;
    } else if (x === 3) {
        y.innerHTML = third ;
    } else if(x === 4) {
        y.innerHTML = fourth ;
    } else if (x === 5) {
        y.innerHTML = fifth;
    } else if(x === 6) {
        y.innerHTML = sixth;
    }
}

