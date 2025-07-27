import React from "react";
import cow from "../../assets/Images/Cow.png";
import Image from "next/image";
function MainBaner() {
    return (
        <section className=" w-full h-fit flex justify-center items-center mt-15 ">
            <div className="relative w-8/8 h-fit flex flex-col justify-center items-center  ">
                <Image
                    src={cow}
                    alt="behland_banner"
                    className=" absolute left-[0%] z-10 object-cover "
                />
                <span className="text-[10em] font-black text-white ">
                    <span className="mx-2 drop-shadow-[-10px_10px_0px_rgba(255,0,0,0.7)]">
                        B
                    </span>
                    <span className="mx-2 drop-shadow-[-10px_10px_0px_rgba(0,0,0,0.7)]">E</span>
                    <span className="mx-2 drop-shadow-[-10px_10px_0px_rgba(0,0,0,0.7)]">H</span>
                    <span className="mx-2 drop-shadow-[-10px_10px_0px_rgba(59,130,246,0.7)]">
                        L
                    </span>
                    <span className="mx-2 drop-shadow-[-10px_10px_0px_rgba(0,0,0,0.7)]">A</span>
                    <span className="mx-2 drop-shadow-[-10px_10px_0px_rgba(0,0,0,0.7)]">N</span>
                    <span className="mx-2 drop-shadow-[-10px_10px_0px_rgba(249,115,22,0.7)]">
                        D
                    </span>
                </span>
                <p className="text-black">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit
                </p>
            </div>
        </section>
    );
}

export default MainBaner;
