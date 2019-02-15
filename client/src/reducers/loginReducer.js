import {
  LOGIN_CALL_REQUEST,
  LOGIN_CALL_SUCCESS,
  LOGIN_CALL_FAILURE,
  SET_CURRENT_USER,
  LOGOUT
} from "../actionTypes/loginActionTypes";
import isEmpty from "../utils/isEmpty";

const initialState = {
  loggingIn: false,
  token: "",
  errors: {},
  payload: {},
  isAuthenticated: false
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_CALL_REQUEST:
      return { ...state, logingIn: true, payload: action.payload };
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        payload: action.payload,
        logingIn: false
      };
    case LOGIN_CALL_SUCCESS:
      return { ...state, logingIn: false, token: action.payload.token };
    case LOGIN_CALL_FAILURE:
      return { ...state, logingIn: false, errors: action.payload };
    case LOGOUT:
      return { ...state, payload: {}, isAuthenticated: false };
    default:
      return state;
  }
};

export default loginReducer;
