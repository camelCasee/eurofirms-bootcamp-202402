function salute(name, surname) {
    console.log('Hello ' + name + ' ' + surname)
}

var saluteResult = salute('Pepito Grillo')
// Hello Pepito Grillo

//----------------------------
function sum(a, b) {
    var sumResult = a + b

    return sumResult
}

var result = sum(10, 20) // 30
var result2 = sum(40, 50) // 90

//----------------------------
function push(array, value) {
    array[array.length] = value

    return array.length
}

var numbers = [10, 20, 30, 40]

var pushResult = push(numbers, 50)

// numbers = [10, 20, 30, 40, 50]
// pushResult = 5

//----------------------------
var fullName = 'Pepito Grillo'

function salute2(name, surname) {
    var fullName = name + ' ' + surname

    console.log(fullName)
}

salute2('Peter', 'Pan') // Peter Pan

//------------------------------
// ''   ---> false
// '0'  ---> true
// 0    ---> false
// NaN  ---> false
// null ---> false
// []   ---> true
// undefined ---> false
// 'false' ---> true

// !''  ---> true
// !!'' ---> false

// 10 === 10 ---> true
// 10 === 20 ---> false

// 10 !== 10 ---> false
// 10 !== 20 ---> true

// 10 > 20 ---> false
// 10 > 5 ---> true
// 10 < 20 ---> true
// 10 < 5 ---> false
// 10 > 10 ---> false
// 10 >= 10 ---> true
// 10 <= 10 ---> true

//-------------------------
var condition1 = 10 === 20
var condition2 = 10 !== 20

if (condition1 && condition2) {
    console.log('two conditions are ok')
}
//------------------------
var array = []

array.pop() // nada

array = null

array.pop() // cannot read properties of null reading 'pop'

array = undefined

array.pop() // cannot read properties of undefined reading 'pop'
//----------------------------
function multiply(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        console.log('Lo valores deben ser numericos')

        return null
    }

    return a * b
}

var multiplyResult = multiply(10, 20) // 200
var multiplyResult2 = multiply('hola', 10) // null

// -----------------------------
// function divide(a, b) {
//     if (typeof a !== 'number' || typeof b !== 'number') {
//         console.log('Lo valores deben ser numericos')
//     } else if (b === 0) {
//         console.log('El segundo valor no puede ser 0')
//     }
//     else {
//         return a / b
//     }
// }

function divide(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        console.log('Lo valores deben ser numericos')

        return
    }

    if (b === 0) {
        console.log('El segundo valor no puede ser 0')

        return
    }

    return a / b
}

var divideResult = divide(10, 20) // 0.5
var divideResult2 = divide('hola', 10) // null

//------------------------------
// typeof 'hola' === 'string'

// typeof '@' === 'string'

// typeof 6 < 18 === false
// typeof (6 < 18) === 'boolean'
// typeof true === 'boolean'

// typeof !name.length === 'boolean'
// typeof (typeof !name.length) === 'string'
// typeof !(typeof (typeof !name.length)) === 'boolean'

//----------------------------------------------
var user = {
    id: '594gmsk4mf4m4f',
    email: 'pepito@grillo.com',
    name: 'pepito',
    password: '123123123',
    age: 18,
    'mi-cv': {
        experiences: {

        }
    },
    salute: function () {
        console.log('hola')
    },
    lastName: 'Grillo'
}

user.salute()
user.miCv.experiences.years = 2
user.miCv.experiences.job = 'Camarero'

user.email // 'pepito@grillo.com
user.name // 'Pepito'
user.password = '12345678'
user.password // '12345678'
user.surname = 'Grillo'
user.surname // 'Gillo'
user.mi - cv // ReferenceError
user['mi-cv'] // accede a la propiedad
user['surname'] // 'Grillo'

function addPropertyToUser(key, value) {
    user.key = value // user = {key: 'Grillo}
    user[key] = value // user = {lastName: 'Grillo'}
}

addPropertyToUser('lastName', 'Grillo')

var user2 = {}

user2.email = 'peter@pan.com'

// delete user2.email 
//------------------------

function pressKey(key) {
    switch (key) {
        case 'ArrowUp':
            // code to move up
            break;
        case 'ArrowRight':
            // code to move right
            break;
        case 'ArrowDown':
            // code to move down
            break;
        case 'ArrowLeft':
            // code to move left
            break
    }
}

//-----------------------
function phoneticLookup(val) {
    let result = "";

    switch (val) {
        case "alpha":
            result = "Adams";
            break;
        case "bravo":
            result = "Boston";
            break;
        case "charlie":
            result = "Chicago";
            break;
        case "delta":
            result = "Denver";
            break;
        case "echo":
            result = "Easy";
            break;
        case "foxtrot":
            result = "Frank";
    }

    return result;
}

function phoneticLookup(val) {
    var result = ''

    var radioCodes = {
        alpha: 'Adams',
        bravo: 'Boston',
        charlie: 'Chicago',
        delta: 'Denver',
        echo: 'Easy',
        foxtrot: 'Frank'
    }

    result = radioCodes[val]

    return result
}
phoneticLookup("charlie");

var radioCodes = {
    alpha: 'Adams',
    bravo: 'Boston',
    charlie: 'Chicago',
    delta: 'Denver',
    echo: 'Easy',
    foxtrot: 'Frank'
}

radioCodes.hasOwnProperty('alpha') // true

//-------------------------------

function doSomething(text) {
    return text
}

function forEach(array, callback) {
    for (var i = 0; i < array.length; i++) {
        callback(array[i])
    }
}

var numbers = [10, 20, 30]

forEach(numbers, function (number) {
    console.log(number * 10)
})

function map(array, callback) {
    var result = []

    for (var i = 0; i < array.length; i++) {
        result[i] = callback(array[i])
    }

    return result
}

var numbers2 = map(numbers, function (number) {
    return number * 10
})

// const CARS_WEB_URL = 'http://www.cars.com etc
// const pi = 3.14
// const pi = 3 // error
// pi = 'hola'  // error

// var pi = 3.14
// var pi = 4
// pi = 'hola'

// let pi = 3.14
// pi = 'hola' // all good
// let pi = 3.14 // error

// var name = 'Pepito'
// var surname
// switch (name) {
//     case 'Pepito':
//         surname = 'Grillo'
//         break
//     case 'Wendy':
//         surname = 'Darling'
//         break
// }
// if(positionStart > 0 ){
//     if(positionStart >= object.length){
//         return
//     }
// }else {
//     if (positionStart > -object.length) {
//         positionStart = object.length + positionStart
//     }
// }
// switch (positionStart > 0) {
//     case true:
//         if (positionStart >= object.length) {
//             return
//         }
//         break
//     case false:
//         if (positionStart > -object.length) {
//             positionStart = object.length + positionStart
//         } 
//         break
// }