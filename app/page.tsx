import { AddPost } from '@/components/add-post';
import { PostList } from '@/components/post-list';

const Home = () => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-start gap-12 p-24">
            <AddPost />
            {/* @ts-expect-error Async Server Component */}
            <PostList />
        </main>
    );
};
export default Home;
