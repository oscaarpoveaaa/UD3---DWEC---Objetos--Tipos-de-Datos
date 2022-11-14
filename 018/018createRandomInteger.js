/* Crea una función randomInteger(min, max) que 
genere un número entero aleatorio entre min y max incluyendo ambos, min y max, 
como valores posibles. Todo número del intervalo min..max debe aparecer con la 
misma probabilidad. Ejemplos de funcionamiento:
alert( randomInteger(1, 5) ); // 1
alert( randomInteger(1, 5) ); // 3
alert( randomInteger(1, 5) ); // 5 */

"use strict"

function randomInteger(min, max){
  //Uso el math floor para que el numero sea entero y le pongo el rango sea de 1 o 5 incluyendolos 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

alert( randomInteger(1, 5) ); // 1
alert( randomInteger(1, 5) ); // 3
alert( randomInteger(1, 5) ); // 5





