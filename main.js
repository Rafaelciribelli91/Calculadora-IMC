const calcular = document.getElementById("calcular");

function imc () {
const name = document.getElementById("name").value;
const height = document.getElementById("height").value;
const weight = document.getElementById("weight").value;
const result = document.getElementById("result");

if(name !== "" && height !== "" && weight !== "") {  

const valorIMC = (weight / (height * height)).toFixed(2); 

let classificação = ""

if(valorIMC <= 18.5) {
    classificação = "abaixo do peso"
} else if (valorIMC <= 24.9) {
    classificação = "peso normal"
} else if (valorIMC <= 29.9) {
    classificação = "sobrepeso"
} else if (valorIMC <= 34.9) {
    classificação = "obesidade grau I"
} else if (valorIMC <= 39.9) {
    classificação = "obesidade grau II"
} else {
    classificação = "obesidade grau III"
}

result.textContent = name + ", " + "seu IMC é " + valorIMC + ". Sua condição é: " + classificação + "."  

} else {
    result.textContent = "Preencha todos os campos"
} 

}

calcular.addEventListener("click", imc) 
