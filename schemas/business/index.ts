import mongoose from 'mongoose';
const { Schema } = mongoose;

const businessSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    },
    spaces: {
        id: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        }
    }
});

export const businessModel = mongoose.model('Business', businessSchema);
