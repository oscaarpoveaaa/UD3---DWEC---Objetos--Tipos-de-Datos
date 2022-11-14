/* Es posible crear las funciones A y B para que se 
cumpla new A() == new B()?
function A() { ... }
function B() { ... }
let a = new A();
let b = new B();
alert( a == b ); // true
Si es posible, entonces proporcione un ejemplo de código. */

"use strict";

/* Si es posible.

Si una función devuelve un objeto, newlo devuelve en lugar de this.

Entonces pueden, por ejemplo, devolver el mismo objeto definido externamente obj */

let obj = {};

function A() { return obj; }
function B() { return obj; }

alert( new A() == new B() ); // true

