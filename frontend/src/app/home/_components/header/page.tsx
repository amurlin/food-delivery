"use client";

import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DropdownMenu } from "@/components/ui/dropdown-menu";

const Header = () => {
  return (
    <div className="w-screen h-[64px] bg-white flex flex-row items-center justify-between">
        <Image src="/imgs/logo.png" alt="logo" width={146} height={44}/>
        <div className="flex flex-row gap-1">
            <Input className="rounded"/>
            <Button className="w-[36px] h-[36px] rounded"></Button>
            <DropdownMenu></DropdownMenu>
        </div>
    </div>
  )
}

export default Header;