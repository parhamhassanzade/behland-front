"use client";
import Services from "@/components/ui/Services";
import Team from "@/components/ui/Team";
import RoadmapUI from "@/components/ui/RoadMap/RoadmapUI";
import WhyUs from "@/components/ui/WhyUs";
import MainBaner from "@/components/ui/MainBaner";
import NewsBarClient from "./posts/[slug]/NewsBarClient";
import Explain from "@/components/ui/Explain";
import ParentStatistic from "@/components/ui/Statistic/Index";
export default function Home() {

  return (
    <main className="w-full min-h-screen text-white relative">
      <MainBaner />
      <Explain />
      <Services />
      <Team />
      <RoadmapUI />
      <ParentStatistic />
      <NewsBarClient />
      <WhyUs />
    </main>
  );


}
