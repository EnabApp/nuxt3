import mongoose from "mongoose";
const { Schema } = mongoose;

const spaceSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    business: {
      type: Schema.Types.ObjectId,
      ref: "Business",
      required: true,
    },
    // boards and data_units are populated in the server
    boards: [
      {
        type: Schema.Types.ObjectId,
        ref: "Board",
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

const spaceModel = mongoose.model("Space", spaceSchema);

const spaceRefactor = (space) => {
  return {
    id: space._id,
    name: space?.name,
    business: space?.business,
    description: space?.description,
    is_active: space?.is_active,
    createdAt: space?.createdAt,
    updatedAt: space?.updatedAt,
    boardsCount: space?.boards?.length,
  };
};

export { spaceModel, spaceRefactor };
