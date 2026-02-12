"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
// import { getNews } from "../../utils";

export default function NewsDetailPage() {
  const router = useRouter();
  const params = useParams();
  const id = params?.id;
  const [newsItem, setNewsItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchNewsItem = async () => {
      try {
        const res = await fetch(`/api/news/${id}`);
        if (res.ok) {
          const data = await res.json();
          setNewsItem(data);
        } else {
          console.error("Failed to fetch news item");
        }
      } catch (error) {
        console.error("Error fetching news item:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNewsItem();
  }, [id]);

  const handleDelete = async () => {
    if (confirm("Are you sure you want to delete this news item?")) {
      try {
        const res = await fetch(`/api/news/${id}`, {
          method: "DELETE",
        });

        if (res.ok) {
          router.push("/admin/news");
        } else {
          console.error("Failed to delete news item");
        }
      } catch (error) {
        console.error("Error deleting news item:", error);
      }
    }
  };

  if (isLoading) return <div className="p-8">Loading...</div>;
  if (!newsItem) return <div className="p-8">News item not found</div>;

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm">
      <div className="flex justify-between items-start mb-6 border-b pb-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {newsItem.title}
          </h1>
          <p className="text-sm text-gray-500">
            Created: {new Date(newsItem.createdAt).toLocaleDateString()} |
            Updated: {new Date(newsItem.updatedAt).toLocaleDateString()}
          </p>
        </div>
        <div className="flex gap-2">
          <Link
            href={`/admin/news/${id}/edit`}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
          >
            Update
          </Link>
          <button
            onClick={handleDelete}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
          >
            Delete
          </button>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2 text-gray-700">Meta</h2>
        <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
          {/* Added Name Display */}
          <div>
            <span className="font-medium">Name:</span> {newsItem.name || "N/A"}
          </div>
          <div>
            <span className="font-medium">Heading:</span> {newsItem.heading}
          </div>
          <div className="col-span-2">
            <span className="font-medium">Short Description:</span>{" "}
            {newsItem.shortDescription}
          </div>
          {newsItem.cardImage && (
            <div className="col-span-2">
              <span className="font-medium block mb-1">Card Image:</span>
              <img
                src={newsItem.cardImage}
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
          dangerouslySetInnerHTML={{ __html: newsItem.content }}
        />
      </div>
    </div>
  );
}
