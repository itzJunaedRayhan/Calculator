let btns      = document.querySelectorAll('.btn');
let display   = document.getElementById("display");
let operators = document.querySelectorAll(".sbtn");
let clear     = document.getElementById("clear");
let equal     = document.getElementById("eqbtn");
let reset     = document.getElementById("reset");


//  get input value from input Field:
btns.forEach(btn => btn.addEventListener("click", (e) => {
    display.value += e.target.value;
}))

//  get Operators Value from input:
operators.forEach(operator => operator.addEventListener("click", (e) => {
    display.value += e.target.value;
}))

//  delete Button Implemented:
clear.addEventListener("click", () => {
    const value = display.value.split("");
    value.pop();
    display.value = value.join("");
})


//  AC Button Implemented:
reset.addEventListener("click", () => {
    display.value = "";
})


//  calculate Function:
function calculate () {
    let result = eval(display.value)
    const stringNumber  = result.toString();
    const integerDigits = parseFloat(stringNumber.split('.')[0]);
    const decimalDigits = stringNumber.split('.')[1];
    console.log(integerDigits, decimalDigits)
    let integerDisplay, output;
    if (isNaN(integerDigits)) {
        integerDisplay = '';
    } else {
        integerDisplay = integerDigits.toLocaleString('en', {
            maximumFractionDigits: 0
        })
    }
    if (decimalDigits != null) {
        output = `${integerDisplay}.${decimalDigits}`;
    }else{
        integerDisplay
    }

    try{
        display.value = output;
    }catch(e) {
        alert("Please put a valid Number");
    }
}

equal.addEventListener("click", calculate);