"use client";
import React from "react";
import { Avatar } from "@/components/ui/avatar";
import logo from "../../assets/Images/logo.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MenuMobile } from "./MenuMobile";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import PersonIcon from '@mui/icons-material/Person';
import { Badge } from "@/components/ui/badge"

function Header() {
    return (
        <header className="bg-white w-full p-3 md:p-5 border-b-4 border-[#E9E9E9] grid md:grid-cols-3 grid-cols-4 items-center">
            {/* موبایل منو */}
            <MenuMobile />

            {/* لوگو وسط */}
            <div className="col-span-1 flex items-center justify-center">
                <Image src={logo} alt="Logo" className="w-15 h-10 md:w-20 md:h-16" />
            </div>

            {/* منوی دسکتاپ */}
            <div className="col-span-1 flex justify-center items-center">
                <nav className="text-[#2D1F44] hidden md:block">
                    <ul className="flex items-center justify-center space-x-4 font-bold">
                        <li>
                            <a href="#home" className="hover:text-gray-400 focus:underline">خانه</a>
                        </li>
                        <li>
                            <a href="#services" className="hover:text-gray-400 focus:underline">خدمات ما</a>
                        </li>
                        <li>
                            <a href="#team" className="hover:text-gray-400 focus:underline">تیم ما</a>
                        </li>
                        <li>
                            <a href="#roadmap" className="hover:text-gray-400 focus:underline">نقشه راه پروژه</a>
                        </li>
                        <li>
                            <a href="#whyus" className="hover:text-gray-400 focus:underline">چرا بهلند</a>
                        </li>
                        <li>
                            <a href="#news" className="hover:text-gray-400 focus:underline">اخبار</a>
                        </li>
                    </ul>
                </nav>
            </div>

            {/* دکمه‌ها سمت چپ (در موبایل و دسکتاپ وسط‌چین و فاصله یکسان) */}
            <div className="col-span-1 flex flex-row items-center justify-center gap-2 sm:gap-4">
                <Button className="rounded-full border-2 p-0 m-0 border-[#543787]">
                    <PublicOutlinedIcon sx={{ color: "#543787" }} />
                </Button>
                <Button className="rounded-2xl bg-[#543787] text-sm flex items-center gap-1 px-3 py-2">
                    <PersonIcon sx={{ color: "white" }} />
                    <p className="hidden md:block text-white">ورود/ثبت نام</p>
                </Button>
            </div>
        </header>
    );
}

export default Header;


