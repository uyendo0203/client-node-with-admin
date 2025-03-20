import axios from "axios";
import Link from "next/link";

// Dynamic metadata
export async function generateMetadata({ params }) {
  const { id } = params;
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs/${id}`);
  const post = await res.data;

  return {
    title: post.title,
    description: post.content || 'The React Framework for the Web',
  };
}

const BlogPost = async ({ params }) => {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs/${params.id}`);
    const post = await res.data;

    if (!post) {
      return <div className="text-center text-gray-600 mt-10">Post not found.</div>;
    }

    return (
      <div className="min-h-screen bg-[#F5F5DC] flex items-center justify-center p-6">
        <div className="max-w-3xl w-full bg-white shadow-lg rounded-xl p-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{post.title}</h1>
          <p className="text-gray-700 text-lg">{post.content}</p>
          <div className="mt-6">
            <Link href="/blogs" className="text-blue-600 hover:underline text-lg">
              ← Back to Blogs
            </Link>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching post:", error);
    return <div className="text-center text-red-500 mt-10">Error loading post.</div>;
  }
};

export default BlogPost;
