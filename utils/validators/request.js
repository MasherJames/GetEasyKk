import isEmpty from "./isEmpty";

const requestValidator = data => {
  let errors = {};

  if (isNaN(data.seats) || data.seats > 3) {
    errors.seats = "Seats must be Number and not more than 3";
  }

  if (isEmpty(data.seats)) {
    errors.seats = "Seats field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

export default requestValidator;
