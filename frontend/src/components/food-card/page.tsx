// "use client";

// import { Card, CardHeader, CardContent } from "../ui/card";
// import Image from "next/image";
// //import { useRouter } from "next/navigation";

// const FoodCard = () => {
//     //const {push} = useRouter();
//   return (
//     <div>
//         <Card 
//             // onClick={() => push(`/detail/${food.id}`)} 
//             className="w-[397px] h-[342px] flex flex-col gap-2 overflow-hidden cursor-pointer bg-[#F4F4F5] dark:bg-[#27272A] border-none"
//             >
//             <CardContent className="p-0 flex justify-center">
//                 <Image 
//                 src="/imgs/Product.png" 
//                 alt="food"
//                 width={365} 
//                 height={210} 
//                 priority 
//                 className="w-[365px] h-[210px]"
//                 />
//             </CardContent>
//             <div className="flex flex-row-reverse justify-between ">
//                 <CardContent className="text-[18px] font-normal">$12.99</CardContent>
//                 <CardHeader className="">Finger food</CardHeader>
//             </div>
//             <CardContent>Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.</CardContent>
//         </Card>
//     </div>
//   )
// }

// export default FoodCard;


import Image from "next/image";
import { FoodType } from "@/app/types/FoodType";

interface FoodCardProps {
  food: FoodType;  
}

export default function FoodCard({ food }: FoodCardProps) {
  if (!food) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 max-w-sm">
      {food.image ? (
        <Image
          src={food.image}
          alt={food.name}
          width={300}
          height={200}
        />
      ) : (
        <p>zurag bhgu</p> 
      )}

      <h2 className="text-xl font-semibold mt-2">{food.name}</h2>
      <p className="text-gray-600 text-sm">{food.ingredients || "Ingredients not listed"}</p>
      <div className="flex justify-between items-center mt-3">
        <span className="text-lg font-bold text-red-500">{food.price}₮</span>
        <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
          sagsand nemeh
        </button>
      </div>
    </div>
  );
}

