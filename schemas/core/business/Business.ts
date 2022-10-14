import mongoose from "mongoose";
const { Schema } = mongoose;

const businessSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
    },
    users: [
      {
        user_id: {
          type: Schema.Types.ObjectId,
          ref: "User",
        
        },
        Permissions: [
          {
            type: String,
          },
        ],
      },
    ],
    categories: [
      {
        type: Schema.Types.ObjectId,
        ref: "BusinessCategory",
      },
    ],
    spaces: [
      {
        type: Schema.Types.ObjectId,
        ref: "Space",
      },
    ],
    is_active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export const businessModel = mongoose.model("Business", businessSchema);
