import { FoodOrderItemModel } from "../../models/foodOrderItem.schema.js";

export const deleteFoodOrderItem = async (req, res) => {
    try {
      const item = await FoodOrderItemModel.findById(req.params.id);
      if (!item) return res.json({ message: "Order item not found" });
   
      await item.deleteOne();
      res.json({ message: "Order item deleted successfully" });
    } catch (error) {
      res.json({ message: "Server error", error });
    }
  };