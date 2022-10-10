import mongoose from "mongoose";
const { Schema } = mongoose;

const dataUnitSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        points: {
            type: Number,
            required: true,
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

export const dataUnitModel = mongoose.model("DataUnit", dataUnitSchema);