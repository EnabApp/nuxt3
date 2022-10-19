import mongoose from "mongoose";
const { Schema } = mongoose;

const businessSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
    },
    users: [
      {
        user_id: {
          type: Schema.Types.ObjectId,
          ref: "User",
        },
        Permissions: [
          {
            type: String,
          },
        ],
      },
    ],
    categories: [
      {
        type: Schema.Types.ObjectId,
        ref: "BusinessCategory",
      },
    ],
    spaces: [
      {
        type: Schema.Types.ObjectId,
        ref: "Space",
      },
    ],
    permissions: [
      {
        type: Schema.Types.ObjectId,
        ref: "Permission",
      },
    ],
    is_active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const businessModel = mongoose.model("Business", businessSchema);

const businessRefactor = (business) => {
  return {
    id: business._id,
    name: business.name,
    address: business.address,
    categories: business.categories.map((category) => {
      return {
        id: category.id,
        name: category.name,
      };
    }),
    user: {
      id: business.users[0].user_id,
      permissions: business.users[0].Permissions,
    },
    spacesCount: business.spaces.length,
    spaces: business.spaces,
    is_active: business.is_active,
    createdAt: business.createdAt,
    updatedAt: business.updatedAt,
  };
};

export { businessModel, businessRefactor };
