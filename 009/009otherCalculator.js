/* Crear una función constructora Calculator que crea 
objetos con 3 métodos:
read() pide dos valores usando prompt y los guarda en las propiedades del objeto con 
los nombres a y b.
sum() devuelve la suma de estas propiedades.
mul() devuelve el producto de la multiplicación de estas propiedades.
Por ejemplo:
let calculator = new Calculator();
calculator.read();
alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() ); */

"use strict";

let calculator = new Calculator();
calculator.read();
alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );

function Calculator() {
  a : undefined;
  b : undefined;

  this.read = function(){
    this.a =+ prompt("Introduce el 1º numero");
    this.b =+ prompt("Introduce el 2º numero");
  }

  this.sum = function () {
    return "La suma es " + (this.a + this.b);
  };

  this.mul = function () {
    return "La multiplicación es " + (this.a * this.b)
  };
}



