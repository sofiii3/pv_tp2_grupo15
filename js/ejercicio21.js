const inputTexto = document.querySelector("#entradaTexto");
const parrafo = document.querySelector("#textoMostrado");

inputTexto.addEventListener("input", () => {
  parrafo.textContent = inputTexto.value || "Lo que escribas se veran aqui ";
});

export { inputTexto };
