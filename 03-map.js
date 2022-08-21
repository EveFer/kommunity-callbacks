
/*
Crear una función map que acepte un array y un callback y que:

por cada elemento del array ejecute el callback pasándole dicho elemento como argumento

obtenga el resultado

lo agregue a un nuevo array

devuelva el array final con el resultado de cada una de las llamadas al callback.
*/

// [2,5,8,8] -> [4,10,16,16]
// [2,5,8,8] -> [1,4,7,7]
// ['Jonatan', 'Manu', 'Annie', 'Cin'] -> ['J', 'M', 'A', 'C']
// ['Manu Cabrera Rojas', 'Cin Ruiz Verdugo', 'Fanny Perez Leyva'] -> ['M. C. R.', 'C. R. V.', 'F. P. L.']

function map(myArray, callback) {
    let newArray = []
    for(let i=0; i<myArray.length; i++) {
        const elementCurrent = myArray[i]
        const newElement = callback(elementCurrent)
        newArray.push(newElement)
    }
    return newArray
}

// let | const -> scope de bloque

// {} -> bloque


const numbersArray = [2,5,8,8]

const numberDuplicated = (number) => {
    return number * 2
}

const numbersDuplicated = map(numbersArray, numberDuplicated)
const numbersDuplicated2 = map(numbersArray, (number) => number * 2)

console.log(numbersDuplicated)
console.log(map(numbersArray, (number) => number * 2))

const getFirstLetter =  (name) => {
    return `${name.charAt(0)}.`
}

const arrayKoders = ['Jonatan', 'Manu', 'Annie', 'Cin']

console.log(map(arrayKoders, getFirstLetter))

// split

// 1.
// 2.
// 3.
// 4.
// 5.

const koders = ['Manu Cabrera Rojas', 'Cin Ruiz Verdugo', 'Fanny Perez Leyva']

const initials = map(koders, (koder) => {
    const nameSplitted = koder.split(' ') // ['Manu', 'Cabrera', 'Rojas']
    const initials = map(nameSplitted, getFirstLetter) // ['M.', 'C.', 'R.']
    const stringInitials = initials.join(' ') // 'M. C. R.'
    // .concat([1,2,3], [3,4,6]) // -> [1,2,3,3,4,6]
    return stringInitials
})

const initialsTwoMethod = map(koders, (koder) => {
    const nameSplitted = koder.split(' ') // ['Manu', 'Cabrera', 'Rojas']
    const newArray = []
    for(let i=0; i<nameSplitted.length; i++) {
        newArray.push(nameSplitted[0])
    }
    const stringInitials = newArray.join(' ') // 'M.-C.-R.'
    // .concat([1,2,3], [3,4,6]) // -> [1,2,3,3,4,6]
    return stringInitials
})



console.log(initials)






