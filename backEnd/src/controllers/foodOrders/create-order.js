import { OrderModel } from "../../models/foodOrder.schema.js"
import { FoodOrderItemModel } from "../../models/foodOrderItem.schema.js";
 
export const createOrder = async (req, res) => {
  try {
    const { totalPrice, foodOrderItem } = req.body;
 
    const createdFoodOrderItem = [];
    for (let item of foodOrderItem) {
      const { food, quantity } = item;
      const newFoodOrderItem = await FoodOrderItemModel.create({ food, quantity });
      createdFoodOrderItem.push(newFoodOrderItem._id);
    }
 
    const newOrder = await OrderModel.create({
      totalPrice,
      foodOrderItem: createdFoodOrderItem,
    }).populate(["foodOrderItem"]);
 
    res.json({ message: "Order created successfully!", newOrder });
  } catch (error) {
    res.json({ message: "Error creating order", error });
  }
};

// import { OrderModel } from "../../models/foodOrder.schema.js"
// import { FoodOrderItemModel } from "../../models/foodOrderItem.schema.js";

// export const createOrder = async (req, res) => {
//   try {
//     const { totalPrice, foodOrderItem } = req.body;

//     if (!totalPrice || !foodOrderItem?.length) return res.status(400).json({ message: "Invalid data" });

//     const items = await FoodOrderItemModel.insertMany(foodOrderItem);
//     const newOrder = await OrderModel.create({
//       totalPrice,
//       foodOrderItem: items.map(item => item._id)
//     });

//     await FoodOrderItemModel.updateMany({ _id: { $in: items } }, { $set: { foodOrder: newOrder._id } });

//     res.json({ message: "Order created successfully!", newOrder });
//   } catch (error) {
//     res.json({ message: "Error creating order", error: error.message });
//   }
// };
