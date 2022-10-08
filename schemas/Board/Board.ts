import mongoose from 'mongoose';
const { Schema } = mongoose;

const responsiveSchema = new Schema(
    {
        id: {
            type: String,
            required: true
        },
        colSpan: {
            type: Number,
            required: true
        },
        rowSpan: {
            type: Number,
            required: true
        },
        componentName: {
            type: String,
            required: false
        },
        componentData: {
            type: Object,
            required: false
        },
        order: {
            type: Number,
            required: true
        },

    }
);

const boardSchema = new Schema(
    {
        id: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        units: {
            type: {
                desktop: [responsiveSchema],
                tablet: [responsiveSchema],
                mobile: [responsiveSchema],
            },
            required: true,
        }

    }
);

export const boardModel = mongoose.model('Board', boardSchema);