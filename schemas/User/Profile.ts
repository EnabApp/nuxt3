import mongoose from "mongoose";
const { Schema } = mongoose;

const profileSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    points: {
      type: Number,
      default: 100,
    },
    gender: {
      type: Number, // 1: "Male", 2: "Female"
    },
    avatar_url: {
      type: String,
      default: "https://wordsmith.org/words/images/avatar2_large.png",
    },
    phonenumber: {
      type: String,
      required: false,
    },
    website: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);
export const profileModel = mongoose.model("Profile", profileSchema);
