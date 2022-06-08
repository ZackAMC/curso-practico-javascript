// Código del cuadrado
console.group("Cuadrados");
// Perímetro
function perimetroCuadrado(lado){
    return lado * 4;
}
// Area
function areaCuadrado(lado){
    return lado * lado;
}
console.groupEnd();
// Fin Código del cuadrado



// Código del triángulo
console.group("Triángulos");
function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}
function areaTriangulo(base, altura){
    return (base * altura) / 2;
}
console.groupEnd();
// Fin Código del triángulo



// Código del círculo
console.group("Círculos");
// Radio
const radioCirculo = 4;
// Diámetro
function diametroCirculo(radio) {
    return radio *2;
}
// PI
const PI = Math.PI;
// Circunferencia o circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
// Área
function areaCirculo(radio) {
    return (radio * radio) * PI
}
console.groupEnd();
// Fin Código del círculo


// Aqui interactuamos con el HTL



function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);

    alert(perimetro);

}

function calcularAreaCuadrado(params) {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);

    alert(area);
}