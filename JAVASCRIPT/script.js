let display = document.getElementById('resultado');

function addToDisplay(value){
    display.value += value;
}

function clearDisplay(){
    display.value = '';
}

function backspace(){
    display.value = display.value.slice(0,-1);
}

function calcular(){
    let res = eval(display.value);
    display.value = res;
}