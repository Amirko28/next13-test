import { z } from 'zod';

export const AddedPostSchema = z.object({
    text: z.string()
});

export const PostSchema = z.object({
    id: z.number(),
    text: z.string()
});
