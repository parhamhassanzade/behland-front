"use client";

import NewsBar from "@/components/ui/News/NewsBar";

// import dynamic from "next/dynamic";
// const NewsBar = dynamic(() => import("@/components/ui/News/NewsBar"), { ssr: false });

export default function NewsBarClient(props) {
    return <NewsBar {...props} />;
}