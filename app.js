var display = document.getElementById("display");
var result = document.getElementById("result");
var historyIcon = document.getElementById("history-icon");
var closeIcon = document.getElementById("close-icon");
var resultHistory = document.getElementById("history");

window.onload = function() {
    let savedHistory = localStorage.getItem("History");
    if (savedHistory) {
        resultHistory.innerHTML = savedHistory;
    }
};

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
                let entry = "<p>" + result.value + " = " + display.value + "</p><hr/>";
                resultHistory.innerHTML += entry;
                localStorage.setItem("History", resultHistory.innerHTML);
        }
    }
}

function showHistory(){
    closeIcon.style.display = "block";
    historyIcon.style.display = "none";
    resultHistory.style.display = "block";
}
function hideHistory(){
    closeIcon.style.display = "none";
    historyIcon.style.display = "block";
    resultHistory.style.display = "none"
}