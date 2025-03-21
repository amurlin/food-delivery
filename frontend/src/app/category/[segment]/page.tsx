"use client";

import { useState, useEffect } from "react";

type Params = {
 id: string;
 name: string;
 price: number;
}

export default function CategoryDetail({ params }: { params: Params }) {
 const [products, setProducts] = useState<Params[]>([]);
 useEffect(() => {
   fetch(`https://yourapi.com/api/categories/${params.id}/products`)
     .then((res) => res.json())
     .then((data) => setProducts(data))
     .catch((err) => console.error("Алдаа:", err));
 }, [params.id]);
 return (
<div className="p-6">
<h1 className="text-2xl font-bold mb-4">Foods</h1>
     {products.length === 0 ? (
<p>Энэ категорид бүтээгдэхүүн алга.</p>
     ) : (
<ul>
         {products.map((product) => (
<li key={product.id} className="mb-2">
             {product.name} - {product.price}₮
</li>
         ))}
</ul>
     )}
</div>
 );
}