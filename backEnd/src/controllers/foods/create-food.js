import { FoodCategoryModel } from "../../models/foodCategory.schema.js";
import { FoodModel } from "../../models/food.schema.js";
import axios from "axios";
import fs from "fs";
import path from "path";

// find or create category
const findOrCreateCategory = async (categoryName) => {
    let category = await FoodCategoryModel.findOne({ categoryName });
    if (!category) {
      console.log("Category not found, creating new category...");
      category = await FoodCategoryModel.create({ categoryName });
    }
    console.log("Category found or created: ", category);
    return category;
  };
  

// Интернэтээс зураг татаж, хадгалах функц
const downloadImage = async (imageUrl) => {
  const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
  const fileName = Date.now() + path.extname(imageUrl);  // Тухайн зурган файлын нэрийг тохируулж өгнө
  const filePath = path.join("uploads", fileName); // Хадгалах зам

  // Хэрэв uploads хавтас байхгүй бол үүнийг үүсгэх
  if (!fs.existsSync("uploads")) {
    fs.mkdirSync("uploads");
  }

  fs.writeFileSync(filePath, response.data);  // Зургийг хадгалах

  return filePath;  // Хадгалагдсан зургийн замыг буцаах
};

// create food
export const createFood = async (req, res) => {
  try {
    const { foodName, price, ingredients, description, categoryName, imageUrl } = req.body;

    // Category үүсгэх буюу олж авах
    const category = await findOrCreateCategory(categoryName);

    // Зураг интернэтээс татаж хадгалах
    const image = imageUrl ? await downloadImage(imageUrl) : null;

    const newFood = await FoodModel.create({
      foodName,
      price,
      image,
      ingredients,
      description,
      category: category._id,
    });

    res.json({ message: "Food created successfully!", newFood });
  } catch (error) {
    res.status(500).json({ message: "Error creating food item", error });
  }
};
