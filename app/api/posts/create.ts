import { NextRequest, NextResponse } from 'next/server';
import { AddedPostSchema } from '@/api/model/post';

export const createPost = async (request: NextRequest) => {
    const data = await request.json();
    const post = AddedPostSchema.parse(data);

    const result = {
        id: 3,
        text: 'new'
    };

    return NextResponse.json({ data: result });
};
