import {
  GET_RIDES_REQUEST,
  GET_RIDES_SUCCESS,
  GET_RIDES_FAILURE
} from "../actionTypes/ridesActionTypes";

export const getRidesAction = () => ({
  type: GET_RIDES_REQUEST
});

export const getRidesActionSuccess = rides => ({
  type: GET_RIDES_SUCCESS,
  rides
});

export const getRidesActionFailure = error => ({
  type: GET_RIDES_FAILURE,
  error
});
