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

export const spaceModel = mongoose.model("Space", spaceSchema);
