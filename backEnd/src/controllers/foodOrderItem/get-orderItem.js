import { FoodOrderItemModel } from "../../models/foodOrderItem.schema.js";

export const getFoodOrderItem = async (req, res) => {
    try {
      const items = await FoodOrderItemModel.find().populate("foodOrder").populate("food");
      res.json(items);
    } catch (error) {
      res.json({ message: "Server error", error });
    }
  };