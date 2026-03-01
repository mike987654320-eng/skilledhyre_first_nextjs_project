import Section from "../common/Section";

export default function Framework() {
  const steps = [
    {
      number: "1",
      title: "Process Discovery & Analysis",
      description:
        "We identify repetitive, high-volume, and rule-based tasks suitable for automation. Detailed workflow mapping ensures no operational gaps.",
    },
    {
      number: "2",
      title: "Automation Strategy Design",
      description:
        "Based on your business model, we define the right mix of AI, RPA, APIs, and orchestration tools to deliver measurable impact.",
    },
    {
      number: "3",
      title: "AI-Powered Workflow Implementation",
      description:
        "We build automation bots and intelligent workflows that integrate seamlessly with existing systems — ERP, CRM, HRMS, finance tools, and cloud platforms.",
    },
    {
      number: "4",
      title: "Monitoring & Optimization",
      description:
        "Continuous performance monitoring ensures workflows remain efficient and adaptive as business needs evolve.",
    },
  ];

  return (
    <Section className="bg-white/5">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[36px] font-bold mb-6">
            🧩 Our Automation Framework
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400">
            We follow a structured, ROI-driven automation strategy to transform
            your manual operations into intelligent digital workflows.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold text-xl mb-6 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                {step.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
