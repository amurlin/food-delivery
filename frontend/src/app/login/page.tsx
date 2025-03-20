"use client"; 

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { ChevronLeft } from "lucide-react";

export default function LoginPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); 
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); 
    setError(""); 
    try {

      const res = await fetch("http://localhost:8000/users/login", { 
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        throw new Error("invalid email or password");
      }

      const data = await res.json();
      const token = data.token; 

      localStorage.setItem("token", token);

      router.push("/");

    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="flex flex-row bg-[white] w-full items-center gap-4 p-3">
        <form onSubmit={handleSubmit} className="w-[40%] h-screen flex justify-center items-center">
            <div className= "flex flex-col w-[400px] gap-[24px]">
                <Button variant="outline" className="w-[36px] h-[36px]"> <ChevronLeft/> </Button>
                <div className="">
                    <p className="font-semibold text-[#09090B] text-2xl">Log In</p>
                    <p className="font-normal text-[#71717A] text-base">Log in to enjoy your favorite dishes.</p>
                </div>
                        {error && <p className="text-red-500">{error}</p>}
                <Input
                        type="email"
                        placeholder="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full border-[1.5px] border-solid border-[#CBD5E1] rounded-[8px] flex items-center text-[16px] font-[500] p-[12px]"
                        required
                        />

                <Input
                        type="password"
                        placeholder="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full border-[1.5px] border-solid border-[#CBD5E1] rounded-[8px] flex items-center text-[16px] font-[500] p-[12px]"
                        required
                        />
                <h6>Forgot password?</h6>
                <Button type="submit" variant="secondary" className="text-white rounded w-full">
                        Lets go
                </Button>
                <p>Dont have an account? Sign up</p>
            </div>
        </form>
        <div className="w-[60%] h-full overflow-hidden">
            <Image src="/imgs/login.png" alt="food delivery" width={5000} height={5000} className="w-[full] h-[full]"/>
        </div>
    </div>

  );

} 