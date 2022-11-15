/* Cuantos segundos faltan para el día de después 
de mañana? Crea una función getSecondsToAfterTomorrow() que devuelva la cantidad 
de segundos que faltan para el día después de mañana.
Por ejemplo, si ahora son las 23:00, entonces:
getSecondsToAfterTomorrow() == 3600 + todos los segundo de un día
P.D.: La función debe poder funcionar para cualquier día, sin valores fijos en el código”. */

"use strict";

alert(getSecondsToAfterTomorrow());

function getSecondsToAfterTomorrow() {
  let now = new Date();

  // el día de mañana
  let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

  let diff = tomorrow - now; // diferencia en ms
  return Math.round(diff / 1000); // conversión a segundos
}
