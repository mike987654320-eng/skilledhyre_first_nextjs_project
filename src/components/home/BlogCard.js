import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function BlogCard({ title, date, excerpt, image, slug }) {
  return (
    <div className="flex-shrink-0 w-full h-full flex flex-col group rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:border-indigo-500/30 transition-all duration-300">
      <div className="relative h-48 w-full overflow-hidden flex-shrink-0">
        <img
          src={
            image ||
            "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          }
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <p className="text-indigo-400 text-sm mb-2" suppressHydrationWarning>
          {date}
        </p>
        <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
          {title}
        </h3>
        <p className="text-gray-400 text-sm mb-6 line-clamp-2 flex-grow">
          {excerpt}
        </p>
        <Link
          href={slug}
          className="inline-flex items-center text-white hover:text-indigo-400 transition-colors gap-2 text-sm font-medium mt-auto"
        >
          Read Article <ArrowRightIcon className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
