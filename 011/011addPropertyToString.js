/* Puedo agregar una propiedad a un string?: 
Considera el siguiente código:
let str = "Peter";
str.test = 5;
alert(str.test);
Qué piensas: ¿funcionará? ¿Qué mostrará? ¿Por qué? */

"use strict";

let str = "Peter";
str.test = 5;
alert(str.test);

//No mostraría nada ya que str es un string, y los string solo tienen una propiedad
