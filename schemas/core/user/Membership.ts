import mongoose from "mongoose";
const { Schema } = mongoose;

const membershipSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        users: [
            {
                type: Schema.Types.ObjectId,
                ref: "User",
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
