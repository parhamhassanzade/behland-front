import { saleStages } from "@/util/Data";
import React, { useRef } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
export default function SellStructure() {

    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: direction === "left" ? -300 : 300,
                behavior: "smooth",
            });
        }
    };
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


            <div className="space-y-4 p-4 w-full">
                {/* Scroll buttons - mobile only */}


                {/* Cards */}
                <div
                    ref={scrollRef}
                    className="flex md:grid md:grid-cols-3 gap-4 overflow-x-auto md:overflow-visible w-full"
                >
                    {saleStages.map((stage, index) => (
                        <div
                            key={index}
                            className={`min-w-[260px] md:min-w-0 flex-shrink-0 rounded-xl border ${stage.highlight ? "border-green-500" : "border-gray-200"
                                } bg-white p-3 shadow-sm transition-all hover:border-green-500 hover:shadow-lg space-y-2`}
                        >
                            <div className="flex items-center justify-start gap-2">
                                <h3 className="text-sm font-bold text-right text-black">{stage.title}</h3>
                                {stage.badge && (
                                    <span className="rounded-md bg-red-600 text-white text-xs px-2 py-1 font-semibold">
                                        {stage.badge}
                                    </span>
                                )}
                            </div>

                            <div className="flex flex-wrap gap-2 text-sm text-right">
                                <span className="bg-green-50 text-green-900 px-2 py-1 rounded-md">
                                    تعداد: {stage.tokens}
                                </span>
                                <span className="bg-yellow-50 text-yellow-800 px-2 py-1 rounded-md">
                                    قیمت: {stage.price}
                                </span>
                            </div>

                            <p className="text-xs bg-[#CDCDCD4A] rounded-lg p-2 text-gray-700 text-right leading-relaxed">
                                {stage.description}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center items-center gap-2 md:hidden">
                    <button
                        onClick={() => scroll("left")}
                        className="p-2 rounded-full bg-gray-200  transition"
                    >
                        <ChevronRight className="w-5 h-5 text-green-500" />
                    </button>
                    <button
                        onClick={() => scroll("right")}
                        className="p-2 rounded-full bg-gray-200 transition text-green-500"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                </div>
            </div>

        </section>
    );
}
