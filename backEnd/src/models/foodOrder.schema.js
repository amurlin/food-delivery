import { Schema, model } from "mongoose";
 
const foodOrderSchema = new Schema(
  {
    id: {type: Schema.Types.ObjectId},
    user: { type: Schema.Types.ObjectId, ref: "Users" },
    totalPrice: { type: Number, ref: "Foods", required: true },
    foodOrderItem: [
      { type: Schema.Types.ObjectId, ref: "FoodOrderItem", quantity: { type: Number } },
    ],
    status: {
      type: String,
      enum: ["PENDING", "CANCELED", "DELIVERED"],
      default: "PENDING",
    },
  },
  {
    timestamps: true,
  }
);

export const OrderModel = model.OrderModel || model("Orders", foodOrderSchema);