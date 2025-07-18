'use client';

import { useState } from 'react';

export default function NewPostForm() {
    const [title, setTitle] = useState('');
    const [slug, setSlug] = useState('');
    const [content, setContent] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();

        const res = await fetch(`/api/posts`, {
            method: 'POST',
            body: JSON.stringify({ title, slug, content }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (res.ok) {
            alert('پست ثبت شد!');
            setTitle('');
            setSlug('');
            setContent('');
        }
    }

    return (
        <form onSubmit={handleSubmit} className="p-4 space-y-3">
            <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="عنوان" className="border p-2 w-full" />
            <input value={slug} onChange={(e) => setSlug(e.target.value)} placeholder="slug" className="border p-2 w-full" />
            <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="محتوا" className="border p-2 w-full" />
            <button className="bg-blue-600 text-white px-4 py-2 rounded" type="submit">ارسال</button>
        </form>
    );
}
