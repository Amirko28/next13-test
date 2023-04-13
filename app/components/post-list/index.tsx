const getData = async () => {
    // const res = await fetch('http://localhost:3000/api/posts');
    const res = await fetch('/api/posts');
    if (!res.ok) {
        throw new Error('Failed to fetch posts');
    }
    return res.json();
};

export const PostList = async () => {
    const posts = await getData();
    console.log(posts);

    return (
        <div className="h-24 w-1/3 rounded-md border-2 border-slate-500 bg-gray-700 px-3 py-2 text-lg text-white shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-950" />
    );
};
