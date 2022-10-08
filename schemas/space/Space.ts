import mongoose from "mongoose";
const { Schema } = mongoose;

const spaceSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        business_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Business",
            required: true,
        },

    },
    {
        timestamps: true,
    }
);

export const spaceModel = mongoose.model("Space", spaceSchema);
