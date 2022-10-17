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

const boardModel = mongoose.model("Board", boardSchema);

const boardRefactor = (data) => {
  return {
    id: data?._id,
    name: data?.name,
    points: data?.points,
    space_id: data?.space_id,
    description: data?.description,
    is_active: data?.is_active,
    desktopUnits: data?.desktopUnits.map((dataUnit) => {
      return {
        id: dataUnit._id,
        name: dataUnit.name,
        colSpan: dataUnit.colSpan,
        rowSpan: dataUnit.rowSpan,
        componentName: dataUnit.componentName,
        componentData: dataUnit.componentData,
        order: dataUnit.order,
      };
    }),
    tabletUnits: data?.tabletUnits.map((dataUnit) => {
      return {
        id: dataUnit._id,
        name: dataUnit.name,
        colSpan: dataUnit.colSpan,
        rowSpan: dataUnit.rowSpan,
        componentName: dataUnit.componentName,
        componentData: dataUnit.componentData,
        order: dataUnit.order,
      };
    }),
    mobileUnits: data?.mobileUnits.map((dataUnit) => {
      return {
        id: dataUnit._id,
        name: dataUnit.name,
        colSpan: dataUnit.colSpan,
        rowSpan: dataUnit.rowSpan,
        componentName: dataUnit.componentName,
        componentData: dataUnit.componentData,
        order: dataUnit.order,
      };
    }),
    category_id: data?.category_id,
    packages: data?.packages,
    created_at: data?.created_at,
    updated_at: data?.updated_at,
  };
};

export { boardModel, boardRefactor };
