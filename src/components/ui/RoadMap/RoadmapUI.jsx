"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Phase1 from "./Phase1";
import Phase2 from "./Phase2";

export default function RoadmapUI() {
  const [activeTab, setActiveTab] = useState("phase1");
  const [fade, setFade] = useState(true);

  const handleTabChange = (value) => {
    setFade(false);
    setTimeout(() => {
      setActiveTab(value);
      setFade(true);
    }, 250); // duration of fade out
  };

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
      <Tabs value={activeTab} className="w-full text-white ">
        <TabsList className="cursor-pointer gap-3 w-full flex  justify-center items-center px-5 mb-5">
          <div className="flex items-center gap-2 overflow-x-auto">
            <TabsTrigger
              className="cursor-pointer border-b-4 font-bold rounded-3xl p-2 border-gray focus:text-blue-400 flex flex-col items-center bg-gradient-to-br from-[#4b5d3a]  to-[#0a2540]"
              value="phase1"
              onClick={() => handleTabChange("phase1")}
            >
              فاز ۱<span>اغاز داستان بهلند</span>
            </TabsTrigger>
            <TabsTrigger
              className="cursor-pointer border-b-4 font-bold rounded-3xl p-2 border-gray focus:text-blue-400 flex flex-col items-center bg-gradient-to-br from-[#4b5d3a]  to-[#0a2540]"
              value="Phase2"
              onClick={() => handleTabChange("Phase2")}
            >
              فاز ۲
              <span>اغاز داستان بهلند</span>
            </TabsTrigger>
            <TabsTrigger
              className="cursor-pointer border-b-4 font-bold rounded-3xl p-2 border-gray focus:text-blue-400 flex flex-col items-center bg-gradient-to-br from-[#4b5d3a]  to-[#0a2540]"
              value="Phase2"
            >
              فاز ۳
              <span>اغاز داستان بهلند</span>
            </TabsTrigger>
            <TabsTrigger
              className="cursor-pointer border-b-4 font-bold rounded-3xl p-2 border-gray focus:text-blue-400 flex flex-col items-center bg-gradient-to-br from-[#4b5d3a]  to-[#0a2540]"
              value="Phase2"
            >
              فاز ۴
              <span>اغاز داستان بهلند</span>
            </TabsTrigger>

            <TabsTrigger
              className="cursor-pointer border-b-4 font-bold rounded-3xl p-2 border-gray focus:text-blue-400 flex flex-col items-center bg-gradient-to-br from-[#4b5d3a]  to-[#0a2540]"
              value="Phase2"
            >
              فاز ۵
              <span>اغاز داستان بهلند</span>
            </TabsTrigger>
          </div>
        </TabsList>
        <TabsContent value="phase1">
          <div
            className={`transition-opacity duration-400 ${fade ? "opacity-100" : "opacity-0"
              }`}
          >
            <Phase1 />
          </div>
        </TabsContent>
        <TabsContent value="Phase2">
          <div
            className={`transition-opacity duration-400 ${fade ? "opacity-100" : "opacity-0"
              }`}
          >
            <Phase2 />
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}
