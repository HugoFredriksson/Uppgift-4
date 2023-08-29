let inputElement, input2Element, resultElement;
function init() {
    input1Element=document.getElementById("input1");
    input2Element=document.getElementById("input2");
    resultElement=document.getElementById("result");
    document.getElementById("runBtn").onclick=doCalculations;
}
window.onload=init;

function doCalculations() {
    let base;
    let height;
    let conv = [3.28, 1.50];
    let area;

    height = Number(input1Element.value);
    base = Number(input2Element.value);

    area = height * (base + 3);

    resultElement.innerHTML = "<p>Rektangelns area blir " + area * conv[1] + "m<sup>2</sup></p>";

    area = base * height / 2;

    resultElement.innerHTML += "<p>Triangelns area blir " + area * conv[0] + "ft<sup>2</sup></p>";
}

