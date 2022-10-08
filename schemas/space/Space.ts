import mongoose from "mongoose";
const { Schema } = mongoose;

const spaceSchema = new Schema(
    {
        _id: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        business: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Business",
            required: true,
        },
        boards: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Board",
            },
        ],
    },
    {
        timestamps: true,
    }
);

export const spaceModel = mongoose.model("Space", spaceSchema);
