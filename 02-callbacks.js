// Es la declaracion de la una función que
// pasará como parametro a otra función para
// ser ejecutada posterior


// Declaracion de la funcion
function irAlSuperMercado(callback) {
    console.log('Llendo al super mercado')
    console.log('Llegue al supermercado')
    callback() // Ejecutando - function avisar avisar()
}

function avisar () {
    console.log('Mama, ya llegue al supermercado')
}

// Ejecutar la función
irAlSuperMercado(avisar) // pasando la declaración de la función
// irAlSuperMercado(avisar()) // pasando la ejecución de la función  X


// 1º Avisar cuando llegue
// 2º Avisar cuando vaya de regreso
// 3º Avisar cuando ya esta en casa

function irAlSuperMercado(callback) {
    console.log('Llendo al super mercado')
    console.log('Llegue al supermercado')
    callback('Hola Mamá, ya llegue al supermercado') // Ejecutando - function avisar avisar()
    console.log('Compre la despensa')
    console.log('Pague la cuenta')
    callback('Hola Mamá, ya voy de regreso')
    console.log('Ys estoy en casa')
    callback('Hola Mamita, ya estoy en casa :D')
}
// callback
function avisar(mensaje) {
    console.log('----------')
    console.log('tuu... tuu..')
    console.log(mensaje)
    console.log('pip...')
    console.log('----------')
}
irAlSuperMercado(avisar)

const avisar2 = (mensaje) => {
    console.log(mensaje)
}

irAlSuperMercado(avisar2)
irAlSuperMercado((mensaje) => {
    console.log(mensaje)
})



