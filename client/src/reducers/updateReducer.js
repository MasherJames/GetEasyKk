import {
  UPDATE_RIDE_REQUEST,
  UPDATE_RIDE_SUCCESS,
  UPDATE_RIDE_FAILURE
} from "../actionTypes/ridesActionTypes";

const initialState = {
  isUpdating: false,
  newRide: {},
  errors: {}
};

const updateRideReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_RIDE_REQUEST:
      return {
        ...state,
        isUpdating: true
      };
    case UPDATE_RIDE_SUCCESS:
      return {
        ...state,
        isUpdating: false,
        newRide: action.ride
      };
    case UPDATE_RIDE_FAILURE:
      return {
        ...state,
        isUpdating: false,
        errors: action.errors
      };
    default:
      return state;
  }
};

export default updateRideReducer;
