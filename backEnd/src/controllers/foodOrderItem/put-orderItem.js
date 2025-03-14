import { FoodOrderItemModel } from "../../models/foodOrderItem.schema.js";

export const updateFoodOrderItem = async (req, res) => {
    try {
      const { quantity, price } = req.body;
   
      const item = await FoodOrderItemModel.findById(req.params.id);
      if (!item) return res.json({ message: "Order item not found" });
   
      if (quantity) item.quantity = quantity;
      if (price) item.price = price;
   
      await item.save();
      res.json(item);
    } catch (error) {
      res.json({ message: "Server error", error });
    }
  };