var display = document.getElementById("display");
var result = document.getElementById("result");

function getNum(num){
    if(num != "."){
        display.value += Number(num);
    }
    else{
        display.value += num;
    }
}

function operation(op){
    if(!display.value){
        alert("Invalid Input! Enter any number before performing any operation");
    }
    else{
        switch(op){
            case "+":
                display.value += " + ";
                break;
            case "-":
                display.value += " - ";
                break;
            case "*":
                display.value += " * ";
                break;
            case "/":
                display.value += " / ";
                break;
            case "%":
                display.value += " % ";
                break;
            case "AC":
                display.value = " ";
                result.value = " ";
                break;
            case "DE":
                display.value = display.value.toString().slice(0,-1);
                if(display.value == 0){
                    result.value = " ";
                }
                break;
            default:
                result.value = display.value;
                display.value = eval(display.value);
        }
    }
}