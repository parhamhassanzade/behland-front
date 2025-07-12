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
        <div className="text-white w-full bg-black">
            <header className="flex items-center  p-4">
                <Avatar className="mx-2">
                    <Image src={logo} alt="Logo" />
                </Avatar>
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
                    <nav className="hidden md:block">
                        <ul className="flex space-x-4">
                            <li>
                                <a href="#" className="text-white hover:text-gray-400 focus:underline">خانه</a>
                            </li>
                            <li>
                                <a href="#" className="text-white hover:text-gray-400 focus:underline">کیف پول و دارایی</a>
                            </li>
                            <li>
                                <a href="#" className="text-white hover:text-gray-400 focus:underline">اتصال به ربات</a>
                            </li>
                            <li>
                                <a href="#" className="text-white hover:text-gray-400 focus:underline">پیش فروش توکن</a>
                            </li>
                            <li>
                                <a href="#" className="text-white hover:text-gray-400 focus:underline">آکادمی مالی</a>
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
