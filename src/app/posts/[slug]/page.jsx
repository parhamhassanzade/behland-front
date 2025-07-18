import NewsBar from "@/components/ui/News/NewsBar";

async function getPost(slug) {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/api/posts`,
        {
            cache: "no-store",
        }
    );
    const posts = await res.json();
    return posts.find((p) => p.slug === slug);
}

export async function generateMetadata({ params }) {
    const post = await getPost(params.slug);
    console.log("Post metadata:", post);

    if (!post) {
        return { title: "پست پیدا نشد" };
    }

    return {
        title: post.title,
        description: post.content,
        createAt: post.createdAt,
    };
}

export default async function PostPage({ params }) {
    const post = await getPost(params.slug);

    if (!post) return <div>پست پیدا نشد</div>;


    const convertDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("fa-IR", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        });


    };

    return (
        <section>
            <div className="p-4 ">
                <div className="bg-white text-black p-6 rounded-lg shadow-md flex justify-between items-center">
                    <h1 className="text-xl font-bold mb-2">{post.title}</h1>
                    <p>{convertDate(post.createdAt)}</p>
                </div>
                <div className="mt-4 p-4  rounded-lg h-screen overflow-y-auto w-full flex flex-col items-center">
                    <div className="mt-4 p-5 bg-white rounded-lg  overflow-y-auto w-4/6 flex flex-col ">

                        <p className="font-bold text-2xl text-start align-baseline">{post.content}</p>
                    </div>
                </div>
            </div>
            <NewsBar />
        </section>
    );
}
