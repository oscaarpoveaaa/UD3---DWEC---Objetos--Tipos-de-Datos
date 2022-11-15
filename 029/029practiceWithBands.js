/* jecuta sobre el siguiente array las operaciones 
pedidas:
 var grupos = [
    {nombre: "ACDC", genero: "Rock"},
    {nombre: "Cold Play", genero: "Pop"},
    {nombre: "NCT Dream", genero: "K-Pop"},
    {nombre: "Metallica", genero: "Heavy Metal"}
];
 */

"use strict";

var grupos = [
  { nombre: "ACDC", genero: "Rock" },
  { nombre: "Cold Play", genero: "Pop" },
  { nombre: "NCT Dream", genero: "K-Pop" },
  { nombre: "Metallica", genero: "Heavy Metal" },
];

let heavy_metal = grupos.filter((item) => item.genero == "Heavy Metal"); //filtra los grupos por género obtenido aquellos que son de Heavy Metal.
for (let key of heavy_metal) {
  document.write(key.nombre);
}

let cold = grupos.find((item) => item.nombre == "Cold Play"); //Busca en los grupos usando “find” el grupo con Nombre “Cold Play”.
document.write("<br>" + cold.nombre + " " + cold.genero + "<br>");
document.write(
  "Cold Play se encuentra en la posición: " +
    grupos.findIndex((item) => item.nombre == "Cold Play")
); //¿En qué posición del array se encuenta “Cold Play”?
