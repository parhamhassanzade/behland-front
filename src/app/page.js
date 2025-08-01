"use client";
import Services from "@/components/ui/Services";
import Team from "@/components/ui/Team";
import RoadmapUI from "@/components/ui/RoadMap/RoadmapUI";
import WhyUs from "@/components/ui/WhyUs";
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import { useEffect, useState } from "react";
import MainBaner from "@/components/ui/MainBaner";
import NewsBarClient from "./posts/[slug]/NewsBarClient";
import Explain from "@/components/ui/Explain";
export default function Home() {

  return (
    <main className="w-full min-h-screen text-white relative">
      <MainBaner />
      <Explain />
      <Services />
      <Team />
      <RoadmapUI />
      <NewsBarClient />
      <WhyUs />
    </main>
  );


}
