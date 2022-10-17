import mongoose from "mongoose";
const { Schema } = mongoose;

const boardSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    points: {
      type: Number,
      required: true,
    },
    space: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Space",
    },
    description: {
      type: String,
      required: false,
    },
    is_active: {
      type: Boolean,
      default: true,
    },
    desktopUnits: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Unit",
      },
    ],
    tabletUnits: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Unit",
      },
    ],
    mobileUnits: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Unit",
      },
    ],
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
    packages: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Package",
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const boardModel = mongoose.model("Board", boardSchema);
