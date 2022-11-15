/* Crea un script que pida al visitante que ingrese dos 
números y muestre su suma. P.D. Hay una trampa con los tipos de valores. */

"use strict";

let num1 = +prompt("Introduce el 1º numero");
let num2 = +prompt("Introduce el 2º numero");
alert("La suma de " + num1 + " y " + num2 + " es: " + (num1 + num2));

//La trampa es que si al hacer el prompt, no lo paso a entero con el =+ el numero me lo devolvería concatenado y no sumado