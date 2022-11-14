/* Escribe una función checkSpam(str) que devuelva true si str 
contiene ‘viagra’ o ‘XXX’, de lo contrario false. La función debe ser insensible a 
mayúsculas y minúsculas:
checkSpam('compra ViAgRA ahora') == true
checkSpam('xxxxx gratis') == true
checkSpam("coneja inocente") == false */

"use strict"

checkSpam('compra ViAgRA ahora') == true
checkSpam('xxxxx gratis') == true
checkSpam("coneja inocente") == false

function checkSpam(str){
  //Paso toda la cadena a minuscula y le hago el include para comprobar si esta cadena contiene las 2 palabras
  if(str.toLowerCase().includes("viagra") || str.toLowerCase().includes("xxx")){
    //Si es asi devuelvo true
    return true;
  }else{
    //Si no es asi devuelvo false
    return false;
  }

}

