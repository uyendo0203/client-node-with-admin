// app/blog/[id]/page.js

import axios from 'axios';

const BlogPost = async ({ params }) => {
    const { id } = params;

    try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs/${id}`);
        const post = await res.data;

        if (!post) {
            return <div>Post not found.</div>;
        }

        return (
            <div>
                <h1>{post.title}</h1>
                <p>{post.content}</p>
            </div>
        );
    } catch (error) {
        console.error("Error fetching post:", error);
        return <div>Error loading post.</div>;
    }
};

export default BlogPost;