function calcularMayor(numero1, numero2) {
    if (numero1 > numero2) {
        alert("El número mayor es: " + numero1);
    } else if (numero1 < numero2) {
        alert("El número mayor es: " + numero2);
    } else {
        alert("Ambos números son iguales.");
    }
}

function obtenerValores() {
    // Obtener los valores ingresados en los campos de texto
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);

    // Verificar si los valores son válidos
    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Por favor ingresa números válidos en ambos campos.");
    } else {
        // Llamar a la función con los valores obtenidos
        calcularMayor(numero1, numero2);
    }
}
