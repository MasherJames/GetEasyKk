import mongoose from "mongoose";
const Schema = mongoose.Schema;

const requestSchema = new Schema({
  requester: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },

  ride: {
    type: Schema.Types.ObjectId,
    ref: "Ride"
  },

  seats: {
    type: Number,
    required: true
  },

  status: {
    type: String,
    default: "pending"
  },

  date: {
    type: Date,
    default: Date.now()
  }
});

export default mongoose.model("Request", requestSchema);
