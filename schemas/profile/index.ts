import mongoose from "mongoose";
const { Schema } = mongoose;

const profileSchema = new Schema({
  user_id: [Schema.Types.ObjectId],
  name: {
    type: String,
    required: true,
  },
  phonenumber: {
    type: String,
    required: false,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

export const profileModel =
  mongoose.models.Profile || mongoose.model("Profile", profileSchema);
