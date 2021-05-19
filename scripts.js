function accuracySize() {
    let size = document.getElementById("size").value;
    if (size == 11) {
        document.getElementById("accuracy").innerHTML = '∞';
        return;
    }
    document.getElementById("accuracy").innerHTML = size;
}

function calculate(number, accuracy) {

}

function getResult() {
    let accuracy = document.getElementById("size").value;
    let number = document.getElementById("input").value;
    calculate(accuracy, number);
}