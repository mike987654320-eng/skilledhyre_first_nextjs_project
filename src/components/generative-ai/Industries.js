import Section from "../common/Section";

export default function Industries() {
  const industries = [
    "Marketing & Advertising",
    "E-commerce & Retail",
    "Healthcare & HealthTech",
    "FinTech & BFSI",
    "EdTech Platforms",
    "Enterprise SaaS Applications",
  ];

  return (
    <Section className="bg-white/5">
      <div className="max-w-[1400px] mx-auto px-6 text-center">
        <h2 className="text-[36px] font-bold mb-6">🌍 Industry Use Cases</h2>
        <p className="text-gray-400 text-lg mb-12 max-w-3xl mx-auto leading-relaxed">
          Our Generative AI Solutions support:
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {industries.map((ind, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 text-gray-300 font-medium hover:bg-white/10 hover:border-indigo-500/30 transition-all shadow-lg shadow-black/20"
            >
              {ind}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
