"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

export default function AdminLayout({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const isLogin = localStorage.getItem("isUserLogin");
    if (isLogin === "true") {
      setIsAuthenticated(true);
      if (pathname === "/admin/login") {
        router.push("/admin/blogs");
      } else if (pathname === "/admin") {
        router.push("/admin/blogs");
      }
    } else {
      setIsAuthenticated(false);
      if (pathname !== "/admin/login") {
        router.push("/admin/login");
      }
    }
    setIsLoading(false);
  }, [pathname, router]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  // If on login page, just render children without sidebar
  if (pathname === "/admin/login") {
    return (
      <main className="min-h-screen bg-gray-50 font-sans">{children}</main>
    );
  }

  // If not authenticated (and not restricted by useEffect yet), render nothing or loading
  if (!isAuthenticated && pathname !== "/admin/login") {
    return null;
  }

  return (
    <div className="flex min-h-screen bg-gray-50 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-6 border-b border-gray-100">
          <h1 className="text-xl font-bold text-gray-800">Admin Panel</h1>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <Link
            href="/admin/blogs"
            className={`block px-4 py-3 rounded-lg transition-colors ${
              pathname.startsWith("/admin/blogs")
                ? "bg-blue-50 text-blue-600 font-medium"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            Blogs
          </Link>
          <Link
            href="/admin/news"
            className={`block px-4 py-3 rounded-lg transition-colors ${
              pathname.startsWith("/admin/news")
                ? "bg-blue-50 text-blue-600 font-medium"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            News
          </Link>
        </nav>
        <div className="p-4 border-t border-gray-100">
          <button
            onClick={() => {
              localStorage.removeItem("isUserLogin");
              router.push("/admin/login");
            }}
            className="w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors text-left"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">{children}</main>
    </div>
  );
}
