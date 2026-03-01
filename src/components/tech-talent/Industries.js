import Section from "../common/Section";

export default function Industries() {
  const industries = [
    "Healthcare & HealthTech",
    "FinTech & BFSI",
    "E-commerce & Retail",
    "EdTech Platforms",
    "Manufacturing & Logistics",
    "Enterprise SaaS",
  ];

  return (
    <Section>
      <div className="max-w-[1400px] mx-auto px-6 text-center">
        <h2 className="text-[36px] font-bold mb-12">
          🌍 Industries We Support
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {industries.map((industry, index) => (
            <span
              key={index}
              className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:border-blue-500/30 transition-colors"
            >
              {industry}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}
