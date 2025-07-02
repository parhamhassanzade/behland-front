"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Parham from "../../assets/Images/TeamMemebers/parham.png";
import Mehdi from "../../assets/Images/TeamMemebers/Mehdi.png";
import Image from "next/image";
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
        <section className="w-full min-h-screen py-24 px-6 sm:px-10 lg:px-20 flex flex-col items-center">
            <div className="flex flex-col items-center mb-16 gap-5">
                <h2 className="text-4xl text-[#a1c3fd] sm:text-5xl font-bold tracking-tight text-center leading-tight">
                    تیم ما
                </h2>
                <p className="text-xl text-[#a1c3fd] sm:text-xl font-base tracking-tight text-center leading-tight">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4  lg:grid-cols-6 gap-10 max-w-7xl w-full">
                {services.map((item, i) => {
                    return (
                        <div
                            key={i}
                            className="relative bg-[#111827]/50 border border-[#ffffff12] rounded-3xl py-6 shadow-xl hover:shadow-[0_10px_25px_rgba(226,122,26,0.3)] backdrop-blur-md transition-all duration-300 group overflow-hidden h-64 w-38 cursor-pointer
    transform origin-center hover:scale-110 hover:z-20 hover:h-72 hover:w-44"
                        >
                            {/* Decorative glow circle */}
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#e27a1a] opacity-20 rounded-full blur-2xl z-0 group-hover:opacity-30 transition-opacity"></div>

                            <div className="relative z-10 flex flex-col items-center text-center gap-6">
                                <Image
                                    src={item.image}
                                    alt="test"
                                    className="w-18 h-18 bg-[#e27a1a] shadow-lg group-hover:w-28 group-hover:h-28 transition-all rounded-full"
                                />
                                <p className="font-bold text-[#a1c3fd]">{item.name}</p>
                                <p className="text-white font-bold text-base">{item.title}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default Team;
