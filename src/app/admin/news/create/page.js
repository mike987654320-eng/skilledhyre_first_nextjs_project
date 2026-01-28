"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Editor from "../../../../components/lexical/Editor";
// import { saveNews, getNews } from "../../utils";

export default function CreateNewsPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    name: "", // Added name field
    heading: "",
    shortDescription: "",
    cardImage: "https://via.placeholder.com/300",
  });

  const [sections, setSections] = useState([{ id: Date.now(), html: "" }]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const addSection = () => {
    setSections((prev) => [...prev, { id: Date.now(), html: "" }]);
  };

  const removeSection = (id) => {
    if (sections.length > 1) {
      setSections((prev) => prev.filter((s) => s.id !== id));
    }
  };

  const updateSectionHtml = (id, html) => {
    setSections((prev) => prev.map((s) => (s.id === id ? { ...s, html } : s)));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Construct new news object
    const newNews = {
      ...formData,
      sections: sections,
      content: sections.map((s) => s.html).join(""),
    };

    try {
      const res = await fetch("/api/news", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newNews),
      });

      if (res.ok) {
        router.push("/admin/news");
      } else {
        console.error("Failed to create news");
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error("Error creating news:", error);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">
        Create New News Item
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded-lg shadow-sm">
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-black"
              required
            />
          </div>

          {/* New Name Field */}
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name (Slug/ID)
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-black"
            />
          </div>

          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Heading
            </label>
            <input
              type="text"
              name="heading"
              value={formData.heading}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-black"
            />
          </div>

          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Short Description
            </label>
            <textarea
              name="shortDescription"
              value={formData.shortDescription}
              onChange={handleChange}
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-black"
            />
          </div>

          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Card Image URL
            </label>
            <input
              type="url"
              name="cardImage"
              value={formData.cardImage}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-black"
            />
          </div>
        </div>

        {/* Dynamic Editor Sections */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-700">
              Content Sections
            </h2>
            <button
              type="button"
              onClick={addSection}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
            >
              + Add Section
            </button>
          </div>

          {sections.map((section, index) => (
            <div
              key={section.id}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
            >
              <div className="flex justify-between items-center mb-4">
                <span className="font-medium text-gray-500">
                  Section {index + 1}
                </span>
                {sections.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeSection(section.id)}
                    className="text-red-500 hover:text-red-700 text-sm"
                  >
                    Remove
                  </button>
                )}
              </div>

              <div className="border border-gray-300 rounded-md overflow-hidden min-h-[300px]">
                <Editor
                  minimal={true}
                  onChange={(html) => updateSectionHtml(section.id, html)}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-end pt-6">
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
          >
            {isSubmitting ? "Creating..." : "Create News Item"}
          </button>
        </div>
      </form>
    </div>
  );
}
