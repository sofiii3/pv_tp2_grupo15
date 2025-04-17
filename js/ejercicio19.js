const mostrarDatos = () => {
    const nombre = document.querySelector("#nombre").value;
    const apellido = document.querySelector("#apellido").value;
    const libreta = document.querySelector("#libreta").value;
  
    alert(`Los datos ingresados son:\nNombre: ${nombre}\nApellido: ${apellido}\nLibreta Universitaria: ${libreta}`);
  };
  
  const boton = document.querySelector("#mostrarBtn");
  boton.addEventListener("click", mostrarDatos);
  
  export { mostrarDatos };
  