// "use client";

// import axios from "axios";
// import Image from "next/image";
// import { useEffect, useState } from "react";
// import Header from "@/components/header/page";
// import FoodCard from "@/components/food-card/page";
// import { FoodType } from "./types/page";

// interface MenuItem {
//   _id: string;
//   name: string;
//   price: number;
//   image: string;
// }

// export default function Home() {
//   const [menu, setMenu] = useState<MenuItem[]>([]); // Local state for menu
//   const [message, setMessage] = useState("");

//   // Fetch the message data
//   const getMessage = async () => {
//     try {
//       const res = await axios.get("https://backend-s81tulv63-amurlins-projects.vercel.app/");
//       setMessage(res.data);
//       console.log(res);
//     } catch (error) {
//       console.error("Error fetching message", error);
//     }
//   };

//   // Fetch menu data from the API
//   useEffect(() => {
//     const fetchMenu = async () => {
//       try {
//         const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/food"; 
//         const res = await axios.get(apiUrl);
//         if (Array.isArray(res.data)) {
//           setMenu(res.data);
//         } else {
//           console.error("Data is not in the expected format");
//         }
//       } catch (error) {
//         console.error("Error fetching menu data", error);
//       }
//     };
//     fetchMenu();
//   }, []);

//   // Fetch message on component mount
//   useEffect(() => {
//     getMessage();
//   }, []);

//   return (
//     <div className="bg-[#404040] w-screen h-screen">
//       <Header />
//       <Image src="/imgs/BG.png" alt="background" width={5000} height={500} />
//       <p>Welcome!</p>

//       {/* FoodCard component to display the menu items */}
//       <div className="container mx-auto p-4">
//         <h1 className="text-2xl font-bold">Menu</h1>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//           {menu.length > 0 ? (
//             menu.map((food) => (
//               <FoodCard key={food._id} food={food} />
//             ))
//           ) : (
//             <p>No menu items available</p>
//           )}
//         </div>
//       </div>

//       {/* Display the message */}
//       <p>{message}</p>
//       <div></div>
//     </div>
//   );
// }
// src/app/page.tsx

"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Header from "@/components/header/page";
import FoodCard from "@/components/food-card/page";
interface MenuItem {
 name: string;
 price: number;
 image: string;
}
export default function Home() {
 const [menu, setMenu] = useState<MenuItem[]>([]);
 const [message, setMessage] = useState("");
//  const getMessage = async () => {
//    const res = await axios.get("https://backend-s81tulv63-amurlins-projects.vercel.app/");
//    setMessage(res.data);
//    console.log(res);
//  };

 const getMessage = async () => {
  try {
    const res = await axios.get("https://backend-s81tulv63-amurlins-projects.vercel.app/");
    setMessage(res.data);
  } catch (error) {
    if (!error.res) {
      // Network error occurred
      console.error('Network error:', error);
    } else {
      // The server responded with a status other than 200 range
      console.error('Error response:', error.response);
    }
  }
};

 useEffect(() => {
   const fetchMenu = async () => {
     const res = await axios.get("http://localhost:8000/food");
     setMenu(res.data);
   };
   fetchMenu();
 }, []);
 useEffect(() => {
   getMessage();
 }, []);
 return (
<div className="bg-[#404040] w-screen h-screen">
<Header />
<p>Welcome!</p>
<div className="container mx-auto p-4">
<h1 className="text-2xl font-bold">Menu</h1>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
         {Array.isArray(menu) && menu.length > 0 ? (
           menu.map((item, index) => (
<FoodCard key={index} food={item} />
           ))
         ) : (
<p>No menu items available.</p>
         )}
</div>
</div>
<p>{message}</p>
</div>
 );
}