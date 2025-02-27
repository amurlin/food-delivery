import { Schema, model } from "mongoose";

const foodSchema = new Schema(
  {
    id: {type: Schema.Types.ObjectId},
    foodName: {type: String},
    price: {type: Number},
    image: {type: String},
    ingredients: {type: String},
    category: {type: Schema.Types.ObjectId}
  },
  {
    timestamps: true,
  }
);

export const Foods = model.Foods || model("Foods", foodSchema);