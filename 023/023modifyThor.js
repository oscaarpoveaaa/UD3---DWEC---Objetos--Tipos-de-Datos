/* Contesta los siguientes comentarios con respecto a la cadena 
que contiene la variable thor: 
let thor = "Thor es el hijo de Odín";
Largo de la cadena
Encontrar la letra o
Encontrar el carácter que ocupa la posición 3
¿Qué carácter ocupa la posición 1?
Trocea la cadena usando los espacios en blanco
Reemplaza Thor por Loki
Recorta la cadena para que devuelva la palabra Odín
¿Puedes encontrar la letra a? Demuéstralo
Pon la mitad de la cadena en minúsculas (Sin usar las posiciones de 0 a 11) */

"use strict"

let thor = "Thor es el hijo de Odín";

alert("Largo de la cadena: " + thor.length) // Largo de la cadena

alert("Encontrar la letra o: " + (thor.indexOf("o") + 1))//Encontrar la letra o 

alert("Encontrar el carácter que ocupa la posición 3: " + thor[2]) //Encontrar el carácter que ocupa la posición 3

alert("¿Qué carácter ocupa la posición 1?: " + thor[0]) //¿Qué carácter ocupa la posición 1?

alert("Trocea la cadena usando los espacios en blanco: " + thor.split(" "))//Trocea la cadena usando los espacios en blanco

alert("Reemplaza Thor por Loki: " + thor.replace("Thor","Loki")); //Reemplaza Thor por Loki

alert("Recorta la cadena para que devuelva la palabra Odín: " + thor.substring(19, thor.length)) //Recorta la cadena para que devuelva la palabra Odín

alert("¿Puedes encontrar la letra a? Demuéstralo: "+ thor.indexOf("a"))//¿Puedes encontrar la letra a? Demuéstralo

//Pon la mitad de la cadena en minúsculas (Sin usar las posiciones de 0 a 11)

