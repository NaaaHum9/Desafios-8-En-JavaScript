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

/**
 * 8 - Crear una funcion que devuelva la suma de todos los elementos en una lista 
 */

alert('Suma de los elementos de una lista dada');

let listWithNumers = [12,34,56,78,1,4,2,6,7,9];

function sumTheElements(listWithNumers) {
    let sum = 0;
    for (let index = 0; index < listWithNumers.length; index++) {
        sum += listWithNumers[index];
    }
    return sum;
}

let sumElements = sumTheElements(listWithNumers);
alert(`The sum is: ${sumElements}`);

/**
 * 9 - crear una funcion que devuelva la posicion en la lista donde se encuantre un 
 * elemento pasado como parametro o -1 si no esta en la lista
 */

alert('Busqueda en una lista');

let listElement = [12, 23, 34, 45, 56, 67, 78, 89, 90];
let elementSearch = parseInt(prompt("Ingresa el numero a buscar: "));

function searchList(listElement, elementSearch) {
    for (let index = 0; index < listElement.length; index++) {
        if (elementSearch == listElement[index]) {
            return index;
        }
    }
    return -1;
}

function elementFound(position) {
    if (position != -1) {
        alert(`El elemento se encontro en la posición ${position}`);
    } else {
        alert('Elemento no encontrado en la lista');
    }
}

let position = searchList(listElement, elementSearch);
elementFound(position);
