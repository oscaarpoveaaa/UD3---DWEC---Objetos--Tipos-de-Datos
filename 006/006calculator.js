/* Crea un objeto calculator con tres métodos:
read() pide dos valores y los almacena como propiedades de objeto con nombres a y b.
sum() devuelve la suma de los valores almacenados.
mul() multiplica los valores almacenados y devuelve el resultado.
let calculator = {

};
calculator.read();
alert( calculator.sum() );
alert( calculator.mul() ); */
"use strict"

let calculator = {
  a : undefined,
  b : undefined,
  read(){
    //Pido los 2 valores y los paso a entero.
  this.a =+ prompt("Introduce el 1º numero");
  this.b =+ prompt("Introduce el 2º numero");
  },
  sum(){
    //Mediante el this recojo el valor de A y B, los devuelvo realizando la suma de ellos.
    return "La suma es " + (this.a + this.b)
  },
  mul(){
    //Hago lo mismo que en la función suma, pero en vez de devolver la suma de los 2 numeros, devuelvo la multiplicación.
    return "La multiplicación es " + (this.a * this.b)
  }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );