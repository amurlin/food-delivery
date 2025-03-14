import { OrderModel } from "../../models/foodOrder.schema.js";
 
export const updateOrder = async (req, res) => {
  try {
    const { orderId } = req.params;
    const { status } = req.body; 
 
    const order = await OrderModel.findById(orderId);
    if (!order) {
      return res.json({ message: "Order not found" });
    }

    order.status = status || order.status
    await order.save();
 
    res.json({ message: "Order updated successfully!", order });
  } catch (error) {
    res.json({ message: "Error updating order", error });
  }
};