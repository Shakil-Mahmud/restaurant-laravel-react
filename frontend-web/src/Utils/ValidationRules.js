export const validateEmail = (email) => {
    const expression = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return expression.test(String(email).toLowerCase());
}

