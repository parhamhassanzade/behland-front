"use client";

import { useEffect, useState } from "react";
import NewsBarClient from "./NewsBarClient";
import NewsColumn from "@/components/ui/News/NewsColumn";

export default function PostPage({ params }) {
    const [post, setPost] = useState(null);

    useEffect(() => {
        async function fetchPost() {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/api/posts`,
                { cache: "no-store" }
            );
            const posts = await res.json();
            setPost(posts.find((p) => p.slug === params.slug));
        }
        fetchPost();
    }, [params.slug]);

    const convertDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("fa-IR", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    };

    if (!post) return <div>در حال بارگذاری...</div>;

    return (
        <section className="grid grid-cols-1 md:grid-cols-3 mt-4 gap-5 p-4">
            {/* بخش سمت راست (۲ ستون در دسکتاپ) */}
            <div className="md:col-span-2">
                <div className="bg-white text-black p-6 rounded-lg shadow-md flex justify-between items-center">
                    <h1 className="text-xl font-bold mb-2">{post.title}</h1>
                    <p>{convertDate(post.createdAt)}</p>
                </div>
                <div className="rounded-lg h-fit w-full flex flex-col items-right">
                    <div className="mt-4 p-5 bg-white rounded-lg overflow-y-auto w-full flex flex-col">
                        <div
                            className="text-lg align-baseline text-justify"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />
                    </div>
                </div>
            </div>

            {/* ستون سمت چپ (۱ ستون در دسکتاپ) */}
            <div className="md:col-span-1">
                <NewsColumn />
            </div>
        </section>

    );
}
