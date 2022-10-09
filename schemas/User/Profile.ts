import mongoose from 'mongoose';
const { Schema } = mongoose;

const profileSchema = new Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        points: {
            type: Number,
            default: 0
        },
        gender: {
            type: Boolean, // False: Male, True: Female
        },
        avatar_url: {
            type: String,
        },
        website: {
            type: String,
        },
        user_type: {
            type: Boolean, // False: User, True: Company
        },
    },
    {
        timestamps: true
    });
export const profileModel = mongoose.model('Profile', profileSchema);
