import { put, call, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { POST_RIDES_REQUEST } from "../actionTypes/postrideActionTypes";
import {
  postRideRequestSuccess,
  postRideRequestFailure
} from "../actions/postRideActions";

const postRide = payload => axios.post("/api/rides", payload);

function* postRideWorkerSaga(action) {
  try {
    const response = yield call(postRide, action.payload);
    yield put(postRideRequestSuccess(response.data.ride));
  } catch (error) {
    yield put(postRideRequestFailure(error.response.data));
  }
}

export default function* postRideWatcherSaga() {
  yield takeEvery(POST_RIDES_REQUEST, postRideWorkerSaga);
}
