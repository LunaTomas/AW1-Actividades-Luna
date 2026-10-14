//condicionales: edad
let edad
edad = 20;
if (edad >= 18) {
    console.log("Es mayor de edad");
}
else {
    console.log("Es menor de edad");
}

//numero
let numero
numero = 7;
if (numero % 2 === 0) {
    console.log("El numero es par");
}
else {
    console.log("El numero es impar");
}

//nota
let nota
nota = 8;
if (nota < 4) {
    console.log("Reprobado");
}
else if (nota <= 7) {
    console.log("Aprobado");
}
else {
    console.log("Excelente");
}

//imprime del 1 al 10 usando for
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//imprime del 1 al 10 en orden desc
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

//imprime numeros del 1 al 20
for (let i = 0; i < 20; i++) {
    if (i % 2 === 0) {
        console.log("El numero es par");
    } else {
        console.log("El numero es impar");
    }
}

//imprime numeros del 1 al 20 concatenando
for (let i = 0; i < 20; i++) {
    if (i % 2 === 0) {
        console.log("el numero " + i + " es par");
    } else {
        console.log("el numero " + i + " es impar");
    }
}