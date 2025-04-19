const colores = ['#FF5733', '#33FF57', '#3357FF', '#F333FF', '#33FFF5', '#F5FF33'];
let indiceColor = 0;

const boton = document.getElementById('colorButton');

boton.addEventListener('click', () => {
    document.body.style.backgroundColor = colores[indiceColor];
    console.log(`El color de fondo ha cambiado a: ${colores[indiceColor]}`);
    indiceColor = (indiceColor + 1) % colores.length;
});