const paisCapitalMap = {
    "Argentina": "Buenos Aires",
    "Brasil": "Brasilia",
    "Chile": "Santiago",
    "Colombia": "Bogotá",
    "Perú": "Lima",
    "Venezuela": "Caracas"
};

const paisSelect = document.getElementById('pais');
const capitalSelect = document.getElementById('capital');

function actualizarCapital() {
    const paisSeleccionado = paisSelect.value;
    const capitalCorrespondiente = paisCapitalMap[paisSeleccionado];

    for (let i = 0; i < capitalSelect.options.length; i++) {
        if (capitalSelect.options[i].value === capitalCorrespondiente) {
            capitalSelect.selectedIndex = i;
            break;
        }
    }

    console.log(`País seleccionado: ${paisSeleccionado}`);
    console.log(`Capital correspondiente: ${capitalCorrespondiente}`);
}

paisSelect.addEventListener('change', actualizarCapital);

window.onload = actualizarCapital;