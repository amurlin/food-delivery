
import { OrderModel } from "../../models/foodOrder.schema.js";
 
export const getOrder = async (req, res) => {
  try {
    const allOrders = await OrderModel.find().populate(["foodOrderItem"]);
    res.json({ message: "All orders:", allOrders });
  } catch (error) {
    res.json({ message: "Error fetching orders", error });
  }
};