import { all } from "redux-saga/effects";
import registerWatcherSaga from "./registerSaga";
import loginWatcherSaga from "./loginSaga";

function* rootSaga() {
  yield all([registerWatcherSaga(), loginWatcherSaga()]);
}

export default rootSaga;
