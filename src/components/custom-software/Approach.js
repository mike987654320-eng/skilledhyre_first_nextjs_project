import Section from "../common/Section";

export default function Approach() {
  const steps = [
    {
      title: "Business Analysis",
      description:
        "We conduct in-depth discovery sessions to understand your objectives and technical environment.",
    },
    {
      title: "Solution Architecture",
      description:
        "Our architects design secure, scalable, and future-ready system blueprints aligned with your goals.",
    },
    {
      title: "Agile Engineering",
      description:
        "Using agile methodologies, we build iterative software modules with continuous testing and validation.",
    },
    {
      title: "Integration & Deployment",
      description:
        "We ensure seamless integration with third-party APIs, CRMs, ERPs, and cloud platforms.",
    },
    {
      title: "Quality & Optimization",
      description:
        "Rigorous testing ensures performance, security, scalability, and cross-platform compatibility.",
    },
    {
      title: "Support & Maintenance",
      description:
        "Post-deployment support ensures your software remains updated, secure, and optimized.",
    },
  ];

  return (
    <Section>
      <div className="max-w-[1400px] mx-auto px-6">
        <h2 className="text-[36px] font-bold mb-12 text-center">
          🧩 Our Custom Software Development Approach
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all"
            >
              <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold mb-6">
                {index + 1}
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
