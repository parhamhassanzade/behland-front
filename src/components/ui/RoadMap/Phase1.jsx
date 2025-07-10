
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { Card } from "@/components/ui/card";
import Road from "../Road";
function Phase1() {
    const roadmap = [
        { x: 2, y: 40, title: "شروع", desc: "تحلیل نیازها", color: "green" },
        { x: 10, y: 44, title: "طراحی", desc: "UI/UX وایرفریم", color: "green" },
        { x: 20, y: 65, title: "توسعه", desc: "کدنویسی", color: "green" },
        { x: 30, y: 35, title: "تست", desc: "بررسی نهایی", color: "orange" },
        { x: 45, y: 60, title: "انتشار", desc: "دیپلوی پروژه", color: "gray" },
        { x: 60, y: 55, title: "انتشار", desc: "دیپلوی پروژه", color: "gray" },
        { x: 75, y: 35, title: "انتشار", desc: "دیپلوی پروژه", color: "gray" },
    ];
    return (
        <>

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

                                        className={`absolute w-5 h-5  border-2 border-white rounded-full shadow-md hover:scale-110 transition-transform cursor-pointer flex items-center justify-center ${point.color === "green" ? "bg-green-500" : point.color === "orange" ? "bg-orange-500" : "bg-gray-500"}`}
                                        style={{
                                            left: `${point.x}%`,
                                            top: `${point.y}%`,
                                            transform: "translate(-50%, -50%)",
                                        }}
                                    >

                                    </div>
                                </TooltipTrigger>
                                <TooltipContent side={index % 2 > 0 ? "top" : "bottom"} className="bg-white text-black">
                                    <Card className="p-3 text-sm border-none shadow-md">
                                        <h4 className="font-bold">{point.title}</h4>
                                        <p>{point.desc}</p>
                                    </Card>
                                </TooltipContent>
                            </Tooltip>
                        ))}
                    </div>
                </div>
            </TooltipProvider>
        </>
    )
}

export default Phase1