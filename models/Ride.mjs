import mongoose from "mongoose";
const Schema = mongoose.Schema;

const rideSchema = new Schema({
  driver: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  origin: {
    type: String,
    required: true
  },
  destination: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now()
  },
  capacity: {
    type: Number,
    required: true
  }
});

export default mongoose.model("Ride", rideSchema);
