function fieldValidator(string, validLength, stringName) {
    if (typeof string !== 'string') {
        return {
            isValid: false,
            message: stringName + ' must be a string'
        }
    }

    if (string.length < validLength) {
        return {
            isValid: false,
            message: stringName + ' must have at least ' + validLength + ' characters'
        }
    }

    return { isValid: true }
}