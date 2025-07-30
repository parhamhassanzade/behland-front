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
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <main className="w-full min-h-screen text-white relative">
      {/* Scroll to top button */}
      {showScroll && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{
            position: "fixed",
            bottom: 32,
            right: 32,
            zIndex: 100,
            background: "transparent",
            border: "none",
            cursor: "pointer",
          }}
          aria-label="Scroll to top"
        >
          <ArrowCircleUpIcon sx={{ color: "green", fontSize: 48 }} />
        </button>
      )}

      {/* banner section */}
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
