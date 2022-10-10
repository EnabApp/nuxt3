import mongoose from 'mongoose';
const { Schema } = mongoose;

const businessCategorySchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        businesses: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Business',
            }
        ],
        is_active: {
            type: Boolean,
            default: true
        },
    },
    {
        timestamps: true
    }
);

export const businessCategoryModel = mongoose.model('BusinessCategory', businessCategorySchema);