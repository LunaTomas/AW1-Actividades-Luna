const numeros = [];
for (let i = 0; i < 5; i++) {
    let numero = Number(prompt("Ingrese un número:"));
    numeros.push(numero);
}
console.log("Arreglo de números:", numeros);


//--------------------------
const numerosImpares = [];
for (let i = 0; i < 5; i++) {
    let numero = Number(prompt("Ingrese un número:"));

    if (numero % 2 !== 0) {
        numerosImpares.push(numero);
    }
}
console.log("Números impares:", numerosImpares);


//-------------------------
const frutas = ["pera", "manzana", "banana", "durazno"];
frutas.forEach((fruta, i) => {
    frutas[i] = fruta.toUpperCase();
});
console.log("Frutas en mayúsculas:", frutas);


//--------------------------
const frutasOriginales = ["pera", "manzana", "banana", "durazno"];
const frutasMayusculas = frutasOriginales.map((fruta) => {
    return fruta.toUpperCase();
});
console.log("Nuevo arreglo:", frutasMayusculas);


//--------------------------
const frutasFiltradas = frutasOriginales.filter((fruta) => {
    if (fruta.includes("na")) {
        return true;
    } else {
        return false;
    }
});
console.log("Frutas que contienen 'na':", frutasFiltradas);


//========================================
const producto = {
    nombre: "Remera",
    precio: 15000,
    stock: 10,
    talles: ["s", "m", "l"]
};
console.log("Producto:", producto);


//--------------------------
const productos = [
    {
        nombre: "Remera",
        precio: 15000,
        stock: 3,
        talles: ["s", "m", "l"]
    },
    {
        nombre: "Pantalón",
        precio: 30000,
        stock: 15,
        talles: ["s", "m", "l"]
    },
    {
        nombre: "Campera",
        precio: 50000,
        stock: 2,
        talles: ["s", "m", "l"]
    },
    {
        nombre: "Buzo",
        precio: 25000,
        stock: 20,
        talles: ["s", "m", "l"]
    }
];
productos.forEach((producto) => {
    if (producto.stock < 5) {
        console.log("Producto con stock menor a 5:", producto);
    }
});


//--------------------------
const productosConDescuento = productos.map((producto) => {
    return {
        ...producto,
        precio: producto.precio * 0.90
    };
});
console.log("Productos con 10% de descuento:", productosConDescuento);


//--------------------------
const productosConStock = productos.filter((producto) => {
    if (producto.stock > 10) {
        return true;
    } else {
        return false;
    }
});
console.log("Productos con stock mayor a 10:", productosConStock);