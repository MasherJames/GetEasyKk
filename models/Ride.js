import mongoose from "mongoose";
const Schema = mongoose.Schema;

const rideSchema = new Schema({
  from: {
    type: String,
    required: true
  },
  to: {
    type: String,
    required: true
  },
  from: {
    type: String,
    required: true
  }
});

export default mongoose.model("Ride", rideSchema);
