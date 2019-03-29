import {
  GET_RIDES_REQUEST,
  GET_RIDES_SUCCESS,
  GET_RIDES_FAILURE
} from "../actionTypes/ridesActionTypes";

const initialState = {
  isFetching: false,
  rides: {},
  error: {},
  testing: ""
};

const ridesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RIDES_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null,
        testing: "sending request"
      };
    case GET_RIDES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: null,
        rides: action.rides,
        testing: "sending success"
      };
    case GET_RIDES_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
        testing: "sending failure"
      };
    default:
      return state;
  }
};

export default ridesReducer;
