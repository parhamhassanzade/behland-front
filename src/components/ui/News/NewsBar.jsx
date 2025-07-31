"use client";
import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import wire from "@/assets/Images/wire.png";
import { Badge } from "@/components/ui/badge";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
// Assuming you have a wire image for background
async function getPosts() {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/api/posts`,
        {
            cache: "no-store",
        }
    );
    return res.json();
}

function NewsBar({ newsLimit = 5, mobile = false, title }) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchPosts() {
            const data = await getPosts();
            setPosts(data);
        }
        fetchPosts();
    }, []);

    const limitedPosts = posts.slice(0, newsLimit);

    const options = {
        loop: true,
        speed: 10,
        align: "center",
        slidesToScroll: 1,
        dragFree: true,
    };
    const [emblaRef] = useEmblaCarousel(options, [Autoplay()]);

    return (
        <div
            style={{ backgroundImage: `url(${wire.src})` }}
            className=" h-fit mt-24 bg-[#F3F6EB] p-24 mx-auto overflow-hidden"
        >
            <div className="flex flex-col items-center mb-16 gap-5 text-[#2D1F44]">
                <h2 className=" md:text-4xl text-[#2D1F44] text-2xl font-bold tracking-tight text-center leading-tight">
                    {title || " اخبار و مقالات"}
                </h2>
                <p className="hidden md:block text-xl sm:text-xl font-base tracking-tight text-center leading-tight">
                    جدیدترین اخبار و مطالب تخصصی حوزه آموزش آنلاین بهلند را با ما دنبال
                    کنید{" "}
                </p>
            </div>

            {!mobile && (
                <div className="block  !w-fit">
                    <div className="embla__viewport  w-full" ref={emblaRef}>
                        <div className="embla__container flex gap-5 w-full">
                            {limitedPosts.map((item, idx) => (
                                <Link
                                    href={`/posts/${item.slug}`}
                                    passHref
                                    key={idx}
                                    className="embla__slide text-black drop-shadow-xl h-32 w-[20em] rounded-lg bg-white p-3"
                                >
                                    <header className="flex items-center p-2 gap-4">
                                        <Badge
                                            className={`h-4 w-4 ${true ? "bg-green-500" : "bg-gray-500"
                                                } rounded-full  font-mono tabular-nums`}
                                            variant="destructive"
                                        ></Badge>
                                        <p className="font-bold text-lg truncate">{item.title}</p>{" "}
                                    </header>
                                    <span
                                        className=""
                                        dangerouslySetInnerHTML={{
                                            __html:
                                                item.content
                                                    .replace(/<[^>]+>/g, " ") // Remove HTML tags
                                                    .split(/\s+/) // Split into words
                                                    .slice(0, 5) // Take first 50 words
                                                    .join(" ") +
                                                (item.content.split(/\s+/).length > 50 ? "..." : ""),
                                        }}
                                    />
                                    <hr className="mt-2" />
                                    <div className="flex items-center justify-between p-2">
                                        <div className="flex items-center gap-3">
                                            <CalendarMonthIcon sx={{ size: "24px" }} />
                                            <p className="text-sm ">
                                                {item.createdAt
                                                    ? new Date(item.createdAt).toLocaleDateString(
                                                        "fa-IR",
                                                        {
                                                            year: "numeric",
                                                            month: "long",
                                                            day: "numeric",
                                                            weekday: "long",
                                                        }
                                                    )
                                                    : "تاریخ نامشخص"}
                                            </p>
                                        </div>
                                        <p className="text-sm text-[#79C699]">
                                            مشاهده بیشتر
                                            <NavigateBeforeIcon />
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            )}
            {/* موبایل: لیست ساده */}
            {mobile && (
                <div className="block">
                    <div className="flex flex-col gap-4">
                        {limitedPosts.map((item, idx) => (
                            <Link
                                href={`/posts/${item.slug}`}
                                passHref
                                key={idx}
                                className="bg-[linear-gradient(125deg,_white_-40%,_#75C696_50%,_white_150%)] rounded-xl p-4 text-[#2D1F44] shadow-lg text-center"
                            >
                                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default NewsBar;
