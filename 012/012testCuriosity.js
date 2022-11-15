/* Prueba ejecutando esto:
alert( 9999999999999999 );
¿Qué está pasando?¿Por qué? */

"use strict";

alert(9999999999999999);

/* Todos los números en JavaScript se almacenan en formato de 64 bits IEEE-754 , también conocido como "doble precisión", 
por lo que hay exactamente 64 bits para almacenar un número: 52 de ellos se utilizan para almacenar los dígitos, 
11 de ellos almacenan la posición del punto decimal (son cero para números enteros), y 1 bit es para el signo . 

JavaScript no desencadena un error en tales eventos. Hace todo lo posible para ajustar el número al formato deseado, pero 
desafortunadamente, este formato no es lo suficientemente grande.

*/
