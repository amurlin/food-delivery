import { UserModel } from "../../models/user.schema.js";

export const getUsers = async (req, res) => {

  const allUsers = await UserModel.find();  //.populate("")
  console.log(allUsers);

  res.json({message: "all users:", allUsers});
  }