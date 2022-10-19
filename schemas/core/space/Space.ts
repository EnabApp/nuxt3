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
    id: space?._id,
    name: space?.name,
    business: {
      id: space?.business?._id,
      name: space?.business?.name,
    },
    description: space?.description,
    is_active: space?.is_active,
    boards: space?.boards?.map((board) => {
      return {
        id: board?._id,
        name: board?.name,
        is_active: board?.is_active,
        description: board?.description,
        units: {
          desktop: board?.desktopUnits,
          tablet: board?.tabletUnits,
          mobile: board?.mobileUnits,
        },
      };
    }),
    boardsCount: space?.boards?.length,
  };
};

export { spaceModel, spaceRefactor };
