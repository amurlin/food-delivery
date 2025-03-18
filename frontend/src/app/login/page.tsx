"use client";

// import axios from "axios";
// import { useEffect, useState } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

export default function Home() {

    // const handleFormNextStep = () => {
    //     const { isValid, errors } = isStepOneValid(formValue);
  
    //     if (isValid){
    //       const localData = {
    //           ...formValue,
    //           currentStep: 1,
    //       }
  
    //       localStorage.setItem("formData", JSON.stringify(localData));
  
    //       handleNextStep();
    //     }
    //     handleError(errors);
    //   };

  return (
  <div className="flex flex-row bg-[white] w-full">
    <div className="w-[40%] h-screen flex justify-center">
        <div className= "flex flex-col w-[400px] gap-[24px]">
            <Button variant="outline" className="w-[36px] h-[36px]"> <ChevronLeft/> </Button>
            <div className="">
                <p className="font-semibold text-[#09090B] text-2xl">Create your account</p>
                <p className="font-normal text-[#71717A] text-base">Sign up to explore your favorite dishes.</p>
            </div>
            <Input className={`${
            length > 0 ? "border-red-500" : "border-[#CBD5E1]"
            }, w-full border-[1.5px] border-solid border-[#CBD5E1] rounded-[8px] flex items-center text-[16px] font-[500] p-[12px]`}></Input>
            {length > 0 && (
            <p className="text-red-500"></p>
      )}
            <Button variant="secondary" className="w-full text-[white]">Lets go</Button>
        </div>
    </div>
    <div className="w-[60%] h-full overflow-hidden">
        <Image src="/imgs/login.png" alt="food delivery" width={10000} height={200000} className="w-[full] h-[full]"/>
    </div>
  </div>
  );
}