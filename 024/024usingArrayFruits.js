/* Ejecuta sobre el siguiente array las operaciones pedidas:
var fruits = ["Banana", "Manzana", "Fresa"]; */
//Añadimos cereza al principio
//Añadimos melocotón al final
//Mostrar el array elemento a elemento con for clásico
//Eliminamos el primer elemento.
//Eliminamos el último elemento.
//Mostrar cada elemento con for of o for in, lo que considere más adecuado.

"use strict";

var fruits = ["Banana", "Manzana", "Fresa"];

fruits.unshift("Cereza"); //Añadimos cereza al principio

fruits.push("Melocotón"); //Añadimos melocotón al final

for (let i = 0; i < fruits.length; i++) {
  //Mostrar el array elemento a elemento con for clásico
  alert(fruits[i]);
}

fruits.shift(); //Eliminamos el primer elemento.

fruits.pop(); //Eliminamos el último elemento.

for (let key of fruits) {
  //Mostrar cada elemento con for of o for in, lo que considere más adecuado.
  alert(key);
}
