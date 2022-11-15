/* Ejecuta sobre el siguiente array las operaciones pedidas:
 let disney = [
    { nombre: "Hércules", pelicula: "Hércules" },
    { nombre: "Megana", pelicula: "Hércules" },
    { nombre: "Hades", pelicula: "Hércules" },
    { nombre: "Campanilla", pelicula: "Peter Pan" },
    { nombre: "Wendy", pelicula: "Peter Pan" }
];
 */

"use strict";

let disney = [
  { nombre: "Hércules", pelicula: "Hércules" },
  { nombre: "Megana", pelicula: "Hércules" },
  { nombre: "Hades", pelicula: "Hércules" },
  { nombre: "Campanilla", pelicula: "Peter Pan" },
  { nombre: "Wendy", pelicula: "Peter Pan" },
];

disney.push({ nombre: "Peter Pan", pelicula: "Peter Pan" }); //Meter a Peter Pan al final del array disney.

for (let key of disney) {
  //Pintar el array
  document.write("Nombre: " + key.nombre + "<br>");
  document.write("Película: " + key.pelicula + "<br><br>");
}

disney.unshift({ nombre: "Capitán Garfio", pelicula: "Peter Pan" }); //Meter a El capitán Garfio al principio del array, no olvides la película

disney.splice(1, 0, { nombre: "Cocodrilo", pelicula: "Peter Pan" }); //Meter al cocodrilo detrás del capitán, no olvides la película

let pj_PeterPan = disney.filter((item) => item.pelicula == "Peter Pan"); //Obtener los personajes de la película de "Peter Pan"; y mostrarlos uno a uno.
for (let key of pj_PeterPan) {
  document.write("Nombre: " + key.nombre + "<br>");
  document.write("Película: " + key.pelicula + "<br><br>");
}
document.write(
  "El índice de Campanilla es: " +
    disney.findIndex((item) => item.nombre == "Campanilla") +
    "<br><br>"
); //Encontrar el índice de Campanilla.

let cocodrilo = disney.filter((item) => item.nombre == "Cocodrilo"); //Buscar al cocodrilo.

//Escribe la función shuffle(array) que baraje (reordene de forma aleatoria) los elementos del array.
shuffle(disney);

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);

  for (let key of array) {
    document.write("Nombre: " + key.nombre + "<br>");
    document.write("Película: " + key.pelicula + "<br><br>");
  }
}

//Comentar
