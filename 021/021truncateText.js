/* Crea una función truncate(str, maxlength) que verifique la 
longitud de str y, si excede maxlength – reemplaza el final de str con el carácter de 
puntos suspensivos "...", para hacer su longitud igual a maxlength. El resultado de la 
función debe ser la cadena truncada (si es necesario). Por ejemplo:
truncate("Lo que me gustaría contar sobre este tema es:", 20) = "Lo que me gustaría 
c..."
truncate("Hola a todos!", 20) = "Hola a todos!" */

"use strict"

alert(truncate("Lo que me gustaría contar sobre este tema es:", 20));

truncate("Hola a todos!", 20) = "Hola a todos!";

function truncate(str, maxlength){
  //Aqui en el if comparo si la longitud de la cadena es mayor al maxlenght que da el usuario, si es así, corto la cadena por el sitio que indica el usuario
  if(str.length > maxlength){
    let frase_cortada = str.substring(0, maxlength);
    //Devuelvo la cadena cortada mas los 3 puntos
    return frase_cortada + "..."
  }else{
    return str;
  }  
}
