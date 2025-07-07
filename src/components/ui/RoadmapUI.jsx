"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Card } from "@/components/ui/card";
import TwoWheelerOutlinedIcon from '@mui/icons-material/TwoWheelerOutlined';
const roadmap = [
  { x: 20, y: 100, title: "شروع", desc: "تحلیل نیازها" },
  { x: 150, y: 70, title: "طراحی", desc: "UI/UX وایرفریم" },
  { x: 300, y: 140, title: "توسعه", desc: "کدنویسی" },
  { x: 450, y: 70, title: "تست", desc: "بررسی نهایی" },
  { x: 600, y: 100, title: "انتشار", desc: "دیپلوی پروژه" },
  { x: 700, y: 140, title: "انتشار", desc: "دیپلوی پروژه" },
  { x: 750, y: 450, title: "انتشار", desc: "دیپلوی پروژه" },
];

export default function RoadmapUI() {
  return (
    <section>
      <div className="flex flex-col items-center mb-16 gap-5">
        <h2 className="text-4xl text-[#a1c3fd] sm:text-5xl font-bold tracking-tight text-center leading-tight">
          نقشه راه پروژه
        </h2>
        <p className="text-xl text-[#a1c3fd] sm:text-xl font-base tracking-tight text-center leading-tight">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      <TooltipProvider>
        <div className="w-full flex justify-center items-center overflow-x-auto">
          <div className="p-4 relative min-w-[700px] w-[1700px] h-[200px] rounded-xl overflow-hidden shadow-md flex items-center justify-center">
            {/* جاده SVG مارپیچ */}
            <svg
              viewBox="0 0 1700 200"
              className="absolute top-0 left-0 w-full h-full z-0"
            >
              <path
                d="M 0 100 Q 100 30, 200 100 T 400 100 T 600 100 T 800 100 T 1000 100 T 1200 100 T 1400 100 T 1600 100"
                fill="none"
                stroke="#4b5563"
                strokeWidth="8"
                strokeDasharray="12,8"
                strokeLinecap="round"
              />
            </svg>

            {/* نقاط روی مسیر */}
            {roadmap.map((point, index) => (
              <Tooltip key={index}>
                <TooltipTrigger asChild>
                  <div
                    className="absolute w-10 h-10 bg-[#e27a1a] border-2 border-white rounded-full shadow-md hover:scale-110 transition-transform cursor-pointer flex items-center justify-center"
                    style={{
                      left: `${point.x}px`,
                      top: `${point.y}px`,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <TwoWheelerOutlinedIcon sx={{ color: "green" }} />
                  </div>
                </TooltipTrigger>
                <TooltipContent side="top" className="bg-white text-black">
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
    </section>
  );
}
