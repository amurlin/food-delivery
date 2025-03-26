"use client";
import React from 'react';
import { FoodType } from '@/lib/types';

interface FoodCardProps {
  food: FoodType
}

const FoodCard: React.FC<FoodCardProps> = ({ food }) => {
  return (
    <div className="border rounded-lg p-4 shadow-lg hover:shadow-xl">
      <img src={food.imageUrl} alt={food.name} className="w-full h-40 object-cover rounded-md mb-4" />
      <h3 className="text-xl font-semibold mb-2">{food.name}</h3>
      <p className="text-gray-600 mb-2">{food.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-lg font-semibold">${food.price}</span>
        <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
          Сагсанд нэмэх
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
