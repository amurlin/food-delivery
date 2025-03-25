"use client";

import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
// import {
//   Pagination,
//   PaginationContent,
//   PaginationEllipsis,
//   PaginationItem,
//   PaginationLink,
//   PaginationNext,
//   PaginationPrevious,
// } from "@/components/ui/pagination"
import FoodCard from "@/components/food-card/page";

const TMDB_API_TOKEN = process.env.TMDB_API_TOKEN;

const CategoryPage = () => {
  const { segment } = useParams(); // URL-аас ангиллын нэрийг авах
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCategoryMovies = async () => {
      if (!segment) return;
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:8000/food-category",
          {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${TMDB_API_TOKEN}`,
            },
          }
        );
        setFoods(response.data.results);
      } catch (err: unknown) {
        let errorMessage = "Error.";
        if (axios.isAxiosError(err)) {
          errorMessage = err.response?.data?.status_message || err.message;
        }
        setError(errorMessage);
      }
      setLoading(false);
    };

    fetchCategoryMovies();
  }, [segment]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="px-[5%] sm:px-[12%] dark:bg-black  flex flex-col gap-8">
      <h1 className="text-2xl font-bold capitalize">{segment}</h1>
      <div className="flex flex-wrap gap-[32px] justify-center">
        {foods.length > 0 ? (
          foods.map(() => <FoodCard />)
        ) : (
          <p>Not found.</p>
        )}
      </div>
      <div className="w-full flex justify-end mb-[32px] sm:mb-[76px]">
      {/* <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
      </Pagination> */}
      </div>
    </div>
  );
};

export default CategoryPage;



// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";

// type Category = {
//   id: string;
//   name: string
// }

// export default function CategoryPage() {
//  const [categories, setCategories] = useState<Category[]>([]);
//  useEffect(() => {
//    fetch("http://localhost:8000/food-category")
//      .then((res) => res.json())
//      .then((data) => setCategories(data))
//      .catch((err) => console.error("Error:", err));
//  }, []);
//  return (
// <div className="p-6">
// <h1 className="text-xl font-bold mb-4">Categories</h1>
// <ul>
//        {categories.map((category) => (
// <li key={category.id} className="mb-2">
// <Link href={`/category/${category.id}`} className="text-blue-500">
//              {category.name}
// </Link>
// </li>
//        ))}
// </ul>
// </div>
//  );
// }


// "use client";

// import axios from "axios";
// import {  useState, useEffect } from "react";
// import { useParams } from "next/navigation";
// import FoodCard from "@/components/food-card/page";

// const CategoryPage = () => {
//        const { segment } = useParams();
//        const [foods, setFoods] = useState([]);
//        const [loading, setLoading] = useState(false);
//        const [error, setError] = useState("");

//        useEffect(() => {
//               const fetchCategoryFoods = async () => {
//                      if (!segment) return;
//                      setLoading(true);
//                      try {
//                             const response = await axios.get(
//                                    `$http://localhost:8000/food-category`,
//                             {
//                                    headers: {
//                                           Accept: "application/json",
//                                           // Authorization: `Bearer ${TMDB_API_TOKEN}`,
//                                    },
//                             }
//                         )
//                         setFoods(response.data.results);
//                      } catch (err: unknown) {
//                             let errorMessage = "Error";
//                             if (axios.isAxiosError(err)) {
//                                    errorMessage = err.response?.data?.status_message || err.message;
//                             }
//                             setError(errorMessage)
//                      }
//                      setLoading(false);
//               };
//               fetchCategoryFoods();
//        }, [segment]);

//        if (loading) return <p>Loading...</p>
//        if (error) return <p className="text-red-500">{error}</p>;

//        return (
//               <div className="flex flex-col">
//                      <h1 className="text-xl font-bold capitalize">{segment}</h1>
//                      <div>
//                             {foods.length > 0 ? (
//                                    foods.map(() => <FoodCard key={CategoryPage}/>)
//                             ) : (
//                                    <p>Not found.</p>
//                             )}
//                      </div>
//               </div>
//        )
// }

// export default CategoryPage;