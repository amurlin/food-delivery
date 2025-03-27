"use client";

import axios from "axios"; 
import Image from "next/image";
import { CategoryType } from "@/lib/types";
import React, { useEffect, useState } from "react";

const Category = () => {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("http://localhost:8000/category"); // API линкээ оруулна
        setCategories(response.data);
      } catch (error) {
        console.error("Категори татахад алдаа гарлаа:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  return (
    <div className="flex gap-4 overflow-x-auto p-4">
      {categories.map((category) => (
        <div
          key={category.id}
          className="flex flex-col items-center gap-2 bg-gray-100 p-3 rounded-lg cursor-pointer hover:bg-gray-200 transition"
        >
          <Image src={category.icon} alt={category.name} width={50} height={50} />
          <p className="text-sm font-medium">{category.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Category;
