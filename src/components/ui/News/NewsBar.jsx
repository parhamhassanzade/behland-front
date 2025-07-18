'use client';
import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from 'embla-carousel-autoplay'
import Link from "next/link";


async function getPosts() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/posts`, {
        cache: 'no-store',
    });
    return res.json();
}


function NewsBar() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        async function fetchPosts() {
            const data = await getPosts();
            setPosts(data);
        }
        fetchPosts();
    }, []);

    console.log("Posts:", posts);

    const options = {
        loop: true,
        speed: 10,
        align: "center",
        slidesToScroll: 1,
        dragFree: true,
    };
    const [emblaRef] = useEmblaCarousel(options, [Autoplay()]);

    return (
        <div className="w-full mb-5 mx-auto overflow-hidden">
            <div className="flex flex-col items-center mb-16 gap-5 text-[#2D1F44]">
                <h2 className="text-4xl text-[#2D1F44] sm:text-5xl font-bold tracking-tight text-center leading-tight">
                    اخبار و مقالات
                </h2>
                <p className="text-xl  sm:text-xl font-base tracking-tight text-center leading-tight">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
            </div>
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container flex">
                    {posts.map((item, idx) => (
                        <Link href={`/posts/${item.slug}`}
                            passHref
                            key={idx}
                            className="embla__slide flex-shrink-0 w-[50%] mx-2 bg-gradient-to-br from-[#263b4d] to-[#151515] rounded-xl p-6 text-white shadow-lg transition-transform duration-300"
                        >
                            <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                            <p className="text-sm">{item.desc}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default NewsBar;
