import { OrderModel } from "../../models/foodOrder.schema.js"

export const getOrder = async (req, res) => {
    const allOrders = await OrderModel.find()
    res.json({message: "all orders:", allOrders})
}