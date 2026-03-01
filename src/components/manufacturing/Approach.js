import Section from "../common/Section";

export default function Approach() {
  const steps = [
    {
      number: "1",
      title: "Operational Audit & Discovery",
      description:
        "We analyze your production workflows and technical bottlenecks to define a clear roadmap.",
    },
    {
      number: "2",
      title: "Industrial UI/UX Design",
      description:
        "We design intuitive interfaces for shop-floor operators and production managers.",
    },
    {
      number: "3",
      title: "High-Availability Architecture",
      description:
        "Our engineers build robust backends designed for processing real-time sensor and machine data.",
    },
    {
      number: "4",
      title: "AI & Sensor Data Integration",
      description:
        "We embed intelligent features for predictive maintenance and automated quality control.",
    },
    {
      number: "5",
      title: "Reliability & Performance Testing",
      description:
        "Comprehensive testing ensures system stability even in high-demand industrial environments.",
    },
    {
      number: "6",
      title: "Implementation & Monitoring",
      description:
        "We manage secure rollouts and provide ongoing observability for absolute operational uptime.",
    },
  ];

  return (
    <Section className="bg-white/5">
      <div className="max-w-[1400px] mx-auto px-6">
        <h2 className="text-[36px] font-bold mb-12 text-center">
          🧩 Our Manufacturing Engineering Approach
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-slate-500/30 transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-slate-500 flex items-center justify-center text-white font-bold text-xl mb-6">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                {step.title}
              </h3>
              <p className="text-gray-400 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
