function accuracySize() {
    let size = document.getElementById("size").value;
    if (size == 11) {
        document.getElementById("accuracy").innerHTML = '∞';
        return;
    }
    document.getElementById("accuracy").innerHTML = size;
}

//Эта функция реализует вычислиение квадратного корня из заданного числа с заданной точностью
function calculate(number, accuracy) {
    let abs = Math.abs(number);
    let sqrt = Math.sqrt(abs);
    //округляем для заданной точности
    let result = sqrt.ToFixed(accuracy);

    if(number < 0) {
        result += "i";
    }
    return result;
}

function getResult() {
    let accuracy = document.getElementById("size").value;
    let number = document.getElementById("input").value;
    let result = calculate(accuracy, number);
    document.getElementById("sqrtResult").value = result;
}

