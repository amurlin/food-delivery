import { Schema, model} from "mongoose";

const userSchema = new Schema(
  {
    id: {type: Schema.Types.ObjectId},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true },
    phoneNumber: {type: String},
    address: {String},
    role: {
        type: String,
        enum: ["ADMIN", "USER"],
        defualt: "USER",
    },
    orderedFoods: {type: [Schema.Types.ObjectId], ref: "Orders", default: []},
    createdAt: { type: Date, default: new Date() },
    updatedAt: { type: Date, default: new Date() },
  },
  {
    timestamps: true,
  }
);

export const UserModel = model.UserModel || model("Users", userSchema);