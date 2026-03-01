import Section from "../common/Section";

export default function Approach() {
  const steps = [
    {
      number: "1",
      title: "Learning Goal Analysis & Discovery",
      description:
        "We analyze pedagogical goals and learner personas to define a clear technical roadmap.",
    },
    {
      number: "2",
      title: "Engaging UI/UX Design",
      description:
        "We design intuitive and engaging interfaces for both students and educators.",
    },
    {
      number: "3",
      title: "Scalable Infrastructure Engineering",
      description:
        "Our engineers build robust backends designed for processing high-volume learning data.",
    },
    {
      number: "4",
      title: "AI & Personalization Integration",
      description:
        "We embed intelligent features for custom learning paths and automated assessments.",
    },
    {
      number: "5",
      title: "Accessibility & Compliance Testing",
      description:
        "Comprehensive testing ensures COPPA/FERPA compliance and inclusive learning for all.",
    },
    {
      number: "6",
      title: "Launch & Optimization",
      description:
        "We manage secure rollouts and provide ongoing observability for absolute platform uptime.",
    },
  ];

  return (
    <Section className="bg-white/5">
      <div className="max-w-[1400px] mx-auto px-6">
        <h2 className="text-[36px] font-bold mb-12 text-center">
          🧩 Our EdTech Engineering Approach
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-violet-500/30 transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-violet-500 flex items-center justify-center text-white font-bold text-xl mb-6">
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
