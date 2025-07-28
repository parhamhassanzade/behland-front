"use client";
import React from "react";
import cow from "../../assets/Images/Cow.png";
import Image from "next/image";
function MainBaner() {
    return (
        <section className="w-full h-fit flex justify-center items-center mt-8">
            <div className="relative w-full max-w-6xl h-fit flex flex-col justify-center items-center">
                <div className="absolute left-0 z-10">
                    <Image
                        src={cow}
                        alt="behland_banner"
                        className="object-cover"
                        width={200}
                        height={200}
                        // سایز تصویر را با کلاس‌های ریسپانسیو کنترل کن
                        style={{ width: "auto", height: "auto" }}
                    />
                </div>
                <span className="font-black text-white text-4xl sm:text-6xl md:text-8xl lg:text-[10em] flex flex-row">
                    <span className="mx-1 sm:mx-2 drop-shadow-[-5px_5px_0px_rgba(255,0,0,0.7)]">D</span>
                    <span className="mx-1 sm:mx-2 drop-shadow-[-5px_5px_0px_rgba(0,0,0,0.7)]">E</span>
                    <span className="mx-1 sm:mx-2 drop-shadow-[-5px_5px_0px_rgba(0,0,0,0.7)]">H</span>
                    <span className="mx-1 sm:mx-2 drop-shadow-[-5px_5px_0px_rgba(59,130,246,0.7)]">L</span>
                    <span className="mx-1 sm:mx-2 drop-shadow-[-5px_5px_0px_rgba(0,0,0,0.7)]">A</span>
                    <span className="mx-1 sm:mx-2 drop-shadow-[-5px_5px_0px_rgba(0,0,0,0.7)]">N</span>
                    <span className="mx-1 sm:mx-2 drop-shadow-[-5px_5px_0px_rgba(249,115,22,0.7)]">B</span>
                </span>
                <p className="text-black text-xs sm:text-base md:text-lg mt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit
                </p>
            </div>
        </section>
    );
}

export default MainBaner;
