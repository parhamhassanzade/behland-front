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
      <div className="relative w-full h-fit">
        <Image
          src={Banner}
          alt="behland_banner"
          className="w-full h-full object-cover brightness-90"
        />
      </div>
      <div className="my-4"></div>

      {/* text section */}
      <div className="relative w-full h-fit overflow-hidden p-2 md:p-16 hidden md:block">
        {/* لایه نور (نور سمت چپ) */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4/12 h-3/12 bg-white/40 rounded blur-[120px] opacity-80" />

        <div className="flex justify-between items-center text-white w-full mt-6 ">
          <div className="w-3/6">
            <Image src={charectors} alt="behnoods" />
          </div>
          <div className="w-3/6 h-fit relative ">
            <ColumnBlue CusStyle={"h-full -z-3"} />
            <h2 className="z-1 w-full flex justify-center items-center p-3 text-lg font-bold">
              ماجراجویی مالی تو اینجاست ...
            </h2>
            <p className="z-1 w-full flex justify-center items-center text-justify p-2 text-sm">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
          </div>
        </div>
      </div>

      {/* text section */}
      <div className="relative w-full h-fit overflow-hidden p-2 md:p-16   md:hidden">
        {/* لایه نور (نور سمت چپ) */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2/12 h-1/12 bg-white/40 rounded blur-[120px] opacity-80" />

        <div className=" text-white w-full mt-6 ">
          <div className="w-full h-fit relative ">
            <ColumnBlue CusStyle={"h-full -z-3"} />
            <h3 className="z-1 w-full flex justify-center items-center p-3 text-base font-bold">
              ماجراجویی مالی تو اینجاست ...
            </h3>
            <p className="z-1 w-full flex justify-center items-center text-justify p-2 text-sm">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
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
      <WhyUs />
    </main>
  );


}
