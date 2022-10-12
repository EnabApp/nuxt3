import mongoose from "mongoose";
const { Schema } = mongoose;

const membershipSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        expirtion_date: {
            type: Date,
            required: true,
        },
        is_active: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
    }
);
