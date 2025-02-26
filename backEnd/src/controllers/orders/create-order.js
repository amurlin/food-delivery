import { Orders } from "../../models/order.schema";

export const createOrder = async (req, res) => {
    const { totalPrice, foodOrderItems } = req.body;

    const newOrder = await Orders.create(req.body);

    res.json({message: "User created successfully!", newOrder});
}