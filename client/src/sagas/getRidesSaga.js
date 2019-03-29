import { put, call, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { GET_RIDES_REQUEST } from "../actionTypes/ridesActionTypes";
import {
  getRidesActionSuccess,
  getRidesActionFailure
} from "../actions/ridesActions";

const getRides = () => axios.get("/api/rides");

function* getRidesWorkerSaga(action) {
  try {
    const response = yield call(getRides);

    if (response.data.status !== 200) {
      yield put(getRidesActionFailure(response.data));
    } else {
      yield put(getRidesActionSuccess(response.data.rides));
    }
  } catch (error) {
    yield put(getRidesActionFailure(error.response.data));
  }
}

export default function* getRidesWatcherSaga() {
  yield takeEvery(GET_RIDES_REQUEST, getRidesWorkerSaga);
}
