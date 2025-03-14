import { OrderModel } from "../../models/foodOrder.schema.js";
 
export const deleteOrder = async (req, res) => {
  try {
    const { orderId } = req.params;
 
    const order = await OrderModel.findById(orderId);
    if (!order) {
      return res.json({ message: "Order not found" });
    }
 
    await OrderModel.findByIdAndDelete(orderId);
 
    res.json({ message: "Order deleted successfully!" });
  } catch (error) {
    res.json({ message: "Error deleting order", error });
  }
};