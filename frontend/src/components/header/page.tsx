"use client"

import Image from "next/image"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { DropdownMenu } from "@radix-ui/react-dropdown-menu"

const Header = () => {
  return (
    <div className="w-screen h-[64px] bg-[#18181B] flex flex-row items-center justify-between">
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