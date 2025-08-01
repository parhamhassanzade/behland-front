"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import wire from "@/assets/Images/wire.png";
import { Badge } from "@/components/ui/badge";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

async function getPosts() {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/api/posts`,
        { cache: "no-store" }
    );
    return res.json();
}

function NewsBar({ newsLimit = 9, title }) {
    const [posts, setPosts] = useState([]);
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        async function fetchPosts() {
            const data = await getPosts();
            setPosts(data);
        }
        fetchPosts();
    }, []);

    const limitedPosts = posts.slice(0, newsLimit);
    const slideCount = Math.ceil(limitedPosts.length / 2);

    const handlePrev = () => {
        setCurrent((prev) => (prev === 0 ? slideCount - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrent((prev) => (prev === slideCount - 1 ? 0 : prev + 1));
    };

    const getSlidePosts = () => {
        const start = current * 2;
        return limitedPosts.slice(start, start + 2);
    };

    return (
        <div
            style={{ backgroundImage: `url(${wire.src})` }}
            className="h-fit mt-24 bg-[#F3F6EB] p-8 sm:p-24 mx-auto overflow-hidden"
        >
            <div className="flex flex-col items-center mb-16 gap-5 text-[#2D1F44]">
                <h2 className="md:text-4xl text-[#2D1F44] text-2xl font-bold tracking-tight text-center leading-tight">
                    {title || "اخبار و مقالات"}
                </h2>
                <p className="block text-xl sm:text-xl font-base tracking-tight text-center leading-tight">
                    جدیدترین اخبار و مطالب تخصصی حوزه آموزش آنلاین بهلند را با ما دنبال کنید
                </p>
            </div>
            {/* حالت موبایل: اسکرول افقی با دکمه‌های قبلی/بعدی */}
            <div className="relative block md:hidden w-full">
                <button
                    onClick={() => {
                        document.getElementById("mobile-scroll")?.scrollBy({ left: -300, behavior: "smooth" });
                    }}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow"
                >
                    <NavigateNextIcon className="text-black rotate-180" />
                </button>

                <div
                    id="mobile-scroll"
                    className="flex gap-4 w-full overflow-x-auto scroll-smooth scrollbar-hide px-6"
                >
                    {limitedPosts.map((item) => (
                        <Link
                            href={`/posts/${item.slug}`}
                            key={item.slug}
                            className="flex-shrink-0 text-black drop-shadow-xl h-40 w-[22em] rounded-lg bg-white p-3 flex flex-col justify-between"
                        >
                            <header className="flex items-center p-2 gap-4">
                                <Badge className="h-4 w-4 bg-green-500 rounded-full" variant="destructive" />
                                <p className="font-bold text-lg truncate">{item.title}</p>
                            </header>
                            <span
                                className="block my-2 text-sm"
                                dangerouslySetInnerHTML={{
                                    __html:
                                        item.content
                                            .replace(/<[^>]+>/g, " ")
                                            .split(/\s+/)
                                            .slice(0, 10)
                                            .join(" ") +
                                        (item.content.split(/\s+/).length > 50 ? "..." : ""),
                                }}
                            />
                            <hr className="mt-2" />
                            <div className="flex items-center justify-between p-2">
                                <div className="flex items-center gap-3">
                                    <CalendarMonthIcon sx={{ size: "24px" }} />
                                    <p className="text-sm">
                                        {item.createdAt
                                            ? new Date(item.createdAt).toLocaleDateString("fa-IR", {
                                                year: "numeric",
                                                month: "long",
                                                day: "numeric",
                                                weekday: "long",
                                            })
                                            : "تاریخ نامشخص"}
                                    </p>
                                </div>
                                <p className="text-sm text-[#79C699] flex items-center gap-1">
                                    مشاهده بیشتر
                                    <NavigateBeforeIcon />
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>

                <button
                    onClick={() => {
                        document.getElementById("mobile-scroll")?.scrollBy({ left: 300, behavior: "smooth" });
                    }}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow"
                >
                    <NavigateNextIcon className="text-black " />
                </button>
            </div>


            {/* حالت دسکتاپ: اسلایدر با دکمه‌ها */}
            {limitedPosts.length > 0 && (
                <div className="hidden md:flex flex-col items-center justify-center">
                    <div className="flex items-center justify-between gap-4 w-full h-40">
                        <button
                            onClick={handlePrev}
                            className="p-2 rounded-full bg-white shadow hover:bg-gray-100 transition"
                            aria-label="قبلی"
                        >
                            <NavigateNextIcon className="text-black" />
                        </button>

                        <div className="flex gap-4 items-center justify-center">
                            {getSlidePosts().map((item) => (
                                <Link
                                    href={`/posts/${item.slug}`}
                                    key={item.slug}
                                    className="flex-shrink-0 text-black drop-shadow-xl h-40 w-[22em] rounded-lg bg-white p-3 flex flex-col justify-between"
                                >
                                    <header className="flex items-center p-2 gap-4">
                                        <Badge className="h-4 w-4 bg-green-500 rounded-full" variant="destructive" />
                                        <p className="font-bold text-lg truncate">{item.title}</p>
                                    </header>
                                    <span
                                        className="block my-2 text-sm"
                                        dangerouslySetInnerHTML={{
                                            __html:
                                                item.content
                                                    .replace(/<[^>]+>/g, " ")
                                                    .split(/\s+/)
                                                    .slice(0, 10)
                                                    .join(" ") +
                                                (item.content.split(/\s+/).length > 50 ? "..." : ""),
                                        }}
                                    />
                                    <hr className="mt-2" />
                                    <div className="flex items-center justify-between p-2">
                                        <div className="flex items-center gap-3">
                                            <CalendarMonthIcon sx={{ size: "24px" }} />
                                            <p className="text-sm">
                                                {item.createdAt
                                                    ? new Date(item.createdAt).toLocaleDateString("fa-IR", {
                                                        year: "numeric",
                                                        month: "long",
                                                        day: "numeric",
                                                        weekday: "long",
                                                    })
                                                    : "تاریخ نامشخص"}
                                            </p>
                                        </div>
                                        <p className="text-sm text-[#79C699] flex items-center gap-1">
                                            مشاهده بیشتر
                                            <NavigateBeforeIcon />
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        <button
                            onClick={handleNext}
                            className="p-2 rounded-full bg-white shadow hover:bg-gray-100 transition"
                            aria-label="بعدی"
                        >
                            <NavigateNextIcon className="text-black rotate-180" />
                        </button>
                    </div>

                    {/* شماره اسلاید */}
                    <div className="mt-4 flex gap-1">
                        {Array.from({ length: slideCount }).map((_, idx) => (
                            <span
                                key={idx}
                                className={`w-2 h-2 rounded-full ${idx === current ? "bg-[#79C699]" : "bg-gray-300"}`}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default NewsBar;
