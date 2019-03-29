import {
  POST_RIDES_REQUEST,
  POST_RIDES_SUCCESS,
  POST_RIDES_FAILURE
} from "../actionTypes/postrideActionTypes";

export const postRideRequestAction = ride => ({
  type: POST_RIDES_REQUEST,
  payload: ride
});
export const postRideRequestSuccess = data => ({
  type: POST_RIDES_SUCCESS,
  payload: data
});
export const postRideRequestFailure = error => ({
  type: POST_RIDES_FAILURE,
  payload: error
});
