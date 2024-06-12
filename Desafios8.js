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

/**
 * 7 - Crear una funcion que muestre en la consola el numero mas grande y el numero mas pequeno
 * en la lista
 */

alert('Numero mas grande y mas pequeno en una lista');

function largeSmallNumber(listNumers) {
    if (listNumers.Length === 0) {
        console.log("Empty list ");
        return
    }

    const largeNumer = Math.max(...listNumers);
    const smallNumer = Math.min(...listNumers);

    console.log('The small numer is: ', largeNumer);
    console.log("The large numer is: ", smallNumer);
}

let listNumers = [1,2,3,4,5,6,7,8,9];

largeSmallNumber(listNumers);