import {
  POST_RIDES_REQUEST,
  POST_RIDES_SUCCESS,
  POST_RIDES_FAILURE
} from "../actionTypes/postrideActionTypes";

const initialState = {
  ride: {},
  isPosting: false,
  errors: {}
};

const postRideReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_RIDES_REQUEST:
      return { ...state, isPosting: true };
    case POST_RIDES_SUCCESS:
      return { ...state, isPosting: true, ride: action.payload };
    case POST_RIDES_FAILURE:
      return { ...state, isPosting: true, errors: action.payload };

    default:
      return state;
  }
};
export default postRideReducer;
