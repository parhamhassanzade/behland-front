"use client";
import React from "react";
import { Avatar } from "@/components/ui/avatar";
import logo from "../../assets/Images/logo.png"; // Adjust the path as necessary
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MenuMobile } from "./MenuMobile";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import PersonIcon from '@mui/icons-material/Person';
import { Badge } from "@/components/ui/badge"

function Header() {
    // Responsive Header with mobile menu

    return (
        <header className="bg-white w-full  p-5 border-b-4  border-[#E9E9E9] grid grid-cols-3">
            <div className=" col-span-1 flex items-center justify-center">
                <Image src={logo} alt="Logo" className="w-20 h-16" />
            </div>
            <div className=" col-span-1 flex justify-center items-center">
                <nav className=" text-[#2D1F44]">
                    <ul className="flex items-center justify-center  space-x-4 font-bold">
                        <li>
                            <a href="#home" className=" hover:text-gray-400 focus:underline">
                                خانه
                            </a>
                        </li>
                        <li>
                            <a
                                href="#services"
                                className=" hover:text-gray-400 focus:underline"
                            >
                                خدمات ما
                            </a>
                        </li>
                        <li>
                            <a href="#team" className=" hover:text-gray-400 focus:underline">
                                {" "}
                                تیم ما{" "}
                            </a>
                        </li>
                        <li>
                            <a
                                href="#roadmap"
                                className=" hover:text-gray-400 focus:underline"
                            >
                                نقشه راه پروژه
                            </a>
                        </li>
                        <li>
                            <a href="#whyus" className=" hover:text-gray-400 focus:underline">
                                چرا بهلند
                            </a>
                        </li>
                        <li>
                            <a href="#whyus" className=" hover:text-gray-400 focus:underline">
                                اخبار
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="text-white col-span-1 flex justify-center items-center gap-4">
                <Button className=" rounded-full border-2 p-0 m-0 border-[#543787]">
                    <PublicOutlinedIcon sx={{ color: "#543787" }} />
                </Button>
                <Button className=" rounded-2xl bg-[#543787] text-sm">

                    <PersonIcon sx={{ color: "white" }} />
                    ورود/ثبت نام
                </Button>
            </div>
        </header>
    );
}

export default Header;

{
    /* <div className="text-white w-full bg-[#FFFFFF] border-b border-gray-200">
          <header className="flex items-center justify-center border border-red-500  p-4">
      
              <Image src={logo} alt="Logo" className="w-14 h-14" />
      
              <div className="flex items-center justify-between w-full border border-red-500">
      
                  {/* <MenuMobile /> */
}

// <nav className="hidden md:block text-[#2D1F44] border border-red-500">
//     <ul className="flex items-center justify-center  space-x-4 font-bold">
//         <li>
//             <a href="#home" className=" hover:text-gray-400 focus:underline">خانه</a>
//         </li>
//         <li>
//             <a href="#services" className=" hover:text-gray-400 focus:underline">خدمات ما</a>
//         </li>
//         <li>
//             <a href="#team" className=" hover:text-gray-400 focus:underline"> تیم ما </a>
//         </li>
//         <li>
//             <a href="#roadmap" className=" hover:text-gray-400 focus:underline">نقشه راه پروژه</a>
//         </li>
//         <li>
//             <a href="#whyus" className=" hover:text-gray-400 focus:underline">چرا بهلند</a>
//         </li>
//         <li>
//             <a href="#whyus" className=" hover:text-gray-400 focus:underline">اخبار</a>
//         </li>
//     </ul>
// </nav>
{
    /* Desktop Buttons */
}
//         <div className="hidden md:flex items-center space-x-1.5">
//             <Button className="bg-[#1e262c] rounded-2xl">ورود/ثبت نام</Button>
//             <Button className="bg-[#1e262c] rounded-2xl">زبان</Button>
//         </div>
//     </div>
// </header>

// </div> */}
