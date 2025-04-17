const edades = [18, 22, 30, 25, 28, 21, 19, 27];

const calcularPromedio = (arr) => {
  let suma = 0;
  for (let i = 0; i < arr.length; i++) {
    suma += arr[i];
  }
  const promedio = suma / arr.length;
  console.log("El promedio de edades es:", promedio);
};

calcularPromedio(edades);
