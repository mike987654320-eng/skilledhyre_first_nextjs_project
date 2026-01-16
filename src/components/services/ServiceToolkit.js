"use client";
import {
  CodeBracketIcon,
  ServerIcon,
  DevicePhoneMobileIcon,
  CloudIcon,
} from "@heroicons/react/24/outline";

export default function ServiceToolkit() {
  const categories = [
    {
      title: "Frontend & UI",
      icon: CodeBracketIcon,
      items: ["React.js", "Next.js", "Tailwind CSS", "TypeScript", "Vue.js"],
      color: "border-blue-500/20 bg-blue-500/5",
      iconColor: "text-blue-400",
    },
    {
      title: "Backend & API",
      icon: ServerIcon,
      items: [
        "Node.js",
        "Python (Django/FastAPI)",
        "Go",
        "GraphQL",
        "PostgreSQL",
      ],
      color: "border-green-500/20 bg-green-500/5",
      iconColor: "text-green-400",
    },
    {
      title: "Mobile Development",
      icon: DevicePhoneMobileIcon,
      items: ["React Native", "Flutter", "iOS (Swift)", "Android (Kotlin)"],
      color: "border-purple-500/20 bg-purple-500/5",
      iconColor: "text-purple-400",
    },
    {
      title: "Cloud & DevOps",
      icon: CloudIcon,
      items: ["AWS", "Google Cloud", "Docker", "Kubernetes", "CI/CD Pipelines"],
      color: "border-orange-500/20 bg-orange-500/5",
      iconColor: "text-orange-400",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {categories.map((cat, index) => (
        <div
          key={index}
          className={`p-6 rounded-2xl border ${cat.color} hover:border-opacity-50 transition-all duration-300 group`}
        >
          <div
            className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6`}
          >
            <cat.icon className={`w-6 h-6 ${cat.iconColor}`} />
          </div>

          <h3 className="text-xl font-bold text-white mb-4">{cat.title}</h3>

          <ul className="space-y-3">
            {cat.items.map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-2 text-sm text-gray-400 group-hover:text-gray-300 transition-colors"
              >
                <span
                  className={`w-1 h-1 rounded-full ${cat.iconColor.replace(
                    "text-",
                    "bg-"
                  )}`}
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
