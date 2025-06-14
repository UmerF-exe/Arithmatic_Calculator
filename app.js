var result = document.getElementById("display");
var expression = document.getElementById("result");

function numberDot(){
    result.value += document.getElementById("numberdot").value;
}
function number0(){
    result.value += document.getElementById("number0").value;
}
function number00(){
    result.value += document.getElementById("number00").value;
}
function number1(){
    result.value += document.getElementById("number1").value;
}
function number2(){
    result.value += document.getElementById("number2").value;
}
function number3(){
    result.value += document.getElementById("number3").value;
}
function number4(){
    result.value += document.getElementById("number4").value;
}
function number5(){
   result.value += document.getElementById("number5").value;
}
function number6(){
    result.value += document.getElementById("number6").value;
}
function number7(){
    result.value += document.getElementById("number7").value;
}
function number8(){
    result.value += document.getElementById("number8").value;
}
function number9(){
    result.value += document.getElementById("number9").value;
}
function addition(){
    result.value += document.getElementById("operator+").value;
}
function subtraction(){
    result.value += document.getElementById("operator-").value;
}
function multiplication(){
    result.value += document.getElementById("operator*").value;
}
function division(){
    result.value += document.getElementById("operator/").value;
}
function calculate(){
    expression.value = result.value;
    result.value = eval(result.value);
}
function clearAll(){
    result.value = " ";
    expression.value = " ";
}
function deleteBtn(){
    result.value = result.value.toString().slice(0,-1);
    if(result.value == 0){
        expression.value = " ";
    }
}