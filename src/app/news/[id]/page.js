"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Section from "../../../components/common/Section";
import Image from "next/image";

export default function NewsDetailPage() {
  const params = useParams();
  const id = params?.id;
  const [news, setNews] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    const fetchNews = async () => {
      try {
        const res = await fetch(`/api/news/${id}`);
        if (res.ok) {
          const data = await res.json();
          console.log("data for this >> ", data);
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
  }, [id]);

  if (isLoading)
    return (
      <div className="pt-32 pb-20 text-center text-gray-400">Loading...</div>
    );
  if (!news)
    return (
      <div className="pt-32 pb-20 text-center text-gray-400">
        News item not found
      </div>
    );

  return (
    <article className="pt-32 pb-20">
      <Section>
        <div className="max-w-[800px] mx-auto px-6">
          {/* Header */}
          <div className="mb-10 text-center">
            <div
              className="text-sm text-indigo-400 font-medium mb-3 uppercase tracking-wider"
              suppressHydrationWarning
            >
              {new Date(news.createdAt).toLocaleDateString()}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
              {news.title}
            </h1>
            {news.heading && (
              <p className="text-xl text-gray-300 italic mb-6">
                {news.heading}
              </p>
            )}
          </div>

          {/* Featured Image */}
          {news.cardImage && (
            // <div className="relative w-full h-[400px] mb-12 rounded-2xl overflow-hidden shadow-2xl shadow-indigo-500/10">
            //   <Image
            //     src={news.cardImage}
            //     alt={news.title}
            //     fill
            //     style={{ objectFit: "cover" }}
            //     className="hover:scale-105 transition-transform duration-700"
            //   />
            // </div>

            <div className="relative w-full h-[400px] mb-12 rounded-2xl overflow-hidden shadow-2xl shadow-indigo-500/10">
              <img
                src={news.cardImage}
                alt={news.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          )}

          {/* Content */}
          <div
            className="prose prose-invert prose-lg max-w-none prose-indigo prose-headings:text-white prose-p:text-gray-300 prose-strong:text-white prose-a:text-indigo-400 hover:prose-a:text-indigo-300"
            dangerouslySetInnerHTML={{ __html: news.content }}
          />
        </div>
      </Section>
    </article>
  );
}
