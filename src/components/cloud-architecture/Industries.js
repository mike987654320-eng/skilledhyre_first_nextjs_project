import Section from "../common/Section";

export default function Industries() {
  const industries = [
    "Healthcare & HealthTech",
    "FinTech & Banking",
    "E-commerce & Retail",
    "EdTech Platforms",
    "Enterprise SaaS Products",
    "Government & Public Services",
  ];

  return (
    <Section>
      <div className="max-w-[1400px] mx-auto px-6 text-center">
        <h2 className="text-[36px] font-bold mb-6">🌟 Industries We Enable</h2>
        <p className="text-gray-400 text-lg mb-12 max-w-3xl mx-auto leading-relaxed">
          Our cloud-native solutions empower businesses across:
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {industries.map((ind, index) => (
            <span
              key={index}
              className="px-6 py-3 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 font-medium"
            >
              {ind}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}
