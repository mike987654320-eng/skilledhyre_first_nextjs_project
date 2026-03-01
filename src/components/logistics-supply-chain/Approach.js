import Section from "../common/Section";

export default function Approach() {
  const steps = [
    {
      number: "1",
      title: "Supply Chain Audit & Discovery",
      description:
        "We analyze your logistical workflows and technical bottlenecks to define a clear roadmap.",
    },
    {
      number: "2",
      title: "Logistical UI/UX Design",
      description:
        "We design intuitive interfaces for warehouse staff, fleet managers, and end-users.",
    },
    {
      number: "3",
      title: "Scalable Infrastructure Engineering",
      description:
        "Our engineers build robust backends designed for processing real-time tracking and inventory data.",
    },
    {
      number: "4",
      title: "AI & Real-Time Data Integration",
      description:
        "We embed intelligent features for route optimization, predictive maintenance, and volume forecasting.",
    },
    {
      number: "5",
      title: "Reliability & Performance Testing",
      description:
        "Comprehensive testing ensures system stability even in high-demand, global logistics environments.",
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
          🧩 Our Logistics Engineering Approach
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center text-white font-bold text-xl mb-6">
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
