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

  if(str.toLowerCase().includes("viagra") || str.toLowerCase().includes("xxx")){
    return true;
  }else{
    return false;
  }

}

//Comentar