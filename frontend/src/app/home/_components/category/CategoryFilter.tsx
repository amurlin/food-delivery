"use client";
import React from 'react';

interface CategoryFilterProps {
  categories: string[];
  onCategoryChange: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ categories, onCategoryChange }) => {
  return (
    <div className="flex space-x-4">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
