/* Aquí la función makeUser devuelve un objeto. ¿Cuál es el 
resultado de acceder a su atributo ref? ¿Por qué?
function makeUser() {
  return {
    name: "John",
    ref: this
  };
}
let user = makeUser();
alert( user.ref.name ); // ¿Cuál es el resultado? */

"use strict"
function makeUser() {
  return {
    name: "John",
    ref: this
  };
}
let user = makeUser();

//Da undefined ya que al estar usando el "use strict", el valor de this se mantiene en lo que está establecida al entrar en el contexto de ejecución. Si no está definido, permanece undefined.
alert( user.ref);

//
alert( user.ref.name);
