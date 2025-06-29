"use client";
import React from "react";
import LightBull from "./LightBull";

import BarChartIcon from "@mui/icons-material/BarChart";
function Services() {
    let Service_list = [
        {
            title: "خدمات مشاوره",
            description: "ارائه مشاوره در زمینه‌های مختلف",
        },
        {
            title: "خدمات آموزشی",
            description: "برگزاری دوره‌های آموزشی تخصصی",
        },
        {
            title: "خدمات پشتیبانی",
            description: "پشتیبانی فنی و مشاوره‌ای",
        },
        {
            title: "خدمات توسعه نرم‌افزار",
            description: "توسعه و پیاده‌سازی نرم‌افزارهای سفارشی",
        },
    ];

    return (
        <div className="w-full flex justify-center items-center flex-col gap-2 ">
            {/* bg-[radial-gradient(#555,#111)] */}
            <LightBull />
            <h3 className="text-[#a1c3fd] font-[900]  align-center mt-15 text-2xl">
                خدمات ما
            </h3>
            {console.log(Service_list)}
            {/* todo=> change it to grid */}
            <div className="flex flex-wrap justify-center items-center gap-5 mt-5">
                {Service_list?.map((item, index) => (
                    <div
                        key={index}
                        className="border border-[#687378] border-b-0 bg-black text-white w-fit h-fit mb-5 flex flex-col justify-center items-center gap-2 p-3 rounded-lg"
                    >
                        <BarChartIcon sx={{ fontSize: 40 }} className=" text-[#493a2c]" />
                        <p>{item.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Services;
