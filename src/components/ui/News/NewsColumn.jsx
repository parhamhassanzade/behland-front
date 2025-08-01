"use client";
import React, { useEffect, useState } from "react";
async function getPosts() {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/api/posts`,
        { cache: "no-store" }
    );
    return res.json();
}

export default function NewsColumn() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchPosts() {
            const data = await getPosts();
            setPosts(data);
        }
        fetchPosts();
    }, []);
    return (
        <div className="h-fit rounded-lg bg-[#F3F6EB] p-4 mx-auto overflow-hidden">
            <div className="flex  items-center justify-center mb-16 gap-5 text-[#2D1F44]">
                <h2 className="text-2xl  md:text-2xl text-[#2D1F44] font-bold tracking-tight text-center leading-tight">
                    اخبار و مقالات
                </h2>
            </div>
            <div className="w-full">
                {posts?.length > 0 ? (
                    posts?.map((post) => (
                        <div
                            key={post.id}
                            className="bg-white text-black p-4 rounded-lg shadow-md mb-4 w-full"
                        >
                            <div className="flex items-center justify-between">

                                <h3 className="text-lg font-bold truncate">{post.title}</h3>
                                <p className="text-sm text-gray-600">
                                    {new Date(post.createdAt).toLocaleDateString("fa-IR", {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    })}
                                </p>
                            </div>
                            <a
                                href={`/posts/${post.slug}`}
                                className="text-blue-500 hover:underline mt-2 inline-block"
                            >
                                ادامه مطلب
                            </a>
                        </div>
                    ))
                ) : (
                    <p>در حال بارگذاری اخبار...</p>
                )}
            </div>
        </div>
    );
}
