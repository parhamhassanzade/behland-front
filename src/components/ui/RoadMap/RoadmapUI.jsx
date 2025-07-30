"use client";

import { Fragment, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Phase1 from "./Phase1";
import Phase2 from "./Phase2";
import Phase3 from "./Phase3";
import { Card, CardContent } from "@/components/ui/card"
import { phases } from "@/util/Data";
import { Badge } from "@/components/ui/badge"
export default function RoadmapUI() {
  const [activeTab, setActiveTab] = useState(1);
  // const [fade, setFade] = useState(true);

  const handleTabChange = (value) => {

    setTimeout(() => {
      setActiveTab(value);

    }, 250); // duration of fade out
  };

  return (
    <section id="roadmap" className="pt-24">
      <div className="flex flex-col items-center mb-16 gap-5 text-[#2D1F44]">
        <h2 className="text-3xl text-[#2D1F44] sm:text-5xl font-bold tracking-tight text-center leading-tight">
          نقشه راه پروژه
        </h2>
        <p className="text-xl  sm:text-xl font-base tracking-tight text-center leading-tight font-bold">
          مروری بر مراحل کلیدی اهداف و برنامه‌ریزی پروژه‌ آموزشی ما{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        <div className="space-y-4">
          {phases.map((phase, index) => (
            <Card
              onClick={() => handleTabChange(phase.number)}
              key={index}
              className={`cursor-pointer !flex flex-row !items-center !justify-start mx-4 p-4 py-8 ${activeTab === phase.number
                ? "bg-[linear-gradient(125deg,_white_-40%,_#75C696_50%,_white_150%)]"
                : "bg-white text-[#4D4D4D]"
                }`}
            >
              <div className={`w-6 h-6 p-5 rounded-full flex items-center justify-center text-white text-sm font-bold ${activeTab === phase.number
                ? "border-2"
                : "bg-[#4D4D4D]/30 text-[#4D4D4D]"
                } font-bold`}>
                {phase.number}
              </div>
              <span className="text-right font-semibold">{phase.title}</span>
            </Card>
          ))}
        </div>
        <div className="space-y-4">
          {phases[activeTab - 1]?.tasks?.map((task, i) => (
            <div key={i} className="flex items-center justify-start w-full gap-2">
              <Badge className={`h-10 w-10 ${task?.status ? "bg-green-500" : "bg-gray-500"} rounded-full px-1 font-mono tabular-nums`}
                variant="destructive"></Badge>
              <Card className={` ${task?.status ? "bg-[#75C696]/20 border-green-400" : "bg-[#E0E0E04A] border-gray-600"} w-full text-[#4D4D4D] text-base`}>
                <CardContent className="p-4 text-right font-medium">{task.desc}</CardContent>
              </Card>
            </div>
          ))}
        </div>


      </div>
    </section >
  );
}
