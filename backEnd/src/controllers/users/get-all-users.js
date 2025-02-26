import { Users } from "../../models/user.schema.js";

export const getUsers = async (req, res) => {

  const allUsers = await Users.find().populate("");
  console.log(allUsers);

  res.json({message: "all users:", allUsers});
  }