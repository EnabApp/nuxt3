import mongoose from 'mongoose';
const { Schema } = mongoose;

const desktopSchema = new Schema(
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

        });

const tabletSchema = new Schema(
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
        });

const mobileSchema = new Schema(
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

    });

const unitSchema = new Schema(
    
        {
            desktop:{
                type: desktopSchema,
            },
            tablet:{
                type: tabletSchema,
            },
            mobile: 
                {
                    type: [mobileSchema],
                }
        }
    );
const boardSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    units: {
        type: [unitSchema],
        required: true,
    }

});

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
        type: [boardSchema],
        required: true
    }
});


export const spaceModel = mongoose.model('Space', spaceSchema);
