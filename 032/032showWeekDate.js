/* Muestra en pantalla un día de la semana Escribe una 
función getWeekDay(date) para mostrar el día de la semana en formato corto: ‘MO’, 
‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU’.
Por ejemplo:
let date = new Date(2012, 0, 3);  // 3 Jan 2012
alert( getWeekDay(date) );        // debería mostrar "TU" */

"use strict";

let date = new Date(2012, 0, 3);
alert(date);
alert(getWeekDay(date));

function getWeekDay(date) {
  switch (date.getDay()) {
    case 1:
      return "MO";
      break;
    case 2:
      return "TU";
      break;
    case 3:
      return "WE";
      break;
    case 4:
      return "TH";
      break;
    case 5:
      return "FR";
      break;
    case 6:
      return "SA";
      break;
    case 7:
      return "SU";
      break;
    default:
      break;
  }
}
