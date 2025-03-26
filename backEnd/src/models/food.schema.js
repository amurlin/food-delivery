import { Schema, model } from "mongoose";

const foodSchema = new Schema(
  {
    id: { type: Schema.Types.ObjectId },
    foodName: { type: String },
    price: { type: Number },
    image: { type: String },
    ingredients: { type: [String] },
    description: { type: String },
    category: { type: Schema.Types.ObjectId, ref: "foodCategory" },  // Массив биш нэг ObjectId
    createdAt: { type: Date, default: new Date() },
    updatedAt: { type: Date, default: new Date() },
  },
  {
    timestamps: true,
  }
);

export const FoodModel = model.FoodModel || model("Foods", foodSchema);