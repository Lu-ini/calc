const SCREEN = document.querySelector('.display');


const CLEAR = document.querySelector('.C');
const ERASE = document.querySelector('.erase');
const PERCENT = document.querySelector('.percent');
const DIVISION = document.querySelector('.division');
const TIMES = document.querySelector('.times');
const MINUS = document.querySelector('.minus');
const PLUS = document.querySelector('.plus');
const EQUALS = document.querySelector('.equals');



let total = 0;
let buffer = "";
let result = 0;




function buttonClick(value) {
    if (buffer === 0) {
        buffer = value;
        SCREEN.innerHTML = value;
        return parseInt(buffer);
    }else if (buffer.lenght === 1) {
        buffer = value;
        SCREEN.innerHTML = buffer;
        return parseInt(buffer);
    } else {
        buffer += value;
        SCREEN.innerHTML = buffer;
        return parseInt(buffer);
    }

}


function calc(arg) {
    if (arg === '*') {
        result = buffer + 2;
        SCREEN.innerHTML = buffer;
    }
}