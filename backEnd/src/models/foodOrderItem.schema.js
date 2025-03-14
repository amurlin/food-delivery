import { Schema, model } from "mongoose";
 
const foodOrderItemSchema = new Schema({
  foodOrder: { type: Schema.Types.ObjectId, ref: "Orders", required: true },
  food: { type: Schema.Types.ObjectId, ref: "Foods", required: true },
  quantity: { type: Number, required: true, min: 1 },
  // price: { type: Number, required: true },
}, { timestamps: true });
 
export const FoodOrderItemModel = model.FoodOrderItemModel || model("FoodOrderItem", foodOrderItemSchema);