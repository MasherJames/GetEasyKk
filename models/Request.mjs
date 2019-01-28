import mongoose from "mongoose";
const Schema = mongoose.Schema;

const requestSchema = new Schema({
  requester: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },

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
