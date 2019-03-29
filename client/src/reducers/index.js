import { combineReducers } from "redux";
import registerReducer from "./registerReducer";
import loginReducer from "./loginReducer";
import ridesReducer from "./ridesReducer";
import postRideReducer from "./postRideReducer";

export default combineReducers({
  registerUser: registerReducer,
  loginUser: loginReducer,
  getRides: ridesReducer,
  postRide: postRideReducer
});
