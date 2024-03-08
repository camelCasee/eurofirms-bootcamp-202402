function sayHi(name) {
    console.log('hi ' + name)
}

function sayHiFrom(nameFrom, nameTo) {
    sayHi(nameTo)
    console.log('from ' + nameFrom)
}

sayHiFrom('Pepito', 'Wendy')

function maths(a, b, method) {
    function multiply() {
        var result = a * b

        return result
    }

    function add() {
        var result = a + b

        return result
    }

    if (method === 'add') return add()
    if (method === 'multiply') return multiply()
}

maths(10, 5, 'multiply')

maths(5, 6, 'add')

function some(object, callback) {
    var result = true

    callback()
}

var someCallback = function () {
    object // undefined
}