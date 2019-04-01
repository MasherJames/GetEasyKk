import { put, call, takeEvery } from "redux-saga/effects";
import axios from "axios";
import {
  GET_RIDES_REQUEST,
  GET_RIDE_REQUEST,
  UPDATE_RIDE_REQUEST,
  DELETE_RIDE_REQUEST
} from "../actionTypes/ridesActionTypes";
import {
  getRidesActionSuccess,
  getRidesActionFailure,
  getRideActionSuccess,
  getRideActionFailure,
  updateRideActionSuccess,
  updateRideActionFailure,
  deleteRideActionSuccess,
  deleteRideActionFailure
} from "../actions/ridesActions";
import history from "../history";

const getRides = () => {
  return axios.get("/api/rides");
};

const getRide = id => {
  return axios.get(`/api/rides/${id}`);
};

const updateRide = id => {
  return axios.put(`/api/rides/${id}`);
};

const deleteRide = id => {
  return axios.delete(`/api/rides/${id}`);
};

function* getRidesWorkerSaga() {
  try {
    const response = yield call(getRides);
    yield put(getRidesActionSuccess(response.data.rides));
  } catch (error) {
    yield put(getRidesActionFailure(error.response.data));
  }
}

export function* getRidesWatcherSaga() {
  yield takeEvery(GET_RIDES_REQUEST, getRidesWorkerSaga);
}

function* getRideWorkerSaga(action) {
  try {
    const response = yield call(getRide, action.payload);
    yield put(getRideActionSuccess(response.data));
  } catch (error) {
    yield put(getRideActionFailure(error.response.data));
  }
}

export function* getRideWatcherSaga() {
  yield takeEvery(GET_RIDE_REQUEST, getRideWorkerSaga);
}

function* updateRideWorkerSaga(action) {
  try {
    const response = yield call(updateRide, action.id);
    yield put(updateRideActionSuccess(response.data));
  } catch (error) {
    yield put(updateRideActionFailure(error.response.data));
  }
}

export function* updateRideWatcherSaga() {
  yield takeEvery(UPDATE_RIDE_REQUEST, updateRideWorkerSaga);
}

function* deleteRideWorkerSaga(action) {
  try {
    const response = yield call(deleteRide, action.id);
    yield put(deleteRideActionSuccess(response.data));
    history.push("/dashboard");
  } catch (error) {
    yield put(deleteRideActionFailure(error.response.data));
  }
}

export function* deleteRideWatcherSaga() {
  yield takeEvery(DELETE_RIDE_REQUEST, deleteRideWorkerSaga);
}
