import { getPosts } from '@/api/posts/getAll';
import { PostComponent } from '../post';

export const PostList = async () => {
    const posts = await getPosts();
    return (
        <div className="flex min-h-screen w-full flex-col items-center justify-start gap-4">
            {posts.map((post) => (
                <PostComponent key={post.id} post={post} />
            ))}
        </div>
    );
};
