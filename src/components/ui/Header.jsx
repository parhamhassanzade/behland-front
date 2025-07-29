'use client'
import React from "react";
import { Avatar } from "@/components/ui/avatar";
import logo from "../../assets/Images/logo.png"; // Adjust the path as necessary
import Image from "next/image";
import { Button } from '@/components/ui/button';
import { MenuMobile } from "./MenuMobile";
function Header() {
    // Responsive Header with mobile menu

    return (
        <div className="text-white w-full bg-[#F3F6EB] border-b border-gray-200">
            <header className="flex items-center  p-4">
                {/* <Avatar className="mx-2"> */}
                <Image src={logo} alt="Logo" className="w-14 h-14" />
                {/* </Avatar> */}
                <div className="flex items-center justify-between w-full">
                    {/* Hamburger for mobile */}
                    {/* <button
                        className="md:hidden ml-2 focus:outline-none"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Open menu"
                    >
                        -

                    </button> */}
                    <MenuMobile />
                    {/* Desktop Nav */}
                    <nav className="hidden md:block text-[#2D1F44]">
                        <ul className="flex space-x-4 font-bold">
                            <li>
                                <a href="#home" className=" hover:text-gray-400 focus:underline">خانه</a>
                            </li>
                            <li>
                                <a href="#services" className=" hover:text-gray-400 focus:underline">خدمات ما</a>
                            </li>
                            <li>
                                <a href="#team" className=" hover:text-gray-400 focus:underline"> تیم ما </a>
                            </li>
                            <li>
                                <a href="#roadmap" className=" hover:text-gray-400 focus:underline">نقشه راه پروژه</a>
                            </li>
                            <li>
                                <a href="#whyus" className=" hover:text-gray-400 focus:underline">چرا بهلند</a>
                            </li>
                            <li>
                                <a href="#whyus" className=" hover:text-gray-400 focus:underline">اخبار</a>
                            </li>
                        </ul>
                    </nav>
                    {/* Desktop Buttons */}
                    <div className="hidden md:flex items-center space-x-1.5">
                        <Button className="bg-[#1e262c] rounded-2xl">ورود/ثبت نام</Button>
                        <Button className="bg-[#1e262c] rounded-2xl">زبان</Button>
                    </div>
                </div>
            </header>

        </div>
    );
}

export default Header;
