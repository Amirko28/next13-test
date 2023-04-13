import { db } from '@/api/db';
import { NextResponse } from 'next/server';

export const revalidate = 10;

export const getAllPosts = async () => {
    const data = await db.post.findMany();
    return NextResponse.json({ data });
};
