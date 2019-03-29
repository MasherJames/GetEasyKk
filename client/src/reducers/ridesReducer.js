import {
  GET_RIDES_REQUEST,
  GET_RIDES_SUCCESS,
  GET_RIDES_FAILURE
} from "../actionTypes/ridesActionTypes";

const initialState = {
  isFetching: false,
  rides: [],
  error: {}
};

const ridesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RIDES_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case GET_RIDES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        rides: action.rides
      };
    case GET_RIDES_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    default:
      return state;
  }
};

export default ridesReducer;
