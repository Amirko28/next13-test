import { Post } from '@prisma/client';

interface Props {
    post: Post;
}

export const PostComponent = ({ post }: Props) => {
    return (
        <div className="flex h-24 w-1/3 flex-col justify-center rounded-md border-2 border-slate-500 bg-gray-700 px-3 py-2 text-lg text-white shadow-sm">
            {post.text}
        </div>
    );
};
