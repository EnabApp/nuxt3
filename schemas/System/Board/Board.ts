import mongoose from 'mongoose';
const { Schema } = mongoose;

const boardSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: false
        },
        is_active: {
            type: Boolean,
            default: true
        },
        units: {
            type: {
                desktop: [{ type: mongoose.Schema.Types.ObjectId, ref: "Unit",}],
                tablet: [{ type: mongoose.Schema.Types.ObjectId, ref: "Unit",}],
                mobile: [{ type: mongoose.Schema.Types.ObjectId, ref: "Unit",}],
            },
            required: true,
        },
    },
    {
        timestamps: true
    }
);

export const boardModel = mongoose.model("Board", boardSchema);
