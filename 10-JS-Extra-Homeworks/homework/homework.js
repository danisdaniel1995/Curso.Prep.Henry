// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto) {
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa
  // un par clave-valor en forma de matriz.
  //Ejemplo:
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var pares = [];
  for (var i in objeto) {
    pares.push([i, objeto[i]]);
  }
  return pares;
}

function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  //Escribe tu código aquí
  var contador = {};
  for (let index = 0; index < string.length; index++) {
    if (contador[string[index]]) {
      contador[string[index]] += 1;
    } else {
      contador[string[index]] = 1;
    }
  }
  return contador;
}

function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var mayusculas=[];
  var minusculas=[];
  for (let index = 0; index < s.length; index++) {
    if(s[index].toLowerCase()===s[index]){
      minusculas+=s[index];
    }else{
      mayusculas+=s[index];
    }    
  }
  return mayusculas + minusculas;
}

function asAmirror(str) {
  //La función recibe una frase.
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var invertido="";
  for (let index = str.length-1; index >= 0; index--) {
    invertido+=str[index];        
  }
  return invertido.split(" ").reverse().join(" ");
}

function capicua(numero) {
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var numeroString = numero.toString();
  var invertido="";
  for (let index = numeroString.length-1; index >=0; index--) {
    invertido+=numeroString[index];    
  }
  if(invertido === numeroString) return 'Es capicua';
  else return 'No es capicua';
}

function deleteAbc(cadena) {
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var filtro="";
  for (let index = 0; index < cadena.length; index++) {
    if(cadena[index] !== "a" && cadena[index] !== "b" && cadena[index] !== "c"){
      filtro += cadena[index];
    }    
  }
  return filtro;
}

function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var tmp;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length -i; j++) {
        if(arr[j-1].length > arr[j].length){
            tmp = arr[j-1];
            arr[j-1] = arr[j];
            arr[j] = tmp;
        }
    }
  }
  return arr;  
}

function buscoInterseccion(arreglo1, arreglo2) {
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
  var contador =[];
  for (let i = 0; i < arreglo1.length; i+=1) {
    for (let j = 0; j < arreglo2.length; j+=1) {
      if(arreglo1[i] === arreglo2[j]){
        contador.push(arreglo1[i]);
      }      
    }    
  }
  return contador;    
  }

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  deObjetoAmatriz,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
