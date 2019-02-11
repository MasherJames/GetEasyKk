import { all } from "redux-saga/effects";
import registerWatcherSaga from "./registerSaga";

function* rootSaga() {
  yield all([registerWatcherSaga()]);
}

export default rootSaga;
