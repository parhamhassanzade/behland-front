"use client";

import { useState } from "react";

import ReactEditor from "react-text-editor-kit";
export default function NewPostForm() {
    const [title, setTitle] = useState("");
    const [slug, setSlug] = useState("");
    const [content, setContent] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();

        const res = await fetch(`/api/posts`, {
            method: "POST",
            body: JSON.stringify({ title, slug, content }),
            headers: { "Content-Type": "application/json" },
        });

        if (res.ok) {
            alert("پست ثبت شد!");
            setTitle("");
            setSlug("");
            setContent("");
        }
    }

    const [value, setValue] = useState("");

    const handleChange = (value) => {
        console.log("value", value, typeof value);
        setValue(value);
        setContent(value)
    };

    const image_handler = async (e) => {
        let requestObj = {
            method: "POST",
            url: "your-api-end-point",
            headers: {}, // attach required headers
        };
        let formData = new FormData();
        formData.append("image", e.image);
        formData.append("width", "600");
        requestObj["data"] = formData;
        try {
            let results = await axios(requestObj);
            if (results.data.code === 200) {
                return results.data.image_path;
            } else {
                return "";
            }
        } catch (error) {
            return "";
        }
    };

    const get_editor_ref = (value) => { };

    return (
        <form onSubmit={handleSubmit} className="p-4 space-y-3">
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="عنوان"
                className="border p-2 w-full rounded-lg"
            />
            <input
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                placeholder="slug"
                className="border p-2 w-full rounded-lg"
            />
            <ReactEditor
                value={value}
                getEditorRef={get_editor_ref} //if you want to get ref of editor
                onChange={handleChange}
                mainProps={{ className: "red" }} // these props with b used to most parent div of the editor
                placeholder="محتوای خود را اینجا بنویسید..."
            // image_handler={image_handler} // if you want to upload image on your server
            />
            {/* <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="محتوا"
                className="border p-2 w-full"
            /> */}

            <button
                className="bg-blue-600 text-white px-4 py-2 rounded"
                type="submit"
            >
                ارسال
            </button>
        </form>
    );
}



