import mongoose from "mongoose";
const { Schema } = mongoose;

const packageSchema = new Schema(
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

const packageModel = mongoose.model("Package", packageSchema);

const packageRefactor = (package) => {
    return {
        id: package.id,
        name: package?.name,
        points: package?.points,
        boards: package?.boards,
        is_active: package?.is_active,
        created_at: package?.created_at,
        updated_at: package?.updated_at,
    };
};
