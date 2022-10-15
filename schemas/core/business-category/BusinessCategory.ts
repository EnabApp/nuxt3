import mongoose from "mongoose";
const { Schema } = mongoose;

const businessCategorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    businesses: [
      {
        type: Schema.Types.ObjectId,
        ref: "Business",
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
const businessCategoryModel = mongoose.model(
  "BusinessCategory",
  businessCategorySchema
);

const businessCategoryRefactor = (data) => {
  return {
    id: data._id,
    value: data.name,
  };
}

export { businessCategoryModel, businessCategoryRefactor };

