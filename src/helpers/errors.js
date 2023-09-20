const customError = (inputValue, formGroup) => {
    if (formGroup.validations.max) {
        if (inputValue.length > formGroup.validations.max) {
            return `El máximo de carácteres es: ${formGroup.validations.max}`
        }
    }
    if (formGroup.validations.min) {
        if (inputValue.length < formGroup.validations.min) {
            return `El mínimo de carácteres es: ${formGroup.validations.min}`
        }
    }
}

export default customError
