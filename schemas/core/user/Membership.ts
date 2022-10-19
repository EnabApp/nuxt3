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
        points: {
            type: Number,
            default: 0,
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

const Membership = mongoose.model("Membership", membershipSchema);

const membershipRefactor = (data) => {
    return {
        id: data?._id,
        name: data?.name,
        users: data?.users.map((user) => {
            return {
                id: user._id,
                name: user.name,
                email: user.email,
            };
        }),
        points: data?.points,
        is_active: data?.is_active,
    };

};

export { Membership, membershipRefactor };
