"use client";

import { useState, useEffect } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import MenuBar from "@/components/ui/TextEditor/Menu-bar";
import TextAlign from "@tiptap/extension-text-align";

export default function NewPostForm() {
    const [title, setTitle] = useState("");
    const [slug, setSlug] = useState("");
    const [content, setContent] = useState("");

    const editor = useEditor({
        extensions: [
            StarterKit.configure({
                bulletList: {
                    HTMLAttributes: {
                        class: "list-disc ml-3",
                    },
                },
                orderedList: {
                    HTMLAttributes: {
                        class: "list-decimal ml-3",
                    },
                },
            }),
            TextAlign.configure({
                types: ["heading", "paragraph"],
            }),
        ],

        content: "<p>Hello World! 🌎️</p>",
        editorProps: {
            attributes: {
                class:
                    "min-h-[300px] p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",
            },
        },
        onUpdate: ({ editor }) => {
            setContent(editor.getHTML());
        },
        // Don't render immediately on the server to avoid SSR issues
        immediatelyRender: false,
    });

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
            // editor?.commands.setContent("");
        }
    }

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

            <div className="border rounded-lg p-2">
                <MenuBar editor={editor} />
                <EditorContent editor={editor} />
            </div>

            <button
                className="bg-blue-600 text-white px-4 py-2 rounded"
                type="submit"
            >
                ارسال
            </button>
        </form>
    );
}
