import {
  LOGIN_CALL_REQUEST,
  LOGIN_CALL_SUCCESS,
  LOGIN_CALL_FAILURE
} from "../actionTypes/loginActionTypes";

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
