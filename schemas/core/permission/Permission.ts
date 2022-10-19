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
        space: {
            type: Schema.Types.ObjectId,
            ref: "Space",
        },
        ref: {
            type: String,
            required: true,
            enum: ['User', 'Team']
        },
        // client is the id of user or team has this permission
        client: {
            type: Schema.Types.ObjectId,
            required: true,
            refPath: 'ref'
        },

    },
    {
        timestamps: true,
    }
);

const permissionModel = mongoose.model("Permission", permissionSchema);

const permissionRefactor = (data) => {
    if(data.ref == 'User'){
        return {
            id: data._id,
            type: data.type,
            business_id: data.business_id,
            user_id: data.client,
        };
    }else{
        return {
            id: data._id,
            type: data.type,
            business_id: data.business_id,
            team_id: data.client,
        };
    }
};

export { permissionModel, permissionRefactor };