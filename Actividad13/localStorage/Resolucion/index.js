const botonAgregar = document.getElementById('agregar-carrito');
const contadorCarrito = document.getElementById('contador-carrito');
const CLAVE_CARRITO = 'cantidadArticulos';

const cantidadGuardada = Number(localStorage.getItem(CLAVE_CARRITO));
let cantidadArticulos = Number(localStorage.getItem("cantidadArticulos"));

contadorCarrito.textContent = cantidadArticulos;

botonAgregar.addEventListener('click', () => {
    cantidadArticulos++;
    contadorCarrito.textContent = cantidadArticulos;
    localStorage.setItem(CLAVE_CARRITO, String(cantidadArticulos));
});