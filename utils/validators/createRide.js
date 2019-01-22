import isEmpty from "./isEmpty";

const rideValidator = data => {
  let errors = {};

  if (isEmpty(data.origin)) {
    errors.origin = "Origin field is required";
  }

  if (isEmpty(data.destination)) {
    errors.destination = "Destination field is required";
  }

  if (!data.origin.match(/^[a-zA-Z0-9]{2,}$/)) {
    errors.origin = "Origin must be above 2 characters";
  }

  if (!data.destination.match(/^[a-zA-Z0-9]{2,}$/)) {
    errors.destination = "Destination must be above 2 characters";
  }

  if (isNaN(data.capacity)) {
    errors.capacity = "Capacity must be a number";
  }

  if (isEmpty(data.capacity)) {
    errors.capacity = "Capacity field is required";
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};

export default rideValidator;
