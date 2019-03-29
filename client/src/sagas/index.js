import { all } from "redux-saga/effects";
import registerWatcherSaga from "./registerSaga";
import loginWatcherSaga from "./loginSaga";
import getRidesWorkerSaga from "./getRidesSaga";
import postRideWatcherSaga from "./postRideSaga";

function* rootSaga() {
  yield all([
    registerWatcherSaga(),
    loginWatcherSaga(),
    getRidesWorkerSaga(),
    postRideWatcherSaga()
  ]);
}

export default rootSaga;
