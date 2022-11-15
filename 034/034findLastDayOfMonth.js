/* Escribe una función getLastDayOfMonth(year, 
month) que devuelva el último día del mes dado. A veces es 30, 31 o incluso 28/29 
para febrero. Parámetros:
year – el año en formato de cuatro dígitos, por ejemplo 2012.
month – el mes, de 0 a 11.
Por ejemplo, getLastDayOfMonth(2012, 1) = 29 (febrero, año bisiesto). */

"use strict";

alert(getLastDayOfMonth(2012, 1));

function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0);
  return date.getDate();
}

/* Normalmente, las fechas comienzan a partir del 1, sin embargo podemos pasar como argumento cualquier 
número, ya que se corregirá automáticamente. De esta manera, si pasamos el número 0 como día, se interpreta 
como “el día anterior al primer día del mes”, o en otras palabras: “el último día del mes anterior”. */
