import Section from "../common/Section";

export default function Industries() {
  const industries = [
    "Healthcare & MedTech",
    "FinTech & Digital Banking",
    "Smart Manufacturing",
    "Retail & E-commerce",
    "EdTech & Learning Platforms",
    "Smart Cities & Government",
  ];

  return (
    <Section>
      <div className="max-w-[1400px] mx-auto px-6 text-center">
        <h2 className="text-[36px] font-bold mb-6">🌍 Industries We Empower</h2>
        <p className="text-gray-400 text-lg mb-12 max-w-3xl mx-auto leading-relaxed">
          Our emerging technology solutions support:
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {industries.map((ind, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 text-gray-300 font-medium hover:bg-white/10 hover:border-pink-500/30 transition-all shadow-lg shadow-black/20"
            >
              {ind}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
