import Section from "../common/Section";

export default function Approach() {
  const steps = [
    {
      title: "Product Discovery",
      description:
        "We define the technical roadmap, core features, and success criteria for your digital product.",
    },
    {
      title: "UI/UX & Accessibility",
      description:
        "We design intuitive, high-performance interfaces that ensure an inclusive user experience.",
    },
    {
      title: "Core Engineering",
      description:
        "We build scalable microservices, robust backends, and responsive frontends using modern stacks.",
    },
    {
      title: "DevSecOps & Automation",
      description:
        "We integrate security and automated delivery into the development lifecycle from day one.",
    },
    {
      title: "Performance & QA",
      description:
        "Rigorous load testing, security audits, and functional QA ensure a production-ready application.",
    },
    {
      title: "Launch & Evolution",
      description:
        "We manage the deployment and provide data-driven insights for continuous product improvement.",
    },
  ];

  return (
    <Section>
      <div className="max-w-[1400px] mx-auto px-6">
        <h2 className="text-[36px] font-bold mb-12 text-center">
          🧩 Our Product Engineering Approach
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/30 transition-all"
            >
              <div className="text-emerald-400 font-bold mb-4">
                Step 0{index + 1}
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
