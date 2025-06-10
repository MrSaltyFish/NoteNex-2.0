import mongoose from "mongoose";

const requestSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    maxlength: 200,
  },
  description: {
    type: String,
    required: true,
    trim: true,
    maxlength: 1000,
  },
  phoneNumber: {
    type: String,
    validate: {
      validator: function (v) {
        // Basic optional validation for 10-digit Indian number
        return !v || /^[6-9]\d{9}$/.test(v);
      },
      message: (props) => `${props.value} is not a valid phone number!`,
    },
    sparse: true, // ensures optional indexing doesn't conflict
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Request = mongoose.model("Request", requestSchema);
export default Request;
