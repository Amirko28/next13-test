import { NextResponse } from 'next/server';

export const revalidate = 10;

export const getAllPosts = async () => {
    const data = [{id: 1, text: 'hello'}, {id: 2, text: 'world'}]
    return NextResponse.json({ data });
};
