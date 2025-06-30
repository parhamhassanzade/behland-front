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
            title: "نحليل وسيكنال بازار هاى مالى",
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
            <LightBull />
            <h3 className="text-[#a1c3fd] font-[900]  align-center mt-15 text-2xl">
                خدمات ما
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-5 mt-5 w-1/2">
                {Service_list?.map((item, index) => {
                    const IconComponent = iconMap[item.icon] || BarChartIcon;
                    return (
                        <div
                            key={index}
                            className={`border border-[#687378] ${index > 2 ? "border-t-0" : "border-b-0"
                                } bg-black text-white w-fit h-fit mb-5 flex flex-col justify-center items-center gap-2 p-3 rounded-lg hover:bg-[#687378] transition-all duration-300 cursor-pointer`}
                        >
                            <IconComponent
                                sx={{ fontSize: 40 }}
                                className=" text-[#493a2c]"
                            />
                            <p>{item.title}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Services;
