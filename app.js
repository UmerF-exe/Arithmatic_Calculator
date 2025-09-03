var display = document.getElementById("display");
var result = document.getElementById("result");
var historyIcon = document.getElementById("history-icon");
var icon = document.getElementById("icon");
var resultHistory = document.getElementById("history");

window.onload = function() {
    let savedHistory = localStorage.getItem("History");
    if (savedHistory) {
        resultHistory.innerHTML = savedHistory;
    }
};

function getNum(num){
    if(num == "."){
        let parts = display.value.split(/[\+\-\*\/%]/);
        let currentNumber = parts[parts.length - 1];
        if (currentNumber.includes(".")) {
            return;
        }
        if (currentNumber.trim() === "") {
            display.value += "0.";
            updateLiveResult();
        } else {
            display.value += ".";
            updateLiveResult();
        }
    }
    else{
        display.value += Number(num);
        updateLiveResult();
    }
}

function operation(op){
    let lastChar = display.value.trim().slice(-1)
    switch(op){
        case "+":
        case "*":
        case "/":
        case "%":
            if (display.value.trim() === "") {
                alert("You must enter a number first!");
                return;
            }
            if(["+", "-", "*", "/", "%"].includes(lastChar)) {
                display.value = display.value.trim().slice(0, -1) + op + " ";
                updateLiveResult();
            }
            else {
                display.value += " " + op + " ";
                updateLiveResult();
            }
            break;
        case "-":
            if (display.value.trim() === "") {
                display.value = "-";
                updateLiveResult();
            }
            else if(["+", "*", "/", "%"].includes(lastChar)) {
                display.value = display.value.trim().slice(0, -1) + op + " ";
                updateLiveResult();
            } else {
                display.value += " " + op + " ";
                updateLiveResult();
            }
            break;
        case "AC":
            display.value = " ";
            result.value = " ";
            updateLiveResult();
            break;
        case "DE":
            display.value = display.value.toString().slice(0,-1);
            updateLiveResult();
            if(display.value.trim() == ""){
                result.value = " ";
                updateLiveResult();
            }
            break;
        default:
            try{
                let fullExpr = display.value;
                let answer = eval(fullExpr);
                result.value = fullExpr;
                display.value = answer; 
                updateLiveResult();
                let entry = "<p>" + fullExpr + " = " + answer + "</p><hr/>";
                resultHistory.innerHTML += entry;
                localStorage.setItem("History", resultHistory.innerHTML);
            }
            catch(e){
                alert("Invalid Expression");
            }
    }
}

function updateLiveResult() {
    try {
        let expr = display.value.trim();
        if (expr && !["+", "-", "*", "/", "%", "."].includes(expr.slice(-1))) {
            result.value = eval(expr);
        } else {
            result.value = "";
        }
    } catch {
        result.value = "";
    }
}

function saveHistory() {
    localStorage.setItem("History", resultHistory.innerHTML);
}
function showHistory(){
    icon.style.display = "flex";
    icon.style.justifyContent = "space-between";
    icon.style.position = "fixed";
    historyIcon.style.display = "none";
    resultHistory.style.display = "block";
}
function hideHistory(){
    icon.style.display = "none";
    historyIcon.style.display = "block";
    resultHistory.style.display = "none"
}
function deleteHistory(){
    resultHistory.innerHTML = "";
    localStorage.removeItem("History");
    result.value = "";
    display.value = "";
}