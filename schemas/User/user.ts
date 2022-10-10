import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phonenumber: {
      type: String,
      required: false,
    },
    last_login: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

export const userModel = mongoose.model("User", userSchema);
