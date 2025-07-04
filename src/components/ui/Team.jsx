"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Parham from "../../assets/Images/TeamMemebers/parham.png";
import Mehdi from "../../assets/Images/TeamMemebers/Mehdi.png";
import Image from "next/image";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";
function Team() {
    const services = [
        { title: "Developer", image: Parham, name: "Parham" },
        { title: "CTO", image: Mehdi, name: "Mehdi" },
        { title: "Developer", image: Parham, name: "Parham" },
        { title: "CTO", image: Mehdi, name: "Mehdi" },
        { title: "Developer", image: Parham, name: "Parham" },
        { title: "CTO", image: Mehdi, name: "Mehdi" },
    ];
    return (
        <section className="w-full min-h-screen py-24 px-6 sm:px-10 lg:px-20 flex flex-col items-center ">
            <div className="flex flex-col items-center mb-16 gap-5">
                <h2 className="text-4xl text-[#a1c3fd] sm:text-5xl font-bold tracking-tight text-center leading-tight">
                    تیم ما
                </h2>
                <p className="text-xl text-[#a1c3fd] sm:text-xl font-base tracking-tight text-center leading-tight">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
            </div>

            <div className="w-full h-fit  overflow-x-auto">
                <div className="flex gap-10 min-w-max px-2 p-14">
                    {services.map((item, i) => (
                        <div
                            key={i}
                            tabIndex={0}
                            className="relative hover:bg-[#111827]/50 focus:bg-[#111827]/50 hover:border focus:border hover:border-[#ffffff12] focus:border-[#ffffff12] rounded-3xl shadow-xl hover:shadow-[0_10px_25px_rgba(226,122,26,0.3)] focus:shadow-[0_10px_25px_rgba(226,122,26,0.3)] backdrop-blur-md transition-all duration-300 group overflow-hidden h-64 w-40 transform origin-center hover:scale-110 focus:scale-110 hover:z-20 focus:z-20 hover:h-72 focus:h-72 hover:w-56 focus:w-56 p-2 outline-none"
                        >
                            {/* Decorative glow circle */}
                            <div className="hidden group-hover:block group-focus:block absolute -top-10 -right-10 w-32 h-32 bg-[#e27a1a] opacity-20 rounded-full blur-2xl z-0 group-hover:opacity-30 group-focus:opacity-30 transition-opacity"></div>

                            <div className="z-10 flex flex-col items-center text-center gap-6 h-full">
                                <Image
                                    src={item.image}
                                    alt="test"
                                    className="w-full h-full bg-[#e27a1a] shadow-lg group-hover:w-28 group-hover:h-28 group-focus:w-28 group-focus:h-28 transition-all rounded-full object-cover"
                                />
                                <p className="hidden group-hover:flex group-focus:flex flex-col text-center">
                                    <span className="text-white font-bold text-lg">
                                        {item.name}
                                    </span>
                                    <br />
                                    <span className="text-[#a1c3fd] font-base text-sm">
                                        {item.title}
                                    </span>
                                    <br />
                                    <span className="text-[#a1c3fd] font-base text-sm flex gap-2">
                                        <Link href={"https://www.google.com"}>
                                            <TelegramIcon sx={{ cursor: "pointer" }} />
                                        </Link>
                                        <Link href={"https://www.google.com"}>
                                            <LinkedInIcon />
                                        </Link>
                                    </span>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Team;
