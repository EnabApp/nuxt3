import mongoose from "mongoose";
const { Schema } = mongoose;

const packSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        points: {
            type: Number,
            required: true,
        },
        boards: [
            {
                type: mongoose.Schema.Types.ObjectId,
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
    },

);

const packModel = mongoose.model("Pack", packSchema);

const packRefactor = (pack) => {
    return {
        id: pack.id,
        name: pack?.name,
        points: pack?.points,
        boards: pack?.boards,
        is_active: pack?.is_active,
        created_at: pack?.created_at,
        updated_at: pack?.updated_at,
    };
};

export { packModel, packRefactor };
