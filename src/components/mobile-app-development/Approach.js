import Section from "../common/Section";

export default function Approach() {
  const steps = [
    {
      title: "Discovery & Strategy",
      description:
        "We define clear objectives, user journeys, and success metrics aligned with your model.",
    },
    {
      title: "UI/UX Design",
      description:
        "We design intuitive navigation flows and responsive layouts for seamless interaction.",
    },
    {
      title: "Native & Cross-Platform",
      description:
        "We build native and hybrid applications with optimized performance and stability.",
    },
    {
      title: "Backend & API Integration",
      description:
        "We develop secure, scalable infrastructures with cloud and AI-driven integrations.",
    },
    {
      title: "Testing & Quality Assurance",
      description:
        "Comprehensive testing ensures device compatibility and security compliance.",
    },
    {
      title: "Deployment & Support",
      description:
        "We manage app store submissions and provide ongoing updates and enhancements.",
    },
  ];

  return (
    <Section>
      <div className="max-w-[1400px] mx-auto px-6">
        <h2 className="text-[36px] font-bold mb-12 text-center">
          🧩 Our Mobile App Development Approach
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-all"
            >
              <div className="text-purple-400 font-bold mb-4">
                Phase 0{index + 1}
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
