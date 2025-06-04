import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "@/components/ui/button";
import BImage from "../../src/assets/images/Behnood.png";
export default function Home() {
  return (
    <main className="flex h-screen items-start justify-end relative">
      {/* text area */}

      <div
        className="h-3/6 w-15 absolute right-25 bottom-40 -z-8 bg-gradient-to-b from-[#4c7798] to-[#263b4d]"
      ></div>
      <div className="flex  items-end justify-center w-full h-full absolute bottom-20 left-90 -z-5">
        <div className="flex  items-center justify-center h-5/6">
          <h1
            className=" text-end p-0 m-0 font-extrabold tracking-tighter"
            style={{
              fontSize: "120px",
              background: "linear-gradient(to right, #888, #fff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              letterSpacing: "0.01em",
              fontWeight: 900,
            }}
          >
            به لند
          </h1>
        </div>
      </div>
      <div className="flex  items-end justify-center w-full h-full absolute -bottom-20 left-60 -z-5">
        <div className="flex  items-center justify-center h-5/6">
          <h1
            className=" text-end p-0 m-0 font-extrabold tracking-tighter"
            style={{
              fontSize: "150px",
              background: "linear-gradient(to right, #888, #fff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              letterSpacing: "-0.02em",
              fontWeight: 800,
            }}
          >
            EHLAND
          </h1>
        </div>
      </div>
      {/* image area */}
      <div className="flex items-center justify-center h-full w-3/5 z-1">
        <Image
          src={BImage}
          alt="Behland"
          style={{ width: "100%", height: "auto", objectFit: "contain" }}
          sizes="(min-width: 1024px) 60vw, 100vw"
        />
      </div>
    </main>
  );
}
