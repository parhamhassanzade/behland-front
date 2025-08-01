"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { services } from "@/util/Data";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function Team() {
    const scrollRef = useRef(null);

    const scrollLeft = () => {
        scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
    };

    const scrollRight = () => {
        scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
    };

    return (
        <section
            id="team"
            className="w-full pt-24 px-3 sm:px-10 lg:px-20 flex flex-col items-center"
        >
            {/* عنوان بخش */}
            <div className="flex flex-col items-center mb-16 gap-5 text-[#2D1F44]">
                <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-center leading-tight">
                    تیم ما
                </h2>
                <p className="text-xl font-bold tracking-tight text-center leading-tight">
                    تیمی متعهد از متخصصان آموزش آنلاین در کنار شما برای تحقق یادگیری مؤثر
                </p>
            </div>

            {/* اسلایدر اعضای تیم */}
            <div className="relative w-full bg-[#F3F6EB] rounded-3xl p-4">
                {/* دکمه قبلی */}
                <button
                    onClick={scrollLeft}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-md"
                    aria-label="قبلی"
                >
                    <NavigateNextIcon className="text-black" />
                </button>

                {/* لیست اعضا */}
                <div
                    ref={scrollRef}
                    className="flex overflow-x-auto scroll-smooth gap-6 scrollbar-hide px-2 py-2"
                    style={{ scrollBehavior: "smooth" }}
                >
                    {services.map((item, i) => (
                        <div
                            key={i}
                            tabIndex={0}
                            className="flex-shrink-0 relative hover:bg-[#FFCE55] focus:bg-[#FFCE55] hover:border focus:border hover:border-[#FFCE55] focus:border-[#FFCE55] 
                            rounded-3xl backdrop-blur-md transition-all duration-300 group overflow-hidden 
                            h-64 w-40 sm:w-56 md:h-72 md:w-55 p-2 outline-none"
                        >
                            <div className="z-10 flex flex-col items-center text-center h-full relative bg-[#FFCE55] rounded-full">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full shadow-lg object-cover rounded-full hover:rounded-lg focus:rounded-lg hover:scale-110 focus:scale-110 transition-transform duration-300 filter grayscale"
                                />
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

                {/* دکمه بعدی */}
                <button
                    onClick={scrollRight}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-md"
                    aria-label="بعدی"
                >
                    <NavigateNextIcon className="text-black rotate-180" />
                </button>
            </div>
        </section>
    );
}

export default Team;
