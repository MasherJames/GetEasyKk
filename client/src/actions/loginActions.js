import {
  LOGIN_CALL_REQUEST,
  LOGIN_CALL_SUCCESS,
  LOGIN_CALL_FAILURE,
  SET_CURRENT_USER,
  LOGOUT
} from "../actionTypes/loginActionTypes";
import { setAuthToken } from "../utils/auth";

export const loginRequestAction = payload => ({
  type: LOGIN_CALL_REQUEST,
  payload
});

export const loginRequestSuccess = response => ({
  type: LOGIN_CALL_SUCCESS,
  payload: response
});

export const loginRequestFailure = response => ({
  type: LOGIN_CALL_FAILURE,
  payload: response
});

export const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  payload: user
});

export const logoutUser = () => {
  localStorage.removeItem("token");
  setAuthToken(false);
  return {
    type: LOGOUT
  };
};
