"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
// import { getBlogs } from "../../utils";

export default function BlogDetailPage() {
  const router = useRouter();
  const params = useParams();
  const id = params?.id;
  const [blog, setBlog] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchBlog = async () => {
      try {
        const res = await fetch(`/api/blogs/${id}`);
        if (res.ok) {
          const data = await res.json();
          setBlog(data);
        } else {
          console.error("Failed to fetch blog");
          // router.push("/admin/blogs");
        }
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (isLoading) return <div className="p-8">Loading...</div>;
  if (!blog) return <div className="p-8">Blog not found</div>;

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm">
      <div className="flex justify-between items-start mb-6 border-b pb-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {blog.title}
          </h1>
          <p className="text-sm text-gray-500">
            Created: {new Date(blog.createdAt).toLocaleDateString()} | Updated:{" "}
            {new Date(blog.updatedAt).toLocaleDateString()}
          </p>
        </div>
        <Link
          href={`/admin/blogs/${id}/edit`}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
        >
          Update
        </Link>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2 text-gray-700">Meta</h2>
        <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
          {/* Added Name Display */}
          <div>
            <span className="font-medium">Name:</span> {blog.name || "N/A"}
          </div>
          <div>
            <span className="font-medium">Heading:</span> {blog.heading}
          </div>
          <div className="col-span-2">
            <span className="font-medium">Short Description:</span>{" "}
            {blog.shortDescription}
          </div>
          {blog.cardImage && (
            <div className="col-span-2">
              <span className="font-medium block mb-1">Card Image:</span>
              <img
                src={blog.cardImage}
                alt=""
                className="h-32 object-cover rounded"
              />
            </div>
          )}
        </div>
      </div>

      <div className="prose max-w-none">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">
          Content Preview
        </h2>
        {/* Render the full concatenated content */}
        <div
          className="p-6 rounded-lg border border-gray-200 min-h-[200px] text-black"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </div>
    </div>
  );
}
