/**
 * 1 - Crear una lista vacia llamada "ListaGenerica"
 */
alert('Generamos una lista vacia');

function listaVacia() {
    let listaGenerica = [];
    console.log(listaGenerica);
}

listaVacia();

/**
 * 2 - Lista con elementos de nombres de programacion
 */
alert('Lista con elementos, nombres de lenguajes');

function listaNamesLanguage() {
    let listNamesLanguage = ['JavaScript', 'Python', 'C', 'C#'];
    console.log(listNamesLanguage);
}

listaNamesLanguage();

/**
 * 3 - Agregar a la lista nuevos lenguajes
 */

alert('Agregar nuevos lenguajes');
//the function recive the list of the language
function addNewElement(listLanguage) {
    listLanguage.push('C#');
    listLanguage.push('C++');//Add an item to the list
    listLanguage.unshift('PHP');//Add an item to the start the list
    console.log(listLanguage);
    return listLanguage;
}
//Is created a new list with new programming language
let listLanguage = ['Java', 'C', 'Python', 'JavaScript'];

let newList = addNewElement(listLanguage);
console.log(newList);