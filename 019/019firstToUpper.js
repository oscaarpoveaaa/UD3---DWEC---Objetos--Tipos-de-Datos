/* Escribe una función ucFirst(str) que devuelva el string str con 
el primer carácter en mayúscula, por ejemplo:
ucFirst("john") == "John"; */

"use strict";

function ucFirst(str) {
  //Cojo el primer caracter y lo paso mayuscula y se lo concateno con la cadena original pero saltando la posición 0
  return str.charAt(0).toUpperCase() + str.slice(1);
}

alert(ucFirst("john") == "John");
