"use client";
import Image from "next/image";
import Banner from "../../src/assets/Images/banner.jpg";
import charectors from "../../src/assets/Images/character.png";
import ColumnBlue from "@/components/ui/ColumnBlue";
import Services from "@/components/ui/Services";
import Team from "@/components/ui/Team";
import RoadmapUI from "@/components/ui/RoadMap/RoadmapUI";
import WhyUs from "@/components/ui/WhyUs";
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import { useEffect, useState } from "react";
const NewsBar = dynamic(() => import("@/components/ui/News/NewsBar"), { ssr: false });
import MainBaner from "@/components/ui/MainBaner";
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
      <div className="my-4"></div>

      {/* text section */}
      <div className="relative w-full h-fit overflow-hidden p-2 md:p-16 hidden md:block">
        {/* لایه نور (نور سمت چپ) */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4/12 h-3/12 bg-white/40 rounded blur-[120px] opacity-80" />

        <div className="flex justify-between items-center text-white w-full mt-6 ">
          <div className="w-3/6">
            <Image src={charectors} alt="behnoods" />
          </div>
          <div className="w-3/6 h-fit relative text-[#2D1F44] ">
            <ColumnBlue CusStyle={"h-full -z-3"} />
            <h2 className="z-1 w-full flex justify-center items-center p-3 text-xl font-bold">
              ماجراجویی مالی تو با بهلند معنی میشه...
            </h2>
            <p className="z-1 w-full flex justify-center items-center text-justify p-2 text-base">

              اینجا سرزمینی واقعی برای یادگیریِ, رشد, کسب درآمد و ورود به بازار در حوزه دانش مالی است.
              ما فقط یک پلتفرم آموزشی طراحی نکردیم, بلکه مسیری بازیگونه و مرحله به مرحله آماده کردیم که هر فرد, مثل یک ماجراجو مرحله به مرحله رشد میکنه, آموزش می بینه و با چالش ها و ماموریت های جذاب به یک تحلیلگر حرفه ای تبدیل میشه.
              هرگام تو رو به یک مهارت واقعی نزدیک تر می کنه  و در نهایت میتونی از آموخته هات درآمد داشته باشی.
              مسیر آموزش به تنهایی خسته کننده است؛ اما شخصیت های بهلند کنار تو هستند تا مسیر آموزش رو مفرح تر و مفهومی تر طی کنی.
              اگر تو هم به عنوان عضوی از جامعه رو به رشد که آینده مالیش رو خودش میسازه آماده ای تا ماجراجویی مالیت رو شروع کنی و وارد بهلند بشی تبریک میگم؛ همین حالا وقتشه.

            </p>
          </div>
        </div>
      </div>

      {/* text section */}
      <div className="relative w-full h-fit overflow-hidden p-2 md:p-16   md:hidden">
        {/* لایه نور (نور سمت چپ) */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2/12 h-1/12 bg-white/40 rounded blur-[120px] opacity-80" />

        <div className=" text-[#2D1F44]   w-full mt-6 ">
          <div className="w-full h-fit relative ">
            <ColumnBlue CusStyle={"h-full -z-3"} />
            <h3 className="z-1 w-full flex justify-center items-center p-3 text-base font-bold">
              ماجراجویی مالی تو با بهلند معنی میشه...
            </h3>
            <p className="z-1 w-full flex justify-center items-center text-justify p-2 text-base">

              اینجا سرزمینی واقعی برای یادگیریِ, رشد, کسب درآمد و ورود به بازار در حوزه دانش مالی است.
              ما فقط یک پلتفرم آموزشی طراحی نکردیم, بلکه مسیری بازیگونه و مرحله به مرحله آماده کردیم که هر فرد, مثل یک ماجراجو مرحله به مرحله رشد میکنه, آموزش می بینه و با چالش ها و ماموریت های جذاب به یک تحلیلگر حرفه ای تبدیل میشه.
              هرگام تو رو به یک مهارت واقعی نزدیک تر می کنه  و در نهایت میتونی از آموخته هات درآمد داشته باشی.
              مسیر آموزش به تنهایی خسته کننده است؛ اما شخصیت های بهلند کنار تو هستند تا مسیر آموزش رو مفرح تر و مفهومی تر طی کنی.
              اگر تو هم به عنوان عضوی از جامعه رو به رشد که آینده مالیش رو خودش میسازه آماده ای تا ماجراجویی مالیت رو شروع کنی و وارد بهلند بشی تبریک میگم؛ همین حالا وقتشه.

            </p>
          </div>
          <div className="w-full">
            <Image src={charectors} alt="behnoods" />
          </div>
        </div>
      </div>
      <Services />
      <Team />
      <RoadmapUI />
      <NewsBar />
      <WhyUs />
    </main>
  );


}
