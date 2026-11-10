//Función sin retorno
function saludar() {
    console.log("¡Hola, bienvenido!");
}
saludar();

//Función con parámetro
function saludarPersona(nombre) {
    console.log(`¡Hola ${nombre}, bienvenido!`);
}
saludarPersona("Goku");

//Función con retorno de valor
function esMayorDeEdad(edad) {
    if (edad >= 18) {
        return true;
    } else {
        return false;
    }
}
const resultadoEdad = esMayorDeEdad(23);
console.log("¿Es mayor de edad? " + resultadoEdad);

//Función flecha con retorno de valor
const esMayorDeEdadFlecha = (edad) => {
    if (edad >= 18) {
        return true;
    } else {
        return false;
    }
};
const resultadoEdad2 = esMayorDeEdadFlecha(23);
console.log("¿Es mayor de edad? " + resultadoEdad2);

//Comparar números con función flecha
const compararNumeros = (numero1, numero2) => {
    if (numero1 < numero2) {
        console.log(`El número ${numero1} es menor que ${numero2}`);
    } else if (numero1 === numero2) {
        console.log(`El número ${numero1} es igual que ${numero2}`);
    } else {
        console.log(`El número ${numero1} es mayor que ${numero2}`);
    }
};
for (let i = 0; i < 10; i++) {
    compararNumeros(i, 5);
}

//Operaciones con callback y validación de números
const operacion = (numero1, numero2, callback) => {
    if (typeof numero1 === "number" && typeof numero2 === "number") {
        callback(numero1, numero2);
    } else {
        console.log("Debe ingresar solo números.");
    }
};

//Función de suma
const suma = (numero1, numero2) => {
    console.log(`El resultado de la suma es ${numero1 + numero2}`);
};

//Función de resta
const resta = (numero1, numero2) => {
    console.log(`El resultado de la resta es ${numero1 - numero2}`);
};

//Llamadas a la función operacion
operacion(10, 5, suma);
operacion(10, 5, resta);

//Prueba con un valor incorrecto
operacion("hola", 5, suma);