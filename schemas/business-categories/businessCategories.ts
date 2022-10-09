import mongoose from 'mongoose';
const { Schema } = mongoose;

const businessCategorySchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },

    },
    {
        timestamps: true
    }
);

export const businessCategoryModel = mongoose.model('BusinessCategory', businessCategorySchema);