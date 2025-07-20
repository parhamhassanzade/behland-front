"use client";
import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";

async function getPosts() {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/api/posts`,
        {
            cache: "no-store",
        }
    );
    return res.json();
}

function NewsBar({ newsLimit = 5, mobile = false }) {
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
        <div className=" h-fit mb-5 mx-auto overflow-hidden">
            <div className="flex flex-col items-center mb-16 gap-5 text-[#2D1F44]">
                <h2 className=" md:text-4xl text-[#2D1F44] text-2xl font-bold tracking-tight text-center leading-tight">
                    اخبار و مقالات
                </h2>
                <p className="hidden md:block text-xl sm:text-xl font-base tracking-tight text-center leading-tight">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
            </div>
            {/* دسکتاپ و تبلت: اسلایدر */}
            {!mobile && (
                <div className="block">
                    <div className="embla__viewport" ref={emblaRef}>
                        <div className="embla__container flex">
                            {limitedPosts.map((item, idx) => (
                                <Link
                                    href={`/posts/${item.slug}`}
                                    passHref
                                    key={idx}
                                    className="embla__slide flex-shrink-0 w-[30%] mx-2 bg-[linear-gradient(125deg,_white_-40%,_#75C696_50%,_white_150%)] rounded-xl p-6 text-[#2D1F44] shadow-lg transition-transform duration-300 text-center align-middle"
                                >
                                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
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
