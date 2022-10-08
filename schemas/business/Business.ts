import mongoose from 'mongoose';
const { Schema } = mongoose;

const businessSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },

    },
    {
        timestamps: true
    }
);

export const businessModel = mongoose.model('Business', businessSchema);
