/* Crea una función readNumber que pida un número hasta 
que el visitante ingrese un valor numérico válido. El valor resultante debe ser devuelto 
como number. El visitante puede también detener el proceso ingresando una línea 
vacía o presionando “CANCEL”. En tal caso la función debe devolver null. */

"use strict"
alert(readNumber());

function readNumber(){
    let salir = false;
    while(!salir){
        let num = prompt("Introduce un numero");
        if(isNaN(num) === false){
            salir = true;
            return num;
        }
    }
}









