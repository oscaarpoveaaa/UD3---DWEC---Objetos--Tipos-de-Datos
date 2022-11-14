/* Crea una función multiplyNumeric(obj) que 
multiplique todas las propiedades numéricas de obj por 2. Por ejemplo:
  \\Antes de la llamada
let menu = {
  width: 200,
  height: 300,
  title: "Mi menú"
};
multiplyNumeric(menu);
  \\Después de la llamada
menu = {
  width: 400,
  height: 600,
  title: "Mi menú"
};
Nota que multiplyNumeric no necesita devolver nada. Debe modificar el objeto en su 
lugar.
P.D. Usa typeof para verificar si hay un número aquí. */

"use strict"

  //Antes de la llamada
let menu = {
  width: 200,
  height: 300,
  title: "Mi menú"
};

multiplyNumeric(menu);

//Este for se usa para mostrar el objeto y confirmar que se han cambiado los valores correctamente
for(let key in menu){
  alert(menu[key]);
}

function multiplyNumeric(obj){

  for(let key in obj){
    //Con el typeof comprobamos que la propiedad que vamos a modificar sea un numero, si lo es, lo multiplicamos por 2 y asi no daria error a la hora de intentar modificar el string "Mi menú"
    if(typeof obj[key] === "number"){
    obj[key] = obj[key] * 2;
  }
}
}
