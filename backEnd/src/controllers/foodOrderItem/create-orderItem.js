 import {FoodOrderItemModel} from "../../models/foodOrderItem.schema.js"

export const createFoodOrderItem = async (req, res) => {
  try {
    const { food, quantity } = req.body; //foodOrder, price
 
    const newItem = await new FoodOrderItemModel({ food, quantity});
    await newItem.save();
 
    res.json(newItem);
  } catch (error) {
    res.json({ message: "Server error", error });
  }
};