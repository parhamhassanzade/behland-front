"use client";
import React from "react";
import BannerImg from "../../assets/Images/BannerImg.png";
import Image from "next/image";
import coin from "../../assets/Images/coin.png";
import bannerBg from "../../assets/Images/bannerBg.png";
const labels = ["روز", "ساعت", "دقیقه", "ثانیه"];
function MainBaner() {
    return (
        <section style={{ backgroundImage: `url(${bannerBg.src})` }} className="w-full    relative">

            <div className="w-full  grid grid-cols-2 ">
                <div className="w-full flex flex-col justify-center items-center">
                    <div className=" flex flex-col items-center justify-center  w-5/6">
                        <div className=" flex items-center justify-center">
                            <p className="text-[#4D4D4D]  text-[8em] font-bold drop-shadow-[-5px_5px_0px_rgba(0,0,0,0.15)]  m-0 p-0">
                                به‌لـــــند
                            </p>
                            <Image src={coin} alt="coin" />
                        </div>
                        <span className="text-[#4D4D4D] text-base font-normal">
                            به‌لند جاییه برای یادگیری، رشد و درآمد از مسیر بازی‌محور آموزش
                            مالی. هر مرحله تو رو یک قدم به تحلیلگر شدن و استقلال مالی نزدیک‌تر
                            می‌کنه.
                        </span>
                        <div className="w-full flex flex-col justify-start items-center mt-10">
                            <p className="text-[#000000] text-xl font-bold  w-full">
                                منتظرمون باشید
                            </p>
                            <div className="flex gap-4 p-4 items-center justify-center">
                                {["۰۴", "۲۴", "۳۴", "۱۰"].map((num, idx, arr) => (
                                    <React.Fragment key={idx}>
                                        <div className="flex flex-col items-center">
                                            <div className="p-[1px] rounded-lg bg-gradient-to-b from-purple-600 to-gray-400">
                                                <div className="w-16 h-16 rounded-lg bg-white flex items-center justify-center text-purple-700 text-xl font-bold">
                                                    {num}
                                                </div>
                                            </div>
                                            <span className="mt-2 text-xs text-[#4D4D4D] font-semibold">
                                                {labels[idx]}
                                            </span>
                                        </div>
                                        {idx < arr.length - 1 && (
                                            <span className="text-3xl font-bold text-[#4D4D4D] mx-1">
                                                :
                                            </span>
                                        )}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <Image src={BannerImg} alt="banner" />
                </div>
            </div>
        </section>
    );
}

export default MainBaner;
