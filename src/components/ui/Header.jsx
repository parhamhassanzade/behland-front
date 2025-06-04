import React from "react";
import { Avatar } from "@/components/ui/avatar";
import { AvatarImage } from "@/components/ui/avatar";
import logo from "../../assets/Images/logo.png"; // Adjust the path as necessary
import Image from "next/image";
import { Button } from '@/components/ui/button';
function Header() {
    return (
        <div className="text-white  w-full">
            <header className="flex  items-center p-4">
                <Avatar className={"mx-2"}>
                    <Image src={logo} alt="Logo" />
                </Avatar>
                <div className="flex items-center justify-between w-full">

                    <nav>
                        <ul className="flex space-x-4">
                            <li>
                                <a
                                    href="#"
                                    className="text-white hover:text-gray-400 focus:underline"
                                >
                                    خانه
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-white hover:text-gray-400 focus:underline"
                                >
                                    کیف پول و دارایی
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-white hover:text-gray-400 focus:underline"
                                >
                                    اتصال به ربات
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-white hover:text-gray-400 focus:underline"
                                >
                                    {" "}
                                    پیش فروش توکن
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-white hover:text-gray-400 focus:underline"
                                >
                                    اماد می مالی
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <div className="flex items-center space-x-1.5">
                        <Button className="bg-[#1e262c] rounded-2xl ">ورود/ثبت نام</Button>
                        <Button className={"bg-[#1e262c] rounded-2xl"}>زبان</Button>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;
