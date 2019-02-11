import {
  REGISTER_CALL_REQUEST,
  REGISTER_CALL_SUCCESS,
  REGISTER_CALL_FAILURE
} from "../actionTypes/registerActionTypes";

export const registerRequestAction = payload => ({
  type: REGISTER_CALL_REQUEST,
  payload
});

export const registerSuccessAction = response => ({
  type: REGISTER_CALL_SUCCESS,
  payload: response.message
});

export const registerFailureAction = response => ({
  type: REGISTER_CALL_FAILURE,
  payload: response.message
});
