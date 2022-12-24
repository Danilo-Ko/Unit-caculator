const inputBox = document.getElementById("input");
const inputUnit = document.getElementById("input-unit");
const caculatorBtn = document.getElementById("calculator");
const outputBox = document.getElementById("output");
const outputUnit = document.getElementById("output-unit");

function inputUnitFunc () {
    if(inputUnit.value === "평") {
        inputUnit.value === "평방미터"
        outputUnit.value = "평방미터"
    }else if(inputUnit.value === "평방미터") {
        inputUnit.value === "평"
        outputUnit.value = "평"
    };
}

function calculatorFunc () {
    if(inputUnit.value ==="평") {
        outputBox.value = Math.floor(inputBox.value * 3.3);
    }else if (inputUnit.value ==="평방미터") {
        outputBox.value = Math.floor(inputBox.value / 3.3);
    }
}

inputUnit.addEventListener("click", inputUnitFunc);
caculatorBtn.addEventListener("click", calculatorFunc);