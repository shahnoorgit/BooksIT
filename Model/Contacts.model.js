import mongoose from "mongoose";

const HRcontactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    action: {
      type: String,
      enum: ["contacted", "pending", "call_not_picked", "successful", "failed"],
      default: "pending", // Default action when contact is added
    },
    contactDate: {
      type: Date,
      default: Date.now,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Contacts = mongoose.model("Contacts", HRcontactSchema);

export default Contacts;
