'use client'
import React from "react";
import { Avatar } from "@/components/ui/avatar";
import { AvatarImage } from "@/components/ui/avatar";
import logo from "../../assets/Images/logo.png"; // Adjust the path as necessary
import Image from "next/image";
import { Button } from '@/components/ui/button';
import { MenuMobile } from "./MenuMobile";
function Header() {
    // Responsive Header with mobile menu
    const [menuOpen, setMenuOpen] = React.useState(false);

    return (
        <div className="text-white w-full">
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
                                <a href="#" className="text-white hover:text-gray-400 focus:underline">اماد می مالی</a>
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
            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-[#1e262c] px-4 pb-4">

                    {/* <nav>
                        <ul className="flex flex-col space-y-2">
                            <li>
                                <a href="#" className="block py-2 text-white hover:text-gray-400 focus:underline">خانه</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 text-white hover:text-gray-400 focus:underline">کیف پول و دارایی</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 text-white hover:text-gray-400 focus:underline">اتصال به ربات</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 text-white hover:text-gray-400 focus:underline">پیش فروش توکن</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 text-white hover:text-gray-400 focus:underline">اماد می مالی</a>
                            </li>
                        </ul>
                        <div className="flex flex-col space-y-2 mt-4">
                            <Button className="bg-[#1e262c] rounded-2xl w-full">ورود/ثبت نام</Button>
                            <Button className="bg-[#1e262c] rounded-2xl w-full">زبان</Button>
                        </div>
                    </nav> */}
                    {/* <MenuMobile /> */}
                </div>
            )}
        </div>
    );
}

export default Header;
