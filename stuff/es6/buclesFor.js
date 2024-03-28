const numbers = [10, 20, 30, 40, 50]

const user = {
    name: 'pepito',
    surname: 'grillo',
    direction: {
        city: 'Madrid',
        street: 'Gran via #104',
        country: 'Spain'
    }
}

// en cada iteracion nos da el indice, nos sirve para recorrer tanto objetos, como arrays y strings
// en caso de un objeto, nos da la key en cada iteracion

// for (const i in numbers) {
//     console.log(i)
// }

// for (const key in user) {
//     console.log(key)
// }

const keys = Object.keys(user)

const values = Object.values(user)

const entries = Object.entries(user)

// console.log(keys)
// console.log(values)
console.log(entries)

// en cada iteracion nos da el valor en dicha posicion
// principalmente para recorrer arrays y strings, no permite recorrer objetos
// for (const number of numbers) {
//     console.log(number)
// }