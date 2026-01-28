"use client";

import { useEffect, useState } from "react";
import Section from "../../components/common/Section";
import BlogCard from "../../components/home/BlogCard";

export default function NewsPage() {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch("/api/news");
        if (res.ok) {
          const data = await res.json();
          setNews(data);
        } else {
          console.error("Failed to fetch news");
        }
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchNews();
  }, []);

  return (
    <div className="pt-20">
      <Section>
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-[48px] font-bold mb-4">Company News</h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-[18px]">
              Announcements, press releases, and latest updates from SkilledHyre
              Labs.
            </p>
          </div>

          {isLoading ? (
            <div className="text-center text-gray-400">Loading...</div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {news.map((item) => (
                <BlogCard
                  key={item._id}
                  title={item.title}
                  date={new Date(item.createdAt).toLocaleDateString()}
                  excerpt={item.shortDescription}
                  image={item.cardImage || "https://via.placeholder.com/300"}
                  slug={`/news/${item._id}`} // Adjusting slug to ID for routing
                />
              ))}
              {news.length === 0 && (
                <div className="col-span-3 text-center text-gray-400">
                  No news found.
                </div>
              )}
            </div>
          )}
        </div>
      </Section>
    </div>
  );
}
