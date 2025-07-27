"use client";
import React from 'react'
import Why from "../../assets/Images/Whyus.png";
import Image from 'next/image';
import ColumnBlue from './ColumnBlue';

function WhyUs() {
    return (
        <section id="whyus">
            {/* text section */}
            <div className=" w-full h-fit overflow-hidden p-2 md:p-16 hidden md:block">
                {/* لایه نور (نور سمت چپ) */}

                <div className="flex justify-between items-center text-white w-full mt-6 ">
                    <div className="w-3/6">
                        <Image src={Why} alt="why" />
                    </div>
                    <div className="w-3/6 h-fit relative ">
                        <ColumnBlue CusStyle={"h-full -z-3"} />
                        <h2 className="z-1 w-full flex justify-center items-center p-3 text-lg font-bold text-[#2D1F44]">
                            چرا بهلند...
                        </h2>
                        <p className="z-1 w-full flex justify-center items-center text-justify p-2 text-base  text-[#2D1F44]">
                            چون بهلند مسیری برات آماده کرده که بازارهای مالی رو با بهترین روش ممکن آموزش ببینی.
                            مسیری که مثل یک بازی با ماموریت ها و تمرین هاش از یاد گرفتن حوصله ات سرنمیره.
                            مسیری که مرحله به مرحله مهارت تو رو برای بازارهای مالی بیشتر می کنه.
                            مسیری که با شخصیت هاش و پشتیبانیش تو تک تک مراحل کنارته و تجربه ات رو بیشتر می کنه.
                            مسیری که از همون اول برای تو درآمد ایجاد می کنه و هر مرحله که مهارت بیشتری یاد می گیری, درآمدت هم بیشتر میشه.
                            مسیر آماده است فقط باید بخواهی.

                        </p>
                    </div>
                </div>
            </div>

            <div className="relative w-full h-fit overflow-hidden p-2 md:p-16   md:hidden">
                {/* لایه نور (نور سمت چپ) */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2/12 h-1/12 bg-white/40 rounded blur-[120px] opacity-80" />

                <div className=" text-white w-full mt-6 ">
                    <div className="w-full h-fit relative ">
                        <ColumnBlue CusStyle={"h-full -z-3"} />
                        <h3 className="z-1 w-full flex justify-center items-center p-3 text-base font-bold">
                            چرا بهلند....
                        </h3>
                        <p className="z-1 w-full flex justify-center items-center text-justify p-2 text-sm">
                            چون بهلند مسیری برات آماده کرده که بازارهای مالی رو با بهترین روش ممکن آموزش ببینی.
                            مسیری که مثل یک بازی با ماموریت ها و تمرین هاش از یاد گرفتن حوصله ات سرنمیره.
                            مسیری که مرحله به مرحله مهارت تو رو برای بازارهای مالی بیشتر می کنه.
                            مسیری که با شخصیت هاش و پشتیبانیش تو تک تک مراحل کنارته و تجربه ات رو بیشتر می کنه.
                            مسیری که از همون اول برای تو درآمد ایجاد می کنه و هر مرحله که مهارت بیشتری یاد می گیری, درآمدت هم بیشتر میشه.
                            مسیر آماده است فقط باید بخواهی.

                        </p>
                    </div>
                    <div className="w-full">
                        <Image src={Why} alt="why" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyUs