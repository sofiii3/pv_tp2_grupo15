const input = document.getElementById('TextoEntrada');
        const display = document.getElementById('MostrarTexto');

        input.addEventListener('input', () => {
            const texto = input.value;
            display.textContent = texto;

            if (texto.length > 20) {
                display.style.backgroundColor = '#ffe4b2'; // color diferente si supera los 20 caracteres
            } else {
                display.style.backgroundColor = '#ffffff'; // color normal
            }
        });