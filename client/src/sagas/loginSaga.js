import { takeEvery, call, put } from "redux-saga/effects";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { LOGIN_CALL_REQUEST } from "../actionTypes/loginActionTypes";
import {
  loginRequestFailure,
  loginRequestSuccess,
  setCurrentUser
} from "../actions/loginActions";
import { setTokenToLocalStorage, setAuthToken } from "../utils/auth";
import history from "../history";

// Calls the register endpoint
const loginUser = payload => axios.post("/api/users/login", payload);

// generator function for loginworker saga
function* loginWorkerSaga(action) {
  try {
    const response = yield call(loginUser, action.payload);
    yield put(loginRequestSuccess(response.data));
    setTokenToLocalStorage(response.data.token);
    setAuthToken(response.data.token);
    const decoded = jwtDecode(response.data.token);
    yield put(setCurrentUser(decoded));
    history.push("/dashboard");
  } catch (error) {
    yield put(loginRequestFailure(error.response.data));
  }
}

//generator function for loginworker saga
export default function* loginWatcherSaga() {
  yield takeEvery(LOGIN_CALL_REQUEST, loginWorkerSaga);
}
