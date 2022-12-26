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
    }else if(inputUnit.value === "인치") {
        inputUnit.value === "센티"
        outputUnit.value = "센티"
    }else if(inputUnit.value === "센티") {
        inputUnit.value === "인치"
        outputUnit.value = "인치"
    }else if(inputUnit.value === "야드") {
        inputUnit.value === "미터"
        outputUnit.value = "미터"
    }else if(inputUnit.value === "미터") {
        inputUnit.value === "야드"
        outputUnit.value = "야드"
    };
}

function calculatorFunc () {
    if(inputUnit.value ==="평") {
        outputBox.value = Math.floor(inputBox.value * 3.3);
    }else if (inputUnit.value ==="평방미터") {
        outputBox.value = Math.floor(inputBox.value / 3.3);
    }else if (inputUnit.value ==="야드") {
        outputBox.value = Math.floor(inputBox.value *0.9144);
    }else if (inputUnit.value ==="미터") {
        outputBox.value = Math.floor(inputBox.value /0.9144);
    }else if (inputUnit.value ==="인치") {
        outputBox.value = Math.floor(inputBox.value *2.54);
    }else if (inputUnit.value ==="센티") {
        outputBox.value = Math.floor(inputBox.value /2.54);
    }
}

inputUnit.addEventListener("click", inputUnitFunc);
caculatorBtn.addEventListener("click", calculatorFunc);