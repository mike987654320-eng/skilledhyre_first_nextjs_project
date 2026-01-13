export default function TechRadar() {
  const horizons = [
    {
      title: "NOW",
      subtitle: "Production Ready",
      technologies: [
        "Next.js 14",
        "React Server Components",
        "OpenAI GPT-4",
        "Tailwind CSS",
        "AWS Serverless",
      ],
      color: "border-emerald-500/50 text-emerald-400",
      bg: "bg-emerald-500/5",
    },
    {
      title: "NEXT",
      subtitle: "Piloting & Prototyping",
      technologies: [
        "Edge AI Models",
        "Vector Databases",
        "LangChain Agents",
        "Rust for Web",
      ],
      color: "border-blue-500/50 text-blue-400",
      bg: "bg-blue-500/5",
    },
    {
      title: "FUTURE",
      subtitle: "Research & Exploration",
      technologies: [
        "Quantum Algorithms",
        "Fully Autonomous Swarms",
        "Brain-Computer Interfaces",
      ],
      color: "border-purple-500/50 text-purple-400",
      bg: "bg-purple-500/5",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {horizons.map((horizon, index) => (
        <div
          key={index}
          className={`relative p-6 rounded-2xl border ${horizon.color} ${horizon.bg} backdrop-blur-sm`}
        >
          <div className="mb-6">
            <h3 className="text-2xl font-black tracking-wider">
              {horizon.title}
            </h3>
            <p className="text-sm opacity-70 uppercase tracking-widest font-semibold">
              {horizon.subtitle}
            </p>
          </div>
          <ul className="space-y-3">
            {horizon.technologies.map((tech, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-current" />
                <span className="font-medium text-white/90">{tech}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
