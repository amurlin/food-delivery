import { Orders } from "../../models/order.schema.js";

export const createOrder = async (req, res) => {
    const { totalPrice, foodOrderItems } = req.body;

    const newOrder = await Orders.create(totalPrice, foodOrderItems);

    res.json({message: "User created successfully!", newOrder});
}