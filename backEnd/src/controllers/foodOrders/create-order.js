import { OrderModel } from "../../models/foodOrder.schema.js";

export const createOrder = async (req, res) => {
    const { totalPrice, food } = req.body;

    const newOrder = await OrderModel.create(totalPrice, food);

    res.json({message: "Order created successfully!", newOrder});
}