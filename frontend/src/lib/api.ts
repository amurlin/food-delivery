import { FoodType } from "./types";
import { CategoryType } from "./types";
import axios from "axios";

const API_URL = "http://localhost:8000";  

// fetch food 
export const fetchFoods= async (): Promise<FoodType[]> => {
    try {
      const response = await axios.get(`${API_URL}/foods`);
      console.log("Fetched Foods:", response.data); 
      return response.data.allFoods; 
    } catch (error) {
      console.error("Error fetching food items:", error);
      return []; 
    }
  };

export const fetchCategories = async () => {
  try {
    const response = await fetch("http://localhost:8000/food-category");
    if (!response.ok) {
      throw new Error("Failed to fetch categories");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
};



