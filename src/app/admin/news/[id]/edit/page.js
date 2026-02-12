"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Editor from "../../../../../components/lexical/Editor";
import ImageUploader from "../../../../../components/admin/ImageUploader";
// import { saveNews, getNews } from "../../../utils";

export default function EditNewsPage() {
  const router = useRouter();
  const params = useParams();
  const id = params?.id;

  const [formData, setFormData] = useState({
    title: "",
    name: "",
    heading: "",
    shortDescription: "",
    cardImage: "",
  });

  const [sections, setSections] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!id) return;

    const fetchNewsItem = async () => {
      try {
        const res = await fetch(`/api/news/${id}`);
        if (res.ok) {
          const found = await res.json();
          setFormData({
            title: found.title,
            name: found.name || "",
            heading: found.heading || "",
            shortDescription: found.shortDescription || "",
            cardImage: found.cardImage || "",
          });

          // Initialize sections handling old/new schema
          if (found.sections && found.sections.length > 0) {
            setSections(
              found.sections.map((s) => ({
                id: s.id || Date.now() + Math.random(),
                initialHtml: s.html || s.content,
                currentHtml: s.html || s.content,
              })),
            );
          } else if (found.content) {
            // Fallback if no sections but content exists
            setSections([
              {
                id: Date.now(),
                initialHtml: found.content,
                currentHtml: found.content,
              },
            ]);
          } else {
            // Empty start
            setSections([{ id: Date.now(), initialHtml: "", currentHtml: "" }]);
          }
        } else {
          console.error("Failed to fetch news item for editing");
        }
      } catch (error) {
        console.error("Error fetching news item:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNewsItem();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const addSection = () => {
    setSections((prev) => [
      ...prev,
      { id: Date.now(), initialHtml: "", currentHtml: "" },
    ]);
  };

  const removeSection = (sectionId) => {
    if (sections.length > 1) {
      setSections((prev) => prev.filter((s) => s.id !== sectionId));
    }
  };

  const updateSectionHtml = (sectionId, html) => {
    setSections((prev) =>
      prev.map((s) => (s.id === sectionId ? { ...s, currentHtml: html } : s)),
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Construct updated news object
    const updatedNews = {
      ...formData,
      sections: sections.map((s) => ({ id: s.id, html: s.currentHtml })),
      content: sections.map((s) => s.currentHtml).join(""),
      updatedAt: new Date().toISOString(),
    };

    try {
      const res = await fetch(`/api/news/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedNews),
      });

      if (res.ok) {
        router.push("/admin/news");
      } else {
        console.error("Failed to update news");
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error("Error updating news:", error);
      setIsSubmitting(false);
    }
  };

  if (isLoading) return <div className="p-8">Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Edit News Item</h1>

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

          {/* Name Field */}
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
              Card Image
            </label>
            <ImageUploader
              value={formData.cardImage}
              onChange={(url) =>
                setFormData((prev) => ({ ...prev, cardImage: url }))
              }
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
                  initialHtml={section.initialHtml}
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
            {isSubmitting ? "Updating..." : "Update News Item"}
          </button>
        </div>
      </form>
    </div>
  );
}
