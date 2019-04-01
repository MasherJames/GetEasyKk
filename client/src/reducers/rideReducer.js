import {
  GET_RIDE_REQUEST,
  GET_RIDE_SUCCESS,
  GET_RIDE_FAILURE
} from "../actionTypes/ridesActionTypes";

const initialState = {
  isFetching: false,
  ride: {},
  error: {}
};

const rideReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RIDE_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case GET_RIDE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        ride: action.ride
      };
    case GET_RIDE_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    default:
      return state;
  }
};

export default rideReducer;
