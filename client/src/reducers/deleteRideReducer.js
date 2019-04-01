import {
  DELETE_RIDE_REQUEST,
  DELETE_RIDE_SUCCESS,
  DELETE_RIDE_FAILURE
} from "../actionTypes/ridesActionTypes";

const initialState = {
  isDeleting: false,
  error: {}
};

const deleteRideReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_RIDE_REQUEST:
      return {
        ...state,
        isDeleting: true
      };
    case DELETE_RIDE_SUCCESS:
      return {
        ...state,
        isDeleting: false
      };
    case DELETE_RIDE_FAILURE:
      return {
        ...state,
        isDeleting: false,
        error: action.error
      };
    default:
      return state;
  }
};

export default deleteRideReducer;
