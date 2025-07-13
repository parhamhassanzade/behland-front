
"use client";
import React from "react";
import {
    BarChart,
    AttachMoney,
    LocalLibrary,
    SupportAgent,
    CandlestickChart,
    WorkspacePremium,
} from "@mui/icons-material";

const services = [
    { title: "سيستم سطح بندى VIP", icon: BarChart },
    { title: "كسب درامد واقعى", icon: AttachMoney },
    { title: "آموزش بازار هاى مالى", icon: LocalLibrary },
    { title: "مشاوره وهمراهى در بازار", icon: SupportAgent },
    { title: "نحليل سيكنال بازار هاى مالى", icon: CandlestickChart },
    { title: "مدرک پايان دوره NFT", icon: WorkspacePremium },
];

export default function Services() {
    return (
        <section id="services" className="w-full min-h-screen py-24 px-6 sm:px-10 lg:px-20 flex flex-col items-center">
            <div className="flex flex-col items-center mb-16 gap-5">

                <h2 className="text-4xl text-[#a1c3fd] sm:text-5xl font-bold tracking-tight text-center leading-tight">
                    خدمات ما
                </h2>
                <p className="text-xl text-[#a1c3fd] sm:text-xl font-base tracking-tight text-center leading-tight">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl w-full">
                {services.map((item, i) => {
                    const Icon = item.icon;
                    return (
                        <div
                            key={i}
                            className="relative bg-[#111827]/50 border border-[#ffffff12] rounded-3xl px-6 py-10 shadow-xl hover:shadow-[0_10px_25px_rgba(226,122,26,0.3)] backdrop-blur-md hover:scale-[1.03] transition-all duration-300 group overflow-hidden"
                        >
                            {/* Decorative glow circle */}
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#e27a1a] opacity-20 rounded-full blur-2xl z-0 group-hover:opacity-30 transition-opacity"></div>

                            <div className="relative z-10 flex flex-col items-center text-center gap-6">
                                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#e27a1a] shadow-lg group-hover:rotate-6 transition-transform">
                                    <Icon sx={{ fontSize: 32 }} className="text-white" />
                                </div>
                                <p className="text-white text-lg font-medium leading-snug">
                                    {item.title}
                                </p>
                            </div>
                        </div>

                    );
                })}
            </div>
        </section>
    );
}
