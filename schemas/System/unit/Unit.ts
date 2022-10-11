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
            required: false
        },
        componentData: {
            type: Object,
            required: false
        },
        order: {
            type: Number,
            required: true
        },
        board: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Board",
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export const UnitModel = mongoose.model("Unit", UnitSchema);