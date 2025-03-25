"use client";

import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import Header from "@/components/header/page";
import FoodCard from "@/components/food-card/page";

interface MenuItem {
  _id: string;
  name: string;
  price: number;
  image: string;
}

export default function Home() {
  const [menu, setMenu] = useState<MenuItem[]>([]);
  const [message, setMessage] = useState("");

  // Мэдээлэл авах функц
  const getMessage = async () => {
    const res = await axios.get("https://backend-s81tulv63-amurlins-projects.vercel.app/");
    setMessage(res.data);
    console.log(res);
  }

  // Менюг авах функц
  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const res = await axios.get("http://localhost:8000/food");
        if (Array.isArray(res.data)) {
          setMenu(res.data);
        } else {
          console.error("Data is not in the expected format");
        }
      } catch (error) {
        console.error("Error fetching menu data", error);
      }
    };
    fetchMenu();
  }, []);
  

  // Мэдээлэл авах функц
  useEffect(() => {
    getMessage();
  }, []);

  return (
    <div className="bg-[#404040] w-screen h-screen">
      <Header />
      <Image src="/imgs/BG.png" alt="background" width={5000} height={500} />
      <p> welcome! </p>

      {/* FoodCard ашиглан менюны өгөгдлийг дамжуулж байна */}
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold">Menu</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.isArray(menu) ? (
            menu.map((item) => <div key={item.id}>{item.name}</div>)
        ) : (
            <p>No menu items available</p>
        )}

        </div>
      </div>

      {/* Хариу мессеж */}
      <p>{message}</p>
    </div>
  );
}
