import {
  CpuChipIcon,
  CloudIcon,
  CommandLineIcon,
} from "@heroicons/react/24/outline";

export default function TechStack() {
  const categories = [
    {
      title: "Models",
      icon: CpuChipIcon,
      items: ["OpenAI GPT-4", "Llama 2", "Mistral 7B", "Anthropic Claude"],
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/20",
      textColor: "text-blue-400",
    },
    {
      title: "Frameworks",
      icon: CommandLineIcon,
      items: ["PyTorch", "TensorFlow", "LangChain", "Hugging Face"],
      color: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/20",
      textColor: "text-purple-400",
    },
    {
      title: "Infrastructure",
      icon: CloudIcon,
      items: ["AWS SageMaker", "Google Vertex AI", "Azure AI", "Pinecone"],
      color: "from-emerald-500/20 to-teal-500/20",
      borderColor: "border-emerald-500/20",
      textColor: "text-emerald-400",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {categories.map((cat, index) => (
        <div
          key={index}
          className={`relative overflow-hidden rounded-2xl border ${cat.borderColor} bg-[#0a0a0a] p-8 group hover:-translate-y-1 transition-transform duration-300`}
        >
          {/* Gradient Background */}
          <div
            className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${cat.color} blur-[50px] rounded-full opacity-50 group-hover:opacity-80 transition-opacity`}
          />

          <div className="relative z-10">
            <div className="inline-flex p-3 rounded-xl bg-white/5 border border-white/5 mb-6">
              <cat.icon className={`w-6 h-6 ${cat.textColor}`} />
            </div>

            <h3 className="text-xl font-bold text-white mb-6">{cat.title}</h3>

            <ul className="space-y-4">
              {cat.items.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-400">
                  <div
                    className={`w-1.5 h-1.5 rounded-full ${cat.textColor.replace(
                      "text-",
                      "bg-"
                    )}`}
                  />
                  <span className="font-medium group-hover:text-white transition-colors">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
