var result = document.getElementById("display");
var expression = document.getElementById("result");

function getNum(num){
    if(num != "."){
        result.value += Number(num);
    }
    else{
        result.value += num;
    }
}

function operation(op){
    switch(op){
        case "+":
            result.value += "+";
            break;
        case "-":
            result.value += "-";
            break;
        case "*":
            result.value += "*";
            break;
        case "/":
            result.value += "/";
            break;
        case "%":
            result.value += "%";
            break;
        case "AC":
            result.value = " ";
            expression.value = " ";
            break;
        case "DE":
            result.value = result.value.toString().slice(0,-1);
            if(result.value == 0){
                expression.value = " ";
            }
            break;
        default:
            expression.value = result.value;
            result.value = eval(result.value);
    }
}