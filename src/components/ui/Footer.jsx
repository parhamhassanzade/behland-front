"use client";
import React from "react";
import { Avatar } from "@/components/ui/avatar";
import logo from "../../assets/Images/logo.png"; // Adjust the path as necessary
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MenuMobile } from "./MenuMobile";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
function Footer() {
    // Responsive Header with mobile menu

    return (
        <div className="text-white w-full border-t border-gray-700 ">
            <footer className="flex flex-col items-center  p-4">

                <div className="hidden md:flex items-center justify-between w-full">
                    {/* Footer Nav */}
                    <nav className="block">
                        <ul className="flex space-x-4">
                            <li>
                                <a
                                    href="#"
                                    className="text-white hover:text-gray-400 focus:underline"
                                >
                                    درباره ما
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-white hover:text-gray-400 focus:underline"
                                >
                                    تماس با ما
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-white hover:text-gray-400 focus:underline"
                                >
                                    حریم خصوصی
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-white hover:text-gray-400 focus:underline"
                                >
                                    شرایط استفاده
                                </a>
                            </li>
                        </ul>
                    </nav>
                    {/* Footer Buttons */}
                    <div className="flex items-center space-x-1.5">
                        <Button className="bg-[#1e262c] rounded-2xl"><SupportAgentIcon /></Button>
                        <Button className="bg-[#1e262c] font-base rounded-2xl">
                            اشتراک در خبرنامه
                        </Button>
                    </div>
                </div>
                {/* social media */}
                <div>
                    <div className="flex space-x-4 mt-4">
                        <a href="#" className="text-white hover:text-gray-400">
                            <InstagramIcon />
                        </a>
                        <a href="#" className="text-white hover:text-gray-400">
                            <TelegramIcon />
                        </a>
                        <a href="#" className="text-white hover:text-gray-400">
                            <LinkedInIcon />
                        </a>
                    </div>

                </div>
                <div>
                    <div className="flex space-x-4 mt-4">
                        <p>Made with <FavoriteBorderIcon sx={{ color: "red" }} /> in Iran  </p>
                    </div>

                </div>
            </footer>
        </div>
    );
}

export default Footer;
