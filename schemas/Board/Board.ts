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
            required: true,
        },
        dataUnit:[
            {
                type: Schema.Types.ObjectId,
                ref: "DataUnit",
            }
        ]
    },
    {
        timestamps: true
    }
);

export const boardModel = mongoose.model("Board", boardSchema);

// Language: typescript
// Path: schemas\business\Business.ts
// Compare this snippet from schemas\dataUnit\DataUnit.ts:
// import mongoose from "mongoose";
// const { Schema } = mongoose;
// 
// const dataUnitSchema = new Schema(
//     {
//         name: {
//             type: String,
//             required: true,
//         },
//         points: {
//             type: Number,
//             required: true,
//         },
//         board: {
//             type: mongoose.Schema.Types.ObjectId,
//             ref: "Board",
//             required: true,
//         },
//     },
//     {
//         timestamps: true,
//     }
// );
// 
// export const dataUnitModel = mongoose.model("DataUnit", dataUnitSchema);
// Compare this snippet from schemas\space\Space.ts:
// import mongoose from "mongoose";
// const { Schema } = mongoose;
// 
// const spaceSchema = new Schema(
//     {
//         name: {
//             type: String,
//             required: true,
//         },
//         description: {
//             type: String,
//         },
//         business: {
//             type: Schema.Types.ObjectId,
//             ref: "Business",
//             required: true,
//         },
//         boards: [
//             {
//                 type: Schema.Types.ObjectId,
//                 ref: "Board",
//             },
//         ],
//         is_active: {
//             type: Boolean,
//             default: true,
//         },
//     },
//     {
//         timestamps: true,
//     }
// );
// 
// export const spaceModel = mongoose.model("Space", spaceSchema);
// 
import mongoose from 'mongoose';
const { Schema } = mongoose;

const businessSchema = new Schema(
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
        spaces: [
            {
                type: Schema.Types.ObjectId,
                ref: "Space",
                required: true
            }
        ]
        ]

    }
);

export const boardModel = mongoose.model('Board', boardSchema);