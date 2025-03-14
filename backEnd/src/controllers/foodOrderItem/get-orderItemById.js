import { FoodOrderItemModel } from "../../models/foodOrderItem.schema.js";

export const getFoodOrderItemById = async (req, res) => {
    try {
      const item = await FoodOrderItemModel.findById(req.params.id).populate("foodOrder").populate("food");
   
      if (!item) return res.json({ message: "Order item not found" });
   
      res.json(item);
    } catch (error) {
      res.json({ message: "Server error", error });
    }
  };