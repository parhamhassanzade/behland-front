import Image from "next/image";
import React from "react";
import barChart from "../../../assets/images/BarChart.png";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarDetails } from "@/util/Data";

export default function Token() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-2 mt-6">
            <div className="col-span-1 flex flex-col justify-center items-center h-full">
                <div className=" h-full relative text-[#2D1F44] bg-[#F3F6EB] p-4 rounded-2xl">
                    <h2 className="z-1 w-full flex justify-center items-center p-3 text-lg font-bold text-[#2D1F44]">
                        چرا توکن Behland متفاوت و قابل اعتماد است؟
                    </h2>
                    <p className="z-1 w-full flex justify-center items-center text-justify p-2 text-base  text-[#2D1F44]">
                        به‌لند با ساختاری منصفانه و شفاف عرضه می‌شود. برخلاف بسیاری از
                        پروژه‌ها، ابتدا توکن‌ها به کاربران داده می‌شود و تیم فقط در صورت
                        موفقیت واقعی پروژه، سهم خود را با تأخیر و قفل زمانی دریافت می‌کند.
                        فروش توکن‌ها در ۷ مرحله با قیمت‌گذاری صعودی انجام می‌شود، تا فرصت
                        برابر برای همه ایجاد شود. هیچ توزیع پنهان، پیش‌فروش اختصاصی یا فروش
                        ناگهانی توسط تیم وجود ندارد. به‌لند یک مدل مشارکتی و اعتمادمحور است،
                        نه صرفاً یک پروژه سرمایه‌گذاری.
                    </p>
                </div>
            </div>
            <div className="col-span-1 flex flex-col justify-center items-center ">
                <div className="space-y-3  w-full">
                    {BarDetails?.map((item, index) => (
                        <Card
                            key={index}
                            style={{
                                backgroundColor: item.bg,
                                border: `2px solid ${item.textColor}`,
                            }}
                            className={` w-full text-[#4D4D4D]  text-base flex flex-row items-center justify-start p-3`}
                        >
                            <Badge
                                style={{
                                    backgroundColor: item.textColor,
                                    border: `2px solid ${item.textColor}`,
                                }}
                                className={`md:h-8 md:w-8 h-5 w-5 rounded-full font-mono tabular-nums `}
                                variant="destructive"
                            ></Badge>
                            <CardContent
                                style={{
                                    color: item.textColor,
                                }}
                                className=" text-right text-sm font-bold "
                            >
                                {item.title}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
            <div className="col-span-1 flex flex-col justify-center items-center">
                <Image src={barChart} alt="barChart" />
            </div>
        </div>
    );
}
