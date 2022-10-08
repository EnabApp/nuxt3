import mongoose from 'mongoose';
import bcrypt from "mongoose-bcrypt";
const { Schema } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone_number: {
        type: String,
    },
    profile: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Profile',
    },
    businesses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Business',
    }],
    last_login: {
        type: Date,
    },
},
{
    timestamps: true
}
);
userSchema.plugin(bcrypt);
export const userModel = mongoose.model('User', userSchema);