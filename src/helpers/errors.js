import validDate from "../utils/validDate";

const customError = (inputName, inputValue, validations) => {
    if (required(inputValue.length)) {
        return `El campo ${inputName} es requerido`;
    }
    if (minError(inputValue.length, validations.min)) {
        return `El mínimo de carácteres es: ${validations.min}`;
    }
    if (maxError(inputValue.length, validations.max)) {
        return `El máximo de carácteres es: ${validations.max}`;
    }
    if (regExp(inputValue, validations.regExp)) {
        return `El valor no tiene forma de ${validations.regExp}`;
    }
    if (typeValue(inputValue, validations.typeValue)) {
        return `El valor del campo ${inputName} no es válido.`;
    }
    return '';
}

const required = (value) => {
    return value <= 0 ? true : false;
}

const minError = (value, validation) => {
    return value < validation ? true : false;
}

const maxError = (value, validation) => {
    return value > validation ? true : false;
}

const regExp = (value, validation) => {
    switch (validation) {
        case 'email':
            const REGEXP = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            return !value.match(REGEXP) ? true : false;
        default:
            return false
    }
}

const typeValue = (value, validation) => {
    switch (validation) {
        case 'dateY': // Formato de Fecha: YYYY-MM-DD
            return validDate(value, 'YYYYMMDD')            
        case 'dateM': //Formato de Fecha MM/DD/YYYY
            return validDate(value, 'MMDDYYYY')
        case 'dateD': //Formato de Fecha DD/MM/YYYY
            return validDate(value, 'DDMMYYYY')
        default:
            return false;
    }
}



export default customError
