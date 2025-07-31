"use client";
import React, { useEffect, useState } from "react";
import BannerImg from "../../assets/Images/BannerImg.png";
import Image from "next/image";
import coin from "../../assets/Images/coin.png";
import bannerBg from "../../assets/Images/bannerBg.png";
const labels = ["ثانیه", "دقیقه", "ساعت", "روز"];
function MainBaner() {





    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const [isFinished, setIsFinished] = useState(false);

    useEffect(() => {
        const endTime = new Date(Date.now() + 4 * 24 * 60 * 60 * 1000);

        const updateTimer = () => {
            const now = new Date();
            const diff = endTime - now;

            if (diff <= 0) {
                setIsFinished(true);
                clearInterval(timerId);
                return;
            }

            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((diff / (1000 * 60)) % 60);
            const seconds = Math.floor((diff / 1000) % 60);

            setTimeLeft({ days, hours, minutes, seconds });
        };

        updateTimer(); // مقدار اولیه
        const timerId = setInterval(updateTimer, 1000);

        return () => clearInterval(timerId); // پاک‌سازی
    }, []);

    const timeValues = [timeLeft.seconds, timeLeft.minutes, timeLeft.hours, timeLeft.days];

    return (
        <section
            style={{ backgroundImage: `url(${bannerBg.src})` }}
            className="w-full relative"
        >
            <div className="w-full grid grid-cols-1 md:grid-cols-2">
                <div className="w-full flex flex-col md:flex-row-reverse  justify-center items-center md:items-center">
                    {/* موبایل: عکس بالا */}
                    <div className="w-full flex md:hidden justify-center items-center order-1 mb-4 ">
                        <Image src={BannerImg} alt="banner" />
                    </div>
                    {/* نوشته و تایمر */}
                    <div className="flex flex-col items-center justify-center w-full md:w-5/6 order-2 px-2 sm:px-4">
                        <div className="flex items-center justify-center w-full">
                            <p className="text-[#4D4D4D] text-2xl sm:text-6xl md:text-8xl font-bold drop-shadow-[-5px_5px_0px_rgba(0,0,0,0.15)] m-0 p-0 text-center w-fit lg:w-full">
                                به‌لــــــــــند
                            </p>
                            <Image src={coin} alt="coin" className="w-8 sm:w-12 md:w-auto   " />
                        </div>
                        <span className="text-[#4D4D4D] text-sm sm:text-base font-normal text-center w-full mt-2">
                            به‌لند جاییه برای یادگیری، رشد و درآمد از مسیر بازی‌محور آموزش مالی. هر مرحله تو رو یک قدم به تحلیلگر شدن و استقلال مالی نزدیک‌تر می‌کنه.
                        </span>
                        <div className="w-full flex flex-col justify-start items-center mt-6 sm:mt-10">
                            <p className="text-[#000000] text-base sm:text-xl font-bold w-full text-center">
                                منتظرمون باشید
                            </p>
                            <div className="flex gap-2 sm:gap-4 p-2 sm:p-4 items-center justify-center">
                                {timeValues.map((num, idx, arr) => (
                                    <React.Fragment key={idx}>
                                        <div className="flex flex-col items-center">
                                            <div className="p-[1px] rounded-lg bg-gradient-to-b from-purple-600 to-gray-400">
                                                <div className="w-10 h-10 sm:w-16 sm:h-16 rounded-lg bg-white flex items-center justify-center text-purple-700 text-lg sm:text-xl font-bold">
                                                    {num}
                                                </div>
                                            </div>
                                            <span className="mt-2 text-xs text-[#4D4D4D] font-semibold">
                                                {labels[idx]}
                                            </span>
                                        </div>
                                        {idx < arr.length - 1 && (
                                            <span className="text-xl sm:text-3xl font-bold text-[#4D4D4D] mx-1">

                                            </span>
                                        )}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="hidden md:flex justify-center items-center order-3 md:order-1   w-full col-span-2">
                        <Image src={BannerImg} alt="banner" className="w-fit h-82" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MainBaner;
