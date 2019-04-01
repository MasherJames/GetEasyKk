import { combineReducers } from "redux";
import registerReducer from "./registerReducer";
import loginReducer from "./loginReducer";
import ridesReducer from "./ridesReducer";
import postRideReducer from "./postRideReducer";
import rideReducer from "./rideReducer";
import updateRideReducer from "./updateReducer";
import deleteRideReducer from "./deleteRideReducer";

export default combineReducers({
  registerUser: registerReducer,
  loginUser: loginReducer,
  getRides: ridesReducer,
  postRide: postRideReducer,
  getRide: rideReducer,
  updateRide: updateRideReducer,
  deleteRide: deleteRideReducer
});
