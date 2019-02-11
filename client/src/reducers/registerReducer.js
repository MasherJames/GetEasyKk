import {
  REGISTER_CALL_REQUEST,
  REGISTER_CALL_SUCCESS,
  REGISTER_CALL_FAILURE
} from "../actionTypes/registerActionTypes";

const initialState = {
  signingUp: false,
  success: "",
  errors: {},
  payload: {}
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_CALL_REQUEST:
      return { ...state, signingUp: true, payload: action.payload };
    case REGISTER_CALL_SUCCESS:
      return { ...state, signingUp: false, success: action.payload };
    case REGISTER_CALL_FAILURE:
      return { ...state, signingUp: false, errors: action.payload };
    default:
      return state;
  }
};

export default registerReducer;
