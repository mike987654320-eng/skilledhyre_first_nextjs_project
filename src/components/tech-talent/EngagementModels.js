import Section from "../common/Section";

export default function EngagementModels() {
  const models = [
    {
      title: "Dedicated Development Teams",
      description:
        "A fully managed team aligned exclusively to your project — including developers, designers, QA engineers, and project managers.",
      useFor:
        "Long-term product development, SaaS platforms, AI engineering projects",
    },
    {
      title: "Staff Augmentation",
      description:
        "Extend your in-house team with specialized talent to accelerate delivery without long-term hiring commitments.",
      useFor:
        "Short-term scaling, Skill-gap bridging, Specialized technical requirements",
    },
    {
      title: "Project-Based Delivery",
      description:
        "End-to-end project execution handled by SkilledHyre Labs — from architecture design to deployment.",
      useFor:
        "MVP development, Enterprise software implementation, Innovation pilots",
    },
  ];

  return (
    <Section>
      <div className="max-w-[1400px] mx-auto px-6">
        <h2 className="text-[36px] font-bold mb-12 text-center">
          🧩 Our Tech Talent Engagement Models
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {models.map((model, index) => (
            <div
              key={index}
              className="flex flex-col p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all"
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                {model.title}
              </h3>
              <p className="text-gray-400 mb-6 flex-grow">
                {model.description}
              </p>
              <div className="pt-6 border-t border-white/10">
                <p className="text-blue-400 text-sm font-semibold mb-2">
                  Best for:
                </p>
                <p className="text-gray-300 text-sm">{model.useFor}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
