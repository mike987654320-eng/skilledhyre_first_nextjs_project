import Section from "../common/Section";

export default function Approach() {
  const steps = [
    {
      number: "1",
      title: "Audience & Media Analysis",
      description:
        "We analyze audience behavior and media trends to define your technical requirements.",
    },
    {
      number: "2",
      title: "Immersive UI/UX Design",
      description:
        "We design consistent and engaging experiences across mobile, web, and social media platforms.",
    },
    {
      number: "3",
      title: "Scalable Infrastructure Engineering",
      description:
        "Our engineers build backends designed for high-volume content delivery and secure interactions.",
    },
    {
      number: "4",
      title: "AI & Personalization Integration",
      description:
        "We embed intelligent features for content recommendations and audience engagement.",
    },
    {
      number: "5",
      title: "Performance & Load Testing",
      description:
        "Comprehensive testing ensures system stability during high-traffic media events and global launches.",
    },
    {
      number: "6",
      title: "Launch & Optimization",
      description:
        "We manage secure rollouts and provide data-driven insights for ongoing platform growth.",
    },
  ];

  return (
    <Section className="bg-white/5">
      <div className="max-w-[1400px] mx-auto px-6">
        <h2 className="text-[36px] font-bold mb-12 text-center">
          🧩 Our Marketing Engineering Approach
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-fuchsia-500/30 transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-fuchsia-500 flex items-center justify-center text-white font-bold text-xl mb-6">
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
