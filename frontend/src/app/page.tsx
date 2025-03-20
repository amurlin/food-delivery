"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import Header from "@/components/header/page";
import Image from "next/image";
import FoodCard from "@/components/food-card/page";


export default function Home() {
  const [message, setMessage] = useState("");
  const getMessage = async () => {
    const res = await axios.get("https://backend-s81tulv63-amurlins-projects.vercel.app/");
    setMessage(res.data);
    console.log(res);
  }

  useEffect (() => {
    getMessage();  
    },[]);

  return (
  <div className="bg-[#404040] w-screen h-screen">
    <Header/>
    <Image src="/imgs/BG.png" alt="background" width={5000} height={500}/>
    <p> welcome! </p>
    <FoodCard />
    <p>{message}</p>
  </div>
  );
}