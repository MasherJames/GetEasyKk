import { put, call, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { REGISTER_CALL_REQUEST } from "../actionTypes/registerActionTypes";
import {
  registerFailureAction,
  registerSuccessAction
} from "../actions/registerActions";

// Calls the register endpoint
const registerUser = payload => axios.post("/api/users/signup", payload);

// generator function for the registerworker saga
function* registerWorkerSaga(action) {
  try {
    const response = yield call(registerUser, action.payload);
    yield put(registerSuccessAction(response.data));
  } catch (error) {
    yield put(registerFailureAction(error.response.data));
  }
}
// generator function for the registerwatcher saga
export default function* registerWatcherSaga() {
  yield takeEvery(REGISTER_CALL_REQUEST, registerWorkerSaga);
}
