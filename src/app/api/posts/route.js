// src/app/api/posts/route.js

import prisma from '@/lib/prisma';

const allowedOrigins = ['http://localhost:3000']; // ← یا دامنه واقعی‌ت رو بذار اینجا

export async function OPTIONS(req) {
    const origin = req.headers.get('origin');
    const isAllowed = allowedOrigins.includes(origin);

    return new Response(null, {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': isAllowed ? origin : '',
            'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
        },
    });
}

export async function GET(req) {
    const origin = req.headers.get('origin');

    const posts = await prisma.post.findMany({
        orderBy: { createdAt: 'desc' },
    });

    return new Response(JSON.stringify(posts), {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': allowedOrigins.includes(origin) ? origin : '',
        },
    });
}

export async function POST(req) {
    const origin = req.headers.get('origin');
    const body = await req.json();

    const post = await prisma.post.create({
        data: {
            title: body.title,
            slug: body.slug,
            content: body.content,
        },
    });

    return new Response(JSON.stringify(post), {
        status: 201,
        headers: {
            'Access-Control-Allow-Origin': allowedOrigins.includes(origin) ? origin : '',
        },
    });
}
