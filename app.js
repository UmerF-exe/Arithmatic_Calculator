var display = document.getElementById("display");
var result = document.getElementById("result");
var historyIcon = document.getElementById("history-icon");
var closeIcon = document.getElementById("close-icon");
var resultHistory = document.getElementById("history");
var historyContent = document.getElementById("historyContent");

window.onload = function() {
    let savedHistory = localStorage.getItem("History");
    if (savedHistory) {
        historyContent.innerHTML = savedHistory;
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
                historyContent.innerHTML += entry;
                localStorage.setItem("History", historyContent.innerHTML);
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
    localStorage.setItem("History", historyContent.innerHTML);
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
function deleteHistory(){
    historyContent.innerHTML = "";
    localStorage.removeItem("History");
    result.value = "";
    display.value = "";
}