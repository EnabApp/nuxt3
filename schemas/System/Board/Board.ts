import mongoose from 'mongoose';
const { Schema } = mongoose;

const responsiveSchema = new Schema(
    {
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
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: false
        },
        is_active: {
            type: Boolean,
            default: true
        },
        units: {
            type: {
                desktop: [responsiveSchema],
                tablet: [responsiveSchema],
                mobile: [responsiveSchema],
            },
        },
        dataUnits:[
            {
                type: Schema.Types.ObjectId,
                ref: "DataUnit",
            }
        ],
        space: {
            type: Schema.Types.ObjectId,
            ref: "Space",
            required: true
        }
    },
    {
        timestamps: true
    }
);

export const boardModel = mongoose.model("Board", boardSchema);