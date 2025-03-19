import axios from 'axios';
import Head from 'next/head';

const BlogPost = async ({ params }) => {
    const { id } = params;

    try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs/${id}`);
        const post = await res.data;

        if (!post) {
            return <div>Post not found.</div>;
        }

        return (
            <>
                <Head>
                    <title>{post.title} - My Blog</title>
                    <meta name="description" content={post.content || "A brief description of the post."} />
                    <meta name="keywords" content="blog, post, articles, {post.title}" />
                    <link rel="canonical" href={`${process.env.NEXT_PUBLIC_SITE_URL}/blog/${id}`} />
                </Head>
                <div>
                    <h1>{post.title}</h1>
                    <p>{post.content}</p>
                </div>
            </>
        );
    } catch (error) {
        console.error("Error fetching post:", error);
        return <div>Error loading post.</div>;
    }
};

export default BlogPost;