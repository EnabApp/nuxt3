import mongoose from "mongoose";
const { Schema } = mongoose;

const profileSchema = new Schema(
  {
    user_id: [Schema.Types.ObjectId],
    name: {
      type: String,
      required: true,
    },
    phonenumber: {
      type: String,
      required: false,
    },
    avatarUrl: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

export const profileModel = mongoose.model("Profile", profileSchema);
