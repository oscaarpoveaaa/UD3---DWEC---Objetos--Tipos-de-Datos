/* Escribe la función camelize(str) que convierta 
palabras separadas por _como “mi_cadena_corta” en palabras con mayúscula 
“miCadenaCorta”. Esto sería: quitar todos los _ y que cada palabra después de _ 
comience con mayúscula. Ejemplos:
camelize("background_color") == 'backgroundColor';
camelize("list_style_image") == 'listStyleImage';
camelize("_webkit_transition") == 'WebkitTransition';
P.D. Pista: usa split para dividir el string en un array, transfórmalo y vuelve a unirlo 
(join).*/

"use strict";

function camelize(str) {
  return str.replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
}

alert(camelize("background_color") == "backgroundColor");
alert(camelize("list_style_image") == "listStyleImage");
alert(camelize("_webkit_transition") == "WebkitTransition");

//Lo que hago es sustituir las _ por el caracter siguiente en mayúscula
