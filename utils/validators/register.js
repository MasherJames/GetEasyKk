import isEmpty from "./isEmpty";

const singUpValidator = data => {
  let errors = {};

  if (isEmpty(data.username)) {
    errors.username = "Username field is required";
  }

  if (!data.username.match(/^[a-zA-Z0-9 ]{2,30}$/)) {
    errors.username = "Username must be between 2 and 30 characters";
  }

  if (isEmpty(data.email)) {
    errors.email = "Email field is required";
  }

  if (!data.email.match(/^[^@]+@[^@]+.[^@]+$/)) {
    errors.email = "Email is invalid";
  }
  if (isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  if (!data.password.match(/^[a-zA-Z0-9]{6,30}$/)) {
    errors.password = "Password must be atleast 6 characters";
  }

  if (isEmpty(data.confirmPassword)) {
    errors.confirmPassword = "Confirm password field is required";
  } else {
    if (data.password !== data.confirmPassword) {
      errors.confirmPassword = "Password must match";
    }
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};

export default singUpValidator;
