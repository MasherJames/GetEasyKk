import { all } from "redux-saga/effects";
import registerWatcherSaga from "./registerSaga";
import loginWatcherSaga from "./loginSaga";
import {
  getRidesWatcherSaga,
  getRideWatcherSaga,
  updateRideWatcherSaga,
  deleteRideWatcherSaga
} from "./getRidesSaga";
import postRideWatcherSaga from "./postRideSaga";

function* rootSaga() {
  yield all([
    registerWatcherSaga(),
    loginWatcherSaga(),
    getRidesWatcherSaga(),
    postRideWatcherSaga(),
    getRideWatcherSaga(),
    updateRideWatcherSaga(),
    deleteRideWatcherSaga()
  ]);
}

export default rootSaga;
