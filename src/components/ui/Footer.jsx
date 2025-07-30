"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Input } from "@/components/ui/input"
import ArrowUpwardTwoToneIcon from '@mui/icons-material/ArrowUpwardTwoTone';
function Footer() {
    // Responsive Header with mobile menu

    return (
        <footer className="w-full  text-[#fff] mt-auto p-5 relative">
            {/* Arrow icon centered above the footer, 60% outside */}
            <div
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="cursor-pointer absolute left-1/2 -translate-x-1/2 border-5 rounded-full border-white bg-[#143347]"
                style={{
                    top: '-10%',
                    zIndex: 10,
                }}
            >
                <ArrowUpwardTwoToneIcon sx={{ fontSize: 45, color: "#fff" }} />
            </div>
            <div className="bg-[#143446] grid grid-cols-2 rounded-lg">
                <div className="flex items-center justify-center">
                    <nav className="text-[#fff]">
                        <ul className="flex items-center justify-center space-x-4">
                            <li>
                                <a href="#team" className="hover:text-gray-400 focus:underline">
                                    درباره ما
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#roadmap"
                                    className="hover:text-gray-400 focus:underline"
                                >
                                    تماس با ما
                                </a>
                            </li>
                            <li>
                                <a href="#whyus" className="hover:text-gray-400 focus:underline">
                                    حریم خصوصی
                                </a>
                            </li>
                            <li>
                                <a href="#whyus" className="hover:text-gray-400 focus:underline">
                                    شرایط استفاده
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="flex items-center justify-center gap-4 p-4">
                    <div className="flex items-center w-4/6 rounded-2xl overflow-hidden bg-[#FFFFFF26]/30">
                        <Input type="email" placeholder="ایمیل خود را وارد کنید" className="rounded-full border-0" />
                        <Button className="text-black rounded-full bg-[#75C696]">
                            عضویت
                        </Button>
                    </div>
                    <TelegramIcon />
                    <LinkedInIcon />
                    <InstagramIcon />
                </div>
            </div>
        </footer>
    );
}

export default Footer;
