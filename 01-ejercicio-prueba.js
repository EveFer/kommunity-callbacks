// Crear una funcion que reciba un nombre y devuelva un saludo con el nombre
// output -> 'Hola {nombre}, bienvenido a Kodemia'

// Declaración de la función
function greeting (nameToGreet) {
    return `Hola ${nameToGreet}, bienvenid@ a Kodemia`
}

// ejecuto la función
const greetFer =  greeting('Fernanda')

console.log(greetFer)



// funciones anonimas
// Declaración de la función y a se asigna a una varieable
const sum = function (num1, num2) {
    return num1 + num2
}

function sum(num1, num2) {
    return num1 + num2
}


console.log(sum(10,16))

// arrow functions
// (param1, parama2, ...paramN) => {
    //     cuerpo de la funcion
// }

const resta = (num1, num2) => {
    return num1 - num2
}

function resta (num1, num2) {
    return num1 - num2
}

resta(10, 5)

// Si la arrow function recibe un unico parametro,
// podemos omitir los parentesis

const formatted = word => {
    return word.toLowerCase()
}

// Cuando recibamos más de un parametro
// es necesario colocar los parentesis

const sumar = (num1, num2, num3) => {

}

// Return implicito

/*
Solo aplica a arrow functions
Si lo que esta ejecutando mi funcion se puede
reducir a una solo linea,
podemos omitir las llaves y el return
*/

const restar = (num1, num2) => {
    return num1 - num2;
}

const restar2 = (num1, num2) => num1 - num2;
