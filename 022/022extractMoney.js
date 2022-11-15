/* Tenemos un coste en forma de “$120”. Es decir: el signo de 
dólar va primero y luego el número. Crea una función extractCurrencyValue(str) que 
extraiga el valor numérico de dicho string y lo devuelva. Por ejemplo:
alert( extractCurrencyValue('$120') === 120 ); // true */

"use strict";

alert(extractCurrencyValue("$120") === 120);

function extractCurrencyValue(str) {
  //Creo una variable num que guarda el numero solamente quitando el $ y tiene que parar en la longitud del texto
  let num = str.substring(1, str.length);

  //Hay que pasarlo a entero si no, entiende como que es un string y no un numero, y te daria false
  return parseInt(num);
}
