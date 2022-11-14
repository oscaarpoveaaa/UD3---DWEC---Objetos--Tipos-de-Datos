/* Escribe el código, una línea para cada acción:
Crea un objeto user vacío.
Agrega la propiedad name con el valor John Snow.
Agrega la propiedad surname con el valor Sam Sagaz.
Cambia el valor de name a Peter Pan.
Quita la propiedad name del objeto. */

"use strict"
//Aqui creamos el objeto con corchetes
let user = {
    name: "John Snow",
    surname: "Sam Sagaz"
};

//Hacemos un alert para comprobar que el nombre es "John Snow"
alert(user.name);

//Renombramos el valor de name a "Peter Pan"
user.name = "Peter Pan";

//Volvemos a hacer un alert para comprobar que se ha cambiado el nombre
alert(user.name);

//Eliminamos la propiedad name
delete user.name;