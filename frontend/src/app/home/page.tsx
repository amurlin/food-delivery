"use client";

import React, { useState, useEffect } from 'react';
import CategoryFilter from './_components/category/CategoryFilter';
import FoodCard from './_components/foodcard/FoodCard';
import { fetchFoods } from '@/lib/api';
import { FoodType } from '@/lib/types';
import Header from './_components/header/page';
import Image from 'next/image';
import { Fullscreen } from 'lucide-react';

// Fake data for categories and food items
// const categories = ['Пицца', 'Бургер', 'Паста', 'Уух зүйл'];
// const foodItems = [
//   { id: 1, name: 'Пицца Маргарита', description: 'Тамхи, моцарелла, болон улаан лоольтой классик пицца', price: 10, category: 'Пицца', imageUrl: '/images/pizza.jpg' },
//   { id: 2, name: 'Чиз Бургер', description: 'Хар мах, бяслаг, болон байцаа', price: 5, category: 'Бургер', imageUrl: '/images/burger.jpg' },
//   { id: 3, name: 'Спагетти Болонезе', description: 'Махны соустай паста', price: 8, category: 'Паста', imageUrl: '/images/pasta.jpg' },
//   { id: 4, name: 'Кола', description: 'Сэргээгч ундаа', price: 2, category: 'Уух зүйл', imageUrl: '/images/coke.jpg' },
// ];

const Home = () => {
  const [foods, setFoods] = useState<FoodType[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('Пицца');
  // const [filteredFoods, setFilteredFoods] = useState(foodItems);

  // useEffect(() => {
  //   const filtered = foodItems.filter(food => food.category === selectedCategory);
  //   setFilteredFoods(filtered);
  // }, [selectedCategory]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchFoods();
        console.log("Fetched Foods:", data); 
        setFoods(data);
      } catch (error) {
        console.error("Error fetching food items:", error);
      }
    };
  
    fetchData();
  }, []);
  

  return (
    <div className="w-screen bg-[#f4f5f4] flex flex-col">
      <div className='w-screen h-[30px]'></div>
      <Header />
      <Image src="/imgs/bg.png" alt="background image"  className='w-screen h-[600px]' width={1400} height={600}/>
      <h1 className="text-3xl font-bold mb-4">Food Order</h1>
      
      {/* Категорийн шүүлтүүр */}
      {/* <CategoryFilter categories={categories} onCategoryChange={setSelectedCategory} /> */}
      
      {/* Хоолны картууд */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {foods.map((food) => (
          <FoodCard key={food._id} food={food} />
        ))}
      </div>
    </div>
  );
};

export default Home;
