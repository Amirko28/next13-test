import { db } from '@/api/db';
import { NextResponse } from 'next/server';

export const revalidate = 10;

export const getPosts = async () =>
    await db.post.findMany({
        orderBy: {
            id: 'desc'
        }
    });

export const getAllPosts = async () => {
    const data = await getPosts();
    return NextResponse.json({ data });
};
