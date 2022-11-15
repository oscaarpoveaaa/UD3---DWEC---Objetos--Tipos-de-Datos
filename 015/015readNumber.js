/* Crea una función readNumber que pida un número hasta 
que el visitante ingrese un valor numérico válido. El valor resultante debe ser devuelto 
como number. El visitante puede también detener el proceso ingresando una línea 
vacía o presionando “CANCEL”. En tal caso la función debe devolver null. */

"use strict";
alert(readNumber());

function readNumber() {
  //Creo un booleano que servirá para salir del while
  let salir = false;
  while (!salir) {
    //Le pido al usurio que introduzca el numero
    let num = prompt("Introduce un numero");
    if (isNaN(num) === false) {
      //Con el método isNaN compruebo que el dato introducido es un numero, si lo es, el booleano se vuelve true y saldria del while
      salir = true;
      return num;
    }
  }
}
