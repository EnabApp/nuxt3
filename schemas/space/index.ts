import mongoose from 'mongoose';
const { Schema } = mongoose;

const spaceSchema = new Schema({
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
    boards: {
        id: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        units: [

        ]
    });

export const spaceModel = mongoose.model('Space', spaceSchema);
