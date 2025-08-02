'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import BannerImg from '../../assets/Images/BannerImg.png';
import coin from '../../assets/Images/coin.png';
import bannerBg from '../../assets/Images/bannerBg.png';
import { Button } from './button';
import { Telegram } from '@mui/icons-material';

const labels = ['ثانیه', 'دقیقه', 'ساعت', 'روز'];

const MainBaner = () => {
    const [timeLeft, setTimeLeft] = useState([0, 0, 0, 0]); // [days, hours, minutes, seconds]
    const [isFinished, setIsFinished] = useState(false);

    useEffect(() => {
        const targetDate = new Date('2025-08-05T21:00:00+03:30');

        const calculateTimeLeft = () => {
            const now = new Date();
            const diff = targetDate.getTime() - now.getTime();

            if (diff <= 0) {
                setIsFinished(true);
                return [0, 0, 0, 0];
            }

            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((diff / (1000 * 60)) % 60);
            const seconds = Math.floor((diff / 1000) % 60);

            return [seconds, minutes, hours, days];
        };

        const updateTimer = () => {
            const newTime = calculateTimeLeft();
            setTimeLeft(newTime);
        };

        updateTimer(); // initial call
        const interval = setInterval(updateTimer, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section
            style={{ backgroundImage: `url(${bannerBg.src})` }}
            className="w-full relative h-fit bg-cover bg-center p-4 sm:p-8 md:p-16 text-white flex flex-col items-center justify-center"
        >
            <div className="w-full flex flex-col md:flex-row-reverse items-center justify-center">
                <div className="w-full flex justify-center items-center mb-4">
                    <Image src={BannerImg} alt="banner" />
                </div>

                {/* متن و تایمر */}
                <div className="w-full md:w-1/2 flex flex-col items-center justify-center px-2 sm:px-4">
                    <div className="flex items-center justify-center w-full">
                        <p className="text-[#4D4D4D] text-2xl sm:text-6xl md:text-8xl font-bold drop-shadow-[-5px_5px_0px_rgba(0,0,0,0.15)] text-center w-fit lg:w-full">
                            به‌لــــــــــند
                        </p>
                        <Image src={coin} alt="coin" className="w-8 sm:w-12 md:w-auto" />
                    </div>

                    <span className="text-[#4D4D4D] text-lg sm:text-lg  text-center w-full mt-3 font-bold">
                        تحولی در یادگیری هدفمند
                    </span>

                    <div className="w-full flex flex-col justify-start items-center mt-6 sm:mt-10">
                        <p className="text-[#000000] text-base sm:text-xl font-bold w-full text-center">
                            منتظرمون باشید
                        </p>

                        {!isFinished ? (
                            <div className="flex gap-2 sm:gap-4 p-2 sm:p-4 items-center justify-center">
                                {timeLeft.map((num, idx) => (
                                    <React.Fragment key={idx}>
                                        <div className="flex flex-col items-center">
                                            <div className="p-[1px] rounded-lg bg-gradient-to-b from-purple-600 to-gray-400">
                                                <div className="w-10 h-10 sm:w-16 sm:h-16 rounded-lg bg-white flex items-center justify-center text-purple-700 text-lg sm:text-xl font-bold">
                                                    {String(num).padStart(2, '0')}
                                                </div>
                                            </div>
                                            <span className="mt-2 text-xs text-[#4D4D4D] font-semibold">
                                                {labels[idx]}
                                            </span>
                                        </div>
                                        {idx < labels.length - 1 && (
                                            <span className="text-xl sm:text-3xl font-bold text-[#4D4D4D] mx-1">
                                                :
                                            </span>
                                        )}
                                    </React.Fragment>
                                ))}
                            </div>
                        ) : (
                            <p className="text-red-600 font-bold mt-4">زمان انتظار به پایان رسید!</p>
                        )}

                        <Button className={"mt-6  bg-[#2052e7] text-white hover:bg-[#3a3a3a] transition-colors"}>
                            <a
                                href="https://t.me/behland_bot"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white font-semibold felx gap-5"
                            >
                                ورود به ربات تلگرامی
                                <Telegram />
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MainBaner;
