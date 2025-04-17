const radios = document.querySelectorAll('input[name="lenguaje"]');
const resultado = document.querySelector("#resultado");
radios.forEach(radio => {
  radio.addEventListener("change", () => {
    if (radio.checked) {
      resultado.textContent = `Seleccionaste: ${radio.value}`;
      console.log(`Valor seleccionado: ${radio.value}`);
    }
  });
});

export { radios };
