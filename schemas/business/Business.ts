import mongoose from 'mongoose';
const { Schema } = mongoose;

const businessSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        spaces: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Space',
        }],
    },
    {
        timestamps: true
    }
);

export const businessModel = mongoose.model('Business', businessSchema);
