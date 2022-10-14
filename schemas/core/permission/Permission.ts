import mongoose from "mongoose";
const { Schema } = mongoose;

const permissionSchema = new Schema(
    {
        type: {
            type: String,
            enum: ["READ", "EDIT", "OWN"],
            required: true,
        },
        business_id: {
            type: Schema.Types.ObjectId,
            ref: "Business",
        },
        ref: {
            type: String,
            required: true,
            enum: ['User', 'Team']
        },
        // type_id is the id of user or team has this permission
        type_id: {
            type: Schema.Types.ObjectId,
            required: true,
            refPath: 'ref'
        },

    },
    {
        timestamps: true,
    }
);

const Permission = mongoose.model("Permission", permissionSchema);

const permissionRefactor = (data) => {
    return {
        id: data._id,
        type: data.type,
        business_id: data.business_id,
        type_id: data.type_id,
    };
};

export { Permission, permissionRefactor };