import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone_number: {
      type: String,
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
