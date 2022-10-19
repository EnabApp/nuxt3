import mongoose from "mongoose";
const { Schema } = mongoose;

const boardCategorySchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: false,
        },
        is_active: {
            type: Boolean,
            default: true,
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

const boardCategoryModel = mongoose.model("BoardCategory", boardCategorySchema);

const boardCategoryRefactor = (data) => {
    return {
        id: data?._id,
        name: data?.name,
        description: data?.description,
        is_active: data?.is_active,
        boards: data?.boards,
        created_at: data?.created_at,
        updated_at: data?.updated_at,
    };
}

export { boardCategoryModel, boardCategoryRefactor };