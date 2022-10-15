import mongoose from "mongoose";
const { Schema } = mongoose;

const teamSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        business_id: {
            type: Schema.Types.ObjectId,
            ref: "Business",
        },
        users: [
            {
                user_id: {
                    type: Schema.Types.ObjectId,
                    ref: "User",
                },
            },
        ],
        permissions: [
            {
                type: Schema.Types.ObjectId,
                ref: "Permission",
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

export default mongoose.model("Team", teamSchema);
