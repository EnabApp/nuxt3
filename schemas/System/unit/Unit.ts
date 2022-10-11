import mongoose from "mongoose";
const { Schema } = mongoose;

const UnitSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        colSpan: {
            type: Number,
            required: true
        },
        rowSpan: {
            type: Number,
            required: true
        },
        componentName: {
            type: String,
        },
        componentData: {
            type: Object,
        },
        order: {
            type: Number,
        },
        board: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Board",
            // required: true,
        },
    },
    {
        timestamps: true,
    }
);

export const UnitModel = mongoose.model("Unit", UnitSchema);