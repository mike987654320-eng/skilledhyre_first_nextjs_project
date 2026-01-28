export const DUMMY_BLOGS = [
  {
    id: "1",
    title: "First Blog Post",
    heading: "Welcome to our blog",
    shortDescription: "This is a short description of the first blog post.",
    cardImage: "https://via.placeholder.com/150",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    content:
      "<p>This is the <strong>HTML content</strong> of the first blog post.</p>",
    sections: [{ id: "s1", content: "<p>Section 1 content</p>" }],
  },
  {
    id: "2",
    title: "Second Blog Post",
    heading: "Another interesting topic",
    shortDescription: "Here is another post about something cool.",
    cardImage: "https://via.placeholder.com/150",
    createdAt: new Date(Date.now() - 86400000).toISOString(),
    updatedAt: new Date().toISOString(),
    content: "<p>More content here.</p>",
    sections: [],
  },
];

export const DUMMY_NEWS = [
  {
    id: "1",
    title: "Breaking News",
    heading: "Something happened",
    shortDescription: "Short summary of the news.",
    cardImage: "https://via.placeholder.com/150",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    content: "<p>News content html.</p>",
    sections: [],
  },
];

// Helper to get data from localStorage or initialize with dummy
// Helper to get data from localStorage or initialize with dummy
// export const getBlogs = () => {
//   if (typeof window === "undefined") return DUMMY_BLOGS;
//   const stored = localStorage.getItem("admin_blogs");
//   if (!stored) {
//     localStorage.setItem("admin_blogs", JSON.stringify(DUMMY_BLOGS));
//     return DUMMY_BLOGS;
//   }
//   return JSON.parse(stored);
// };

// export const saveBlogs = (blogs) => {
//   if (typeof window === "undefined") return;
//   localStorage.setItem("admin_blogs", JSON.stringify(blogs));
// };

// export const getNews = () => {
//   if (typeof window === "undefined") return DUMMY_NEWS;
//   const stored = localStorage.getItem("admin_news");
//   if (!stored) {
//     localStorage.setItem("admin_news", JSON.stringify(DUMMY_NEWS));
//     return DUMMY_NEWS;
//   }
//   return JSON.parse(stored);
// };

// export const saveNews = (news) => {
//   if (typeof window === "undefined") return;
//   localStorage.setItem("admin_news", JSON.stringify(news));
// };

// export const getBlogById = (id) => {
//   const blogs = getBlogs();
//   return blogs.find((b) => b.id === id);
// };

// export const getNewsById = (id) => {
//   const news = getNews();
//   return news.find((n) => n.id === id);
// };

// export const updateBlog = (updatedBlog) => {
//   const blogs = getBlogs();
//   const index = blogs.findIndex((b) => b.id === updatedBlog.id);
//   if (index !== -1) {
//     blogs[index] = { ...updatedBlog, updatedAt: new Date().toISOString() };
//     saveBlogs(blogs);
//   } else {
//     // Create
//     updatedBlog.id = Date.now().toString();
//     updatedBlog.createdAt = new Date().toISOString();
//     updatedBlog.updatedAt = new Date().toISOString();
//     blogs.push(updatedBlog);
//     saveBlogs(blogs);
//   }
// };

// export const updateNews = (updatedNews) => {
//   const news = getNews();
//   const index = news.findIndex((n) => n.id === updatedNews.id);
//   if (index !== -1) {
//     news[index] = { ...updatedNews, updatedAt: new Date().toISOString() };
//     saveNews(news);
//   } else {
//     // Create
//     updatedNews.id = Date.now().toString();
//     updatedNews.createdAt = new Date().toISOString();
//     updatedNews.updatedAt = new Date().toISOString();
//     news.push(updatedNews);
//     saveNews(news);
//   }
// };
