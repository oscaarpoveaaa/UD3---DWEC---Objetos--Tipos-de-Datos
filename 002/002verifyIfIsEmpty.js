/* Escribe la función isEmpty(obj) que devuelva el valor true 
si el objeto no tiene propiedades, en caso contrario false. Debería funcionar así:
let schedule = {};
alert( isEmpty(schedule) ); // true
schedule["8:30"] = "Hora de levantarse";
alert( isEmpty(schedule) ); // false */

"use strict";

let schedule = {};

alert(isEmpty(schedule)); // true
schedule["8:30"] = "Hora de levantarse";
alert(isEmpty(schedule)); // false

function isEmpty(obj) {
  //Creamos el key con el valor "8:30" para que con el operador in compruebe si hay algo a esa hora
  let key = "8:30";
  if (key in obj) {
    //Si hay algo a esa hora no estaria vacio, por lo que devolveria false
    return false;
  } else {
    //En cambio si esta vacio devuelve true
    return true;
  }
}
