"use client";
import React from "react";
import LightBull from "./LightBull";

//? icons
import BarChartIcon from "@mui/icons-material/BarChart";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import CandlestickChartOutlinedIcon from "@mui/icons-material/CandlestickChartOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
function Services() {
    let Service_list = [
        {
            title: "سيستم سطح بندى VIP",
            icon: "BarChartIcon",
        },
        {
            title: "كسب درامد واقعى",
            icon: "AttachMoneyIcon",
        },
        {
            title: "آموزش بازار هاى مالى",
            icon: "LocalLibraryIcon",
        },
        {
            title: "مشاوره وهمراهى در بازار",
            icon: "SupportAgentIcon",
        },
        {
            title: "نحليل سيكنال بازار هاى مالى",
            icon: "CandlestickChartOutlinedIcon",
        },
        {
            title: " مدرک يايان دوره NFT",
            icon: "WorkspacePremiumOutlinedIcon",
        },
    ];

    // Map icon names to actual components
    const iconMap = {
        BarChartIcon: BarChartIcon,
        AttachMoneyIcon: AttachMoneyIcon,
        LocalLibraryIcon: LocalLibraryIcon,
        SupportAgentIcon: SupportAgentIcon,
        CandlestickChartOutlinedIcon: CandlestickChartOutlinedIcon,
        WorkspacePremiumOutlinedIcon: WorkspacePremiumOutlinedIcon,
        // Add more icons here if needed
    };

    return (
        <div className="w-full flex justify-center items-center flex-col gap-2 ">
            <h2 className="text-[#a1c3fd] font-[900] align-center mt-15 text-3xl">
                خدمات ما
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-5 w-full md:w-4/5 p-8">
                {Service_list?.map((item, index) => {
                    const IconComponent = iconMap[item.icon] || BarChartIcon;
                    return (
                        <div
                            key={index}
                            className="min-w-[200px] border border-[#687378] bg-black text-white flex flex-col justify-center items-center gap-10 p-3 rounded-xl hover:bg-[#687378] transition-all duration-300 cursor-pointer"
                        >
                            <IconComponent sx={{ fontSize: 60 }} className="text-[#e27a1a]" />
                            <p className="text-xl md:text-base lg:text-xl whitespace-nowrap">{item.title}</p>
                        </div>
                    );
                })}
            </div>



        </div>
    );
}

export default Services;
