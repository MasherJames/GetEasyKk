import {
  LOGIN_CALL_REQUEST,
  LOGIN_CALL_SUCCESS,
  LOGIN_CALL_FAILURE
} from "../actionTypes/loginActionTypes";

const initialState = {
  loggingIn: false,
  token: "",
  errors: {},
  payload: {}
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_CALL_REQUEST:
      return { ...state, logingIn: true, payload: action.payload };
    case LOGIN_CALL_SUCCESS:
      return { ...state, logingIn: false, token: action.payload.token };
    case LOGIN_CALL_FAILURE:
      return { ...state, logingIn: false, errors: action.payload };
    default:
      return state;
  }
};

export default loginReducer;
