import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { Card } from "@/components/ui/card";
import Road from "./Road";
function Phase3() {
    const roadmap = [
        {
            x: 2,
            y: 40,
            title: "شروع",
            desc: "•  اجرای مرحله سوم و چهارم پیش‌فروش توکن در کانال «به‌تحلیل»",
            color: "gray",
        },
        {
            x: 10,
            y: 44,
            title: "طراحی",
            desc: "•  اجرای مرحله پنجم فروش توکن از طریق یک صرافی غیرمتمرکز (DEX)",
            color: "gray",
        },
        {
            x: 20,
            y: 65,
            title: "توسعه",
            desc: "•  نهایی‌سازی اتصال کامل سایت و ربات تلگرام",
            color: "gray",
        },
        {
            x: 30,
            y: 35,
            title: "تست",
            desc: "•  آغاز توسعه مینی‌اپ تلگرام با قابلیت‌های پیشرفته",
            color: "gray",
        },
        {
            x: 45,
            y: 60,
            title: "انتشار",
            desc: "•  بارگذاری کامل دوره‌های آموزشی سطوح VIP 2 و VIP 3",
            color: "gray",
        },
        {
            x: 63,
            y: 45,
            title: "انتشار",
            desc: "•  طراحی و انتشار نسخه‌های اولیه NFT برای کاربران یادگیرنده",
            color: "gray",
        },
        {
            x: 75,
            y: 45,
            title: "انتشار",
            desc: "•  تکمیل توسعه کیف پول داخلی با نمایش دارایی‌ها، امتیازها و مسیر رشد کاربران",
            color: "gray",
        },

    ];
    return (
        <>
            <div className="m-5">
                <p className="text-xl font-bold">

                    مرداد تا آبان ۱۴۰۴
                </p>
            </div>

            <TooltipProvider>
                <div className="w-full flex justify-center items-center overflow-x-auto">
                    <div className="p-4 relative min-w-[700px] w-[1700px] h-[200px] rounded-xl overflow-hidden shadow-md flex items-center justify-center">
                        {/* جاده SVG مارپیچ */}
                        <Road />

                        {/* نقاط روی مسیر */}
                        {roadmap.map((point, index) => (
                            <Tooltip key={index}>
                                <TooltipTrigger asChild>
                                    <div
                                        className={`absolute w-8 h-8  border-2 border-white rounded-full shadow-md hover:scale-110 transition-transform cursor-pointer flex items-center justify-center ${point.color === "green"
                                            ? "bg-green-500"
                                            : point.color === "orange"
                                                ? "bg-orange-500"
                                                : "bg-gray-500"
                                            }`}
                                        style={{
                                            left: `${point.x}%`,
                                            top: `${point.y}%`,
                                            transform: "translate(-50%, -50%)",
                                        }}
                                    ></div>
                                </TooltipTrigger>
                                <TooltipContent
                                    side={index % 2 > 0 ? "top" : "bottom"}
                                    className="bg-white text-black"
                                >
                                    <Card className="p-3 text-sm border-none shadow-md">
                                        {/* <h4 className="font-bold">{point.title}</h4> */}
                                        <p>{point.desc}</p>
                                    </Card>
                                </TooltipContent>
                            </Tooltip>
                        ))}
                    </div>
                </div>
            </TooltipProvider>
        </>
    );
}

export default Phase3;
