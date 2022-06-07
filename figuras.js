// Código del cuadrado

console.group("Cuadrados");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perímetro del cuadrado mide: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado mide: " + areaCuadrado + "cm^2");
console.groupEnd();


// Código del triángulo

console.group("Triángulos");
const ladoTiangulo1 = 6;
const ladoTiangulo2 = 6;
const baseTiangulo = 4;
const alturaTiangulo = 5.5;


console.log(
    `Los lados del triángulo miden: ${
        ladoTiangulo1
    }cm, ${
        ladoTiangulo2
    }cm, ${
        baseTiangulo}cm`
);

console.log("La altura del triángulo es de: " + alturaTiangulo + "cm");

const perimetroTriangulo = ladoTiangulo1 + ladoTiangulo2 + baseTiangulo;

console.log("El perímetro del triángulo mide: " + perimetroTriangulo + "cm");


const areaTriangulo = (baseTiangulo * alturaTiangulo) / 2;
console.log("El área del triángulo mide: " + areaTriangulo + "cm^2");

console.groupEnd();


// Código del círculo

console.group("Círculos");


// Radio
const radioCirculo = 4;
console.log(`El radio del círculo es: ${radioCirculo}cm`);

// Diámetro
const diametroCirculo = radioCirculo * 2;
console.log(`El diámetro del círculo es: ${diametroCirculo}cm`);

// PI
const PI = Math.PI;
console.log(`PI es igual a: ${PI}`);

// Circunferencia o circunferencia
const perimetroCirculo = diametroCirculo * PI;
console.log(`El perimetro del círculo es: ${perimetroCirculo}cm`);

// Área
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log(`El área del círculo es: ${areaCirculo}cm^2`);

console.groupEnd();