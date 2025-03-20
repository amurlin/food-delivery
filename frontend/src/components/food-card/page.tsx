"use client";

import { Card, CardHeader, CardContent } from "../ui/card";
import Image from "next/image";
//import { useRouter } from "next/navigation";

const FoodCard = () => {
    //const {push} = useRouter();
  return (
    <div>
        <Card 
            // onClick={() => push(`/detail/${food.id}`)} 
            className="w-[397px] h-[342px] flex flex-col gap-2 overflow-hidden cursor-pointer bg-[#F4F4F5] dark:bg-[#27272A] border-none"
            >
            <CardContent className="p-0 flex justify-center">
                <Image 
                src="/imgs/Product.png" 
                alt="food"
                width={365} 
                height={210} 
                priority 
                className="w-[365px] h-[210px]"
                />
            </CardContent>
            <div className="flex flex-row-reverse justify-between ">
                <CardContent className="text-[18px] font-normal">$12.99</CardContent>
                <CardHeader className="">Finger food</CardHeader>
            </div>
            <CardContent>Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.</CardContent>
        </Card>
    </div>
  )
}

export default FoodCard;