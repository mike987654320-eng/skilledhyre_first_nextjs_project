"use client";

import { useEffect, useState } from "react";
import Section from "../../components/common/Section";
import BlogCard from "../../components/home/BlogCard";

export default function BlogsPage() {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("/api/blogs");
        if (res.ok) {
          const data = await res.json();
          setBlogs(data);
        } else {
          console.error("Failed to fetch blogs");
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <div className="pt-20">
      <Section>
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-[48px] font-bold mb-4">Our Blogs</h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-[18px]">
              Insights, thoughts, and trends from the SkilledHyre Labs team.
            </p>
          </div>

          {isLoading ? (
            <div className="text-center text-gray-400">Loading...</div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog) => (
                <BlogCard
                  key={blog._id}
                  title={blog.title}
                  date={new Date(blog.createdAt).toLocaleDateString()}
                  excerpt={blog.shortDescription}
                  image={blog.cardImage || "https://via.placeholder.com/300"}
                  slug={`/blogs/${blog._id}`} // Adjusting slug to ID for routing
                />
              ))}
              {blogs.length === 0 && (
                <div className="col-span-3 text-center text-gray-400">
                  No blogs found.
                </div>
              )}
            </div>
          )}
        </div>
      </Section>
    </div>
  );
}
