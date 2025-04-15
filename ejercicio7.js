const nombres = ["Nicolas","Alejandro","Maximiliano","Sofia","Pepe","Mario"]
let maxLenght = nombres[0].length;
let nombreMaxLenght;

nombres.forEach((x) => {
    if(maxLenght<x.length)
    {
        maxLenght = x.length;
        nombreMaxLenght=x;

    }
});
console.log("El nombre con mas caracteres es: "+nombreMaxLenght);
console.log("Tiene una cantidad de "+maxLenght+" caracteres")