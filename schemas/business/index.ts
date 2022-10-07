import mongoose from 'mongoose';
const { Schema } = mongoose;

const businessSchema = new Schema({
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
    // spaces: {
    //     id: {
    //         type: String,
    //         required: false
    //     },
    //     name: {
    //         type: String,
    //         required: false
    //     }
    // }
});

export const businessModel = mongoose.model('Business', businessSchema);
