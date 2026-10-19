// Sin retorno de valor
// Escriba un programa con una función con el identificador saludar que, cuando se llame, 
// imprima por consola "¡Hola, bienvenido!".
function saludar() {
    console.log("¡Hola")
}
saludar()



// Sin retorno de valor
// Escriba un programa con una función con el identificador saludarPersona  
// que reciba un parámetro “nombre”. Al llamar la función, debe imprimir por consola  
// un saludo concatenando el nombre a "¡Hola nombre, bienvenido!" con template strings 
// (comilla invertida y uso de ${ }). 
// Por ejemplo: "¡Hola Andrés, bienvenido!".
function saludarPersona(nombre) {
    console.log(`¡Hola ${nombre}, bienvenido!`)
}
saludarPersona("Goku")



// Retorno de valor
// Escribe una función con el identificador esMayorDeEdad que reciba una edad y 
// retorne true si la persona es mayor de edad, o false si es menor, y guarde el valor 
// retornado en una variable. 
// Puede utilizar la lógica vista anteriormente en la actividad 6 (condicionales).
function esMayorDeEdad(edad) {
    if(edad >= 18){
        return true
    }
    else{
        return false
    }
}
const ResultadoEdad = esMayorDeEdad(23)
console.log('¿Es mayor de edad? ' + ResultadoEdad)



// Realice el mismo programa que el punto 1. c, pero convierta la función a una función flecha.
const EsMayorDeEdad = (edad)=>{
    if(edad >= 18){
        return true
    }
    else{
        return false
    }
}
const ResultadoEdad2 = esMayorDeEdad(23)
console.log('¿Es mayor de edad? ' + ResultadoEdad2)


// Escriba un programa con una función flecha que reciba dos parámetros, el primero 
// debe ser un número que debemos chequear si es mayor, igual o menor al número pasado 
// como segundo parámetro.
// La función debe imprimir, utilizando template strings, según corresponda: 
// - “El número parámetro1 es menor que parámetro2”
// - “El número parámetro1 es igual que parámetro2”
// - “El número parámetro1 es mayor que parámetro2”
// Utilizar la función dentro de un bucle y pase como primer parámetro el iterador, y 
// elija usted el segundo parámetro para probar si funciona correctamente.



// Escriba un programa con una función flecha con el identificador operacion que debe 
// recibir tres parámetros, los dos primeros son números y el tercero un callback (función).



// Luego crear dos funciones más que serán pasadas como callback a operacion, una con el 
// identificador suma, y otra con el identificador resta. Cada una recibirá dos parámetros 
// que serán los números pasados desde operacion. Cada función hará el cálculo según corresponda 
// e imprimirá:
// - “El resultado de la suma es resultado”
// - “El resultado de la resta es resultado”



// Mejore el programa anterior verificando en operacion si los argumentos pasados son 
// realmente números, en caso contrario, escriba por consola: “Debe ingresar solo números.”


