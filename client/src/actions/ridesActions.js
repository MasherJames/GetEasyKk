import {
  GET_RIDES_REQUEST,
  GET_RIDES_SUCCESS,
  GET_RIDES_FAILURE,
  GET_RIDE_REQUEST,
  GET_RIDE_SUCCESS,
  GET_RIDE_FAILURE,
  UPDATE_RIDE_REQUEST,
  UPDATE_RIDE_SUCCESS,
  UPDATE_RIDE_FAILURE,
  DELETE_RIDE_REQUEST,
  DELETE_RIDE_SUCCESS,
  DELETE_RIDE_FAILURE
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

export const getRideAction = id => ({
  type: GET_RIDE_REQUEST,
  payload: id
});

export const getRideActionSuccess = ride => ({
  type: GET_RIDE_SUCCESS,
  ride
});

export const getRideActionFailure = error => ({
  type: GET_RIDE_FAILURE,
  error
});

export const updateRideAction = (id, ride) => ({
  type: UPDATE_RIDE_REQUEST,
  payload: ride,
  id
});

export const updateRideActionSuccess = ride => ({
  type: UPDATE_RIDE_SUCCESS,
  ride
});

export const updateRideActionFailure = errors => ({
  type: UPDATE_RIDE_FAILURE,
  errors
});

export const deleteRideAction = id => ({
  type: DELETE_RIDE_REQUEST,
  id
});

export const deleteRideActionSuccess = () => ({
  type: DELETE_RIDE_SUCCESS
});

export const deleteRideActionFailure = errors => ({
  type: DELETE_RIDE_FAILURE,
  errors
});
