/* Crear un array que contenga los 20 primeros números de 
Fibonacci. */

"use strict";

let limit = 20;
let fibo = [0, 1];

for (let i = 2; i <= limit; i++) {
  fibo.push(fibo[i - 1] + fibo[i - 2]);
  document.write(fibo[i] + "<br/>");
}
