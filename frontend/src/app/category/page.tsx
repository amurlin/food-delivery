// "use client";

// import axios from "axios";
// import { useState, useEffect } from "react";
// import { useParams } from "next/navigation";
// // import {
// //   Pagination,
// //   PaginationContent,
// //   PaginationEllipsis,
// //   PaginationItem,
// //   PaginationLink,
// //   PaginationNext,
// //   PaginationPrevious,
// // } from "@/components/ui/pagination"
// import FoodCard from "../home/_components/foodcard/FoodCard";

// const TMDB_API_TOKEN = process.env.TMDB_API_TOKEN;

// const CategoryPage = () => {
//   const { segment } = useParams(); // URL-аас ангиллын нэрийг авах
//   const [foods, setFoods] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchCategoryMovies = async () => {
//       if (!segment) return;
//       setLoading(true);
//       try {
//         const response = await axios.get("http://localhost:8000/food-category",
//           {
//             headers: {
//               Accept: "application/json",
//               Authorization: `Bearer ${TMDB_API_TOKEN}`,
//             },
//           }
//         );
//         setFoods(response.data.results);
//       } catch (err: unknown) {
//         let errorMessage = "Error.";
//         if (axios.isAxiosError(err)) {
//           errorMessage = err.response?.data?.status_message || err.message;
//         }
//         setError(errorMessage);
//       }
//       setLoading(false);
//     };

//     fetchCategoryMovies();
//   }, [segment]);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p className="text-red-500">{error}</p>;

//   return (
//     <div className="px-[5%] sm:px-[12%] dark:bg-black  flex flex-col gap-8">
//       <h1 className="text-2xl font-bold capitalize">{segment}</h1>
//       <div className="flex flex-wrap gap-[32px] justify-center">
//         {foods.length > 0 ? (
//           foods.map(() => <FoodCard />)
//         ) : (
//           <p>Not found.</p>
//         )}
//       </div>
//       <div className="w-full flex justify-end mb-[32px] sm:mb-[76px]">
//       {/* <Pagination>
//       <PaginationContent>
//         <PaginationItem>
//           <PaginationPrevious href="#" />
//         </PaginationItem>
//         <PaginationItem>
//           <PaginationLink href="#">1</PaginationLink>
//         </PaginationItem>
//         <PaginationItem>
//           <PaginationLink href="#">
//             2
//           </PaginationLink>
//         </PaginationItem>
//         <PaginationItem>
//           <PaginationLink href="#">3</PaginationLink>
//         </PaginationItem>
//         <PaginationItem>
//           <PaginationEllipsis />
//         </PaginationItem>
//         <PaginationItem>
//           <PaginationNext href="#" />
//         </PaginationItem>
//       </PaginationContent>
//       </Pagination> */}
//       </div>
//     </div>
//   );
// };

// export default CategoryPage;
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

