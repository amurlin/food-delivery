export const createOrder = async (req, res) => {
    const { totalPrice, food } = req.body; 
    try {
        // Ensure food is an array of ObjectIds or valid food references
        const newOrder = await OrderModel.create({ totalPrice, food }).populate(["foodOrderItem"]);

        res.json({ message: "Order created successfully!", newOrder });
    } catch (error) {
        res.json({ message: "Error creating order", error });
    }
};
