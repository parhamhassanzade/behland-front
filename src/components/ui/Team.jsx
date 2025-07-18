"use client";
import React from "react";


import Image from "next/image";

import { services } from "@/util/Data";
function Team() {

    return (
        <section id="team" className="w-full  px-3 sm:px-10 lg:px-20 flex flex-col items-center ">
            <div className="flex flex-col items-center mb-16 gap-5 text-[#2D1F44]">
                <h2 className="text-4xl  sm:text-5xl font-bold tracking-tight text-center leading-tight">
                    تیم ما
                </h2>
                <p className="text-xl  sm:text-xl font-base tracking-tight text-center leading-tight font-bold">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
            </div>

            <div className="w-full h-fit  overflow-x-auto">
                <div className="flex justify-center gap-10 min-w-max px-2 p-14  ">
                    {services.map((item, i) => (
                        <div
                            key={i}
                            tabIndex={0}
                            className="relative hover:bg-[#111827]/50 focus:bg-[#111827]/50 hover:border focus:border hover:border-[#ffffff12] focus:border-[#ffffff12] rounded-3xl  hover:shadow-[0_10px_25px_rgba(226,122,26,0.3)] focus:shadow-[0_10px_25px_rgba(226,122,26,0.3)] backdrop-blur-md transition-all duration-300 group overflow-hidden h-64 w-40 transform origin-center hover:scale-110 focus:scale-110 hover:z-20 focus:z-20 hover:h-72 focus:h-72 hover:w-56 focus:w-56 p-2 outline-none"
                        >
                            {/* Decorative glow circle */}
                            <div className="hidden group-hover:block group-focus:block absolute -top-10 -right-10 w-32 h-32 bg-[#143446] opacity-20 rounded-full blur-2xl z-0 group-focus:opacity-30 transition-opacity"></div>

                            <div className="z-10 flex flex-col items-center text-center  h-full relative bg-[#FFCE55] rounded-full">
                                <Image
                                    src={item.image}
                                    alt="test"
                                    className="w-full h-full  shadow-lg  transition-all  object-cover rounded-full hover:rounded-lg focus:rounded-lg hover:scale-110 focus:scale-110 transition-transform duration-300 filter grayscale"
                                />
                                {/* group-hover:w-28 group-hover:h-28 group-focus:w-28 group-focus:h-28 */}

                                <div className="hidden group-hover:flex group-focus:flex flex-col text-center absolute bottom-0 left-0 right-0 bg-[#111827]/20 backdrop-blur-md rounded-b-3xl z-10 m-0 p-0 w-full h-fit">
                                    <p className="text-white font-bold text-lg">{item.name}</p>

                                    <p className="text-[#a1c3fd] font-base font-bold text-sm">
                                        {item.title}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Team;
