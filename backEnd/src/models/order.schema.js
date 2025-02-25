import { Schema, model} from "mongoose";

const orderSchema = new Schema(
  {
    id: {type: Schema.Types.ObjectId},
    user: {type: Schema.Types.ObjectId},
    totalPrice: {type: Number},
    foodOrderItems: {type:[Schema.Types.ObjectId], ref: "Orders", quanity: Number, default: [] },
    status: {
        type: String,
        enum: ["PENDING", "CANCELED", "DELIVERED"],
        defualt: "PENDING",
    }
  },
  {
    timestamps: true,
  }
);

export const Orders = model.Orders || model("Orders", orderSchema);