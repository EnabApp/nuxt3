import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    memberships: [
      {
        type: Schema.Types.ObjectId,
        ref: "Membership",
      },
    ],
    profile: {
      type: Schema.Types.ObjectId,
      ref: "Profile",
    },
    teams: [
      {
        type: Schema.Types.ObjectId,
        ref: "Team",
      },
    ],
    boards: [
      {
        type: Schema.Types.ObjectId,
        ref: "Board",
      },
    ],
    packs: [
      {
        type: Schema.Types.ObjectId,
        ref: "Pack",
      },
    ],
    last_login: {
      type: Date,
      default: Date.now,
    },
    is_active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.model("User", userSchema);

const userRefactor = (user) => {
  return {
    id: user?._id,
    name: user?.name,
    email: user?.email,
    memberships: user.memberships?.map((membership) => {
      return {
        id: membership?._id,
        exoiration_date: membership?.expiration_date,
        is_active: membership?.is_active,
      };
    }),
    profile: user?.profile,
    teams: user?.teams.map((team) => {
      return {
        id: team?._id,
        name: team?.name,
      };
    }),
    boards: user.boards.map((board) => {
      return {
        id: board?._id,
        name: board?.name,
      };
    }),
    last_login: user?.last_login,
    is_active: user?.is_active,
  };
};
export { userModel, userRefactor };