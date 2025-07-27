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
        <section id="services" className="w-full  py-24 px-6 sm:px-10 lg:px-20 flex flex-col items-center">
            <div className="flex flex-col items-center mb-16 gap-5 text-[#2D1F44]">

                <h2 className="text-4xl  sm:text-5xl font-bold tracking-tight text-center leading-tight">
                    خدمات ما
                </h2>
                <p className="text-xl  sm:text-xl font-base tracking-tight text-center leading-tight font-bold">
                    ارائه دوره‌های آنلاین متنوع و تخصصی برای توسعه مهارت‌های فردی و حرفه‌ای                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl w-full">
                {services.map((item, i) => {
                    const Icon = item.icon;
                    return (
                        <div
                            key={i}
                            className="relative bg-[linear-gradient(125deg,_white_-40%,_#75C696_50%,_white_150%)] border-2  rounded-3xl px-6 py-10 shadow-xl backdrop-blur-lg hover:scale-[1.03] transition-all duration-300 group overflow-hidden  border-[#7ac576]/30 "
                        >


                            <div className="relative z-10 flex flex-col items-center text-center gap-6">
                                <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#143446] shadow-lg group-hover:rotate-6 transition-transform">
                                    <Icon sx={{ fontSize: 32 }} className="text-white " />
                                </div>
                                <p className=" text-lg font-bold  leading-snug text-[#fff]">
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
