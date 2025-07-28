import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { Card } from "@/components/ui/card";
import Road from "./Road";
function Phase1() {
    const roadmap = [
        { x: 2, y: 40, title: "شروع", desc: "طراحی مدل اقتصادی پروژه و مسیر رشد کاربران جذب اعضای اولیه تیم و تعیین نقش‌ها", color: "green" },
        { x: 10, y: 44, title: "طراحی", desc: "جذب اعضای اولیه تیم و تعیین نقش‌ها", color: "green" },
        { x: 20, y: 65, title: "توسعه", desc: "وسعه نسخه ابتدایی پلتفرم از طریق ربات تلگرام (نمونه اولیه یا MVP)", color: "green" },
        { x: 30, y: 35, title: "تست", desc: "امنیت و انتشار توکن BEHT روی بلاک‌چین TON", color: "orange" },
        { x: 45, y: 60, title: "انتشار", desc: "تست اولیه کیف پول کاربران و ثبت اطلاعات حساب‌ها", color: "gray" },
        { x: 63, y: 45, title: "انتشار", desc: "تدوین ساختار آموزشی سطوح VIP 0 و VIP1", color: "gray" },
        { x: 75, y: 45, title: "انتشار", desc: "طراحی نسخه اولیه سایت و آماده‌سازی زیرساخت‌های فروش", color: "gray" },
        { x: 85, y: 45, title: "انتشار", desc: "تهیه اسناد رسمی، پرزنتیشن‌ها و مطالب معرفی پروژه", color: "gray" },
        { x: 95, y: 55, title: "انتشار", desc: "•  آماده‌سازی تبلیغات مرحله اول فروش خصوصی توکن BEHT از طریق کانال «به‌تحلیل»", color: "gray" },
    ];
    return (
        <>
            <div className="m-5">
                <p className="text-xl font-bold">
                    فروردین تا ابتدای خرداد ۱
                </p>
            </div>
            <TooltipProvider className="bg-inherit">
                <div className="w-full flex  justify-center items-center overflow-x-auto">

                    <div className="p-5 relative min-w-[700px] w-[1700px] h-[200px] rounded-xl overflow-hidden shadow-md flex items-center justify-center">
                        {/* جاده SVG مارپیچ */}
                        <Road />

                        {/* نقاط روی مسیر */}
                        {roadmap.map((point, index) => (
                            <Tooltip key={index} className="bg-inherit">
                                <TooltipTrigger asChild >
                                    <div
                                        className={`absolute w-8 h-8  border-2 border-white rounded-full shadow-md hover:scale-110 transition-transform cursor-pointer flex items-center justify-center ${point.color === "green"
                                            ? "bg-[#75C696]"
                                            : point.color === "orange"
                                                ? "bg-[#DE3A31]"
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

export default Phase1;
