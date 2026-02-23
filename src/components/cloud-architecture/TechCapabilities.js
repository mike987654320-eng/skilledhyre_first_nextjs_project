import Section from "../common/Section";

export default function TechCapabilities() {
  const capabilities = [
    "Container platforms",
    "Orchestration systems",
    "Serverless computing",
    "API-first development",
    "Infrastructure as Code (IaC)",
    "Multi-cloud & hybrid cloud strategies",
  ];

  return (
    <Section>
      <div className="max-w-[1400px] mx-auto px-6 text-center">
        <h2 className="text-[36px] font-bold mb-6">
          🛠 Technologies & Capabilities
        </h2>
        <p className="text-gray-400 text-lg mb-12 max-w-3xl mx-auto leading-relaxed">
          Our cloud engineering expertise includes:
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          {capabilities.map((cap, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 text-gray-300 font-medium hover:bg-white/10 hover:border-cyan-500/30 transition-all shadow-lg shadow-black/20"
            >
              {cap}
            </div>
          ))}
        </div>

        <p className="text-xl text-cyan-400 font-bold italic border-t border-white/10 pt-8 inline-block">
          We design systems that are scalable today and adaptable tomorrow.
        </p>
      </div>
    </Section>
  );
}
