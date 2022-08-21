// JSON.parse() -> Convierte de un string a un JSON
// JSON.stringify() -> De un objeto JS a un JSON

// objetos -> JSON
// 
const personaObject = {
    // clave: value
    name: 'Fernanda',
    lastName: 'Palacios',
    age: 26,
    hobbies: [
        'Ve anime',
        'Programar'
    ],
    socialNetworks: {
        github: '@EveFer',
        facebook: 'Fernanda Palacios'
    },
    isSingle: true,
    greeting: function () {
        return 'Hola amigos!'
    }
}

// Como acceden  a las propiedades
// nameObject.nameProperty
// nameObject[nameProperty]
console.log(personaObject.lastName)
console.log(personaObject['lastName'])

// puedo agregar una propiedad a un objeto?

personaObject.birthDate = '1996/06/24'
personaObject['work']= 'Full stack Developer'



console.log(personaObject.greeting())

personaObject.name = 'Evelyn Fernanda'


// delete personaObject.age

console.log(personaObject)
// Destructuring assignment

// Evelyn Fernanda Palacios Vera

// const name = personaObject.name
// const lastName = personaObject.lastName

// const {que propiedades quiero del objeto} = de que objeto?

const {name: firstName, lastName, age, socialNetworks: {github}} = personaObject

const fullName = `${firstName} ${lastName} y tengo ${age} y mi github es: ${github}`

console.log(fullName)






