import isEmpty from "./isEmpty.mjs";

const loginValidator = data => {
    let errors = {};

    if (!data.email.match(/^[^@]+@[^@]+.[^@]+$/)) {
        errors.email = "Email is invalid";
    }

    if (isEmpty(data.password)) {
        errors.password = "Password field is required";
    }

    if (isEmpty(data.email)) {
        errors.email = "Email field is required";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};

export default loginValidator;