import React from "react";

export default function SellStructure() {
    return (
        <section className="w-full p-4  flex  items-center flex-col justify-center">
            <div className="w-11/12 bg-[#F3F6EB] h-fit   flex flex-col items-center justify-center  rounded-xl">
                <div className="flex flex-col items-center justify-center  gap-5 p-4 ">
                    <p className="text-xl text-black font-semibold tracking-tight text-center leading-tight">
                        ساختار فروش مرحله‌ای (۱ میلیون توکن):{" "}
                    </p>
                    <p className="text-base text-black  tracking-tight text-center leading-tight ">
                        از کل ده میلیون توکن بهلند فقط ده درصد یعنی یک میلیون توکن برای فروش در دسترس خواهد بود فروش توکن در ۷ مرحله انجام می‌شود که در هر مرحله قیمت و شرایط خرید متفاوت خواهد بود:
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-2 p-2">
                <div className="">

                </div>
            </div>
        </section>
    );
}
